import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Lottie from 'lottie-react';
import koalaData from '../Assets/Images/Portrait/Meditating Koala.json';
import CertificateOverlay from './CertificateOverlay';

/**
 * SkillsAnimation Component
 * 
 * An immersive, interactive Canvas-based tree animation that visualizes professional skills.
 * Features:
 * - Procedural tree growth with leaf rustling and falling animations.
 * - Dynamic wind effect based on mouse movement or device orientation.
 * - Interactive 'blossoms' (skill nodes) that reveal detailed career milestones in a modal.
 * - Responsive layout supporting both mobile and desktop views.
 * - Integration with Lottie animations (Meditating Koala) for aesthetic charm.
 * 
 * @author Roy Mootsana
 * @version 1.1.0
 */

// ==========================================
// 1. CONFIGURATION & CONSTANTS
// ==========================================
const CONFIG = {
    virtual: { width: 1000, height: 1000 },
    tree: { maxDepth: 4, mobileStemRatio: 0.42, desktopStemRatio: 0.28 },
    colors: {
        primary: '#1d9e75',
        primaryHover: 'rgba(29, 158, 117, 1)',
        primaryFaded: 'rgba(29, 158, 117, 0.4)',
        background: '#e9f2eb',
        textDark: '#141f1a',
        textLight: '#ffffff',
        leaves: ['#1d9e75', '#6a9080', '#c8dcd2', '#85bfa9'],
        fallingLeaves: [['#309900', '#005600'], ['#5e9900', '#2b5600'], ['#999900', '#564500'], ['#1d9e75', '#054034']]
    },
    typography: {
        family: "'DM Mono', ui-monospace, SFMono-Regular, monospace",
        mobileBase: 16, 
        desktopBase: 18
    },
    layout: {
        labelPaddingX: { mobile: 28, desktop: 40 },
        labelPaddingY: { mobile: 32, desktop: 44 }
    }
};

const SKILLS = [
    { 
        name: 'ANGULAR & TYPESCRIPT', 
        level: 95,
        role: 'Enterprise Front-End Engineer',
        details: [
            "Architected enterprise-grade applications at top-ranked global institutions.",
            "Built sophisticated data-driven learning dashboards at IMD Business School, integrating complex Angular interfaces with Python backend services.",
            "Engineered robust, reusable Angular components for Standard Bank's CIB BluePrint Design System, enforcing strict WCAG 100% accessibility standards."
        ]
    },
    { 
        name: 'UX ARCHITECTURE', 
        level: 92,
        role: 'Bridging Engineering & Human-Centered Design',
        details: [
            "Enforced strict UI/UX fidelity standards, achieving 100% visual parity between Figma design specifications and final staged builds during IMD's global migration.",
            "Led full-stack UX/UI development for SME deployments (Tres Chic), resulting in a 40% measurable increase in booking efficiency.",
            "A rare archetype: combining a builder's bias for action with a designer's eye for intuitive aesthetics."
        ]
    },
    { 
        name: 'WEBAR & THREE.JS', 
        level: 88,
        role: 'Creative Technologist & R&D',
        details: [
            "Pioneered emerging educational technologies by prototyping next-generation interactive tools at the IMD Business School Innovation Hub in Cape Town, South Africa.",
            "Brought browser-native Augmented Reality capabilities to the innovation pipeline using Three.js and A-Frame.",
            "Delivered immersive experiences that completely bypass traditional native app dependencies, increasing cohort engagement metrics."
        ]
    },
    { 
        name: 'SYSTEMS THINKING', 
        level: 90,
        role: 'Strategic Cognition & Pattern Recognition',
        details: [
            "Leveraging 20 years of competitive chess play (Provincial & National level, Senior Team Captain) to apply strategic foresight to software architecture.",
            "Excel at patience under pressure, identifying edge cases, and anticipating architectural bottlenecks before they manifest.",
            "Approaches cross-functional engineering challenges with a chess strategist's multi-step planning and optimization."
        ]
    },
    { 
        name: 'FULL-STACK ENG.', 
        level: 85,
        role: 'End-to-End Infrastructure',
        details: [
            "Extensive background spanning enterprise banking systems, global EdTech platforms, and e-commerce infrastructure.",
            "Re-engineered complex learning simulations ('Strategic Execution Simulation'), optimizing backend performance and UX.",
            "Independently built and deployed fully functional e-commerce websites with live databases (MongoDB/Node.js) and integrated payment systems."
        ]
    },
    { 
        name: 'DESIGNOPS', 
        level: 88,
        role: 'Systems Scalability Architect',
        details: [
            "Served as a key architect of the 3.0 visual language MVP for Standard Bank's Corporate & Investment Banking division.",
            "Acted as the crucial bridge between Design and Engineering—defining design tokens, standardizing UI, and reducing code duplication at an enterprise scale."
        ],
        testimonial: {
            quote: "Roy has been an invaluable asset to our team. He has a unique perspective on things, and his ability to approach problems from different angles has helped us find creative solutions. Roy is a rare find, and has shown great maturity and skill.",
            author: "Mel M. Saayman, Design Lead, Standard Bank"
        }
    },
    { 
        name: 'RELEASE MGT & QA', 
        level: 82,
        role: 'Zero-Downtime Execution',
        details: [
            "Assumed sole custodianship of the STS team release cycle (Dev → Pre-Prod → Prod) at IMD, achieving flawless, zero-downtime updates.",
            "Spearheaded QA strategy during a global enterprise WordPress migration across teams in Switzerland, Spain, Romania, and Algeria.",
            "Established automated testing workflows that reduced critical regression bugs by 30%."
        ]
    },
    { 
        name: 'UDEMY CERTIFICATES', 
        level: 99,
        role: 'Continuous Rapid-Learning Orientation',
        details: [] // Handled uniquely in CertificateOverlay
    }
];


// ==========================================
// 2. PURE HELPERS & CLASSES
// ==========================================
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

class FallingLeaf {
    constructor(x, y) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = Math.random() * 0.8 + 0.4;
        this.rot = Math.random() * Math.PI * 2;
        this.rotV = (Math.random() - 0.5) * 0.05;
        this.flipSpeed = Math.random() * 0.06 + 0.02;
        this.flip = Math.random() * Math.PI * 2;
        this.length = Math.random() * 12 + 8;
        this.width = this.length * (Math.random() * 0.25 + 0.35);
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.4 + 0.4;
        this.life = 1;
        this.decay = 0.0015 + Math.random() * 0.001;
        this.colors = CONFIG.colors.fallingLeaves[Math.floor(Math.random() * CONFIG.colors.fallingLeaves.length)];
    }

    update(wind) {
        this.x += this.vx + wind * 2 + Math.sin(this.flip) * 0.5;
        this.y += this.vy;
        this.rot += this.rotV;
        this.flip += this.flipSpeed;
        this.life -= this.decay;
        if (this.alpha < this.maxAlpha) this.alpha += 0.01;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.scale(1, Math.cos(this.flip));
        ctx.globalAlpha = this.alpha * this.life;
        
        const grad = ctx.createLinearGradient(0, -this.width, this.length, this.width);
        grad.addColorStop(0, this.colors[0]);
        grad.addColorStop(1, this.colors[1]);
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.length * 0.4, -this.width * 1.4, this.length * 0.8, -this.width * 0.6, this.length, 0);
        ctx.bezierCurveTo(this.length * 0.8, this.width * 0.6, this.length * 0.4, this.width * 1.4, 0, 0);
        ctx.fill();
        ctx.restore();
    }
}

function buildTreeData(state, isMobileMode) {
    state.branches = [];
    state.blossomPoints = [];
    
    const cx = CONFIG.virtual.width * 0.5;
    const trunkH = CONFIG.virtual.height * (isMobileMode ? CONFIG.tree.mobileStemRatio : CONFIG.tree.desktopStemRatio);
    
    function addBranch(x1, y1, x2, y2, w, depth) {
        const leaves = [];
        if (depth >= 1) {
            const numLeaves = depth * 5 + Math.floor(Math.random() * 4);
            for (let j = 0; j < numLeaves; j++) {
                const t = Math.random();
                const spread = (depth * 25) * t + 10;
                leaves.push({
                    t,
                    offsetX: (Math.random() - 0.5) * spread,
                    offsetY: (Math.random() - 0.5) * spread,
                    size: Math.random() * 25 + 15,
                    color: CONFIG.colors.leaves[Math.floor(Math.random() * CONFIG.colors.leaves.length)],
                    opacity: Math.random() * 0.15 + 0.05,
                    rustleSpeed: Math.random() * 0.002 + 0.001,
                    rustleOffset: Math.random() * Math.PI * 2
                });
            }
        }
        
        const branch = { x1, y1, x2, y2, w, depth, leaves };
        state.branches.push(branch);

        if (depth === CONFIG.tree.maxDepth) {
            state.blossomPoints.push({ parentBranch: branch });
            return;
        }

        const len = Math.hypot(x2 - x1, y2 - y1);
        const angle = Math.atan2(y2 - y1, x2 - x1);

        for (let i = 0; i < 2; i++) {
            const sign = i === 0 ? 1 : -1;
            const spread = (0.55 + Math.random() * 0.35) * sign;
            const nextAngle = angle + spread;
            const nextLen = len * (0.65 + Math.random() * 0.1);
            const nx = x2 + Math.cos(nextAngle) * nextLen;
            const ny = y2 + Math.sin(nextAngle) * nextLen;
            addBranch(x2, y2, nx, ny, w * 0.72, depth + 1);
        }
    }

    addBranch(cx, CONFIG.virtual.height, cx, CONFIG.virtual.height - trunkH, 14, 0);

    if (state.blossomPoints.length >= SKILLS.length) {
        let selected = [];
        let candidates = [...state.blossomPoints];

        let highestIdx = 0;
        for (let i = 1; i < candidates.length; i++) {
            if (candidates[i].parentBranch.y2 < candidates[highestIdx].parentBranch.y2) highestIdx = i;
        }
        selected.push(candidates.splice(highestIdx, 1)[0]);

        while (selected.length < SKILLS.length && candidates.length > 0) {
            let bestIdx = -1, maxDist = -1;
            for (let i = 0; i < candidates.length; i++) {
                let minDist = Infinity;
                for (let j = 0; j < selected.length; j++) {
                    const dx = candidates[i].parentBranch.x2 - selected[j].parentBranch.x2;
                    const dy = candidates[i].parentBranch.y2 - selected[j].parentBranch.y2;
                    const d = dx * dx + dy * dy;
                    if (d < minDist) minDist = d;
                }
                if (minDist > maxDist) { maxDist = minDist; bestIdx = i; }
            }
            selected.push(candidates.splice(bestIdx, 1)[0]);
        }

        state.limitedBlossomPoints = selected.map((pt, i) => ({
            parentBranch: pt.parentBranch,
            skill: SKILLS[i]
        }));
    }
}

// ==========================================
// 3. CORE COMPONENT
// ==========================================

// Core Competencies (Skills Tree) Component
// Special Case: This view forces a light-theme background class to ensure the tree animation 
// and its green accents have optimal visibility, regardless of the global season theme.
// Note: Core competencies is a special case because of the custom SVG blossom animation.
const SkillsAnimation = ({ active, onClose }) => {
    const canvasRef = useRef(null);
    
    const stateRef = useRef({
        time: 0,
        growing: false,
        grown: false,
        rawProgress: 0,
        visualProgress: 0,
        wind: 0,
        targetWind: 0,
        branches: [],
        blossomPoints: [],
        limitedBlossomPoints: [],
        blossomClusters: [], 
        labels: [], 
        fallingLeaves: [],
        leavesBorn: false,
        rafId: null,
        currentHit: null,
        hasStarted: false,
    });
    
    const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });
    const [modal, setModal] = useState({ visible: false, skill: null });
    const [isExiting, setIsExiting] = useState(false);
    const [koalaVisible, setKoalaVisible] = useState(false);
    const [certOverlayVisible, setCertOverlayVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const exitTimerRef = useRef(null);

    useEffect(() => {
        if (!active) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const state = stateRef.current;

        const handleResize = () => {
            const pixelRatio = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * pixelRatio;
            canvas.height = window.innerHeight * pixelRatio;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        const handleOrientation = (e) => {
            if (!e.gamma) return;
            let tilt = Math.max(-45, Math.min(45, e.gamma));
            state.targetWind = tilt / 25; 
        };
        window.addEventListener('deviceorientation', handleOrientation);

        if (!state.hasStarted) {
            state.hasStarted = true;
            buildTreeData(state, window.innerWidth < 768); 
            state.growing = true;
            state.grown = true;
        }

        const drawTree = (prog) => {
            const treeProg = Math.min(1, prog / 0.8);
            ctx.lineCap = 'round';

            for (let i = 0; i < state.branches.length; i++) {
                const b = state.branches[i];
                const startProg = b.depth / (CONFIG.tree.maxDepth + 1);
                const endProg = (b.depth + 1) / (CONFIG.tree.maxDepth + 1);
                if (treeProg < startProg) continue;
                
                let segProg = treeProg < endProg ? (treeProg - startProg) / (endProg - startProg) : 1;
                const sway = Math.sin(state.time * 0.0008 + b.x1 * 0.01) * state.wind * (b.depth * 0.5);
                const endX = b.x1 + (b.x2 + sway - b.x1) * segProg;
                const endY = b.y1 + (b.y2 - b.y1) * segProg;
                
                ctx.beginPath();
                ctx.strokeStyle = `rgba(20, 31, 26, ${0.8 - b.depth * 0.12})`;
                ctx.lineWidth = b.w;
                ctx.moveTo(b.x1, b.y1);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }

            for (let i = 0; i < state.branches.length; i++) {
                const b = state.branches[i];
                if (!b.leaves?.length) continue;
                
                const startProg = b.depth / (CONFIG.tree.maxDepth + 1);
                const endProg = (b.depth + 1) / (CONFIG.tree.maxDepth + 1);
                if (treeProg < startProg) continue;
                
                let segProg = treeProg < endProg ? (treeProg - startProg) / (endProg - startProg) : 1;
                const swayTip = Math.sin(state.time * 0.0008 + b.x1 * 0.01) * state.wind * (b.depth * 0.5);

                for (let j = 0; j < b.leaves.length; j++) {
                    const l = b.leaves[j];
                    if (segProg > l.t) {
                        const leafGrow = Math.min(1, (segProg - l.t) * 4);
                        const eased = easeOutCubic(leafGrow);
                        const currentSway = swayTip * l.t;
                        
                        const attachX = b.x1 + (b.x2 - b.x1) * l.t + currentSway;
                        const attachY = b.y1 + (b.y2 - b.y1) * l.t;
                        const rustleX = Math.sin(state.time * l.rustleSpeed + l.rustleOffset) * 3;
                        const leafWind = state.wind * 2 * l.t;
                        
                        ctx.beginPath();
                        ctx.globalAlpha = l.opacity * eased;
                        ctx.fillStyle = l.color;
                        ctx.ellipse(
                            attachX + l.offsetX + rustleX + leafWind, 
                            attachY + l.offsetY, 
                            l.size * eased, 
                            l.size * 0.8 * eased, 
                            (l.offsetX + l.offsetY) * 0.02, 
                            0, Math.PI * 2
                        );
                        ctx.fill();
                    }
                }
            }
            ctx.globalAlpha = 1;
        };

        const drawBlossomsAndLabels = (prog, drawScale, offsetX, offsetY, pixelRatio) => {
            state.blossomClusters = [];
            const bloomStart = 0.8;
            const bloomProg = Math.max(0, (prog - bloomStart) / (1 - bloomStart));
            if (bloomProg <= 0) return;

            const mobileMode = window.innerWidth < 768;

            if (!state.labels || state.labels.length !== state.limitedBlossomPoints.length) {
                state.labels = state.limitedBlossomPoints.map(() => ({ cx: 0, cy: 0, vx: 0, vy: 0, init: false }));
            }

            state.limitedBlossomPoints.forEach((t, idx) => {
                const delay = (idx / state.limitedBlossomPoints.length) * 0.3;
                const p = Math.max(0, Math.min(1, (bloomProg - delay) * 1.8));
                if (p <= 0) return;

                const b = t.parentBranch;
                const skill = t.skill;
                const sway = Math.sin(state.time * 0.0008 + b.x1 * 0.01) * state.wind * (b.depth * 0.5);
                
                const screenX = ((b.x2 + sway) * drawScale + offsetX) * pixelRatio;
                const screenY = (b.y2 * drawScale + offsetY) * pixelRatio;
                const baseRadius = (10 + (skill.level / 100) * 12) * drawScale * pixelRatio;
                const cr = Math.max(baseRadius, mobileMode ? 14 * pixelRatio : 10); 

                state.blossomClusters.push({ x: screenX / pixelRatio, y: screenY / pixelRatio, skill, radius: cr / pixelRatio, p });

                ctx.globalAlpha = 0.12 * p;
                ctx.fillStyle = CONFIG.colors.primary;
                ctx.beginPath(); ctx.arc(screenX, screenY, cr * 2, 0, Math.PI * 2); ctx.fill();

                ctx.globalAlpha = 0.7 * p;
                ctx.strokeStyle = CONFIG.colors.primary;
                ctx.lineWidth = 1.5 * pixelRatio;
                ctx.beginPath(); ctx.arc(screenX, screenY, cr * p, 0, Math.PI * 2); ctx.stroke();

                ctx.globalAlpha = p;
                ctx.beginPath(); ctx.arc(screenX, screenY, 5 * p * pixelRatio, 0, Math.PI * 2); ctx.fill();

                if (p > 0.85) {
                    const label = state.labels[idx];
                    const fontSize = (mobileMode ? CONFIG.typography.mobileBase : CONFIG.typography.desktopBase) * pixelRatio;
                    ctx.font = `600 ${fontSize}px ${CONFIG.typography.family}`;
                    const textWidth = ctx.measureText(skill.name).width;
                    
                    label.width = textWidth + (mobileMode ? CONFIG.layout.labelPaddingX.mobile : CONFIG.layout.labelPaddingX.desktop) * pixelRatio;
                    label.height = (mobileMode ? CONFIG.layout.labelPaddingY.mobile : CONFIG.layout.labelPaddingY.desktop) * pixelRatio;
                    
                    const isLeft = b.x2 < CONFIG.virtual.width / 2;
                    const idealSpreadX = mobileMode ? (isLeft ? -70 : 70) * pixelRatio : (isLeft ? -45 : 45) * pixelRatio;

                    label.idealX = screenX + idealSpreadX;
                    label.idealY = mobileMode ? screenY - 30 * pixelRatio : screenY - cr - 40 * pixelRatio;

                    if (!label.init) {
                        label.cx = label.idealX;
                        label.cy = label.idealY;
                        label.init = true;
                    }
                }
            });

            for (let i = 0; i < state.labels.length; i++) {
                const l = state.labels[i];
                if (!l.init) continue;
                l.vx += (l.idealX - l.cx) * 0.04;
                l.vy += (l.idealY - l.cy) * 0.04;
                l.cx += l.vx;
                l.cy += l.vy;
                l.vx *= 0.65;
                l.vy *= 0.65;
            }

            const iterations = mobileMode ? 8 : 4;
            for (let iter = 0; iter < iterations; iter++) {
                for (let i = 0; i < state.labels.length; i++) {
                    const l1 = state.labels[i];
                    if (!l1.init) continue;

                    for (let j = i + 1; j < state.labels.length; j++) {
                        const l2 = state.labels[j];
                        if (!l2.init) continue;

                        const dx = l1.cx - l2.cx;
                        const dy = l1.cy - l2.cy;
                        const safeDx = dx === 0 ? (Math.random() - 0.5) : dx;
                        const safeDy = dy === 0 ? (Math.random() - 0.5) : dy;
                        const minX = (l1.width + l2.width) / 2 + 10 * pixelRatio; 
                        const minY = (l1.height + l2.height) / 2 + 10 * pixelRatio;

                        if (Math.abs(safeDx) < minX && Math.abs(safeDy) < minY) {
                            const overlapX = minX - Math.abs(safeDx);
                            const overlapY = minY - Math.abs(safeDy);
                            if (overlapX < overlapY) {
                                const pushX = overlapX * Math.sign(safeDx) * 0.5;
                                l1.cx += pushX;
                                l2.cx -= pushX;
                                l1.vx *= 0.5; l2.vx *= 0.5; 
                            } else {
                                const pushY = overlapY * Math.sign(safeDy) * 0.5;
                                l1.cy += pushY;
                                l2.cy -= pushY;
                                l1.vy *= 0.5; l2.vy *= 0.5; 
                            }
                        }
                    }

                    const margin = 10 * pixelRatio;
                    const leftBound = margin + l1.width / 2;
                    const rightBound = window.innerWidth * pixelRatio - margin - l1.width / 2;
                    const topBound = margin + l1.height / 2;
                    const bottomBound = window.innerHeight * pixelRatio - (mobileMode ? 90 : 40) * pixelRatio - l1.height / 2;

                    if (l1.cx < leftBound) { l1.cx = leftBound; l1.vx *= -0.2; }
                    if (l1.cx > rightBound) { l1.cx = rightBound; l1.vx *= -0.2; }
                    if (l1.cy < topBound) { l1.cy = topBound; l1.vy *= -0.2; }
                    if (l1.cy > bottomBound) { l1.cy = bottomBound; l1.vy *= -0.2; }
                }
            }

            state.limitedBlossomPoints.forEach((t, idx) => {
                const p = state.blossomClusters[idx]?.p;
                const label = state.labels[idx];
                
                if (p > 0.85 && label.init) {
                    const alpha = (p - 0.85) * 6.6;
                    const skill = t.skill;
                    const isHovered = state.currentHit?.skill === skill;
                    
                    const nodeX = state.blossomClusters[idx].x * pixelRatio;
                    const nodeY = state.blossomClusters[idx].y * pixelRatio;

                    ctx.beginPath();
                    ctx.moveTo(nodeX, nodeY);
                    ctx.lineTo(label.cx, label.cy);
                    ctx.strokeStyle = mobileMode ? 'rgba(29, 158, 117, 0.65)' : CONFIG.colors.primaryFaded;
                    ctx.lineWidth = mobileMode ? 2.5 * pixelRatio : 1.5 * pixelRatio;
                    ctx.setLineDash([5 * pixelRatio, 3 * pixelRatio]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    const chipX = label.cx - label.width / 2;
                    const chipY = label.cy - label.height / 2;
                    
                    ctx.beginPath();
                    ctx.roundRect(chipX, chipY, label.width, label.height, 12 * pixelRatio);
                    ctx.fillStyle = isHovered ? CONFIG.colors.primaryHover : `rgba(255,255,255,${alpha * 0.95})`;
                    ctx.fill();
                    ctx.lineWidth = 1.5 * pixelRatio;
                    ctx.strokeStyle = `rgba(29, 158, 117, ${alpha * 0.8})`;
                    ctx.stroke();
                    
                    ctx.fillStyle = isHovered ? CONFIG.colors.textLight : (window.document.body.classList.contains('theme-winter') ? `rgba(20, 31, 26, ${alpha})` : `rgba(85, 100, 95, ${alpha})`);
                    const fontSize = (mobileMode ? CONFIG.typography.mobileBase : CONFIG.typography.desktopBase) * pixelRatio;
                    ctx.font = `600 ${fontSize}px ${CONFIG.typography.family}`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(skill.name, label.cx, label.cy + (1 * pixelRatio));
                }
            });
            ctx.globalAlpha = 1;
        };

        const tick = () => {
            state.time++;
            const pixelRatio = window.devicePixelRatio || 1;
            
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            state.wind += (state.targetWind - state.wind) * 0.04;

            if (state.growing && state.rawProgress < 1) {
                state.rawProgress = Math.min(1, state.rawProgress + 0.0045); // Increased from 0.0018 for faster growth
                state.visualProgress = easeOutCubic(state.rawProgress);

                if (state.visualProgress > 0.85 && !koalaVisible) {
                    setKoalaVisible(true);
                }
            }

            const screenW = window.innerWidth;
            const screenH = window.innerHeight;
            const isMobileView = screenW < 768;
            
            const paddingX = isMobileView ? 30 : 80; 
            const paddingY = isMobileView ? 60 : 80;
            const maxTreeScale = isMobileView ? 1.05 : 0.85; 
            const scale = Math.min((screenW - paddingX) / CONFIG.virtual.width, (screenH - paddingY) / CONFIG.virtual.height) * maxTreeScale;
            
            const offsetX = (screenW / 2) - (CONFIG.virtual.width / 2) * scale;
            const offsetY = screenH - CONFIG.virtual.height * scale - (isMobileView ? 80 : 20); 

            if (state.grown || state.growing) {
                ctx.save();
                ctx.scale(pixelRatio, pixelRatio);
                ctx.translate(offsetX, offsetY);
                ctx.scale(scale, scale);
                
                drawTree(state.visualProgress);
                
                if (state.visualProgress > 0.9 && !state.leavesBorn) {
                    state.leavesBorn = true;
                    state.blossomPoints.forEach(t => {
                        if (Math.random() > 0.3) {
                            const b = t.parentBranch;
                            const sway = Math.sin(state.time * 0.0008 + b.x1 * 0.01) * state.wind * (b.depth * 0.5);
                            state.fallingLeaves.push(new FallingLeaf(b.x2 + sway, b.y2));
                        }
                    });
                }

                if (state.leavesBorn && Math.random() < 0.03 && state.fallingLeaves.length < 75) {
                    const t = state.blossomPoints[Math.floor(Math.random() * state.blossomPoints.length)];
                    const b = t.parentBranch;
                    const sway = Math.sin(state.time * 0.0008 + b.x1 * 0.01) * state.wind * (b.depth * 0.5);
                    state.fallingLeaves.push(new FallingLeaf(b.x2 + sway, b.y2));
                }

                for (let i = state.fallingLeaves.length - 1; i >= 0; i--) {
                    const l = state.fallingLeaves[i];
                    l.update(state.wind);
                    if (l.life <= 0) state.fallingLeaves.splice(i, 1);
                    else l.draw(ctx);
                }
                ctx.restore();

                drawBlossomsAndLabels(state.visualProgress, scale, offsetX, offsetY, pixelRatio);
            }

            state.rafId = requestAnimationFrame(tick);
        };

        tick(); 

        const processHit = (mx, my) => {
            let hit = null;
            const mobileMode = window.innerWidth < 768;
            const pixelRatio = window.devicePixelRatio || 1;
            
            for (let i = 0; i < state.blossomClusters.length; i++) {
                const c = state.blossomClusters[i];
                const dx = mx - c.x, dy = my - c.y;
                const minTouchRadius = 24; 
                const effectiveRadius = mobileMode 
                    ? Math.max(c.radius, minTouchRadius) 
                    : c.radius * 1.2;

                if (dx * dx + dy * dy < effectiveRadius ** 2) { 
                    hit = c; break; 
                }
                
                const l = state.labels[i];
                if (l && l.init) {
                    const ldx = Math.abs(mx - l.cx / pixelRatio);
                    const ldy = Math.abs(my - l.cy / pixelRatio);
                    if (ldx < (l.width / pixelRatio) / 2 + 5 && ldy < (l.height / pixelRatio) / 2 + 5) {
                        hit = c; break;
                    }
                }
            }
            return hit;
        };

        const handlePointerMove = (e) => {
            const mx = e.clientX || (e.touches && e.touches[0]?.clientX);
            const my = e.clientY || (e.touches && e.touches[0]?.clientY);
            if (!mx || !my) return;

            if (e.type === 'mousemove') {
                state.targetWind = ((mx / window.innerWidth) - 0.5) * 1.8;
            }

            const hit = processHit(mx, my);
            state.currentHit = hit;
            
            if (hit) {
                setTooltip({ visible: true, text: `${hit.skill.name} • ${hit.skill.level}%`, x: mx + 15, y: my - 40 });
                canvas.style.cursor = 'pointer';
            } else {
                setTooltip(t => ({ ...t, visible: false }));
                canvas.style.cursor = 'default';
            }
        };

        const handlePointerDown = (e) => {
            const mx = e.clientX || (e.changedTouches && e.changedTouches[0]?.clientX);
            const my = e.clientY || (e.changedTouches && e.changedTouches[0]?.clientY);
            
            const hit = processHit(mx, my);
            if (hit) {
                if (hit.skill.name === 'UDEMY CERTIFICATES') {
                    setCertOverlayVisible(true);
                } else {
                    setModal({ visible: true, skill: hit.skill });
                }
            }
        };

        canvas.addEventListener('mousemove', handlePointerMove);
        canvas.addEventListener('touchmove', handlePointerMove, { passive: true });
        canvas.addEventListener('click', handlePointerDown);
        canvas.addEventListener('touchstart', handlePointerDown, { passive: true });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('deviceorientation', handleOrientation);
            canvas.removeEventListener('mousemove', handlePointerMove);
            canvas.removeEventListener('touchmove', handlePointerMove);
            canvas.removeEventListener('click', handlePointerDown);
            canvas.removeEventListener('touchstart', handlePointerDown);
            if (state.rafId) cancelAnimationFrame(state.rafId);
        };
    }, [active]);

    useEffect(() => {
        if (!active) {
            setIsExiting(true);
            setTooltip({ visible: false, text: '', x: 0, y: 0 });
            setModal({ visible: false, skill: null });

            exitTimerRef.current = setTimeout(() => {
                const state = stateRef.current;
                if (state.rafId) cancelAnimationFrame(state.rafId);
                state.growing = false;
                state.grown = false;
                state.rawProgress = 0;
                state.visualProgress = 0;
                state.leavesBorn = false;
                state.fallingLeaves = [];
                state.labels = [];
                state.hasStarted = false;
                state.currentHit = null;
                setIsExiting(false);
                setKoalaVisible(false);
            }, 900);
        } else {
            if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
            setIsExiting(false);
            setKoalaVisible(false);
        }
        return () => { if (exitTimerRef.current) clearTimeout(exitTimerRef.current); };
    }, [active]);

    const desktopTooltipStyle = {
        opacity: tooltip.visible && !isMobile ? 1 : 0,
        transform: `translate(${tooltip.x}px, ${tooltip.y}px)`,
        display: isMobile ? 'none' : 'block'
    };

    return (
        <div className={`skills-tree-overlay ${active ? 'active' : ''} ${isExiting ? 'exiting' : ''}`}>
            <style>{`
                .skills-tree-overlay { position: fixed; inset: 0; background: ${CONFIG.colors.background}; z-index: 100; transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1); font-family: ${CONFIG.typography.family}; overflow: hidden; opacity: 0; pointer-events: none; }
                .skills-tree-overlay.active { opacity: 1; pointer-events: auto; }
                .skills-tree-overlay.exiting { opacity: 0; pointer-events: none; }
                .skills-tree-canvas { position: absolute; inset: 0; touch-action: none; cursor: default; }
                
                .koala-container { 
                    position: fixed; 
                    bottom: 20px; 
                    left: 64%; /* Next to tree on desktop */
                    width: 140px; 
                    height: 140px; 
                    z-index: 2000000; 
                    transition: opacity 1.2s ease, transform 1.2s cubic-bezier(0.23, 1, 0.32, 1); 
                    opacity: 0; 
                    transform: translateX(-50%) translateY(20px); 
                    pointer-events: none; 
                }
                .koala-container.visible { opacity: 1; transform: translateX(-50%) translateY(0); }
                
                @media (max-width: 768px) {
                    .koala-container {
                        left: 55%; /* Centered alignment for mobile tree base */
                        width: 100px;
                        height: 100px;
                        bottom: 15px;
                    }
                }
                
                .skills-tooltip { position: fixed; top: 0; left: 0; background: rgba(255, 255, 255, 0.95); padding: 8px 16px; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); font-weight: bold; color: ${CONFIG.colors.textDark}; pointer-events: none; z-index: 150; transition: opacity 0.2s; white-space: nowrap; }
                
                .skills-close-btn { 
                    position: fixed; 
                    top: 24px; 
                    right: 24px; 
                    z-index: 150; 
                    background: var(--bg); 
                    color: var(--ink); 
                    border: 1px solid var(--border); 
                    padding: 8px 18px 8px 14px; 
                    border-radius: 99px; 
                    cursor: pointer; 
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
                    outline: none;
                }
                .skills-bar {
                    display: inline-block;
                    width: 3px;
                    height: 18px;
                    border-radius: 2px;
                    background: var(--accent);
                    flex-shrink: 0;
                }
                .skills-label {
                    font-family: 'DM Mono', monospace;
                    font-size: 10px;
                    letter-spacing: 0.22em;
                    color: var(--ink);
                    font-weight: 400;
                }
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
                    outline: none;
                }
                .skills-close-btn:hover { 
                    border-color: var(--accent); 
                    transform: scale(1.05); 
                    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
                }
                
                .skills-modal-overlay { position: fixed; inset: 0; background: rgba(10, 15, 12, 0.9); z-index: 200; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
                .skills-modal-overlay.active { opacity: 1; pointer-events: auto; }
                
                .skills-modal-content { 
                    background: rgba(255, 255, 255, 0.92); 
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    padding: 48px 40px; 
                    border-radius: 32px; 
                    width: 600px; 
                    max-width: 90%; 
                    max-height: 85vh;
                    overflow-y: auto;
                    position: relative; 
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.2); 
                    transform: scale(0.9) translateY(30px); 
                    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                    scrollbar-width: none;
                }
                .skills-modal-content::-webkit-scrollbar { display: none; }
                .skills-modal-overlay.active .skills-modal-content { transform: scale(1) translateY(0); }
                
                .skills-modal-close { 
                    position: absolute; 
                    top: 24px; 
                    right: 24px; 
                    background: #f3f7f5; 
                    border: none; 
                    width: 40px; 
                    height: 40px; 
                    border-radius: 50%; 
                    font-size: 1.5rem; 
                    cursor: pointer; 
                    color: ${CONFIG.colors.textDark}; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    transition: all 0.2s; 
                    z-index: 10;
                }
                .skills-modal-close:hover { background: #e8edea; transform: rotate(90deg); }
                
                .skills-modal-title { 
                    margin: 0 0 4px 0; 
                    font-size: 2rem; 
                    color: ${CONFIG.colors.textDark}; 
                    font-family: 'Syne', sans-serif; 
                    font-weight: 800;
                    letter-spacing: -0.02em;
                }
                .skills-modal-role {
                    font-family: ${CONFIG.typography.family};
                    font-size: 0.9rem;
                    color: ${CONFIG.colors.primary};
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 24px;
                    font-weight: 600;
                }
                .skills-modal-level-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 12px;
                }
                .skills-modal-level-label { font-family: ${CONFIG.typography.family}; font-size: 0.8rem; color: #667870; font-weight: 600; }
                .skills-modal-level-val { font-family: ${CONFIG.typography.family}; color: ${CONFIG.colors.textDark}; font-weight: 700; font-size: 0.9rem; }
                
                .skills-modal-bar-wrap { width: 100%; height: 6px; background: #eef3f0; border-radius: 3px; overflow: hidden; margin-bottom: 40px; }
                .skills-modal-bar { height: 100%; background: ${CONFIG.colors.primary}; border-radius: 3px; transition: width 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }

                .skills-details-list { list-style: none; padding: 0; margin: 0 0 40px 0; text-align: left; }
                .skills-details-item { 
                    position: relative; 
                    padding-left: 28px; 
                    margin-bottom: 20px; 
                    font-size: 1rem; 
                    line-height: 1.6; 
                    color: #3d4d46; 
                }
                .skills-details-item::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 10px;
                    width: 8px;
                    height: 2px;
                    background: ${CONFIG.colors.primary};
                    border-radius: 2px;
                }

                .skills-testimonial {
                    background: #f8fbf9;
                    border-left: 4px solid ${CONFIG.colors.primary};
                    padding: 24px;
                    border-radius: 0 16px 16px 0;
                    text-align: left;
                    margin-top: 40px;
                }
                .testimonial-quote {
                    font-style: italic;
                    color: #141f1a;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 16px;
                }
                .testimonial-author {
                    font-weight: 700;
                    font-size: 0.85rem;
                    color: ${CONFIG.colors.primary};
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 768px) {
                    .skills-modal-content { padding: 40px 24px; border-radius: 24px; width: 95%; max-height: 80vh; }
                    .skills-modal-title { font-size: 1.5rem; }
                    .skills-details-item { font-size: 0.9rem; }
                }

            `}</style>

            <canvas ref={canvasRef} className="skills-tree-canvas" />

            {koalaVisible && createPortal(
                <div className={`koala-container ${koalaVisible ? 'visible' : ''}`}>
                    <Lottie animationData={koalaData} loop={true} />
                </div>,
                document.body
            )}

            {/* Removing growing text per request */}

            <div className="skills-tooltip" style={desktopTooltipStyle}>
                {tooltip.text}
            </div>

            <button className="skills-close-btn" onClick={onClose} aria-label="Close skills">
                <span className="skills-bar"></span>
                <span className="skills-label">CLOSE</span>
            </button>

            <div className={`skills-modal-overlay ${modal.visible ? 'active' : ''}`} onClick={e => { if (e.target === e.currentTarget) setModal({ visible: false, skill: null }); }}>
                <div className="skills-modal-content">
                    <button className="skills-modal-close" onClick={() => setModal({ visible: false, skill: null })}>×</button>
                    {modal.skill && (
                        <>
                            <h2 className="skills-modal-title">{modal.skill.name}</h2>
                            <p className="skills-modal-role">{modal.skill.role}</p>
                            
                            <div className="skills-modal-level-row">
                                <span className="skills-modal-level-label">ENGINEERING PROFICIENCY</span>
                                <span className="skills-modal-level-val">{modal.skill.level}%</span>
                            </div>
                            <div className="skills-modal-bar-wrap">
                                <div className="skills-modal-bar" style={{ width: `${modal.skill.level}%` }} />
                            </div>

                            <ul className="skills-details-list">
                                {modal.skill.details.map((detail, idx) => (
                                    <li key={idx} className="skills-details-item">{detail}</li>
                                ))}
                            </ul>

                            {modal.skill.testimonial && (
                                <div className="skills-testimonial">
                                    <p className="testimonial-quote">"{modal.skill.testimonial.quote}"</p>
                                    <p className="testimonial-author">— {modal.skill.testimonial.author}</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>


            {createPortal(
                <CertificateOverlay active={certOverlayVisible} onClose={() => setCertOverlayVisible(false)} />,
                document.body
            )}
        </div>
    );
};

export default SkillsAnimation;
