import React, { useEffect, useRef, useState } from 'react';
import './Assets/SkillsTree.css';
import Lottie from 'lottie-react';
import koalaData from './Assets/Images/Portrait/Meditating Koala.json';

const skills = [
    { name: 'REACT ARCHITECTURE', level: 94 },
    { name: 'SYSTEM DESIGN', level: 82 },
    { name: 'THREE.JS / WEBGL', level: 85 },
    { name: 'CREATIVE TECH', level: 88 },
    { name: 'TYPESCRIPT', level: 88 },
    { name: 'DEVOPS / CI', level: 76 },
    { name: 'UI/UX DESIGN', level: 90 }
];

const MAX_DEPTH = 4;

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
    const exitTimerRef = useRef(null);

    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }

    function buildTree(W, H, state) {
        state.branches = [];
        state.blossomPoints = [];
        const cx = W * 0.55;
        const trunkH = H * 0.28;
        addBranch(cx, H, cx, H - trunkH, 12, 0, state);

        if (state.blossomPoints.length >= skills.length) {
            let selected = [];
            let candidates = [...state.blossomPoints];

            let highestIdx = 0;
            for (let i = 1; i < candidates.length; i++) {
                if (candidates[i].parentBranch.y2 < candidates[highestIdx].parentBranch.y2) highestIdx = i;
            }
            selected.push(candidates.splice(highestIdx, 1)[0]);

            while (selected.length < skills.length && candidates.length > 0) {
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
                skill: skills[i]
            }));
        }
    }

    function addBranch(x1, y1, x2, y2, w, depth, state) {
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
                    color: ['#1d9e75', '#6a9080', '#c8dcd2', '#85bfa9'][Math.floor(Math.random() * 4)],
                    opacity: Math.random() * 0.15 + 0.05,
                    rustleSpeed: Math.random() * 0.002 + 0.001,
                    rustleOffset: Math.random() * Math.PI * 2
                });
            }
        }
        const branch = { x1, y1, x2, y2, w, depth, leaves };
        state.branches.push(branch);

        if (depth === MAX_DEPTH) {
            state.blossomPoints.push({ parentBranch: branch });
            return;
        }

        const len = Math.hypot(x2 - x1, y2 - y1);
        const angle = Math.atan2(y2 - y1, x2 - x1);

        for (let i = 0; i < 2; i++) {
            const sign = i === 0 ? 1 : -1;
            const spread = (0.45 + Math.random() * 0.35) * sign;
            const nextAngle = angle + spread;
            const nextLen = len * (0.65 + Math.random() * 0.1);
            const nx = x2 + Math.cos(nextAngle) * nextLen;
            const ny = y2 + Math.sin(nextAngle) * nextLen;
            addBranch(x2, y2, nx, ny, w * 0.72, depth + 1, state);
        }
    }

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
            const styles = [['#309900', '#005600'], ['#5e9900', '#2b5600'], ['#999900', '#564500'], ['#1d9e75', '#054034']];
            this.colors = styles[Math.floor(Math.random() * styles.length)];
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
            ctx.beginPath();
            ctx.moveTo(-3, 0);
            ctx.quadraticCurveTo(this.length * 0.5, this.width * 0.2, this.length * 0.9, 0);
            ctx.strokeStyle = 'rgba(0,0,0,0.25)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
        }
    }

    useEffect(() => {
        if (!active) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const state = stateRef.current;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (state.grown) buildTree(canvas.width, canvas.height, state);
        };
        resize();
        window.addEventListener('resize', resize);

        // Auto-start the tree
        if (!state.hasStarted) {
            state.hasStarted = true;
            buildTree(canvas.width, canvas.height, state);
            state.growing = true;
            state.grown = true;
        }

        function drawTree(prog, W, H) {
            const treeProg = Math.min(1, prog / 0.8);
            ctx.lineCap = 'round';

            for (let i = 0; i < state.branches.length; i++) {
                const b = state.branches[i];
                const startProg = b.depth / (MAX_DEPTH + 1);
                const endProg = (b.depth + 1) / (MAX_DEPTH + 1);
                if (treeProg < startProg) continue;
                let segProg = treeProg < endProg ? (treeProg - startProg) / (endProg - startProg) : 1;
                const sway = Math.sin(state.time * 0.0008 + b.x1 * 0.01) * state.wind * (b.depth * 0.5);
                const endX = b.x1 + (b.x2 + sway - b.x1) * segProg;
                const endY = b.y1 + (b.y2 - b.y1) * segProg;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(20,31,26,${0.8 - b.depth * 0.12})`;
                ctx.lineWidth = b.w;
                ctx.moveTo(b.x1, b.y1);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }

            for (let i = 0; i < state.branches.length; i++) {
                const b = state.branches[i];
                if (!b.leaves || !b.leaves.length) continue;
                const startProg = b.depth / (MAX_DEPTH + 1);
                const endProg = (b.depth + 1) / (MAX_DEPTH + 1);
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
                        ctx.ellipse(attachX + l.offsetX + rustleX + leafWind, attachY + l.offsetY, l.size * eased, l.size * 0.8 * eased, (l.offsetX + l.offsetY) * 0.02, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
            ctx.globalAlpha = 1;
        }

        function drawBlossoms(prog) {
            state.blossomClusters = [];
            const bloomStart = 0.8;
            const bloomProg = Math.max(0, (prog - bloomStart) / (1 - bloomStart));
            if (bloomProg <= 0) return;

            state.limitedBlossomPoints.forEach((t, idx) => {
                const delay = (idx / state.limitedBlossomPoints.length) * 0.3;
                const p = Math.max(0, Math.min(1, (bloomProg - delay) * 1.8));
                if (p <= 0) return;

                const b = t.parentBranch;
                const skill = t.skill;
                const sway = Math.sin(state.time * 0.0008 + b.x1 * 0.01) * state.wind * (b.depth * 0.5);
                const tx = b.x2 + sway;
                const ty = b.y2;
                const cr = 10 + (skill.level / 100) * 12;
                state.blossomClusters.push({ x: tx, y: ty, skill, radius: cr });

                ctx.globalAlpha = 0.12 * p;
                ctx.fillStyle = '#1d9e75';
                ctx.beginPath();
                ctx.arc(tx, ty, cr * 2, 0, Math.PI * 2);
                ctx.fill();

                ctx.globalAlpha = 0.7 * p;
                ctx.strokeStyle = '#1d9e75';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(tx, ty, cr * p, 0, Math.PI * 2);
                ctx.stroke();

                ctx.globalAlpha = p;
                ctx.fillStyle = '#1d9e75';
                ctx.beginPath();
                ctx.arc(tx, ty, 5 * p, 0, Math.PI * 2);
                ctx.fill();

                if (p > 0.85) {
                    const alpha = (p - 0.85) * 6.6;
                    ctx.globalAlpha = alpha;
                    ctx.font = "600 13px 'DM Mono', monospace";
                    const textWidth = ctx.measureText(skill.name).width;
                    const chipW = textWidth + 24;
                    const chipH = 32;
                    const chipX = tx - chipW / 2;
                    const chipY = ty - cr - 36;
                    ctx.beginPath();
                    ctx.roundRect(chipX, chipY, chipW, chipH, 16);
                    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                    ctx.fill();
                    ctx.lineWidth = 1.5;
                    ctx.strokeStyle = `rgba(29,158,117,${alpha * 0.5})`;
                    ctx.stroke();
                    ctx.fillStyle = `rgba(20,31,26,${alpha})`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(skill.name, tx, chipY + chipH / 2 + 1);
                }
            });
            ctx.globalAlpha = 1;
        }

        function loop() {
            state.time++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            state.wind += (state.targetWind - state.wind) * 0.04;

            if (state.growing && state.rawProgress < 1) {
                state.rawProgress += 0.0018;
                if (state.rawProgress > 1) state.rawProgress = 1;
                state.visualProgress = easeOutCubic(state.rawProgress);

                if (state.visualProgress > 0.85 && !koalaVisible) {
                    setKoalaVisible(true);
                }
            }

            if (state.grown || state.growing) {
                drawTree(state.visualProgress, canvas.width, canvas.height);
                drawBlossoms(state.visualProgress);

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
            }

            for (let i = state.fallingLeaves.length - 1; i >= 0; i--) {
                const l = state.fallingLeaves[i];
                l.update(state.wind);
                if (l.life <= 0) state.fallingLeaves.splice(i, 1);
                else l.draw(ctx);
            }

            state.rafId = requestAnimationFrame(loop);
        }

        loop();

        const handleMouseMove = (e) => {
            const mx = e.clientX, my = e.clientY;
            state.targetWind = ((mx / canvas.width) - 0.5) * 1.8;

            let hit = null;
            for (let i = 0; i < state.blossomClusters.length; i++) {
                const c = state.blossomClusters[i];
                const dx = mx - c.x, dy = my - c.y;
                if (dx * dx + dy * dy < (c.radius + 15) ** 2) { hit = c; break; }
            }
            state.currentHit = hit;
            if (hit) {
                setTooltip({ visible: true, text: `${hit.skill.name} • ${hit.skill.level}%`, x: mx + 15, y: my - 40 });
                canvas.style.cursor = 'pointer';
            } else {
                setTooltip(t => ({ ...t, visible: false }));
                canvas.style.cursor = 'default';
            }
        };

        const handleClick = () => {
            if (state.currentHit) setModal({ visible: true, skill: state.currentHit.skill });
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleClick);
            if (state.rafId) cancelAnimationFrame(state.rafId);
        };
    }, [active]);

    // Smooth exit: play CSS fade-out, then reset canvas state
    useEffect(() => {
        if (!active) {
            // Start exit animation
            setIsExiting(true);
            setTooltip({ visible: false, text: '', x: 0, y: 0 });
            setModal({ visible: false, skill: null });

            // Wait for CSS transition to finish before tearing down
            exitTimerRef.current = setTimeout(() => {
                const state = stateRef.current;
                if (state.rafId) cancelAnimationFrame(state.rafId);
                state.growing = false;
                state.grown = false;
                state.rawProgress = 0;
                state.visualProgress = 0;
                state.leavesBorn = false;
                state.fallingLeaves = [];
                state.hasStarted = false;
                state.currentHit = null;
                setIsExiting(false);
                setKoalaVisible(false);
            }, 900); // slightly longer than the CSS transition
        } else {
            // Entering — cancel any pending exit cleanup
            if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
            setIsExiting(false);
            setKoalaVisible(false);
        }
        return () => { if (exitTimerRef.current) clearTimeout(exitTimerRef.current); };
    }, [active]);

    return (
        <div className={`skills-tree-overlay ${active ? 'active' : ''} ${isExiting ? 'exiting' : ''}`}>
            <canvas ref={canvasRef} className="skills-tree-canvas" />

            {/* Meditating Koala */}
            <div className={`koala-container ${koalaVisible ? 'visible' : ''}`}>
                <Lottie animationData={koalaData} loop={true} />
            </div>

            {/* Tooltip */}
            <div
                className="skills-tooltip"
                style={{
                    opacity: tooltip.visible ? 1 : 0,
                    transform: `translate(${tooltip.x}px, ${tooltip.y}px)`
                }}
            >
                {tooltip.text}
            </div>

            {/* Close Button */}
            <button className="skills-close-btn" onClick={onClose}>× CLOSE</button>

            {/* Skill Modal */}
            <div className={`skills-modal-overlay ${modal.visible ? 'active' : ''}`} onClick={e => { if (e.target === e.currentTarget) setModal({ visible: false, skill: null }); }}>
                <div className="skills-modal-content">
                    <button className="skills-modal-close" onClick={() => setModal({ visible: false, skill: null })}>×</button>
                    {modal.skill && (
                        <>
                            <h2 className="skills-modal-title">{modal.skill.name}</h2>
                            <div className="skills-modal-level">Proficiency: {modal.skill.level}%</div>
                            <div className="skills-modal-bar-wrap">
                                <div className="skills-modal-bar" style={{ width: `${modal.skill.level}%` }} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SkillsAnimation;
