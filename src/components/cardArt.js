// Card thumbnails for the Experiments grid.
//
// One visual system for all twelve: the same hairline grid on a near-black
// field, one accent per project, one idea per card, and no words inside the
// canvas (the card footer carries those). Every function draws in CSS pixels;
// ChromaGrid scales the context for the device pixel ratio.

const TAU = Math.PI * 2;
const FIELD = '#08090c';
const GRID = 20;

export function rgba(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
}

// Shared backdrop: near-black, a centred 20px grid drawn as true device-pixel
// hairlines, and a faint pool of the accent behind the motif.
export function field(ctx, w, h, accent, gx = w / 2, gy = h / 2) {
  const dpr = ctx.getTransform ? ctx.getTransform().a : 1;
  const px = 1 / dpr;
  const snap = v => Math.round(v * dpr) / dpr;
  ctx.fillStyle = FIELD; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = rgba(accent, 0.055);
  for (let x = (w % GRID) / 2; x <= w; x += GRID) ctx.fillRect(snap(x), 0, px, h);
  for (let y = (h % GRID) / 2; y <= h; y += GRID) ctx.fillRect(0, snap(y), w, px);
  const r = Math.max(w, h) * 0.6;
  const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, r);
  g.addColorStop(0, rgba(accent, 0.09)); g.addColorStop(1, rgba(accent, 0));
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}

// The one bright point every card has: a white core in a soft accent halo.
function glow(ctx, x, y, r, accent, a = 1) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r * 6);
  g.addColorStop(0, rgba(accent, 0.5 * a)); g.addColorStop(1, rgba(accent, 0));
  ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r * 6, 0, TAU); ctx.fill();
  ctx.fillStyle = `rgba(255,255,255,${0.95 * a})`;
  ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (ctx.roundRect) { ctx.roundRect(x, y, w, h, r); return; }
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

function seeded(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let v = s;
    v = Math.imul(v ^ (v >>> 15), v | 1);
    v ^= v + Math.imul(v ^ (v >>> 7), v | 61);
    return ((v ^ (v >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp01 = v => Math.max(0, Math.min(1, v));
const ease = v => v * v * (3 - 2 * v);

// 01 · Air Canvas: a fingertip inking a figure-eight, the stroke fading behind it.
export function artAirCanvas(ctx, w, h, t) {
  const A = '#8B83F0';
  const cx = w / 2, cy = h / 2, ax = Math.min(w * 0.3, h * 0.7), ay = h * 0.27;
  field(ctx, w, h, A);
  const at = s => [cx + Math.sin(s) * ax, cy + Math.sin(2 * s) * ay];

  ctx.beginPath();
  for (let i = 0; i <= 120; i++) { const [x, y] = at((i / 120) * TAU); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
  ctx.strokeStyle = rgba(A, 0.12); ctx.lineWidth = 1; ctx.stroke();

  const head = t * 1.05, len = TAU * 0.72, n = 72;
  ctx.lineCap = 'round'; ctx.lineWidth = 2;
  for (let i = 0; i < n; i++) {
    const [x0, y0] = at(head - len * (1 - i / n));
    const [x1, y1] = at(head - len * (1 - (i + 1) / n));
    ctx.strokeStyle = rgba(A, 0.95 * Math.pow((i + 1) / n, 1.8));
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
  }
  const [px, py] = at(head);
  glow(ctx, px, py, 2.6, A);
}

// 02 · not financial advice.: one live price line, its last tick and a level.
export function artNFA(ctx, w, h, t) {
  const A = '#10B981';
  const x0 = w * 0.08, x1 = w * 0.74, n = 56, base = h * 0.84;
  const f = u => 0.5 + 0.17 * Math.sin(u * 1.3) + 0.08 * Math.sin(u * 3.1 + 1.2) + 0.04 * Math.sin(u * 7.3 + 0.4);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const u = i * 0.1 + t * 0.32;
    pts.push([x0 + (x1 - x0) * (i / (n - 1)), base - f(u) * h * 0.66]);
  }
  const [lx, ly] = pts[n - 1];
  field(ctx, w, h, A, lx, ly);

  const area = ctx.createLinearGradient(0, h * 0.2, 0, base);
  area.addColorStop(0, rgba(A, 0.18)); area.addColorStop(1, rgba(A, 0));
  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.lineTo(x1, base); ctx.lineTo(x0, base); ctx.closePath(); ctx.fillStyle = area; ctx.fill();

  ctx.beginPath(); pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.strokeStyle = rgba(A, 0.95); ctx.lineWidth = 1.5; ctx.lineJoin = 'round'; ctx.stroke();

  ctx.setLineDash([2, 3]);
  ctx.beginPath(); ctx.moveTo(lx + 6, ly); ctx.lineTo(w * 0.88, ly);
  ctx.strokeStyle = rgba(A, 0.45); ctx.lineWidth = 1; ctx.stroke();
  ctx.setLineDash([]);

  // Direction marker: shape says up or down, colour only reinforces it.
  const up = ly <= pts[n - 7][1];
  const mx = w * 0.92, s = 4;
  ctx.fillStyle = up ? A : '#F43F5E';
  ctx.beginPath();
  if (up) { ctx.moveTo(mx, ly - s); ctx.lineTo(mx + s, ly + s * 0.7); ctx.lineTo(mx - s, ly + s * 0.7); }
  else { ctx.moveTo(mx, ly + s); ctx.lineTo(mx + s, ly - s * 0.7); ctx.lineTo(mx - s, ly - s * 0.7); }
  ctx.fill();
  glow(ctx, lx, ly, 2.4, A);
}

// 03 · Mood Support: a slow eight-second breath, rings following a beat behind.
export function artMood(ctx, w, h, t) {
  const A = '#F43F5E';
  const cx = w / 2, cy = h / 2;
  field(ctx, w, h, A);
  const breath = lag => (1 - Math.cos(((t - lag) * TAU) / 8)) / 2;
  const b = breath(0);
  const r0 = h * (0.055 + 0.045 * b);

  for (let i = 3; i >= 1; i--) {
    const r = r0 + h * 0.075 * i * (0.6 + 0.4 * breath(i * 0.45));
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU);
    ctx.strokeStyle = rgba(A, 0.62 - i * 0.15); ctx.lineWidth = 1; ctx.stroke();
  }
  ctx.fillStyle = rgba(A, 0.16); ctx.beginPath(); ctx.arc(cx, cy, r0, 0, TAU); ctx.fill();
  ctx.strokeStyle = rgba(A, 0.95); ctx.lineWidth = 1.5; ctx.stroke();
  glow(ctx, cx, cy, 2.4, A, 0.6 + 0.4 * b);
}

// 04 · AR Portal: a doorway standing on a printed marker, turning in place.
export function artAR(ctx, w, h, t) {
  const A = '#22D3EE';
  const cx = w / 2, gy = h * 0.74;
  const fw = Math.min(w * 0.2, h * 0.4), bw = fw * 0.62, d = h * 0.11;
  field(ctx, w, h, A, cx, h * 0.5);

  const quad = k => [[cx - fw * k, gy + d * 0.5 * k], [cx + fw * k, gy + d * 0.5 * k], [cx + bw * k, gy - d * 0.5 * k], [cx - bw * k, gy - d * 0.5 * k]];
  const poly = q => { ctx.beginPath(); q.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); };
  poly(quad(1)); ctx.strokeStyle = rgba(A, 0.45); ctx.lineWidth = 1; ctx.stroke();
  poly(quad(0.5)); ctx.fillStyle = rgba(A, 0.12); ctx.fill();

  // Tracking brackets lock onto the marker's corners.
  const lock = 1 + 0.12 * (1 - ease(clamp01((t % 3) / 0.8)));
  ctx.strokeStyle = rgba(A, 0.8); ctx.lineWidth = 1.25; ctx.lineCap = 'round';
  quad(1).forEach(([x, y]) => {
    const bx = cx + (x - cx) * lock, by = gy + (y - gy) * lock;
    const sx = bx < cx ? 1 : -1, sy = by > gy ? -1 : 1;
    ctx.beginPath(); ctx.moveTo(bx + 7 * sx, by); ctx.lineTo(bx, by); ctx.lineTo(bx, by + 6 * sy); ctx.stroke();
  });

  const R = fw * 0.55, ph = h * 0.52;
  const pw = R * (0.3 + 0.7 * Math.abs(Math.cos(t * 0.5)));
  const top = gy - ph + R;
  ctx.beginPath();
  ctx.moveTo(cx - pw, gy); ctx.lineTo(cx - pw, top);
  ctx.ellipse(cx, top, pw, R, 0, Math.PI, 0);
  ctx.lineTo(cx + pw, gy);
  const fill = ctx.createLinearGradient(0, gy - ph, 0, gy);
  fill.addColorStop(0, rgba(A, 0.26)); fill.addColorStop(1, rgba(A, 0.03));
  ctx.fillStyle = fill; ctx.fill();
  ctx.strokeStyle = rgba(A, 0.95); ctx.lineWidth = 1.5; ctx.stroke();

  for (let i = 0; i < 4; i++) {
    const p = (t * 0.3 + i / 4) % 1;
    const x = cx + Math.sin(i * 2.1 + t) * pw * 0.45;
    const y = gy - p * ph * 0.85;
    ctx.fillStyle = `rgba(255,255,255,${0.7 * Math.sin(p * Math.PI)})`;
    ctx.beginPath(); ctx.arc(x, y, 1.2, 0, TAU); ctx.fill();
  }
}

// 05 · Midnight OS: two windows on a desk, one being dragged by the cursor.
export function artOS(ctx, w, h, t) {
  const A = '#A5B4C8';
  field(ctx, w, h, A);
  const win = (x, y, ww, wh, a) => {
    roundRect(ctx, x, y, ww, wh, 5);
    ctx.fillStyle = '#0d0f13'; ctx.fill();
    ctx.strokeStyle = rgba(A, a); ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = rgba(A, a * 0.5); ctx.fillRect(x, y + 12, ww, 1);
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(x + 8 + i * 6, y + 6, 1.6, 0, TAU); ctx.fill(); }
  };

  const ww = w * 0.44, wh = h * 0.46;
  win(w * 0.1, h * 0.16, ww, wh, 0.3);

  const p = t * 0.45;
  const bx = w * 0.4 + Math.sin(p) * w * 0.07, by = h * 0.3 + Math.sin(p * 2) * h * 0.05;
  win(bx, by, ww, wh, 0.85);
  ctx.fillStyle = rgba(A, 0.2);
  [0.62, 0.8, 0.44].forEach((k, i) => ctx.fillRect(bx + 10, by + 22 + i * 8, (ww - 20) * k, 2));

  const mx = bx + ww * 0.58, my = by + 7;
  ctx.beginPath(); ctx.moveTo(mx, my); ctx.lineTo(mx, my + 10); ctx.lineTo(mx + 2.8, my + 7.4);
  ctx.lineTo(mx + 7, my + 7.4); ctx.closePath();
  ctx.fillStyle = '#fff'; ctx.fill();

  const dy = h * 0.88, ds = 6, gap = 5, active = Math.floor(t / 2) % 5;
  const dx0 = w / 2 - (5 * ds + 4 * gap) / 2;
  for (let i = 0; i < 5; i++) {
    roundRect(ctx, dx0 + i * (ds + gap), dy - ds / 2, ds, ds, 1.5);
    if (i === active) { ctx.fillStyle = rgba(A, 0.7); ctx.fill(); } else { ctx.strokeStyle = rgba(A, 0.35); ctx.stroke(); }
  }
}

// 06 · LUMINARY: a flyer banking across the sky over a perspective ground.
export function artLuminary(ctx, w, h, t) {
  const A = '#14B8A6';
  const hz = h * 0.76, cx = w / 2, P = 6.5;
  const pos = s => {
    const p = s / P;
    return [-w * 0.12 + w * 1.24 * p, h * 0.44 + Math.sin(p * TAU * 1.1 + 0.5) * h * 0.16];
  };
  const p = t % P;
  const [hx, hy] = pos(p);
  field(ctx, w, h, A, hx, hy);

  ctx.fillStyle = rgba(A, 0.35); ctx.fillRect(0, hz, w, 1);
  ctx.strokeStyle = rgba(A, 0.12); ctx.lineWidth = 1;
  for (let i = -4; i <= 4; i++) { ctx.beginPath(); ctx.moveTo(cx, hz); ctx.lineTo(cx + i * w * 0.22, h); ctx.stroke(); }

  ctx.lineCap = 'round';
  for (let i = 0; i < 6; i++) {
    const y = h * (0.18 + i * 0.1);
    const x = w * 1.2 - ((t * w * 0.5 + i * w * 0.37) % (w * 1.5));
    ctx.strokeStyle = rgba(A, 0.18); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 14 + (i % 3) * 8, y); ctx.stroke();
  }

  const n = 40, span = 1.6;
  ctx.lineWidth = 2;
  for (let i = 0; i < n; i++) {
    const s0 = p - span * (1 - i / n), s1 = p - span * (1 - (i + 1) / n);
    if (s0 < 0) continue;
    const [x0, y0] = pos(s0), [x1, y1] = pos(s1);
    ctx.strokeStyle = rgba(A, 0.85 * Math.pow((i + 1) / n, 2));
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
  }

  const [qx, qy] = pos(Math.max(0, p - 0.05));
  const a = Math.atan2(hy - qy, hx - qx);
  glow(ctx, hx, hy, 2.4, A);
  ctx.save(); ctx.translate(hx, hy); ctx.rotate(a);
  ctx.beginPath(); ctx.moveTo(9, 0); ctx.lineTo(3, -4); ctx.moveTo(9, 0); ctx.lineTo(3, 4);
  ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 1.25; ctx.stroke();
  ctx.restore();
}

// 08 · ECHO: a spoken command travels to a wireframe robot, which hops to it.
const CUBE_V = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]];
const CUBE_E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];

export function artEcho(ctx, w, h, t) {
  const A = '#C084FC';
  const C = 4, c = t % C, talk = 1.8;
  const env = c < talk ? Math.sin((Math.PI * c) / talk) : 0;
  const vx = w * 0.24, vy = h / 2, ox = w * 0.68, s = h * 0.13;
  const hopT = clamp01((c - 2.1) / 0.8);
  const hop = Math.sin(hopT * Math.PI) * h * 0.12;
  const oy = h * 0.5 - hop;
  field(ctx, w, h, A, ox, h / 2);

  ctx.lineCap = 'round'; ctx.lineWidth = 2;
  for (let i = 0; i < 7; i++) {
    const k = 1 - Math.abs(i - 3) / 4;
    const bh = h * 0.025 + h * 0.2 * k * env * Math.abs(Math.sin(t * 9 + i * 1.3));
    ctx.strokeStyle = rgba(A, 0.35 + 0.55 * k);
    const x = vx + (i - 3) * 6;
    ctx.beginPath(); ctx.moveTo(x, vy - bh); ctx.lineTo(x, vy + bh); ctx.stroke();
  }

  for (let k = 0; k < 3; k++) {
    const q = (c - 0.4 - k * 0.22) / 1.3;
    if (q <= 0 || q >= 1) continue;
    const x = vx + 30 + (ox - s * 1.6 - vx - 30) * ease(q);
    ctx.fillStyle = rgba(A, 0.9 * Math.sin(q * Math.PI));
    ctx.beginPath(); ctx.arc(x, vy, 1.8, 0, TAU); ctx.fill();
  }

  const gy = h * 0.5 + s * 1.55;
  ctx.fillStyle = rgba(A, 0.18 * (1 - hop / (h * 0.24)));
  ctx.beginPath(); ctx.ellipse(ox, gy, s * 1.3 * (1 - hop / (h * 0.5)), s * 0.22, 0, 0, TAU); ctx.fill();

  const ay = t * 0.5 + ease(hopT) * Math.PI * 0.5, tilt = 0.5;
  const P = CUBE_V.map(([x, y, z]) => {
    const x1 = x * Math.cos(ay) + z * Math.sin(ay);
    const z1 = -x * Math.sin(ay) + z * Math.cos(ay);
    const y1 = y * Math.cos(tilt) - z1 * Math.sin(tilt);
    const z2 = y * Math.sin(tilt) + z1 * Math.cos(tilt);
    return [ox + x1 * s, oy + y1 * s, z2];
  });
  ctx.lineWidth = 1.25;
  CUBE_E.forEach(([i, j]) => {
    const back = (P[i][2] + P[j][2]) / 2 > 0.3;
    ctx.strokeStyle = rgba(A, back ? 0.25 : 0.9);
    ctx.beginPath(); ctx.moveTo(P[i][0], P[i][1]); ctx.lineTo(P[j][0], P[j][1]); ctx.stroke();
  });
  glow(ctx, ox, oy, 2, A, 0.4 + 0.6 * Math.max(env, Math.sin(hopT * Math.PI)));
}

// 09 · milkyway.ai: a quiet star field where a cursor hops between model nodes.
const SKY = (() => {
  const r = seeded(9);
  return Array.from({ length: 46 }, () => ({ x: r(), y: r(), s: 0.4 + r() * 0.8, p: r() * TAU }));
})();
const NODES = [[0.16, 0.64], [0.31, 0.34], [0.48, 0.56], [0.63, 0.27], [0.8, 0.46], [0.68, 0.75]];
const LINKS = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 5]];

export function artMilkyway(ctx, w, h, t) {
  const A = '#60A5FA';
  const drift = Math.sin(t * 0.12) * 5;
  const at = ([x, y]) => [x * w + drift, y * h];
  const step = 1.8, k = Math.floor(t / step), from = k % 6, to = (k + 1) % 6;
  const m = ease(clamp01((t % step) / 0.7));
  const [fx, fy] = at(NODES[from]), [tx, ty] = at(NODES[to]);
  const cx = fx + (tx - fx) * m, cy = fy + (ty - fy) * m;
  field(ctx, w, h, A, cx, cy);

  SKY.forEach(({ x, y, s, p }) => {
    ctx.fillStyle = `rgba(255,255,255,${0.12 + 0.3 * (0.5 + 0.5 * Math.sin(t * 1.3 + p))})`;
    ctx.fillRect(x * w + drift * 0.5, y * h, s, s);
  });

  ctx.lineWidth = 1;
  LINKS.forEach(([i, j]) => {
    const [x0, y0] = at(NODES[i]), [x1, y1] = at(NODES[j]);
    const live = (i === from && j === to) || (j === from && i === to);
    ctx.strokeStyle = rgba(A, live ? 0.7 : 0.22);
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
  });
  NODES.forEach(n => { const [x, y] = at(n); ctx.fillStyle = rgba(A, 0.85); ctx.beginPath(); ctx.arc(x, y, 2, 0, TAU); ctx.fill(); });

  ctx.strokeStyle = rgba(A, 0.95); ctx.lineWidth = 1.25;
  ctx.beginPath(); ctx.arc(cx, cy, 7, 0, TAU); ctx.stroke();
  glow(ctx, tx, ty, 2.2, A, m);
}

// 10 · Cold Wake: a diver's light under the ice, bubbles rising to a crack.
const ICE = (() => { const r = seeded(10); return Array.from({ length: 15 }, () => r() - 0.5); })();
const CRACKS = [
  [[0, 0], [-0.04, -0.35], [-0.09, -0.6], [-0.12, -1]],
  [[0, 0], [0.05, -0.4], [0.03, -0.7], [0.08, -1]],
  [[-0.04, -0.35], [-0.12, -0.45], [-0.2, -0.5]],
  [[0.05, -0.4], [0.14, -0.5]]
];

export function artColdWake(ctx, w, h, t) {
  const A = '#38BDF8';
  const iceY = x => h * 0.26 + ICE[Math.min(14, Math.round((x / w) * 14))] * h * 0.07;
  const kx = w * 0.58, ky = iceY(kx);
  const dx = w * 0.42 + Math.sin(t * 0.5) * w * 0.05, dy = h * 0.72 + Math.sin(t * 0.8) * h * 0.03;
  field(ctx, w, h, A, dx, dy);

  const beam = ctx.createRadialGradient(dx, dy, 0, dx, dy, dy - ky + 20);
  beam.addColorStop(0, rgba(A, 0.28)); beam.addColorStop(1, rgba(A, 0));
  ctx.fillStyle = beam;
  ctx.beginPath(); ctx.moveTo(dx, dy); ctx.lineTo(kx - w * 0.1, ky); ctx.lineTo(kx + w * 0.1, ky); ctx.closePath(); ctx.fill();

  ctx.beginPath(); ctx.moveTo(0, 0);
  for (let i = 0; i <= 14; i++) ctx.lineTo((i / 14) * w, h * 0.26 + ICE[i] * h * 0.07);
  ctx.lineTo(w, 0); ctx.closePath();
  ctx.fillStyle = rgba(A, 0.08); ctx.fill();
  ctx.beginPath();
  for (let i = 0; i <= 14; i++) { const x = (i / 14) * w, y = h * 0.26 + ICE[i] * h * 0.07; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
  ctx.strokeStyle = rgba(A, 0.6); ctx.lineWidth = 1; ctx.stroke();

  const cyc = t % 7, grow = ease(clamp01((cyc - 1) / 1.6)), fade = 1 - clamp01((cyc - 5.5) / 1.2);
  ctx.strokeStyle = `rgba(224,242,254,${0.75 * fade})`; ctx.lineWidth = 0.9;
  CRACKS.forEach(pl => {
    ctx.beginPath();
    pl.forEach(([x, y], i) => { const px = kx + x * w, py = ky + y * ky * grow; i ? ctx.lineTo(px, py) : ctx.moveTo(px, py); });
    ctx.stroke();
  });

  ctx.lineWidth = 1;
  for (let i = 0; i < 5; i++) {
    const q = (t * 0.22 + i / 5) % 1;
    const y = dy - 6 - q * (dy - 6 - ky - 4);
    const x = dx + (kx - dx) * q + Math.sin(t * 2 + i * 1.7) * 3;
    ctx.strokeStyle = rgba(A, 0.6 * (1 - q));
    ctx.beginPath(); ctx.arc(x, y, 1.2 + (i % 2) * 0.8, 0, TAU); ctx.stroke();
  }
  glow(ctx, dx, dy, 2.4, A);
}

// 11 · Overtone: five strings, each ringing in its own harmonic, plucked in turn.
export function artOvertone(ctx, w, h, t) {
  const A = '#FBBF24';
  const x0 = w * 0.14, x1 = w * 0.86, top = h * 0.2, gap = (h * 0.6) / 4;
  field(ctx, w, h, A);
  ctx.lineCap = 'round';
  for (let n = 1; n <= 5; n++) {
    const y = top + gap * (n - 1);
    const env = Math.exp(-(((t - n * 0.5) % 4.5 + 4.5) % 4.5) * 1.1);
    const amp = gap * 0.38 * env * Math.cos(t * (5 + n * 1.6));

    ctx.fillStyle = rgba(A, 0.5);
    ctx.fillRect(x0 - 0.5, y - 4, 1, 8); ctx.fillRect(x1 - 0.5, y - 4, 1, 8);

    ctx.beginPath();
    for (let i = 0; i <= 90; i++) {
      const u = i / 90;
      const yy = y + Math.sin(n * Math.PI * u) * amp;
      i ? ctx.lineTo(x0 + u * (x1 - x0), yy) : ctx.moveTo(x0, yy);
    }
    ctx.strokeStyle = rgba(A, 0.28 + 0.67 * env); ctx.lineWidth = 1.25; ctx.stroke();

    ctx.fillStyle = rgba(A, 0.6);
    for (let k = 1; k < n; k++) { ctx.beginPath(); ctx.arc(x0 + (k / n) * (x1 - x0), y, 1.3, 0, TAU); ctx.fill(); }
  }
}

// 12 · Atelier: a hand near a theremin antenna; closer means higher pitch.
export function artAtelier(ctx, w, h, t) {
  const A = '#FB923C';
  const ax = w * 0.8, aTop = h * 0.16, aBot = h * 0.76;
  const hx = w * 0.5 + Math.sin(t * 0.55) * w * 0.15, hy = h * 0.46 + Math.sin(t * 0.9) * h * 0.08;
  field(ctx, w, h, A, hx, hy);

  ctx.lineWidth = 1;
  for (let i = 0; i < 3; i++) {
    const q = (t / 3 + i / 3) % 1;
    ctx.strokeStyle = rgba(A, 0.3 * (1 - q));
    ctx.beginPath(); ctx.arc(ax, (aTop + aBot) / 2, 10 + q * w * 0.22, Math.PI * 0.62, Math.PI * 1.38); ctx.stroke();
  }

  ctx.lineCap = 'round';
  ctx.strokeStyle = rgba(A, 0.95); ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(ax, aTop); ctx.lineTo(ax, aBot); ctx.stroke();
  ctx.strokeStyle = rgba(A, 0.4); ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(ax - w * 0.14, aBot + 6); ctx.lineTo(ax + w * 0.03, aBot + 6); ctx.stroke();

  const sx = w * 0.06, L = hx - sx;
  const cycles = Math.max(1.5, Math.min(7, 70 / Math.max(8, ax - hx) * 2.4));
  const kw = (TAU * cycles) / L, amp = h * 0.09;
  const g = ctx.createLinearGradient(sx, 0, hx, 0);
  g.addColorStop(0, rgba(A, 0)); g.addColorStop(1, rgba(A, 0.95));
  ctx.beginPath();
  for (let x = sx; x <= hx; x += 1.5) {
    const y = hy + Math.sin((x - hx) * kw - t * 5) * amp * Math.sin(((x - sx) / L) * Math.PI);
    x === sx ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.stroke();
  glow(ctx, hx, hy, 2.6, A);
}
