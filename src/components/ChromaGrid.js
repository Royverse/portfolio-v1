import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../Assets/ChromaGrid.css';

// A frame chosen to read well when motion is off.
const STILL_T = 3.2;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const ChromaCardItem = ({ project, active = true, onMouseMove, onClick, onFocus, onBlur }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // The grid lives inside an always-mounted overlay; only draw while it's open.
    if (!canvas || !active) return undefined;
    const ctx = canvas.getContext('2d');
    const still = prefersReducedMotion();
    let raf = 0;
    let visible = true;

    // Size the backing store to device pixels, then draw in CSS pixels.
    const paint = t => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const bw = Math.round(w * dpr), bh = Math.round(h * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      project.draw(ctx, w, h, t);
    };

    const loop = () => {
      paint(performance.now() / 1000);
      raf = requestAnimationFrame(loop);
    };
    const start = () => { if (!raf && !still && visible) raf = requestAnimationFrame(loop); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    paint(still ? STILL_T : performance.now() / 1000);
    start();

    // Cards scrolled out of the panel stop drawing.
    let io;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start(); else stop();
      });
      io.observe(canvas);
    }

    // A still frame still has to follow the card's size.
    const onResize = () => { if (still) paint(STILL_T); };
    window.addEventListener('resize', onResize);

    return () => {
      stop();
      if (io) io.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [project, active]);

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className="chroma-card"
      role="button"
      tabIndex={active ? 0 : -1}
      aria-label={`${project.name}: ${project.sub}`}
      aria-haspopup="dialog"
      onMouseMove={onMouseMove}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{ '--card-accent': project.accent || 'rgba(255, 255, 255, 0.4)' }}
    >
      <div className="chroma-img-wrapper">
        <canvas ref={canvasRef} aria-hidden="true" />
        {project.isNew && <span className="thumb-new">New</span>}
        <span className="thumb-arrow" aria-hidden="true">↗</span>
      </div>
      <footer className="chroma-info">
        <span className="card-kicker">{project.tag}</span>
        <span className="card-name">{project.name}</span>
        <span className="card-sub">{project.sub}</span>
      </footer>
    </article>
  );
};

export const ChromaGrid = ({
  items = [],
  onSelect,
  active = true,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  // Touch pointers get no spotlight (the CSS drops the greyscale for them),
  // so only a mouse or pen steers it.
  const handleMove = e => {
    if (!rootRef.current || e.pointerType === 'touch') return;
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  // Keyboard focus gets the same spotlight the pointer does; otherwise the
  // focused card sits under the greyscale fade.
  const handleCardFocus = e => {
    if (!rootRef.current) return;
    const r = rootRef.current.getBoundingClientRect();
    const c = e.currentTarget.getBoundingClientRect();
    moveTo(c.left + c.width / 2 - r.left, c.top + c.height / 2 - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{ '--r': `${radius}px` }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map(project => (
        <ChromaCardItem
          key={project.num}
          project={project}
          active={active}
          onMouseMove={handleCardMove}
          onClick={() => onSelect(project)}
          onFocus={handleCardFocus}
          onBlur={handleLeave}
        />
      ))}
      <div className="chroma-overlay" aria-hidden="true" />
      <div ref={fadeRef} className="chroma-fade" aria-hidden="true" />
    </div>
  );
};

export default ChromaGrid;
