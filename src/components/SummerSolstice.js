import React, { useRef, useEffect } from 'react';
import '../Assets/SummerSolstice.css';

const SummerSolstice = ({ isProfessional }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = containerRef.current;
    if (!canvas || !stage) return;

    const ctx = canvas.getContext('2d');
    let W, H;
    const isMobile = window.innerWidth < 768;
    const MOTE_COUNT = isMobile ? 60 : 130;
    const BOKEH_COUNT = isMobile ? 4 : 8;
    const motes = [];
    const bokeh = [];
    let animationFrameId;

    // Offscreen sprite atlas — five golden mote sizes pre-rendered once so
    // the frame loop never allocates gradients (same trick as the snow).
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = 100;
    offscreenCanvas.height = 20;
    const octx = offscreenCanvas.getContext('2d');
    for (let i = 0; i < 5; i++) {
      const radius = 0.7 + (i / 4) * 2.7;
      const cx = i * 20 + 10;
      const cy = 10;
      const g = octx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      g.addColorStop(0, 'rgba(255, 246, 218, 1)');
      g.addColorStop(0.45, 'rgba(255, 208, 118, 0.85)');
      g.addColorStop(1, 'rgba(255, 178, 66, 0)');
      octx.fillStyle = g;
      octx.beginPath();
      octx.arc(cx, cy, radius * 1.4, 0, Math.PI * 2);
      octx.fill();
    }

    function resize() {
      W = canvas.width = stage.offsetWidth;
      H = canvas.height = stage.offsetHeight;
    }

    function rand(a, b) {
      return Math.random() * (b - a) + a;
    }

    // Sun-dust rises on the heat — the mirror of snow falling.
    class Mote {
      constructor(fromBottom) {
        this.reset(fromBottom);
      }
      reset(fromBottom) {
        this.x = rand(0, W);
        this.y = fromBottom ? rand(H, H + 24) : rand(0, H);
        this.r = rand(0.7, 3.4);
        this.baseOp = rand(0.2, 0.7);
        this.sizeIndex = Math.min(4, Math.max(0, Math.floor(((this.r - 0.7) / 2.7) * 5)));
        this.vx = rand(-0.18, 0.18);
        this.vy = -rand(0.05, 0.4) * (0.35 + this.r * 0.14);
        this.swayAmp = rand(0.15, 0.7);
        this.swayFreq = rand(0.004, 0.012);
        this.swayOff = rand(0, Math.PI * 2);
        this.glimmerFreq = rand(0.008, 0.02);
        this.t = rand(0, 1000);
      }
      update() {
        this.t++;
        this.x += this.vx + Math.sin(this.t * this.swayFreq + this.swayOff) * this.swayAmp;
        this.y += this.vy;
        if (this.y < -12 || this.x < -12 || this.x > W + 12) {
          this.reset(true);
        }
      }
      draw() {
        // Each mote glimmers as it drifts through the light.
        const glimmer = 0.62 + 0.38 * Math.sin(this.t * this.glimmerFreq + this.swayOff);
        ctx.globalAlpha = this.baseOp * glimmer;
        const srcX = this.sizeIndex * 20;
        ctx.drawImage(offscreenCanvas, srcX, 0, 20, 20, this.x - 10, this.y - 10, 20, 20);
      }
    }

    // A few large, faint bokeh discs drifting slowly for depth of field.
    class Bokeh {
      constructor() {
        this.x = rand(0, W);
        this.y = rand(0, H);
        this.r = rand(9, 20);
        this.op = rand(0.05, 0.11);
        this.vx = rand(-0.08, 0.08);
        this.vy = -rand(0.02, 0.09);
        this.pulseFreq = rand(0.003, 0.007);
        this.t = rand(0, 1000);
      }
      update() {
        this.t++;
        this.x += this.vx;
        this.y += this.vy;
        if (this.y < -30) {
          this.y = H + 30;
          this.x = rand(0, W);
        }
        if (this.x < -30) this.x = W + 30;
        if (this.x > W + 30) this.x = -30;
      }
      draw() {
        ctx.globalAlpha = this.op * (0.7 + 0.3 * Math.sin(this.t * this.pulseFreq));
        // Reuse the largest sprite cell, scaled up to bokeh size.
        ctx.drawImage(offscreenCanvas, 80, 0, 20, 20, this.x - this.r, this.y - this.r, this.r * 2, this.r * 2);
      }
    }

    resize();
    for (let i = 0; i < MOTE_COUNT; i++) motes.push(new Mote(false));
    for (let i = 0; i < BOKEH_COUNT; i++) bokeh.push(new Bokeh());

    function loop() {
      // Pause the dust while the tab is backgrounded — no point animating
      // pixels nobody can see (saves battery/CPU on phones especially).
      if (typeof document !== 'undefined' && document.hidden) {
        animationFrameId = requestAnimationFrame(loop);
        return;
      }
      ctx.clearRect(0, 0, W, H);
      for (const b of bokeh) {
        b.update();
        b.draw();
      }
      for (const m of motes) {
        m.update();
        m.draw();
      }
      ctx.globalAlpha = 1;
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
    <div id="solstice-stage" ref={containerRef}>
      <div className="summer-bg-layer"></div>
      <div className="heat-haze h1"></div>
      <div className="heat-haze h2"></div>
      <div className="sun-cluster" style={{ display: isProfessional ? 'none' : 'block' }}>
        <div className="sun-halo"></div>
        <div className="solstice-sun"></div>
      </div>
      <svg className={`meadow${isProfessional ? ' hidden-in-professional' : ''}`} viewBox="0 0 800 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,200 L0,116 C120,84 260,98 390,112 C540,128 670,90 800,102 L800,200 Z" fill="#eeddb0" opacity="0.8" />
        <path d="M0,200 L0,150 C160,118 330,142 470,134 C610,126 715,146 800,136 L800,200 Z" fill="#e4cb8e" opacity="0.85" />
        <path d="M0,200 L0,176 C200,150 430,170 590,161 C695,156 755,168 800,163 L800,200 Z" fill="#d5b76c" opacity="0.95" />
        <g transform="translate(145, 167)">
          <g className="wheat w1" fill="#a98a42" opacity="0.9">
            <path d="M0 0 C-2 -9 -3 -19 -1 -28 C1 -19 1 -9 0 0 Z" transform="rotate(-10)" />
            <path d="M0 0 C-2 -12 -3 -26 -1 -40 C1 -26 1 -12 0 0 Z" />
            <path d="M0 0 C-1 -10 0 -20 2 -30 C3 -20 1 -10 0 0 Z" transform="rotate(11)" />
          </g>
        </g>
        <g transform="translate(470, 166)">
          <g className="wheat w2" fill="#a98a42" opacity="0.85">
            <path d="M0 0 C-2 -8 -3 -17 -1 -26 C1 -17 1 -8 0 0 Z" transform="rotate(-12)" />
            <path d="M0 0 C-2 -11 -3 -24 -1 -36 C1 -24 1 -11 0 0 Z" />
            <path d="M0 0 C-1 -9 0 -18 2 -27 C3 -18 1 -9 0 0 Z" transform="rotate(9)" />
          </g>
        </g>
        <g transform="translate(705, 165)">
          <g className="wheat w3" fill="#a98a42" opacity="0.9">
            <path d="M0 0 C-2 -9 -3 -20 -1 -30 C1 -20 1 -9 0 0 Z" transform="rotate(-9)" />
            <path d="M0 0 C-2 -12 -3 -25 -1 -38 C1 -25 1 -12 0 0 Z" />
            <path d="M0 0 C-1 -10 0 -21 2 -31 C3 -21 1 -10 0 0 Z" transform="rotate(12)" />
          </g>
        </g>
      </svg>
      <canvas id="solstice-canvas" ref={canvasRef}></canvas>
    </div>
  );
};

export default SummerSolstice;
