import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../Assets/ChromaGrid.css';

const ChromaCardItem = ({ project, index, active = true, onMouseMove, onClick, onFocus, onBlur }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // The grid lives inside an always-mounted overlay; only animate when it's open.
    if (!active) return;
    const ctx = canvas.getContext('2d');

    const render = () => {
      // Pause while the tab is backgrounded.
      if (typeof document !== 'undefined' && document.hidden) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w > 0 && h > 0) {
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }
        project.draw(ctx, w, h, performance.now() / 1000);
      }
      rafRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [project, active]);

  // Derive gradient and border color from project tag color
  // Dark deep gradient to match the cinematic vibe
  const baseColor = project.tagColor || 'rgba(255, 255, 255, 0.4)';
  const gradient = `linear-gradient(145deg, #13141a, #0b0c10)`;

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
      style={{
        '--card-border': baseColor,
        '--card-gradient': gradient
      }}
    >
      <div className="chroma-img-wrapper">
        <canvas ref={canvasRef} id={`cv${index}`}></canvas>
        <span className="thumb-num">{project.num}</span>
        {project.isNew && (
          <span className="thumb-new">NEW</span>
        )}
        <span className="thumb-arrow">↗</span>
      </div>
      <footer className="chroma-info">
        <span className="card-tag" style={{ background: project.tagBg, color: project.tagColor }}>
          {project.tag}
        </span>
        <div className="card-name">{project.name}</div>
        <div className="card-sub">{project.sub}</div>
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

  const handleMove = e => {
    if (!rootRef.current) return;
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
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((project, i) => (
        <ChromaCardItem
            key={i}
            index={i}
            project={project}
            active={active}
            onMouseMove={handleCardMove}
            onClick={() => onSelect(project)}
            onFocus={handleCardFocus}
            onBlur={handleLeave}
        />
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
