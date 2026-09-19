import React, { useEffect, useRef, useState } from 'react';
import '../Assets/WorkShowcase.css';
import ElectricBorder from './ElectricBorder';
import ChromaGrid from './ChromaGrid';

const projects = [
  {
    num: '01', name: 'Air Canvas AI', sub: 'Gesture-controlled drawing',
    tag: 'Creative · AI', tagBg: '#EEEDFE', tagColor: '#3C3489',
    desc: 'A touchless painting engine built on MediaPipe\'s 21-point hand tracking. Pinch to draw, open palm to pause — Kalman filtering smooths out tremor and camera noise in real time, so every stroke feels deliberate.',
    pills: ['MediaPipe Hands', 'Canvas 2D', 'Kalman Filter', 'Vite', 'Gesture Engine'],
    url: 'https://air-canvas-ai.netlify.app/',
    sourceUrl: 'https://github.com/Royverse/air-canvas',
    draw: drawAC, drawM: drawACM
  },
  {
    num: '02', name: 'not financial advice.', sub: 'Terminal stock dashboard',
    tag: 'Finance', tagBg: '#E1F5EE', tagColor: '#085041',
    desc: 'A market terminal that merges live price data from Alpha Vantage with real-time social sentiment from X, feeding both into Gemini 2.0 to generate a single conviction score per ticker. Results are cached in Supabase. Three.js particle clouds respond to the market mood.',
    pills: ['Next.js 15', 'Gemini 2.0', 'Alpha Vantage', 'Xpoz API', 'Supabase', 'Three.js'],
    url: 'https://notfinancialadvice.site/',
    draw: drawNFA, drawM: drawNFAM
  },
  {
    num: '03', name: 'Mood Support', sub: 'Mood lifting interface',
    tag: 'AI · Wellness', tagBg: '#FBEAF0', tagColor: '#72243E',
    desc: 'An emotional support interface where the design responds to you. Select a mood state and the colour palette, animations, and tone all shift accordingly. Write about how you feel — Gemini AI analyses the entry and returns personalised, grounded guidance.',
    pills: ['React', 'Gemini AI', 'Framer Motion', 'Serverless', 'CSS System'],
    url: 'https://mood-align.netlify.app/',
    draw: drawMA, drawM: drawMAM,
    note: 'Subject to token limits'
  },
  {
    num: '04', name: 'AR Portal', sub: 'WebXR augmented reality portals',
    tag: 'AR · 3D', tagBg: '#E6F1FB', tagColor: '#0C447C',
    desc: 'Point a camera at a physical marker and a 3D portal appears, anchored in real space. AR.js handles marker tracking while A-Frame renders a metallic frame with stabilised tracking. Step through it and the viewport opens into a full 360° virtual environment — entirely browser-native.',
    pills: ['A-Frame', 'AR.js', 'Three.js', 'WebXR', 'WebGL'],
    url: 'https://github.com/Royverse/AR-PORTAL',
    draw: drawAR, drawM: drawARM
  },
  {
    num: '05', name: 'Midnight OS', sub: 'Browser-based OS interface',
    tag: 'Interface', tagBg: '#F1EFE8', tagColor: '#444441',
    desc: 'A desktop OS experience built entirely in the browser using vanilla JavaScript. A custom DOM window manager handles multi-window layering, drag and resize. Inside: a Finder, a live browser widget, a Notes app persisted to LocalStorage, a calculator, and a clock.',
    pills: ['Vanilla JS', 'HTML5', 'LocalStorage', 'DOM API', 'CSS System'],
    url: 'https://midnight-os-demo.netlify.app/',
    draw: drawOS, drawM: drawOSM
  },
  {
    num: '06', name: 'LUMINARY', sub: 'Superhero flight engine',
    tag: 'Game Engine', tagBg: '#E0F2F1', tagColor: '#0B7A8A',
    desc: 'A 3D superhero flight engine built from first principles in Three.js. Aerodynamic lift and drag equations drive movement through a procedural neon city. A Verlet cloth solver animates the cape in real time, AABB partitioning handles building collisions at 60fps, and wind audio is synthesised live via the Web Audio API.',
    pills: ['Three.js', 'WebGL', 'Verlet Physics', 'Web Audio API', 'AABB'],
    url: 'https://luminary-flight.netlify.app/',
    sourceUrl: 'https://github.com/Royverse/luminary',
    draw: drawLuminary, drawM: drawLuminaryModal
  },
  {
    num: '07', name: 'Wonderwave', sub: 'Gesture-controlled WebAR spellcasting',
    tag: '3D · CV', tagBg: '#E0F7FA', tagColor: '#006064',
    desc: 'A browser-native WebAR spellcasting arena driven by MediaPipe hand tracking. Users cast real-time magical spells, including Leviosa (levitation), Accio (pulling), and Depulso (repelling), on interactive 3D elements inside a Three.js scene. A custom physics engine simulates velocity, gravity, and collision feedback at 60fps, managed by a glassmorphic HUD.',
    pills: ['MediaPipe Hands', 'Three.js', 'WebXR', 'Physics Engine', 'Gesture Math', 'Vite'],
    url: 'https://wand-wave.netlify.app/',
    sourceUrl: 'https://github.com/Royverse/wand-wave',
    draw: drawWonderwave, drawM: drawWonderwaveM
  },
  {
    num: '08', name: 'ECHO', sub: 'Voice-controlled 3D robot sandbox',
    tag: 'AI · Speech', tagBg: '#F3E5F5', tagColor: '#4A148C',
    desc: 'A voice-driven 3D robot playground built with Three.js. Processes natural spoken commands sequentially with local fuzzy regex parsing or Gemini 2.5 Flash NLU. Features continuous listening, speech synthesis (Polly API), and real-time procedural sound effects synthesized dynamically using the Web Audio API.',
    pills: ['Three.js', 'Web Speech API', 'Gemini 2.5', 'Web Audio API', 'Procedural SFX'],
    url: 'https://echo-voice-sandbox.netlify.app/',
    sourceUrl: 'https://github.com/Royverse/echo',
    draw: drawEcho, drawM: drawEchoModal
  },
  {
    num: '09', name: 'milkyway.ai', sub: 'NVIDIA NIM developer galaxy',
    tag: 'AI · Dev Tools', tagBg: '#EAF1FF', tagColor: '#1E3A6E',
    desc: 'An immersive deep-space developer environment and interactive showcase of the NVIDIA NIM microservice galaxy. Explore, benchmark, and prototype conversational, reasoning, coding, and vision models.',
    pills: ['React 18', 'Vite', 'NVIDIA NIM', 'SSE Streaming', 'Canvas 2D', 'Glassmorphism'],
    url: 'https://milkyway-ai-galaxy.netlify.app/',
    draw: drawIC, drawM: drawICM
  },
  {
    num: '10', name: 'Cold Wake', sub: 'Zero-asset WebGL2 survival game',
    tag: 'Game · WebGL2', tagBg: '#E4F4FB', tagColor: '#0B4F6C',
    desc: 'A WebGL2 survival game built from absolute zero — no sprites, no models, no audio files. Every visual is procedurally generated on the GPU each frame; every sound is synthesised live via the Web Audio API. Escape a frozen lake by swimming toward a fracturing ice ceiling while a real-time physics engine simulates buoyancy, drag, and ice-shard collisions.',
    pills: ['WebGL2 (raw)', 'GLSL Shaders', 'Web Audio API', 'Physics Sim', 'Procedural Gen'],
    url: 'https://cold-wake-game-1.netlify.app/',
    sourceUrl: 'https://github.com/Royverse/cold-wake',
    draw: drawColdWake, drawM: drawColdWakeM,
    isNew: true
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

function drawLuminary(ctx, w, h, t) {
  ctx.fillStyle = '#040f12';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(11,122,138,0.15)';
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  for(let i = 14; i < w; i += 24) { ctx.beginPath(); ctx.moveTo(i, 14); ctx.lineTo(i, h-14); ctx.stroke(); }
  for(let i = 14; i < h; i += 24) { ctx.beginPath(); ctx.moveTo(14, i); ctx.lineTo(w-14, i); ctx.stroke(); }

  const startX = w * 0.15, startY = h * 0.75;
  const endX = w * 0.85, endY = h * 0.35;
  const cpX = w * 0.5, cpY = h * 0.1;

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.quadraticCurveTo(cpX, cpY, endX, endY);
  ctx.strokeStyle = 'rgba(11,122,138,0.4)';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.stroke();

  const progress = (t * 0.4) % 2;
  if (progress <= 1) {
     const px = Math.pow(1-progress, 2)*startX + 2*(1-progress)*progress*cpX + Math.pow(progress, 2)*endX;
     const py = Math.pow(1-progress, 2)*startY + 2*(1-progress)*progress*cpY + Math.pow(progress, 2)*endY;

     ctx.beginPath(); ctx.arc(px, py, 8, 0, Math.PI*2);
     ctx.fillStyle = 'rgba(11,122,138,0.4)'; ctx.fill();

     ctx.beginPath(); ctx.arc(px, py, 3.5, 0, Math.PI*2);
     ctx.fillStyle = '#10B9D1'; ctx.fill();
  }

  ctx.font = `600 ${Math.max(10, h * 0.085)}px system-ui, sans-serif`;
  ctx.fillStyle = 'rgba(11,122,138,0.5)';
  ctx.fillText('luminary', 12, h - 12);
}

function drawLuminaryModal(ctx, w, h, t) {
  ctx.fillStyle = '#02080a';
  ctx.fillRect(0, 0, w, h);

  const cx = w / 2, cy = h * 0.75;

  for(let i = 1; i <= 5; i++) {
     ctx.beginPath();
     ctx.arc(cx, cy, i * h * 0.22, Math.PI, 0);
     ctx.strokeStyle = `rgba(11,122,138,${0.3 - i*0.04})`;
     ctx.lineWidth = 2;
     ctx.lineCap = 'round';
     ctx.stroke();
  }

  const routes = [
    { sx: w*0.1, sy: h*0.75, ex: w*0.8, ey: h*0.75, cpx: w*0.3, cpy: h*0.2, offset: 0, width: 3 },
    { sx: w*0.2, sy: h*0.75, ex: w*0.9, ey: h*0.75, cpx: w*0.6, cpy: h*0.1, offset: 1.5, width: 2 },
    { sx: w*0.05, sy: h*0.75, ex: w*0.6, ey: h*0.75, cpx: w*0.4, cpy: h*0.3, offset: 3, width: 2 },
  ];

  routes.forEach((rt, idx) => {
     ctx.beginPath();
     ctx.moveTo(rt.sx, rt.sy);
     ctx.quadraticCurveTo(rt.cpx, rt.cpy, rt.ex, rt.ey);
     ctx.strokeStyle = 'rgba(11,122,138,0.25)';
     ctx.lineWidth = rt.width;
     ctx.lineCap = 'round';
     ctx.stroke();

     const p = ((t * 0.3 + rt.offset) % 3) / 2;
     if (p >= 0 && p <= 1) {
        const px = Math.pow(1-p, 2)*rt.sx + 2*(1-p)*p*rt.cpx + Math.pow(p, 2)*rt.ex;
        const py = Math.pow(1-p, 2)*rt.sy + 2*(1-p)*p*rt.cpy + Math.pow(p, 2)*rt.ey;

        ctx.beginPath(); ctx.arc(px, py, 10, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(11,122,138,0.4)'; ctx.fill();

        ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI*2);
        ctx.fillStyle = '#10B9D1'; ctx.fill();

        if(idx === 0) {
           ctx.font = `600 ${h * 0.045}px 'DM Mono', 'Courier New', monospace`;
           ctx.fillStyle = 'rgba(11,122,138,0.8)';
           const alt = Math.floor(Math.sin(p * Math.PI) * 1250);
           ctx.fillText(`FL${alt}`, px + 16, py - 16);
        }
     }
  });

  ctx.fillStyle = 'rgba(4,15,18,0.85)';
  ctx.fillRect(0, h*0.8, w, h*0.2);
  ctx.beginPath(); ctx.moveTo(0, h*0.8); ctx.lineTo(w, h*0.8);
  ctx.strokeStyle = 'rgba(11,122,138,0.3)'; ctx.lineWidth = 1.5; ctx.stroke();

  ctx.font = `600 ${h * 0.065}px system-ui, sans-serif`;
  ctx.fillStyle = 'rgba(11,122,138,0.6)';
  ctx.fillText('LUMINARY ENGINE // ACTIVE_TRACKING', 24, h*0.9);
}

function drawWonderwave(ctx, w, h, t) {
  ctx.fillStyle = '#030b0d';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.05)';
  ctx.lineWidth = 0.5;
  for (let x = 0; x < w; x += 20) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 20) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  const tx = w * 0.72 + Math.sin(t * 1.2) * 6;
  const ty = h * 0.45 + Math.cos(t * 1.5) * 12;
  const tr = h * 0.16 + Math.sin(t * 2) * 3;

  const wx = w * 0.22 + Math.sin(t * 1.1) * 8;
  const wy = h * 0.65 + Math.cos(t * 0.9) * 6;

  const palmBaseX = wx + w * 0.06;
  const palmBaseY = wy - h * 0.08;

  const thumbBaseX = wx + w * 0.02;
  const thumbBaseY = wy - h * 0.05;
  const thumbMidX = thumbBaseX + w * 0.03;
  const thumbMidY = thumbBaseY - h * 0.03;
  const thumbTipX = thumbMidX + w * 0.02;
  const thumbTipY = thumbMidY + h * 0.01;

  const indexBaseX = palmBaseX + w * 0.02;
  const indexBaseY = palmBaseY - h * 0.06;
  const indexMidX = indexBaseX + w * 0.07;
  const indexMidY = indexBaseY - h * 0.08;
  const indexTipX = indexMidX + w * 0.08 + Math.sin(t * 5) * 2;
  const indexTipY = indexMidY - h * 0.08 + Math.cos(t * 5) * 2;

  const middleBaseX = palmBaseX + w * 0.005;
  const middleBaseY = palmBaseY - h * 0.065;
  const middleMidX = middleBaseX + w * 0.03;
  const middleMidY = middleBaseY - h * 0.02;
  const middleTipX = middleMidX + w * 0.02;
  const middleTipY = middleMidY + h * 0.02;

  const ringBaseX = palmBaseX - w * 0.01;
  const ringBaseY = palmBaseY - h * 0.06;
  const ringMidX = ringBaseX + w * 0.025;
  const ringMidY = ringBaseY - h * 0.01;
  const ringTipX = ringMidX + w * 0.015;
  const ringTipY = ringMidY + h * 0.03;

  const pinkyBaseX = palmBaseX - w * 0.022;
  const pinkyBaseY = palmBaseY - h * 0.05;
  const pinkyMidX = pinkyBaseX + w * 0.02;
  const pinkyMidY = pinkyBaseY - h * 0.005;
  const pinkyTipX = pinkyMidX + w * 0.01;
  const pinkyTipY = pinkyMidY + h * 0.035;

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.4)';
  ctx.lineWidth = 1.8;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();
  ctx.moveTo(wx, wy);
  ctx.lineTo(thumbBaseX, thumbBaseY);
  ctx.moveTo(wx, wy);
  ctx.lineTo(palmBaseX - w * 0.025, palmBaseY);
  ctx.lineTo(palmBaseX + w * 0.02, palmBaseY);
  ctx.lineTo(wx, wy);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(thumbBaseX, thumbBaseY);
  ctx.lineTo(thumbMidX, thumbMidY);
  ctx.lineTo(thumbTipX, thumbTipY);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.75)';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(indexBaseX, indexBaseY);
  ctx.lineTo(indexMidX, indexMidY);
  ctx.lineTo(indexTipX, indexTipY);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.3)';
  ctx.lineWidth = 1.5;
  [[middleBaseX, middleBaseY, middleMidX, middleMidY, middleTipX, middleTipY],
   [ringBaseX, ringBaseY, ringMidX, ringMidY, ringTipX, ringTipY],
   [pinkyBaseX, pinkyBaseY, pinkyMidX, pinkyMidY, pinkyTipX, pinkyTipY]].forEach(([bx, by, mx, my, tx, ty]) => {
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(mx, my);
    ctx.lineTo(tx, ty);
    ctx.stroke();
  });

  const joints = [
    [wx, wy], [thumbBaseX, thumbBaseY], [thumbMidX, thumbMidY], [thumbTipX, thumbTipY],
    [indexBaseX, indexBaseY], [indexMidX, indexMidY], [indexTipX, indexTipY],
    [middleBaseX, middleBaseY], [middleMidX, middleMidY], [middleTipX, middleTipY],
    [ringBaseX, ringBaseY], [ringMidX, ringMidY], [ringTipX, ringTipY],
    [pinkyBaseX, pinkyBaseY], [pinkyMidX, pinkyMidY], [pinkyTipX, pinkyTipY]
  ];
  joints.forEach(([jx, jy], idx) => {
    ctx.beginPath();
    ctx.arc(jx, jy, idx === 6 ? 4 : 2.5, 0, Math.PI * 2);
    ctx.fillStyle = idx === 6 ? '#ffffff' : '#97FEED';
    ctx.shadowColor = '#97FEED';
    ctx.shadowBlur = idx === 6 ? 10 : 0;
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.4)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(tx, ty, tr, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(tx, ty, tr * (0.4 + Math.abs(Math.sin(t * 2.5)) * 0.25), 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(151, 254, 237, 0.08)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(151, 254, 237, 0.25)';
  ctx.stroke();

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.2)';
  ctx.beginPath();
  ctx.moveTo(tx - tr * 1.3, ty); ctx.lineTo(tx - tr * 0.7, ty);
  ctx.moveTo(tx + tr * 0.7, ty); ctx.lineTo(tx + tr * 1.3, ty);
  ctx.moveTo(tx, ty - tr * 1.3); ctx.lineTo(tx, ty - tr * 0.7);
  ctx.moveTo(tx, ty + tr * 0.7); ctx.lineTo(tx, ty + tr * 1.3);
  ctx.stroke();

  const dx = tx - indexTipX;
  const dy = ty - indexTipY;

  const waveColors = ['rgba(151, 254, 237, 0.85)', 'rgba(53, 162, 159, 0.6)', 'rgba(224, 64, 251, 0.45)'];
  const waveWidths = [1.8, 3.2, 0.8];
  const waveFreqs = [4.5, 3.0, 6.0];
  const waveAmps = [15, 22, 10];

  waveColors.forEach((color, idx) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = waveWidths[idx];
    ctx.beginPath();
    ctx.moveTo(indexTipX, indexTipY);

    const steps = 60;
    for (let i = 0; i <= steps; i++) {
      const p = i / steps;
      const cx = indexTipX + dx * p;
      const cy = indexTipY + dy * p;

      const angle = Math.atan2(dy, dx);
      const px = -Math.sin(angle);
      const py = Math.cos(angle);

      const env = Math.sin(p * Math.PI);
      const waveVal = Math.sin(p * Math.PI * waveFreqs[idx] - t * 12 + idx * 2) * waveAmps[idx] * env;

      ctx.lineTo(cx + px * waveVal, cy + py * waveVal);
    }
    ctx.stroke();
  });

  ctx.fillStyle = 'rgba(151, 254, 237, 0.8)';
  for (let i = 0; i < 4; i++) {
    const angle = t * 3 + i * (Math.PI / 2);
    const px = tx + Math.cos(angle) * (tr + Math.sin(t * 10 + i) * 6);
    const py = ty + Math.sin(angle) * (tr + Math.sin(t * 10 + i) * 6);
    ctx.beginPath();
    ctx.arc(px, py, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawWonderwaveM(ctx, w, h, t) {
  ctx.fillStyle = '#03080a';
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.04)';
  ctx.lineWidth = 0.5;
  for (let x = 0; x < w; x += 25) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 25) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  const tx = w * 0.74 + Math.sin(t * 1.0) * 4;
  const ty = h * 0.48 + Math.cos(t * 1.2) * 8;
  const tr = h * 0.15 + Math.sin(t * 1.8) * 2;

  const wx = w * 0.2 + Math.sin(t * 0.9) * 5;
  const wy = h * 0.68 + Math.cos(t * 0.7) * 4;

  const palmBaseX = wx + w * 0.08;
  const palmBaseY = wy - h * 0.1;

  const indexBaseX = palmBaseX + w * 0.02;
  const indexBaseY = palmBaseY - h * 0.07;
  const indexMidX = indexBaseX + w * 0.08;
  const indexMidY = indexBaseY - h * 0.09;
  const indexTipX = indexMidX + w * 0.09 + Math.sin(t * 6) * 1.5;
  const indexTipY = indexMidY - h * 0.09 + Math.cos(t * 6) * 1.5;

  const thumbTipX = wx + w * 0.06;
  const thumbTipY = wy - h * 0.04;
  const middleTipX = palmBaseX + w * 0.05;
  const middleTipY = palmBaseY - h * 0.03;
  const ringTipX = palmBaseX + w * 0.03;
  const ringTipY = palmBaseY + h * 0.01;
  const pinkyTipX = palmBaseX - w * 0.01;
  const pinkyTipY = palmBaseY + h * 0.04;

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.35)';
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();
  ctx.moveTo(wx, wy);
  ctx.lineTo(thumbTipX, thumbTipY);
  ctx.moveTo(wx, wy);
  ctx.lineTo(palmBaseX, palmBaseY);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.7)';
  ctx.lineWidth = 2.8;
  ctx.beginPath();
  ctx.moveTo(indexBaseX, indexBaseY);
  ctx.lineTo(indexMidX, indexMidY);
  ctx.lineTo(indexTipX, indexTipY);
  ctx.stroke();

  const joints = [
    [wx, wy], [thumbTipX, thumbTipY],
    [indexBaseX, indexBaseY], [indexMidX, indexMidY], [indexTipX, indexTipY],
    [middleTipX, middleTipY], [ringTipX, ringTipY], [pinkyTipX, pinkyTipY]
  ];
  joints.forEach(([jx, jy], idx) => {
    ctx.beginPath();
    ctx.arc(jx, jy, idx === 4 ? 4.5 : 3, 0, Math.PI * 2);
    ctx.fillStyle = idx === 4 ? '#ffffff' : '#97FEED';
    ctx.fill();
  });

  ctx.strokeStyle = 'rgba(151, 254, 237, 0.35)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(tx, ty, tr, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(tx, ty, tr * 0.6, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(151, 254, 237, 0.2)';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(tx, ty, tr * (0.35 + Math.abs(Math.sin(t * 3)) * 0.15), 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(151, 254, 237, 0.12)';
  ctx.fill();

  const dx = tx - indexTipX;
  const dy = ty - indexTipY;

  [['rgba(151, 254, 237, 0.8)', 2.0, 3.5, 12],
   ['rgba(224, 64, 251, 0.45)', 1.2, 5.0, 8]].forEach(([color, lw, freq, amp]) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(indexTipX, indexTipY);

    const steps = 40;
    for (let i = 0; i <= steps; i++) {
      const p = i / steps;
      const cx = indexTipX + dx * p;
      const cy = indexTipY + dy * p;

      const angle = Math.atan2(dy, dx);
      const px = -Math.sin(angle);
      const py = Math.cos(angle);

      const env = Math.sin(p * Math.PI);
      const waveVal = Math.sin(p * Math.PI * freq - t * 10) * amp * env;

      ctx.lineTo(cx + px * waveVal, cy + py * waveVal);
    }
    ctx.stroke();
  });
}

/* ============================================================
   ECHO — voice-controlled robot, told as a two-actor scene:
   a person on the left speaks (mouth opens, sound waves roll
   out toward the robot) and the robot on the right answers a
   beat later (antenna flares, eyes brighten, mouth waveform
   ripples). One shared core scaled to the scene keeps the
   thumbnail and modal consistent; the modal just compresses
   the scene to the left to make room for its HUD.
   ============================================================ */
function drawEchoCore(ctx, w, h, t, opts) {
  const { bg, accentA, accentB, eyeColor, showHUD } = opts;

  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

  // Scene lives in the left portion when the HUD is shown, full width otherwise.
  const sceneW = showHUD ? w * 0.52 : w;
  const S = Math.min(sceneW, h);          // unifying scale for both actors

  // calm background grid, barely-there
  ctx.strokeStyle = `${accentA}0F`; ctx.lineWidth = 0.5;
  const gridStep = Math.min(w, h) * 0.09;
  for (let x = 0; x < w; x += gridStep) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y < h; y += gridStep) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }

  const midY = h * 0.5;
  const humanX = sceneW * 0.2;
  const robotX = sceneW * 0.74;
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';

  // Speech envelope for the person, and a slightly delayed echo for the robot,
  // so it reads as call-and-response: the human talks, the robot answers.
  const speakFreq = 2.6;
  const speech = Math.pow(0.5 + 0.5 * Math.sin(t * speakFreq), 1.5);
  const react = Math.pow(0.5 + 0.5 * Math.sin(t * speakFreq - 1.2), 1.5);

  // ── HUMAN — head in profile facing the robot, mouth opens to speak ──
  const hr = S * 0.16;

  const hGlow = ctx.createRadialGradient(humanX, midY, 0, humanX, midY, hr * 2.2);
  hGlow.addColorStop(0, `${accentA}12`); hGlow.addColorStop(1, `${accentA}00`);
  ctx.fillStyle = hGlow;
  ctx.beginPath(); ctx.arc(humanX, midY, hr * 2.2, 0, Math.PI * 2); ctx.fill();

  // shoulders / bust silhouette so it clearly reads as a person
  ctx.strokeStyle = `${accentA}55`; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(humanX - hr * 1.5, midY + hr * 2.1);
  ctx.quadraticCurveTo(humanX - hr * 1.25, midY + hr * 1.02, humanX, midY + hr);
  ctx.quadraticCurveTo(humanX + hr * 1.3, midY + hr * 1.02, humanX + hr * 1.6, midY + hr * 2.1);
  ctx.stroke();

  // head
  ctx.strokeStyle = `${accentA}90`; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(humanX, midY, hr, 0, Math.PI * 2); ctx.stroke();

  // nose bump on the right edge → the face points at the robot
  ctx.beginPath();
  ctx.moveTo(humanX + hr * 0.9, midY - hr * 0.05);
  ctx.lineTo(humanX + hr * 1.16, midY + hr * 0.1);
  ctx.lineTo(humanX + hr * 0.86, midY + hr * 0.2);
  ctx.stroke();

  // eye
  ctx.fillStyle = `${accentA}D0`;
  ctx.beginPath(); ctx.arc(humanX + hr * 0.28, midY - hr * 0.28, hr * 0.1, 0, Math.PI * 2); ctx.fill();

  // speaking mouth — open ellipse that grows with the speech envelope
  const hMouthX = humanX + hr * 0.46;
  const hMouthY = midY + hr * 0.5;
  ctx.fillStyle = accentB;
  ctx.beginPath();
  ctx.ellipse(hMouthX, hMouthY, hr * 0.2, hr * (0.05 + speech * 0.26), 0, 0, Math.PI * 2);
  ctx.fill();

  // ── SOUND WAVES — concentric fronts rolling from mouth toward the robot ──
  const swX = humanX + hr * 1.05;
  const swY = hMouthY;
  const reach = Math.max(S * 0.2, (robotX - swX) - S * 0.34);
  const waveCount = 4;
  for (let i = 0; i < waveCount; i++) {
    const phase = ((t * 0.85) + i / waveCount) % 1;
    const r = hr * 0.35 + phase * reach;
    ctx.globalAlpha = (1 - phase) * 0.6 * (0.4 + speech * 0.6);
    ctx.strokeStyle = accentB;
    ctx.lineWidth = 1.8 * (1 - phase) + 0.4;
    ctx.beginPath(); ctx.arc(swX, swY, r, -0.62, 0.62); ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // ── ROBOT — shorter head that lights up when it answers the voice ──
  const robotW = S * 0.44;
  const robotH = S * 0.38;                 // shorter & wider than the old tall head
  const bob = Math.sin(t * 0.9) * robotH * 0.02 - react * robotH * 0.05;  // small nod on reply
  const headCY = midY + bob;
  const rhx = robotX - robotW / 2;
  const rhy = headCY - robotH / 2;

  // presence glow, brighter when responding
  ctx.globalAlpha = 0.1 + react * 0.16;
  const rGlow = ctx.createRadialGradient(robotX, headCY, 0, robotX, headCY, robotW * 0.75);
  rGlow.addColorStop(0, accentA); rGlow.addColorStop(1, `${accentA}00`);
  ctx.fillStyle = rGlow;
  ctx.beginPath(); ctx.arc(robotX, headCY, robotW * 0.75, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;

  // acknowledgement ring — soft pulse as the reply peaks
  if (react > 0.12) {
    ctx.globalAlpha = react * 0.22;
    ctx.strokeStyle = accentB; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(robotX, headCY, robotW * (0.72 + react * 0.3), robotH * (0.82 + react * 0.3), 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  // head
  ctx.strokeStyle = `${accentA}85`; ctx.lineWidth = 2;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(rhx, rhy, robotW, robotH, robotW * 0.18);
  else ctx.rect(rhx, rhy, robotW, robotH);
  ctx.stroke();

  // antenna — flares with the reply
  const antTopY = rhy - robotH * 0.24;
  ctx.strokeStyle = `${accentA}60`; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(robotX, rhy); ctx.lineTo(robotX, antTopY); ctx.stroke();
  ctx.globalAlpha = 0.3 + react * 0.5;
  ctx.fillStyle = accentB;
  ctx.beginPath(); ctx.arc(robotX, antTopY, robotW * 0.07 * (1 + react * 0.7), 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;
  ctx.beginPath(); ctx.arc(robotX, antTopY, robotW * 0.03, 0, Math.PI * 2); ctx.fill();

  // eyes — breathe + occasional blink, brighten on reply
  const blinkCycle = t % 4.2;
  let blinkFactor = 1;
  if (blinkCycle > 3.9) { const p = (blinkCycle - 3.9) / 0.3; blinkFactor = Math.abs(Math.cos(p * Math.PI)); }
  const breathe = 0.7 + Math.sin(t * 1.1) * 0.3;
  const eyeH = Math.max(1.5, robotH * 0.07 * breathe * blinkFactor);
  const eyeW = robotW * 0.17;
  const eyeY = headCY - robotH * 0.05;
  ctx.globalAlpha = 0.55 + react * 0.45;
  ctx.fillStyle = eyeColor;
  [-1, 1].forEach(side => {
    const ex = robotX + side * robotW * 0.22 - eyeW / 2;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(ex, eyeY - eyeH / 2, eyeW, eyeH, eyeH / 2);
    else ctx.rect(ex, eyeY - eyeH / 2, eyeW, eyeH);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  // mouth — waveform ripples as the robot responds
  const rMouthW = robotW * 0.46;
  const rMouthAmp = robotH * 0.05 * (0.22 + react * 0.95);
  ctx.strokeStyle = `${accentB}C0`; ctx.lineWidth = 1.8;
  ctx.beginPath();
  const steps = 16;
  for (let i = 0; i <= steps; i++) {
    const p = i / steps;
    const px = robotX - rMouthW / 2 + p * rMouthW;
    const py = headCY + robotH * 0.22 + Math.sin(p * Math.PI * 3 - t * 6) * rMouthAmp;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.stroke();
}

function drawEcho(ctx, w, h, t) {
  drawEchoCore(ctx, w, h, t, {
    bg: '#08070d',
    accentA: '#8B7CF6',
    accentB: '#C792EA',
    eyeColor: '#7DE0E8',
    showHUD: false
  });

  ctx.font = `600 ${Math.max(10, h * 0.085)}px system-ui, sans-serif`;
  ctx.fillStyle = 'rgba(139, 124, 246, 0.5)';
  ctx.fillText('echo', 12, h - 12);

  ctx.font = `500 ${Math.max(8, h * 0.05)}px 'JetBrains Mono', 'DM Mono', monospace`;
  ctx.fillStyle = 'rgba(199, 146, 234, 0.65)';
  ctx.fillText('listening', w - 78, 20);
}

function drawEchoModal(ctx, w, h, t) {
  drawEchoCore(ctx, w, h, t, {
    bg: '#06050a',
    accentA: '#8B7CF6',
    accentB: '#C792EA',
    eyeColor: '#7DE0E8',
    showHUD: true
  });

  // divider
  ctx.strokeStyle = 'rgba(139,124,246,0.15)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(w * 0.52, 0); ctx.lineTo(w * 0.52, h * 0.8); ctx.stroke();

  ctx.font = `600 ${h * 0.055}px 'JetBrains Mono', 'DM Mono', monospace`;
  ctx.fillStyle = 'rgba(125,224,232,0.85)';
  ctx.fillText('ECHO // COMMAND QUEUE', w * 0.56, h * 0.12);

  const commands = [
    { text: 'walk forward 3 steps', status: 'done' },
    { text: 'turn left 45°', status: 'active' },
    { text: 'dance loop', status: 'queued' },
    { text: 'voice feedback sync', status: 'standby' },
  ];
  const statusStyle = {
    done: { label: 'DONE', color: 'rgba(255,255,255,0.25)' },
    active: { label: 'RUNNING', color: '#7DE0E8' },
    queued: { label: 'QUEUED', color: 'rgba(255,255,255,0.5)' },
    standby: { label: 'STANDBY', color: '#C792EA' },
  };
  const activePulse = 0.55 + Math.sin(t * 2.4) * 0.45;

  commands.forEach((cmd, idx) => {
    const y = h * 0.25 + idx * (h * 0.12);
    ctx.font = `400 ${h * 0.045}px 'JetBrains Mono', 'DM Mono', monospace`;
    ctx.fillStyle = cmd.status === 'active' ? '#EAEAFB' : 'rgba(234,234,251,0.55)';
    ctx.fillText(`› ${cmd.text}`, w * 0.56, y);

    const st = statusStyle[cmd.status];
    ctx.font = `600 ${h * 0.035}px 'JetBrains Mono', 'DM Mono', monospace`;
    ctx.globalAlpha = cmd.status === 'active' ? activePulse : 1;
    ctx.fillStyle = st.color;
    ctx.fillText(`[${st.label}]`, w * 0.86, y);
    ctx.globalAlpha = 1;
  });

  // footer
  ctx.fillStyle = 'rgba(10,8,20,0.9)';
  ctx.fillRect(0, h * 0.8, w, h * 0.2);
  ctx.strokeStyle = 'rgba(139,124,246,0.22)'; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(0, h * 0.8); ctx.lineTo(w, h * 0.8); ctx.stroke();

  ctx.font = `600 ${h * 0.05}px 'JetBrains Mono', 'DM Mono', monospace`;
  ctx.fillStyle = 'rgba(139,124,246,0.65)';
  ctx.fillText('voice-driven 3d robot sandbox', 24, h * 0.9);
}

/* ============================================================
   MILKYWAY.AI — constellation/gravity-map motif standing in
   for the project's central hub feature: a physics-driven node
   map clustered by model capability (chat / code / reasoning /
   vision / embedding), with a soft telemetry HUD in the modal
   view echoing the real Chat Arena's TTFT/TPS readout.
   ============================================================ */
function drawIC(ctx, w, h, t) {
  ctx.fillStyle = '#070b14'; ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(116,160,255,0.06)'; ctx.lineWidth = 0.5;
  for (let x = 0; x < w; x += 20) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
  for (let y = 0; y < h; y += 20) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }

  const cx = w / 2, cy = h / 2;

  const clusters = [
    { a: 0, r: 0.30, col: '#7AA0FF', n: 3 },
    { a: Math.PI * 0.4, r: 0.34, col: '#5BD8C4', n: 3 },
    { a: Math.PI * 0.85, r: 0.28, col: '#C792EA', n: 2 },
    { a: Math.PI * 1.35, r: 0.33, col: '#F2A65A', n: 2 },
    { a: Math.PI * 1.75, r: 0.29, col: '#7AA0FF', n: 3 },
  ];

  const nodePositions = [];

  clusters.forEach((cl, ci) => {
    const drift = Math.sin(t * 0.3 + ci * 1.7) * 0.025;
    const baseA = cl.a + t * 0.06;
    const bx = cx + Math.cos(baseA) * w * cl.r;
    const by = cy + Math.sin(baseA) * h * cl.r * 0.62;

    ctx.strokeStyle = `rgba(122,160,255,${0.10 + Math.sin(t * 0.6 + ci) * 0.03})`;
    ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(bx, by); ctx.stroke();

    for (let n = 0; n < cl.n; n++) {
      const na = baseA + (n - (cl.n - 1) / 2) * 0.5 + drift;
      const nr = w * cl.r + n * 10;
      const nx = cx + Math.cos(na) * nr;
      const ny = cy + Math.sin(na) * nr * 0.62;
      nodePositions.push([nx, ny, cl.col]);

      const pulse = 2.2 + Math.sin(t * 1.8 + ci * 2 + n) * 0.9;
      ctx.beginPath(); ctx.arc(nx, ny, pulse, 0, Math.PI * 2);
      ctx.fillStyle = cl.col; ctx.globalAlpha = 0.85; ctx.fill(); ctx.globalAlpha = 1;
    }
  });

  ctx.strokeStyle = 'rgba(122,160,255,0.07)'; ctx.lineWidth = 0.6;
  for (let i = 0; i < nodePositions.length; i++) {
    const [x1, y1] = nodePositions[i];
    const [x2, y2] = nodePositions[(i + 1) % nodePositions.length];
    const d = Math.hypot(x2 - x1, y2 - y1);
    if (d < w * 0.4) { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); }
  }

  const hubPulse = 4 + Math.sin(t * 2.2) * 1.2;
  ctx.beginPath(); ctx.arc(cx, cy, hubPulse + 5, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 1; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, hubPulse, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff'; ctx.fill();

  ctx.font = `${h * 0.085}px 'DM Mono',monospace`;
  ctx.fillStyle = 'rgba(122,160,255,0.55)';
  ctx.fillText('NIM://galaxy', 7, h - 9);
}

function drawICM(ctx, w, h, t) {
  ctx.fillStyle = '#05080f'; ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = 'rgba(116,160,255,0.05)'; ctx.lineWidth = 0.5;
  for (let x = 0; x < w; x += 26) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }
  for (let y = 0; y < h; y += 26) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }

  const cx = w * 0.42, cy = h / 2;

  const clusters = [
    { a: 0, r: 0.30, col: '#7AA0FF', n: 4, label: 'CHAT' },
    { a: Math.PI * 0.4, r: 0.36, col: '#5BD8C4', n: 3, label: 'CODE' },
    { a: Math.PI * 0.85, r: 0.27, col: '#C792EA', n: 3, label: 'REASON' },
    { a: Math.PI * 1.35, r: 0.34, col: '#F2A65A', n: 3, label: 'VISION' },
    { a: Math.PI * 1.75, r: 0.30, col: '#7AA0FF', n: 3, label: 'EMBED' },
  ];

  const nodePositions = [];

  clusters.forEach((cl, ci) => {
    const drift = Math.sin(t * 0.25 + ci * 1.7) * 0.02;
    const baseA = cl.a + t * 0.045;
    const bx = cx + Math.cos(baseA) * w * cl.r;
    const by = cy + Math.sin(baseA) * h * cl.r * 0.7;

    ctx.strokeStyle = `rgba(122,160,255,${0.12 + Math.sin(t * 0.5 + ci) * 0.03})`;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(bx, by); ctx.stroke();

    for (let n = 0; n < cl.n; n++) {
      const na = baseA + (n - (cl.n - 1) / 2) * 0.45 + drift;
      const nr = w * cl.r + n * 12;
      const nx = cx + Math.cos(na) * nr;
      const ny = cy + Math.sin(na) * nr * 0.7;
      nodePositions.push([nx, ny, cl.col]);

      const pulse = 3 + Math.sin(t * 1.6 + ci * 2 + n) * 1.1;
      ctx.beginPath(); ctx.arc(nx, ny, pulse + 3, 0, Math.PI * 2);
      ctx.fillStyle = cl.col; ctx.globalAlpha = 0.12; ctx.fill(); ctx.globalAlpha = 1;
      ctx.beginPath(); ctx.arc(nx, ny, pulse, 0, Math.PI * 2);
      ctx.fillStyle = cl.col; ctx.globalAlpha = 0.9; ctx.fill(); ctx.globalAlpha = 1;
    }

    ctx.font = `600 ${h * 0.04}px 'DM Mono',monospace`;
    ctx.fillStyle = cl.col;
    ctx.globalAlpha = 0.6;
    const lx = cx + Math.cos(baseA) * (w * cl.r + 26);
    const ly = cy + Math.sin(baseA) * (h * cl.r * 0.7 + 14);
    ctx.fillText(cl.label, lx, ly);
    ctx.globalAlpha = 1;
  });

  ctx.strokeStyle = 'rgba(122,160,255,0.08)'; ctx.lineWidth = 0.7;
  for (let i = 0; i < nodePositions.length; i++) {
    const [x1, y1] = nodePositions[i];
    const [x2, y2] = nodePositions[(i + 3) % nodePositions.length];
    const d = Math.hypot(x2 - x1, y2 - y1);
    if (d < w * 0.35) { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); }
  }

  const hubPulse = 5 + Math.sin(t * 2) * 1.4;
  ctx.beginPath(); ctx.arc(cx, cy, hubPulse + 7, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 1; ctx.stroke();
  ctx.beginPath(); ctx.arc(cx, cy, hubPulse, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff'; ctx.fill();

  // right-hand telemetry readout — echoes the real Chat Arena HUD
  ctx.fillStyle = 'rgba(6,10,18,0.85)';
  ctx.fillRect(w * 0.78, 0, w * 0.22, h);
  ctx.strokeStyle = 'rgba(122,160,255,0.2)'; ctx.lineWidth = 0.5;
  ctx.beginPath(); ctx.moveTo(w * 0.78, 0); ctx.lineTo(w * 0.78, h); ctx.stroke();

  ctx.font = `${h * 0.045}px 'DM Mono',monospace`;
  const ttft = (38 + Math.sin(t * 1.3) * 6).toFixed(0);
  const tps = (61 + Math.cos(t * 1.1) * 8).toFixed(0);
  [
    ['TTFT', `${ttft}ms`],
    ['TPS', `${tps}/s`],
    ['NODES', `${nodePositions.length}`],
  ].forEach(([label, val], i) => {
    ctx.fillStyle = 'rgba(122,160,255,0.55)';
    ctx.fillText(label, w * 0.81, h * 0.18 + i * (h * 0.1));
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.fillText(val, w * 0.81, h * 0.18 + i * (h * 0.1) + h * 0.045);
  });

  ctx.font = `${h * 0.05}px 'DM Mono',monospace`;
  ctx.fillStyle = 'rgba(122,160,255,0.6)';
  ctx.fillText('milkyway.ai', 12, h - 12);
}

/* ============================================================
   COLD WAKE — zero-asset WebGL2 survival game
   Thumbnail: dark arctic underwater view — animated caustic
   ceiling-light, drifting ice shards, sonar ping from the
   player, depth gauge strip on the right.
   Modal: wider frame with physics / audio HUD panel on the
   right showing buoyancy, drag, depth, and a live waveform
   strip at the bottom. Same core scene on the left.
   ============================================================ */
function drawColdWakeCore(ctx, w, h, t, sceneW) {
  // deep frigid water — near-black with a teal undercurrent
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#010e14');
  bg.addColorStop(1, '#02161e');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

  // ── ICE CEILING — distorted caustic band across the top ──
  const ceilH = h * 0.18;
  const iceGrad = ctx.createLinearGradient(0, 0, 0, ceilH);
  iceGrad.addColorStop(0, 'rgba(200,240,255,0.55)');
  iceGrad.addColorStop(1, 'rgba(160,220,240,0.08)');
  ctx.fillStyle = iceGrad;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const pts = 60;
  for (let i = 0; i <= pts; i++) {
    const px = (i / pts) * sceneW;
    const py = ceilH * 0.7 + Math.sin(i * 0.38 + t * 0.7) * ceilH * 0.18
                            + Math.cos(i * 0.75 + t * 0.45) * ceilH * 0.08;
    ctx.lineTo(px, py);
  }
  ctx.lineTo(sceneW, 0); ctx.closePath(); ctx.fill();

  // caustic shimmer — bright dancing rings on the ceiling underside
  ctx.strokeStyle = 'rgba(140,220,255,0.35)'; ctx.lineWidth = 0.8;
  for (let ci = 0; ci < 8; ci++) {
    const cx2 = sceneW * (0.08 + ci * 0.12) + Math.sin(t * 0.6 + ci) * sceneW * 0.04;
    const cy2 = ceilH * (0.5 + Math.cos(t * 0.9 + ci * 0.7) * 0.25);
    const cr = 10 + Math.abs(Math.sin(t * 1.1 + ci)) * 18;
    ctx.globalAlpha = 0.3 + Math.sin(t * 2 + ci) * 0.2;
    ctx.beginPath(); ctx.arc(cx2, cy2, cr, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // ── ICE CRACK LINES ──
  ctx.strokeStyle = 'rgba(190,235,255,0.22)'; ctx.lineWidth = 0.7;
  [[0.18, 0.02, 0.32, 0.15], [0.45, 0.0, 0.55, 0.18], [0.7, 0.03, 0.62, 0.14]].forEach(([x1r, y1r, x2r, y2r]) => {
    ctx.beginPath();
    ctx.moveTo(sceneW * x1r, h * y1r);
    ctx.lineTo(sceneW * x2r, h * y2r);
    ctx.stroke();
  });

  // ── DRIFTING ICE SHARDS ──
  const shards = [
    { bx: 0.12, by: 0.32, dx: 0.04, dy: 0.05, size: 0.035, speed: 0.18 },
    { bx: 0.38, by: 0.48, dx: -0.03, dy: 0.04, size: 0.025, speed: 0.23 },
    { bx: 0.62, by: 0.38, dx: 0.05, dy: -0.03, size: 0.03, speed: 0.15 },
    { bx: 0.78, by: 0.55, dx: -0.04, dy: 0.06, size: 0.022, speed: 0.27 },
    { bx: 0.25, by: 0.65, dx: 0.03, dy: -0.04, size: 0.018, speed: 0.31 },
  ];
  shards.forEach((s, si) => {
    const sx = (s.bx + Math.sin(t * s.speed + si * 1.4) * s.dx) * sceneW;
    const sy = (s.by + Math.cos(t * s.speed * 0.8 + si * 2.1) * s.dy) * h;
    const sr = s.size * Math.min(sceneW, h);
    const rot = t * s.speed * 0.6 + si;
    ctx.save(); ctx.translate(sx, sy); ctx.rotate(rot);
    ctx.beginPath();
    const verts = 5 + (si % 2);
    for (let v = 0; v < verts; v++) {
      const a = (v / verts) * Math.PI * 2;
      const r2 = sr * (v % 2 === 0 ? 1 : 0.55);
      v === 0 ? ctx.moveTo(Math.cos(a) * r2, Math.sin(a) * r2) : ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
    }
    ctx.closePath();
    ctx.fillStyle = `rgba(180,230,250,${0.10 + si * 0.02})`; ctx.fill();
    ctx.strokeStyle = `rgba(200,245,255,${0.35 + si * 0.05})`; ctx.lineWidth = 0.8; ctx.stroke();
    ctx.restore();
  });

  // ── PLAYER — glowing dot with sonar ping ──
  const playerX = sceneW * 0.5 + Math.sin(t * 0.55) * sceneW * 0.06;
  const playerY = h * 0.7 + Math.cos(t * 0.45) * h * 0.05;

  // expanding sonar ring
  const sonarPhase = (t * 0.55) % (Math.PI * 2);
  const sonarR = (sonarPhase / (Math.PI * 2)) * h * 0.28;
  const sonarA = 1 - sonarPhase / (Math.PI * 2);
  ctx.beginPath(); ctx.arc(playerX, playerY, sonarR, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(80,210,240,${sonarA * 0.5})`; ctx.lineWidth = 1.2; ctx.stroke();

  // player glow
  const pGlow = ctx.createRadialGradient(playerX, playerY, 0, playerX, playerY, 16);
  pGlow.addColorStop(0, 'rgba(100,220,255,0.45)'); pGlow.addColorStop(1, 'rgba(0,160,200,0)');
  ctx.fillStyle = pGlow; ctx.beginPath(); ctx.arc(playerX, playerY, 16, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.arc(playerX, playerY, 4, 0, Math.PI * 2); ctx.fillStyle = '#8EEEFF'; ctx.fill();

  // bubbles rising from player
  for (let b = 0; b < 4; b++) {
    const bPhase = ((t * 0.6 + b * 0.7) % 1);
    const bx2 = playerX + Math.sin(b * 2.3 + t) * 8;
    const by2 = playerY - bPhase * h * 0.55;
    if (by2 > ceilH) {
      ctx.beginPath(); ctx.arc(bx2, by2, 2.5 - bPhase * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(140,220,255,${(1 - bPhase) * 0.6})`; ctx.lineWidth = 0.8; ctx.stroke();
    }
  }

  // ── DEPTH GAUGE on right edge of scene ──
  const gx = sceneW - 12;
  const gy1 = ceilH;
  const gy2 = h - 8;
  ctx.strokeStyle = 'rgba(80,200,230,0.2)'; ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.moveTo(gx, gy1); ctx.lineTo(gx, gy2); ctx.stroke();
  const depthPct = 0.35 + 0.15 * Math.abs(Math.sin(t * 0.5));
  const gMarker = gy1 + (gy2 - gy1) * depthPct;
  ctx.fillStyle = 'rgba(80,210,240,0.75)';
  ctx.beginPath(); ctx.moveTo(gx - 5, gMarker); ctx.lineTo(gx + 2, gMarker - 3); ctx.lineTo(gx + 2, gMarker + 3); ctx.closePath(); ctx.fill();
  ctx.font = `${Math.max(7, h * 0.055)}px 'DM Mono',monospace`;
  ctx.fillStyle = 'rgba(80,200,230,0.6)';
  ctx.fillText(`${(4.2 + depthPct * 8).toFixed(1)}m`, gx - 34, gMarker - 5);
}

function drawColdWake(ctx, w, h, t) {
  drawColdWakeCore(ctx, w, h, t, w);
  ctx.font = `600 ${Math.max(10, h * 0.085)}px system-ui, sans-serif`;
  ctx.fillStyle = 'rgba(80,200,240,0.55)';
  ctx.fillText('cold wake', 12, h - 12);
  ctx.font = `500 ${Math.max(8, h * 0.05)}px 'DM Mono',monospace`;
  ctx.fillStyle = 'rgba(140,220,255,0.55)';
  ctx.fillText('SURVIVE', w - 62, h * 0.28);
}

function drawColdWakeM(ctx, w, h, t) {
  const sceneW = w * 0.55;
  drawColdWakeCore(ctx, w, h, t, sceneW);

  // divider
  ctx.strokeStyle = 'rgba(80,200,230,0.18)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(sceneW, 0); ctx.lineTo(sceneW, h * 0.82); ctx.stroke();

  // HUD panel background
  ctx.fillStyle = 'rgba(0,12,18,0.88)';
  ctx.fillRect(sceneW, 0, w - sceneW, h);

  // HUD title
  ctx.font = `600 ${h * 0.055}px 'DM Mono',monospace`;
  ctx.fillStyle = 'rgba(100,220,255,0.85)';
  ctx.fillText('COLD WAKE // HUD', sceneW + 14, h * 0.10);

  // Physics readouts
  const buoyancy = (1.8 + Math.sin(t * 0.7) * 0.4).toFixed(2);
  const drag = (0.94 + Math.cos(t * 0.5) * 0.03).toFixed(2);
  const depth = (4.2 + 0.15 * Math.abs(Math.sin(t * 0.5)) * 8).toFixed(1);
  const oxygen = Math.max(0, 100 - ((t * 4.5) % 100)).toFixed(0);
  [['BUOYANCY', `${buoyancy} N`], ['DRAG COEF', `${drag}`], ['DEPTH', `${depth} m`], ['O\u2082', `${oxygen}%`]].forEach(([label, val], i) => {
    const ry = h * 0.22 + i * (h * 0.115);
    ctx.font = `400 ${h * 0.042}px 'DM Mono',monospace`;
    ctx.fillStyle = 'rgba(80,200,230,0.55)';
    ctx.fillText(label, sceneW + 14, ry);
    ctx.font = `600 ${h * 0.052}px 'DM Mono',monospace`;
    const isLow = label === 'O\u2082' && Number(oxygen) < 30;
    const pulse = isLow ? (0.5 + Math.abs(Math.sin(t * 4)) * 0.5) : 1;
    ctx.fillStyle = isLow ? `rgba(255,120,100,${pulse})` : 'rgba(200,245,255,0.85)';
    ctx.fillText(val, sceneW + 14, ry + h * 0.055);
  });

  // mini waveform representing procedural audio
  const waveY = h * 0.78;
  const waveX0 = sceneW + 12;
  const waveW2 = (w - sceneW) - 24;
  ctx.font = `400 ${h * 0.038}px 'DM Mono',monospace`;
  ctx.fillStyle = 'rgba(80,200,230,0.45)';
  ctx.fillText('AUDIO SYN', waveX0, waveY - 8);
  ctx.beginPath(); ctx.strokeStyle = 'rgba(80,210,250,0.7)'; ctx.lineWidth = 1.4;
  for (let i = 0; i <= 40; i++) {
    const p = i / 40;
    const ax = waveX0 + p * waveW2;
    const amp = h * 0.045 * (Math.sin(p * Math.PI * 6 - t * 8) * 0.6 + Math.sin(p * Math.PI * 2.5 - t * 3) * 0.4);
    i === 0 ? ctx.moveTo(ax, waveY + amp) : ctx.lineTo(ax, waveY + amp);
  }
  ctx.stroke();

  // footer
  ctx.fillStyle = 'rgba(0,10,16,0.92)';
  ctx.fillRect(0, h * 0.82, w, h * 0.18);
  ctx.strokeStyle = 'rgba(80,200,230,0.22)'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, h * 0.82); ctx.lineTo(w, h * 0.82); ctx.stroke();
  ctx.font = `600 ${h * 0.05}px 'DM Mono',monospace`;
  ctx.fillStyle = 'rgba(80,200,240,0.65)';
  ctx.fillText('zero-asset webgl2 survival engine', 16, h * 0.91);
}

// ProjectCard logic moved to ChromaGrid.js

const WorkShowcase = ({ active, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalCanvasRef = useRef(null);
  const modalRafRef = useRef(null);
  const closeBtnRef = useRef(null);
  const modalCloseRef = useRef(null);
  const lastCardRef = useRef(null);

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

  const openProject = (project) => {
    lastCardRef.current = document.activeElement;
    setSelectedProject(project);
  };
  const closeModal = () => setSelectedProject(null);

  // Land keyboard focus inside the overlay when it opens.
  useEffect(() => {
    if (active && closeBtnRef.current) closeBtnRef.current.focus();
  }, [active]);

  // Focus the dialog's close button on open; hand focus back to the card on close.
  useEffect(() => {
    if (selectedProject) {
      if (modalCloseRef.current) modalCloseRef.current.focus();
    } else if (lastCardRef.current) {
      lastCardRef.current.focus();
      lastCardRef.current = null;
    }
  }, [selectedProject]);

  // Escape closes the project dialog first, then the overlay.
  useEffect(() => {
    if (!active) return undefined;
    const handleKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      if (selectedProject) closeModal();
      else onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, selectedProject, onClose]);

  return (
    // inert (not just opacity) keeps the hidden overlay out of the tab order.
    // React 16 only forwards it as a string, hence '' rather than true.
    <div
      className={`experience-overlay ${active ? 'active' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="port-title"
      inert={active ? undefined : ''}
    >
      <button ref={closeBtnRef} className="exp-close-btn" onClick={onClose} aria-label="Close projects">× CLOSE</button>

      <div className="port-modal-wrap">
        <ElectricBorder
          color="#7df9ff"
          speed={1.5}
          chaos={1.2}
          thickness={2}
          borderRadius={24}
          active={active}
          className="port-container"
          style={{ borderRadius: 24, background: 'rgba(243, 246, 244, 0.2)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <div className="port" style={{ borderRadius: 24, background: 'transparent' }}>
            <div className="port-header">
              <span className="port-title" id="port-title">AI EXPERIMENTS & PROJECTS</span>
              <span className="port-count">{projects.length < 10 ? '0' + projects.length : projects.length} deployments</span>
            </div>
            <div className="port-grid-scroll">
              <ChromaGrid items={projects} onSelect={openProject} active={active} />
            </div>
          </div>
        </ElectricBorder>

        <div className={`work-modal-wrap ${selectedProject ? 'open' : ''}`} inert={selectedProject ? undefined : ''}>
          <div className="work-modal-backdrop" onClick={closeModal}></div>
          <ElectricBorder
            color="#7df9ff"
            speed={1.5}
            chaos={1.2}
            thickness={2}
            borderRadius={24}
            active={active && !!selectedProject}
            className="work-modal-eb"
            style={{ borderRadius: 24, background: 'rgba(243, 246, 244, 0.2)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          >
            <div className="work-modal" role="dialog" aria-modal="true" aria-labelledby="work-modal-name" style={{ borderRadius: 24, background: 'transparent' }}>
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
                        <div className="modal-name" id="work-modal-name">{selectedProject.name}</div>
                      </>
                    )}
                  </div>
                  <button ref={modalCloseRef} className="modal-x" onClick={closeModal} aria-label="Close project details">✕</button>
                </div>
                {selectedProject && (
                  <>
                    <p className="modal-desc">{selectedProject.desc}</p>
                    <div className="modal-foot">
                      <div className="modal-tech">
                        <span className="modal-tech-label">Built with</span>
                        <div className="modal-pills">
                          {selectedProject.pills.map((pill, i) => (
                            <span key={i} className="m-pill">{pill}</span>
                          ))}
                        </div>
                      </div>
                      <div className="modal-cta">
                        {selectedProject.note && (
                          <div className="note-icon">
                            i
                            <div className="note-tooltip">{selectedProject.note}</div>
                          </div>
                        )}
                        {selectedProject.sourceUrl && (
                          <a className="modal-link modal-link--ghost" href={selectedProject.sourceUrl} target="_blank" rel="noopener noreferrer">Source ↗</a>
                        )}
                        <a className="modal-link" href={selectedProject.url} target="_blank" rel="noopener noreferrer">Visit project ↗</a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </ElectricBorder>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
