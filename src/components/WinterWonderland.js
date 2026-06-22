import React, { useRef, useEffect, useMemo } from 'react';
import '../Assets/WinterWonderland.css';

const WinterWonderland = ({ isProfessional }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Generate stars once
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const sz = Math.random() * 1.8 + 0.6;
      return {
        id: i,
        width: `${sz}px`,
        height: `${sz}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        '--max-op': (Math.random() * 0.5 + 0.2).toFixed(2),
        '--dur': `${(Math.random() * 3 + 2).toFixed(1)}s`,
        '--delay': `${(Math.random() * 4).toFixed(1)}s`
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = containerRef.current;
    if (!canvas || !stage) return;
    
    const ctx = canvas.getContext('2d');
    let W, H;
    const FLAKE_COUNT = window.innerWidth < 768 ? 100 : 220;
    const flakes = [];
    let animationFrameId;

    // Offscreen canvas texture cache to avoid allocating radial gradients every frame
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = 100;
    offscreenCanvas.height = 20;
    const octx = offscreenCanvas.getContext('2d');
    for (let i = 0; i < 5; i++) {
      const radius = 0.8 + (i / 4) * 3.4;
      const cx = i * 20 + 10;
      const cy = 10;
      const g = octx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      g.addColorStop(0, 'rgba(255,255,255,1)');
      g.addColorStop(0.5, 'rgba(220,240,255,0.8)');
      g.addColorStop(1, 'rgba(180,220,255,0)');
      octx.fillStyle = g;
      octx.beginPath();
      octx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
      octx.fill();
    }

    function resize() {
      W = canvas.width = stage.offsetWidth;
      H = canvas.height = stage.offsetHeight;
    }

    function rand(a, b) {
      return Math.random() * (b - a) + a;
    }

    class Flake {
      constructor(fromTop) {
        this.reset(fromTop);
      }
      reset(fromTop) {
        this.x = rand(0, W);
        this.y = fromTop ? rand(-20, 0) : rand(0, H);
        this.r = rand(0.8, 4.2);
        this.opacity = rand(0.25, 0.92);
        this.sizeIndex = Math.min(4, Math.max(0, Math.floor(((this.r - 0.8) / 3.4) * 5)));
        this.vx = rand(-0.3, 0.3);
        this.vy = rand(0.12, 0.65) * (0.4 + this.r * 0.18);
        this.swayAmp = rand(0.2, 0.9);
        this.swayFreq = rand(0.005, 0.015);
        this.swayOff = rand(0, Math.PI * 2);
        this.t = rand(0, 1000);
      }
      update() {
        this.t++;
        this.x += this.vx + Math.sin(this.t * this.swayFreq + this.swayOff) * this.swayAmp;
        this.y += this.vy;
        if (this.y > H + 10 || this.x < -10 || this.x > W + 10) {
          this.reset(true);
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        const srcX = this.sizeIndex * 20;
        ctx.drawImage(offscreenCanvas, srcX, 0, 20, 20, this.x - 10, this.y - 10, 20, 20);
        ctx.restore();
      }
    }

    resize();
    for (let i = 0; i < FLAKE_COUNT; i++) flakes.push(new Flake(false));

    function loop() {
      // Pause the snow while the tab is backgrounded — no point animating
      // pixels nobody can see (saves battery/CPU on phones especially).
      if (typeof document !== 'undefined' && document.hidden) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }
      ctx.clearRect(0, 0, W, H);
      for (const f of flakes) {
        f.update();
        f.draw();
      }
      animationFrameId = requestAnimationFrame(loop);
    }
    
    loop();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="snow-stage" ref={containerRef}>
      <div className="winter-bg-layer"></div>
      <div className="aurora"></div>
      <div className="stars">
        {stars.map((s) => (
          <div key={s.id} className="star" style={s}></div>
        ))}
      </div>
      <svg className="mountains" viewBox="0 0 800 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ display: isProfessional ? 'none' : 'block' }}>
        <polygon points="0,200 120,40 240,200" fill="#18253d" opacity="0.95"/>
        <polygon points="80,200 220,20 360,200" fill="#1e2e48" opacity="0.9"/>
        <polygon points="200,200 340,55 480,200" fill="#1a2840" opacity="0.88"/>
        <polygon points="350,200 500,30 650,200" fill="#202f4a" opacity="0.85"/>
        <polygon points="500,200 640,60 800,200" fill="#1b2a40" opacity="0.9"/>
        <polygon points="650,200 760,45 900,200" fill="#172338" opacity="0.95"/>
        <polygon points="0,200 120,40 240,200" fill="white" opacity="0.35" clipPath="url(#snow-cap)"/>
        <polygon points="80,200 220,20 360,200" fill="white" opacity="0.3" clipPath="url(#snow-cap2)"/>
        <polygon points="350,200 500,30 650,200" fill="white" opacity="0.28" clipPath="url(#snow-cap3)"/>
        <defs>
          <clipPath id="snow-cap"><rect x="0" y="0" width="800" height="80"/></clipPath>
          <clipPath id="snow-cap2"><rect x="0" y="0" width="800" height="70"/></clipPath>
          <clipPath id="snow-cap3"><rect x="0" y="0" width="800" height="75"/></clipPath>
        </defs>
      </svg>
      <canvas id="snow-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default WinterWonderland;
