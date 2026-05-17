import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import '../Assets/Portrait.css'; // Refreshed import path

/**
 * Portrait Component
 * 
 * An interactive, motion-enhanced portrait gallery featuring:
 * - 3D Tilt effect with spring physics for smooth interaction.
 * - Parallax depth for image layers and glass overlays.
 * - Automated transition between key brand portraits.
 * - Support for touch gestures and keyboard navigation.
 * - Visual "sheen" and "frost" effects for a premium aesthetic.
 * 
 * @author Roy Mootsana
 * @version 1.0.0
 */

const IMAGES = [
  { 
    src: new URL('../Assets/Images/Portrait/portrait-1.jpg', import.meta.url).href, 
    caption: "Software Engineer", 
    badge: "01 — Core" 
  },
  { 
    src: new URL('../Assets/Images/Portrait/portrait-2.jpg', import.meta.url).href, 
    caption: "UX Architect", 
    badge: "02 — Strategy" 
  },
  { 
    src: new URL('../Assets/Images/Portrait/portrait-3.jpg', import.meta.url).href, 
    caption: "Creative Technologist", 
    badge: "03 — Innovation" 
  }
];

const INTERVAL = 8000;

const springConfig = { damping: 30, stiffness: 100, mass: 2 };

const Portrait = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);
  
  const cardRef = useRef(null);
  const touchRaf = useRef(null);

  // Motion values for raw mouse/touch position (-1 to 1)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Smoothed tilt values
  const tx = useSpring(mx, springConfig);
  const ty = useSpring(my, springConfig);

  // Parallax smoothed values
  const px = useSpring(mx, { damping: 40, stiffness: 80 });
  const py = useSpring(my, { damping: 40, stiffness: 80 });

  // Transforms
  const rotateX = useTransform(ty, [-1, 1], [12, -12]);
  const rotateY = useTransform(tx, [-1, 1], [-12, 12]);
  const imgX = useTransform(px, [-1, 1], [14, -14]);
  const imgY = useTransform(py, [-1, 1], [14, -14]);
  const shadowX = useTransform(tx, [-1, 1], [-14, 14]);

  // Custom cursor
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorOpacity = useSpring(0);
  const cursorScale = useSpring(0);

  // Auto-advance logic
  useEffect(() => {
    let lastTime = performance.now();
    let frame;

    const animate = (now) => {
      if (!paused && !isHovered) {
        const delta = now - lastTime;
        const currentProgress = progress.get();
        const next = currentProgress + (delta / INTERVAL);
        if (next >= 1) {
          setCurrent((c) => (c + 1) % IMAGES.length);
          progress.set(0);
        } else {
          progress.set(next);
        }
      }
      lastTime = now;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, isHovered, progress]);

  // Preload the next image in rotation dynamically for seamless transitions
  useEffect(() => {
    const nextIdx = (current + 1) % IMAGES.length;
    const img = new Image();
    img.src = IMAGES[nextIdx].src;
  }, [current]);

  // Clean up touch animation frames
  useEffect(() => {
    return () => {
      if (touchRaf.current) cancelAnimationFrame(touchRaf.current);
    };
  }, []);

  // Unified movement handler for both Mouse and Touch
  const handleMove = (clientX, clientY) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((clientY - rect.top) / rect.height) * 2 - 1;
    
    // Clamp to ensure dragging outside bounds doesn't flip card wildly
    mx.set(Math.max(-1, Math.min(1, x)));
    my.set(Math.max(-1, Math.min(1, y)));
    
    cursorX.set(clientX - rect.left);
    cursorY.set(clientY - rect.top);
  };

  const handleMouseMove = (e) => handleMove(e.clientX, e.clientY);
  
  const handleTouchMove = (e) => {
    if (touchRaf.current) return;
    
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;
    
    touchRaf.current = requestAnimationFrame(() => {
      handleMove(clientX, clientY);
      touchRaf.current = null;
    });
  };

  const handleInteractionStart = () => {
    setIsHovered(true);
    cursorOpacity.set(1);
    cursorScale.set(1);
  };

  const handleInteractionEnd = () => {
    setIsHovered(false);
    mx.set(0);
    my.set(0);
    cursorOpacity.set(0);
    cursorScale.set(0);
  };

  const goTo = (idx) => {
    setCurrent((idx + IMAGES.length) % IMAGES.length);
    progress.set(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === ' ') setPaused(!paused);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current, paused]);

  return (
    <div className="portrait-wrap">
      <div className="hover-hint desktop-hint">Hover to interact</div>
      <div className="hover-hint mobile-hint">Click to interact</div>
      <div className="card-wrapper">
        <motion.div 
          className="shadow-blob"
          style={{
            x: "-50%",
            translateX: shadowX,
            scaleX: isHovered ? 1.15 : 1,
            scaleY: isHovered ? 0.7 : 1,
            opacity: isHovered ? 0.28 : 0.18,
            filter: isHovered ? "blur(22px)" : "blur(15px)",
            y: isHovered ? 8 : 0
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: isHovered ? 0.28 : 0.18, y: isHovered ? 8 : 0 }}
        />
        
        <motion.div
          ref={cardRef}
          className="tilt-root"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={(e) => {
            handleInteractionStart();
            handleTouchMove(e);
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleInteractionEnd}
          style={{
            rotateX,
            rotateY,
          }}
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="img-layer">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={IMAGES[current].src}
                alt=""
                className="tilted-card-img"
                loading="eager"
                decoding="async"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  x: imgX,
                  y: imgY,
                }}
              />
            </AnimatePresence>
          </div>

          <div className="glass-overlay" />
          <div className="frost-band" />
          <div className="vignette" />
          
          <Sheen mx={mx} my={my} />

          <div className="meta-layer">
            <div className="meta-inner" style={{ transform: 'translateZ(22px)' }}>
              <span className="badge">{IMAGES[current].badge}</span>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={current}
                  className="caption"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: isHovered ? 0 : 4 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {IMAGES[current].caption}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div 
            className="custom-cursor"
            style={{
              left: cursorX,
              top: cursorY,
              opacity: cursorOpacity,
              scale: cursorScale
            }}
          >
            <div className="cursor-dot" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="portrait-controls-v2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="control-fraction">
            <span className="current-num">0{current + 1}</span>
            <span className="slash-divider">/</span>
            <span className="total-num">0{IMAGES.length}</span>
          </div>

          <div className="linear-progress-wrap" onClick={() => setPaused(!paused)} title={paused ? "Resume" : "Pause"}>
            <div className="linear-track" />
            <motion.div 
              className="linear-fill" 
              style={{ scaleX: progress, transformOrigin: "left" }}
            />
            
            <AnimatePresence>
              {paused && (
                <motion.span 
                  className="pause-text"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  PAUSED
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="control-nav">
            <button className="elegant-nav-btn" onClick={() => goTo(current - 1)} aria-label="Previous">
              <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 8L0.5 4L4.5 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0.5 4H17.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="elegant-nav-btn" onClick={() => goTo(current + 1)} aria-label="Next">
              <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0L17.5 4L13.5 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 4H0.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Sheen = ({ mx, my }) => {
  const sheenBackground = useTransform([mx, my], ([x, y]) => {
    return `radial-gradient(ellipse at ${(x + 1) / 2 * 100}% ${(y + 1) / 2 * 100}%, rgba(255,255,255,0.22) 0%, transparent 60%)`;
  });

  return (
    <motion.div 
      className="sheen"
      style={{
        background: sheenBackground
      }}
    />
  );
};

export default Portrait;



