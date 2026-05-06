import React, { useEffect, useRef, useState } from 'react';
import '../Assets/WorkShowcase.css';
import ElectricBorder from './ElectricBorder';
import ChromaGrid from './ChromaGrid';

const projects = [
  {
    num: '01', name: 'Air Canvas AI', sub: 'Gesture-controlled drawing',
    tag: 'Creative · AI', tagBg: '#EEEDFE', tagColor: '#3C3489',
    desc: 'Draw in mid-air using hand gestures tracked in real time via MediaPipe. Pinch to draw, open palm to pause — expressive browser art without touching a device.',
    pills: ['MediaPipe', 'WebGL', 'Canvas API', 'Gesture Recognition'],
    url: 'https://air-canvas-ai.netlify.app/',
    draw: drawAC, drawM: drawACM
  },
  {
    num: '02', name: 'not financial advice.', sub: 'Terminal stock dashboard',
    tag: 'Finance', tagBg: '#E1F5EE', tagColor: '#085041',
    desc: 'A hacker-aesthetic market dashboard. Enter a ticker, get a vibe check — real-time scanning, portfolio tracking, and a live feed that feels ripped from a trading floor.',
    pills: ['React', 'WebSockets', 'Financial API', 'CSS Animations'],
    url: 'https://notfinancialadvice.site/',
    draw: drawNFA, drawM: drawNFAM
  },
  {
    num: '03', name: 'MoodLine', sub: 'Mood lifting interface',
    tag: 'AI · Wellness', tagBg: '#FBEAF0', tagColor: '#72243E',
    desc: 'An AI-driven experiment focused on emotional well-being. It helps lift a user’s mood when they feel down through interactive, generative responses.',
    pills: ['React', 'AI Model', 'Emotion API', 'Framer Motion'],
    url: 'https://mood-align.netlify.app/',
    draw: drawMA, drawM: drawMAM,
    note: 'Subject to token limits'
  },
  {
    num: '04', name: 'AR Portal', sub: 'WebXR augmented reality portals',
    tag: 'AR · 3D', tagBg: '#E6F1FB', tagColor: '#0C447C',
    desc: 'Step through augmented reality portals overlaid on the real world. A WebXR experiment rendering immersive 3D environments directly in the browser — no app required.',
    pills: ['WebXR', 'Three.js', 'GLSL', 'AR'],
    url: 'https://github.com/Royverse/AR-PORTAL',
    draw: drawAR, drawM: drawARM
  },
  {
    num: '05', name: 'Midnight OS', sub: 'Browser-based OS interface',
    tag: 'Interface', tagBg: '#F1EFE8', tagColor: '#444441',
    desc: 'A complete OS-style experience in vanilla JS. Windowed applications, a taskbar, a desktop environment, and a dark system aesthetic — all running client-side.',
    pills: ['Vanilla JS', 'CSS', 'UI System', 'OS UX'],
    url: 'https://midnight-os-demo.netlify.app/',
    draw: drawOS, drawM: drawOSM
  }
];

// Drawing functions
function drawAC(ctx, w, h, t) {
  ctx.fillStyle = '#0c0a18'; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(127,119,221,0.1)'; ctx.lineWidth = 0.5;
  for (let x = 0; x < w; x += 18) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
  for (let y = 0; y < h; y += 18) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }
  const cx = w / 2, cy = h / 2, pts = [];
  for (let i = 0; i < 90; i++) {
    const a = (i / 90) * Math.PI * 3.5 + t * 0.55;
    const r = h * 0.22 + Math.sin(i * 0.22 + t) * h * 0.09;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.55]);
  }
  ctx.strokeStyle = 'rgba(175,169,236,0.85)'; ctx.lineWidth = 1.5;
  ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
  const tx = cx + Math.cos(t * 0.55 + Math.PI * 3.5) * h * 0.22 * 1.05;
  const ty = cy + Math.sin(t * 0.55 + Math.PI * 3.5) * h * 0.22 * 0.55;
  ctx.beginPath(); ctx.arc(tx, ty, 3, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();
  ctx.beginPath(); ctx.arc(tx, ty, 7, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(175,169,236,0.45)'; ctx.lineWidth = 1; ctx.stroke();
  ctx.strokeStyle = 'rgba(127,119,221,0.4)'; ctx.lineWidth = 0.8;
  [[4, 4], [w - 4, 4], [w - 4, h - 4], [4, h - 4]].forEach(([x, y]) => {
    const sx = x < w / 2 ? 1 : -1, sy = y < h / 2 ? 1 : -1;
    ctx.beginPath(); ctx.moveTo(x + 10 * sx, y); ctx.lineTo(x, y); ctx.lineTo(x, y + 10 * sy); ctx.stroke();
  });
}

function drawACM(ctx, w, h, t) {
  ctx.fillStyle = '#08060f'; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(127,119,221,0.07)'; ctx.lineWidth = 0.5;
  for (let x = 0; x < w; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
  for (let y = 0; y < h; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }
  const cx = w / 2, cy = h / 2;
  [['#AFA9EC', 0, 1.8], ['#7F77DD', 1.2, 1.3], ['#ED93B1', 2.4, 1.1]].forEach(([c, off, lw], ci) => {
    const pts = [];
    for (let i = 0; i < 100; i++) {
      const a = (i / 100) * Math.PI * 4 + t * 0.5 + off;
      const r = h * 0.2 + ci * h * 0.12 + Math.sin(i * 0.3 + t + ci) * h * 0.06;
      pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.5 - ci * h * 0.06]);
    }
    ctx.strokeStyle = c; ctx.lineWidth = lw;
    ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
  });
  const hx = cx + Math.cos(t * 0.3) * w * 0.12, hy = cy + h * 0.12;
  ctx.strokeStyle = 'rgba(175,169,236,0.3)'; ctx.lineWidth = 1;
  [[0, -h * 0.14], [w * 0.04, -h * 0.13], [-w * 0.03, -h * 0.11], [w * 0.05, -h * 0.09], [-w * 0.04, -h * 0.07]].forEach(([dx, dy]) => {
    ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(hx + dx, hy + dy); ctx.stroke();
  });
  ctx.beginPath(); ctx.arc(hx, hy, 3, 0, Math.PI * 2); ctx.fillStyle = '#AFA9EC'; ctx.fill();
}

function drawNFA(ctx, w, h, t) {
  ctx.fillStyle = '#030d07'; ctx.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 3) { ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.fillRect(0, y, w, 1) }
  const pts = [];
  for (let i = 0; i < 50; i++) pts.push([i * (w / 49), h * 0.58 - Math.sin(i * 0.38 + t) * h * 0.17 - Math.cos(i * 0.85) * h * 0.04]);
  ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
  ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath(); ctx.fillStyle = 'rgba(29,158,117,0.07)'; ctx.fill();
  ctx.strokeStyle = '#1D9E75'; ctx.lineWidth = 1.5;
  ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
  ctx.font = `${h * 0.12}px 'DM Mono',monospace`;
  [['> VIBE CHECK: BULLISH', 0.85], ['> SPY  +1.2%', 0.45], ['> BTC  -0.3%', 0.45], ['> NVDA +3.8%', 0.45]].forEach(([l, a], i) => {
    const al = i === 0 ? a * (Math.sin(t * 2) * 0.25 + 0.8) : a;
    ctx.fillStyle = `rgba(29,158,117,${al})`;
    ctx.fillText(l, 7, h * 0.16 + i * (h * 0.13));
  });
  if (Math.floor(t * 2) % 2 === 0) { ctx.fillStyle = '#1D9E75'; ctx.fillRect(7, h * 0.65, 4, h * 0.1) }
}

function drawNFAM(ctx, w, h, t) {
  ctx.fillStyle = '#030a07'; ctx.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 3) { ctx.fillStyle = 'rgba(0,0,0,0.12)'; ctx.fillRect(0, y, w, 1) }
  [['#1D9E75', 0, 0.13], ['#5DCAA5', 1.5, 0.17], ['#9FE1CB', 3, 0.1]].forEach(([col, off, amp]) => {
    const pts = [];
    for (let i = 0; i < 60; i++) pts.push([i * (w / 59), h * 0.58 - Math.sin(i * 0.35 + t + off) * h * amp - Math.cos(i * 0.7) * h * 0.04]);
    ctx.strokeStyle = col; ctx.lineWidth = 1.2;
    ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
  });
  ctx.fillStyle = 'rgba(0,28,18,0.88)'; ctx.fillRect(w * 0.56, 0, w * 0.44, h);
  ctx.strokeStyle = 'rgba(29,158,117,0.25)'; ctx.lineWidth = 0.5;
  ctx.beginPath(); ctx.moveTo(w * 0.56, 0); ctx.lineTo(w * 0.56, h); ctx.stroke();
  ctx.font = `${h * 0.07}px 'DM Mono',monospace`;
  ['nfa. terminal', '──────────', '> SPY  +1.2%', '> BTC  -0.4%', '> NVDA +3.8%', '> ETH  +0.7%', '', '> VIBE: BULL'].forEach((l, i) => {
    ctx.fillStyle = i === 0 ? 'rgba(29,158,117,0.9)' : i === 1 ? 'rgba(29,158,117,0.18)' : i === 7 ? `rgba(29,158,117,${Math.sin(t * 2) * 0.3 + 0.8})` : 'rgba(29,158,117,0.55)';
    ctx.fillText(l, w * 0.58, h * 0.11 + i * (h * 0.105));
  });
}

function drawMA(ctx, w, h, t) {
  ctx.fillStyle = '#120818'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2, cy = h * 0.42;
  for (let i = 4; i >= 0; i--) {
    const r = 10 + i * 14 + Math.sin(t + i * 0.6) * 3;
    const a = (0.55 - i * 0.1) * (Math.sin(t * 1.4 + i * 0.8) * 0.2 + 0.8);
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(212,83,126,${a})`; ctx.lineWidth = 1.4; ctx.stroke();
  }
  ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.fillStyle = '#D4537E'; ctx.fill();
  const bw = w * 0.72, bx = (w - bw) / 2;
  for (let i = 0; i < 22; i++) {
    const bh = 5 + Math.abs(Math.sin(i * 0.55 + t * 2.2)) * h * 0.18;
    const x = bx + (bw / 22) * i;
    ctx.fillStyle = `rgba(212,83,126,${0.3 + Math.abs(Math.sin(i * 0.35 + t)) * 0.55})`;
    ctx.fillRect(x, h * 0.82 - bh / 2, 4, bh);
  }
}

function drawMAM(ctx, w, h, t) {
  ctx.fillStyle = '#0e0514'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2, cy = h * 0.45;
  for (let i = 5; i >= 0; i--) {
    const r = 12 + i * 18 + Math.sin(t * 1.1 + i * 0.7) * 5;
    const a = (0.5 - i * 0.07) * (Math.sin(t * 1.5 + i * 0.9) * 0.2 + 0.8);
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(212,83,126,${a})`; ctx.lineWidth = 1.5; ctx.stroke();
  }
  ctx.beginPath(); ctx.arc(cx, cy, 9, 0, Math.PI * 2); ctx.fillStyle = '#D4537E'; ctx.fill();
  const bw = w * 0.8, bx = (w - bw) / 2;
  for (let i = 0; i < 28; i++) {
    const bh = 8 + Math.abs(Math.sin(i * 0.5 + t * 2.5)) * h * 0.2;
    const x = bx + (bw / 28) * i;
    ctx.fillStyle = `rgba(212,83,126,${0.28 + Math.abs(Math.sin(i * 0.4 + t)) * 0.6})`;
    ctx.fillRect(x, h * 0.85 - bh / 2, 5, bh);
  }
  ctx.font = `300 ${h * 0.1}px 'Epilogue',sans-serif`;
  ctx.fillStyle = 'rgba(237,147,177,0.5)';
  ctx.fillText(['calm', 'melancholy', 'elated', 'anxious'][Math.floor(t * 0.4) % 4], cx - 22, h * 0.22);
}

function drawAR(ctx, w, h, t) {
  ctx.fillStyle = '#04111f'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2, cy = h / 2;
  for (let i = 0; i < 4; i++) {
    const r = 12 + i * 16;
    ctx.beginPath();
    for (let a = 0; a <= Math.PI * 2; a += 0.05) {
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r * 0.4 + Math.sin(a * 2 + t) * r * 0.08;
      a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(55,138,221,${0.55 - i * 0.1})`; ctx.lineWidth = i === 0 ? 1.8 : 0.8; ctx.stroke();
  }
  const scl = h * 0.38;
  ctx.strokeStyle = 'rgba(55,138,221,0.3)'; ctx.lineWidth = 0.7;
  ctx.beginPath();
  [[0, -1], [0.87, -0.5], [0.87, 0.5], [0, 1], [-0.87, 0.5], [-0.87, -0.5], [0, -1]].forEach(([hx, hy]) => {
    const px = cx + hx * scl, py = cy + hy * scl * 0.5;
    ctx.lineTo(px, py);
  }); ctx.stroke();
  const gx = cx + Math.cos(t * 0.4) * h * 0.15, gy = cy + Math.sin(t * 0.4) * h * 0.08;
  ctx.beginPath(); ctx.arc(gx, gy, 4, 0, Math.PI * 2); ctx.fillStyle = '#378ADD'; ctx.fill();
  ctx.beginPath(); ctx.arc(gx, gy, 9, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(55,138,221,0.35)'; ctx.lineWidth = 1; ctx.stroke();
}

function drawARM(ctx, w, h, t) {
  ctx.fillStyle = '#03101e'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2, cy = h / 2;
  for (let i = 0; i < 6; i++) {
    const r = 15 + i * 18 + Math.sin(t * 0.7 + i * 0.5) * 5;
    ctx.beginPath();
    for (let a = 0; a <= Math.PI * 2; a += 0.04) {
      const x = cx + Math.cos(a + t * 0.1) * r;
      const y = cy + Math.sin(a + t * 0.1) * r * 0.42 + Math.sin(a * 3 + t) * r * 0.06;
      a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(55,138,221,${0.5 - i * 0.07})`; ctx.lineWidth = i < 2 ? 1.5 : 0.7; ctx.stroke();
  }
  const scl = h * 0.45;
  ctx.strokeStyle = 'rgba(55,138,221,0.22)'; ctx.lineWidth = 0.8;
  ctx.beginPath();
  [[0, -1], [0.87, -0.5], [0.87, 0.5], [0, 1], [-0.87, 0.5], [-0.87, -0.5], [0, -1]].forEach(([hx, hy]) => {
    ctx.lineTo(cx + hx * scl, cy + hy * scl * 0.5);
  }); ctx.stroke();
  const gx = cx + Math.cos(t * 0.4) * h * 0.22, gy = cy + Math.sin(t * 0.4) * h * 0.11;
  ctx.beginPath(); ctx.arc(gx, gy, 5, 0, Math.PI * 2); ctx.fillStyle = '#378ADD'; ctx.fill();
  ctx.beginPath(); ctx.arc(gx, gy, 12, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(55,138,221,0.3)'; ctx.lineWidth = 1; ctx.stroke();
  ctx.font = `${h * 0.08}px 'DM Mono',monospace`;
  ctx.fillStyle = 'rgba(55,138,221,0.45)';
  ctx.fillText('PORTAL READY', 10, h - 10);
}

function drawOS(ctx, w, h, t) {
  ctx.fillStyle = '#111114'; ctx.fillRect(0, 0, w, h);
  [[w * 0.05, h * 0.12, w * 0.52, h * 0.62, 0], [w * 0.4, h * 0.22, w * 0.54, h * 0.6, 1]].forEach(([x, y, ww, wh, wi]) => {
    ctx.fillStyle = wi === 0 ? '#1a1a20' : '#161619';
    ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, ww, wh, 4); else ctx.rect(x, y, ww, wh);
    ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 0.5; ctx.stroke();
    ctx.fillStyle = '#0f0f12';
    ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, ww, 16, 4); else ctx.rect(x, y, ww, 16); ctx.fill();
    [x + 6, x + 12, x + 18].forEach((dx, di) => {
      ctx.beginPath(); ctx.arc(dx, y + 8, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = ['#ff5f57', '#febc2e', '#28c840'][di]; ctx.fill();
    });
    ctx.font = `${h * 0.08}px 'DM Mono',monospace`;
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillText(wi === 0 ? '~/projects' : '~/notes', x + 32, y + 11);
  });
  ctx.fillStyle = '#09090c'; ctx.fillRect(0, h - 16, w, 16);
  ctx.font = `${h * 0.08}px 'DM Mono',monospace`;
  ctx.fillStyle = `rgba(251,191,36,${Math.sin(t * 0.8) * 0.2 + 0.65})`;
  ctx.fillText('midnight os', 7, h - 5);
}

function drawOSM(ctx, w, h, t) {
  ctx.fillStyle = '#0d0d10'; ctx.fillRect(0, 0, w, h);
  [[w * 0.03, h * 0.08, w * 0.58, h * 0.72, 0], [w * 0.36, h * 0.18, w * 0.6, h * 0.68, 1]].forEach(([x, y, ww, wh, wi]) => {
    ctx.fillStyle = wi === 0 ? '#1c1c22' : '#181820';
    ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, ww, wh, 5); else ctx.rect(x, y, ww, wh);
    ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 0.5; ctx.stroke();
    ctx.fillStyle = '#111115';
    ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, ww, 18, 5); else ctx.rect(x, y, ww, 18); ctx.fill();
    [x + 8, x + 16, x + 24].forEach((dx, di) => {
      ctx.beginPath(); ctx.arc(dx, y + 9, 3, 0, Math.PI * 2);
      ctx.fillStyle = ['#ff5f57', '#febc2e', '#28c840'][di]; ctx.fill();
    });
    const titles = ['~/projects  ', '~/terminal '];
    ctx.font = `${h * 0.065}px 'DM Mono',monospace`;
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.fillText(titles[wi], x + 38, y + 13);
    if (wi === 0) {
      ctx.font = `${h * 0.06}px 'DM Mono',monospace`;
      ['air-canvas/', 'nfa-app/', 'mood-align/', 'ar-portal/'].forEach((l, li) => {
        ctx.fillStyle = li === Math.floor(t * 0.5) % 4 ? 'rgba(251,191,36,0.8)' : 'rgba(255,255,255,0.25)';
        ctx.fillText(l, x + 10, y + 32 + li * (h * 0.1));
      });
    } else {
      const blinkX = x + 10 + (Math.sin(t * 0.3) + 1) * w * 0.12;
      ctx.fillStyle = `rgba(251,191,36,${Math.sin(t * 3) * 0.4 + 0.65})`;
      ctx.fillRect(blinkX, y + 28, 3, 10);
      ctx.font = `${h * 0.06}px 'DM Mono',monospace`;
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.fillText('> system ready_', x + 10, y + 42);
    }
  });
  ctx.fillStyle = '#07070a'; ctx.fillRect(0, h - 18, w, 18);
  ctx.font = `${h * 0.07}px 'DM Mono',monospace`;
  ctx.fillStyle = `rgba(251,191,36,0.7)`;
  ctx.fillText('midnight os  —  v1.0', 8, h - 6);
}

// ProjectCard logic moved to ChromaGrid.js

const WorkShowcase = ({ active, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const modalCanvasRef = useRef(null);
  const modalRafRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!selectedProject || !modalCanvasRef.current) return;
    const canvas = modalCanvasRef.current;
    const ctx = canvas.getContext('2d');

    const render = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w > 0 && h > 0) {
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }
        selectedProject.drawM(ctx, w, h, performance.now() / 1000);
      }
      modalRafRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (modalRafRef.current) cancelAnimationFrame(modalRafRef.current);
    };
  }, [selectedProject]);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className={`experience-overlay ${active ? 'active' : ''}`}>
      <button className="exp-close-btn" onClick={onClose}>× CLOSE</button>

      {isMobile ? (
        <>
          <ElectricBorder
            color="#7df9ff"
            speed={1.5}
            chaos={1.2}
            thickness={2}
            borderRadius={20}
            className="mobile-port-wrap"
          >
            <div className="mobile-port-content">
              <div className="port-header">
                <span className="port-title">AI EXPERIMENTS & PROJECTS</span>
                <span className="port-count">{projects.length} deployments</span>
              </div>
              <div className="mobile-grid">
                {projects.map((item, idx) => (
                  <div 
                    key={item.num} 
                    className="mobile-card" 
                    onClick={() => setSelectedProject(item)}
                    style={idx === projects.length - 1 && projects.length % 2 !== 0 ? { gridColumn: 'span 2' } : {}}
                  >
                    <div className="card-canvas-preview" style={{ background: item.num === '01' ? '#0c0a18' : item.num === '02' ? '#030d07' : item.num === '03' ? '#120818' : item.num === '04' ? '#04111f' : '#111114' }}>
                      {`[ ${item.name.split(' ')[0].toLowerCase()} ]`}
                    </div>
                    <div className="card-body">
                      <span className="card-tag" style={{ background: 'var(--glass-bg)', color: 'var(--ink)', border: '1px solid var(--border)' }}>{item.tag}</span>
                      <div className="card-name">{item.name}</div>
                      <div className="card-sub">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ElectricBorder>

          <div className={`modal-sheet ${selectedProject ? 'open' : ''}`}>
            <ElectricBorder
              color="#7df9ff"
              speed={1.5}
              chaos={1.2}
              thickness={2}
              borderRadius={20}
              className="modal-inner"
            >
              <div className="modal-inner-content">
                <div className="modal-preview-strip">
                  <div className="modal-drag"></div>
                  <canvas ref={modalCanvasRef}></canvas>
                </div>
                <div className="modal-content">
                  <div className="modal-top-row">
                    <div>
                      {selectedProject && (
                        <>
                          <span className="card-tag" style={{ background: 'var(--glass-bg)', color: 'var(--ink)', border: '1px solid var(--border)', fontSize: '8px', padding: '3px 8px', borderRadius: '99px', display: 'inline-block', marginBottom: '4px' }}>
                            {selectedProject.tag}
                          </span>
                          <div className="modal-title">{selectedProject.name}</div>
                        </>
                      )}
                    </div>
                    <div className="modal-close-icon" onClick={closeModal}>✕</div>
                  </div>
                  {selectedProject && (
                    <>
                      <p className="modal-desc">{selectedProject.desc}</p>
                      <div className="modal-foot">
                        <div className="modal-pills">
                          {selectedProject.pills.map((pill, i) => (
                            <span key={i} className="pill">{pill}</span>
                          ))}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <a className="modal-visit" href={selectedProject.url} target="_blank" rel="noopener noreferrer">visit ↗</a>
                          {selectedProject.note && (
                            <div className="note-icon">
                              i
                              <div className="note-tooltip">{selectedProject.note}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </ElectricBorder>
          </div>
        </>
      ) : (
        <div className="port-modal-wrap">
          <ElectricBorder
            color="#7df9ff"
            speed={1.5}
            chaos={1.2}
            thickness={2}
            borderRadius={24}
            className="port-container"
            style={{ borderRadius: 24, background: 'rgba(243, 246, 244, 0.2)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', width: '90vw', maxWidth: '1200px' }}
          >
            <div className="port" style={{ borderRadius: 24, background: 'transparent' }}>
              <div className="port-header">
                <span className="port-title">AI EXPERIMENTS & PROJECTS</span>
                <span className="port-count">05 deployments</span>
              </div>
              <ChromaGrid items={projects} onSelect={setSelectedProject} />
            </div>
          </ElectricBorder>

          <div className={`work-modal-wrap ${selectedProject ? 'open' : ''}`}>
            <div className="work-modal-backdrop" onClick={closeModal}></div>
            <ElectricBorder
              color="#7df9ff"
              speed={1.5}
              chaos={1.2}
              thickness={2}
              borderRadius={24}
              style={{ borderRadius: 24, background: 'rgba(243, 246, 244, 0.2)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', width: '90vw', maxWidth: '520px' }}
            >
              <div className="work-modal" style={{ borderRadius: 24, background: 'transparent' }}>
                <div className="modal-preview">
                  <canvas ref={modalCanvasRef}></canvas>
                </div>
                <div className="modal-body">
                  <div className="modal-top">
                    <div>
                      {selectedProject && (
                        <>
                          <span className="card-tag" style={{ background: selectedProject.tagBg, color: selectedProject.tagColor, display: 'inline-block', marginBottom: '4px' }}>
                            {selectedProject.tag}
                          </span>
                          <div className="modal-name">{selectedProject.name}</div>
                        </>
                      )}
                    </div>
                    <button className="modal-x" onClick={closeModal}>✕</button>
                  </div>
                  {selectedProject && (
                    <>
                      <p className="modal-desc">{selectedProject.desc}</p>
                      <div className="modal-foot">
                        <div className="modal-pills">
                          {selectedProject.pills.map((pill, i) => (
                            <span key={i} className="m-pill">{pill}</span>
                          ))}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <a className="modal-link" href={selectedProject.url} target="_blank" rel="noopener noreferrer">visit ↗</a>
                          {selectedProject.note && (
                            <div className="note-icon">
                              i
                              <div className="note-tooltip">{selectedProject.note}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </ElectricBorder>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkShowcase;
