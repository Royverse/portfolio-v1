import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Assets/Menu.css';

const skills = [
  { label: 'REACT',     fill: '#5DCAA5', dark: '#04342C' },
  { label: 'NODE.JS',   fill: '#7dd4b5', dark: '#04342C' },
  { label: 'THREE.JS',  fill: '#9FE1CB', dark: '#085041' },
  { label: 'PYTHON',    fill: '#5DCAA5', dark: '#04342C' },
  { label: 'UI DESIGN', fill: '#7dd4b5', dark: '#085041' },
  { label: 'POSTGRES',  fill: '#9FE1CB', dark: '#04342C' },
  { label: 'DEVOPS',    fill: '#5DCAA5', dark: '#085041' },
  { label: 'FIGMA',     fill: '#7dd4b5', dark: '#04342C' },
];

const SkillsAnimation = ({ active, onClose }) => {
  const canvasRef = useRef(null);
  const coreRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const blossomRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const animRef = useRef(null);
  const swayTweens = useRef([]);
  const n = skills.length;
  
  useEffect(() => {
    if (!active) return;
    
    // Canvas setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initial GSAP setup
    skills.forEach((_, i) => {
      const wrap = document.getElementById(`pw-${i}`);
      const angle = (360 / n) * i - 90;
      gsap.set(wrap, { rotation: angle, scaleY: 0, opacity: 0, transformOrigin: '50% 100%' });
    });

    let currentParticles = [];
    
    const spawnParticles = () => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      for (let i = 0; i < 38; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 1.2;
        currentParticles.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 0.7 + Math.random() * 0.3,
          r: 1.5 + Math.random() * 2.5,
          decay: 0.008 + Math.random() * 0.012,
          color: ['#1d9e75','#9FE1CB','#5DCAA5','#0F6E56'][Math.floor(Math.random()*4)]
        });
      }

      const drawParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        currentParticles = currentParticles.filter(p => p.alpha > 0.01);
        currentParticles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.015;
          p.alpha -= p.decay;
          p.r *= 0.995;
        });
        ctx.globalAlpha = 1;
        if (currentParticles.length > 0) {
          animRef.current = requestAnimationFrame(drawParticles);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      };
      animRef.current = requestAnimationFrame(drawParticles);
    };

    const startSway = () => {
      swayTweens.current = [];
      for (let i = 0; i < n; i++) {
        const wrap = document.getElementById(`pw-${i}`);
        const baseAngle = (360 / n) * i - 90;
        const amplitude = 1.8 + Math.random() * 1.4;
        const dur = 2.8 + Math.random() * 1.6;
        const t = gsap.to(wrap, {
          rotation: baseAngle + amplitude,
          duration: dur,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: Math.random() * 1.2
        });
        swayTweens.current.push(t);
      }

      gsap.to(coreRef.current, {
        scale: 1.08,
        duration: 1.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });
    };

    const bloom = () => {
      spawnParticles();
      const tl = gsap.timeline({ onComplete: startSway });

      tl.to(coreRef.current, {
        opacity: 1, scale: 1,
        duration: 0.4,
        ease: 'back.out(3)'
      });

      tl.to([ring1Ref.current, ring2Ref.current], {
        opacity: 1, scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.12
      }, '-=0.2');

      gsap.to(ring1Ref.current, {
        scale: 3.5, opacity: 0,
        duration: 1.4, ease: 'power2.out',
        delay: 0.3
      });
      gsap.to(ring2Ref.current, {
        scale: 5.5, opacity: 0,
        duration: 1.8, ease: 'power2.out',
        delay: 0.5
      });

      for (let i = 0; i < n; i++) {
        const wrap = document.getElementById(`pw-${i}`);
        const lbl = document.getElementById(`lbl-${i}`);
        const delay = i * 0.07;

        tl.to(wrap, {
          scaleY: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'elastic.out(1, 0.55)',
        }, 0.15 + delay);

        tl.to(lbl, {
          opacity: 1,
          duration: 0.45,
          ease: 'power2.out'
        }, 0.55 + delay);
      }
    };

    // Give a little delay for the overlay to appear before blooming
    setTimeout(bloom, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animRef.current) cancelAnimationFrame(animRef.current);
      swayTweens.current.forEach(t => t.kill());
      gsap.killTweensOf(coreRef.current);
      gsap.killTweensOf([ring1Ref.current, ring2Ref.current]);
      for (let i = 0; i < n; i++) {
        gsap.killTweensOf(document.getElementById(`pw-${i}`));
        gsap.killTweensOf(document.getElementById(`lbl-${i}`));
      }
    };
  }, [active, n]);

  const petalD = `M 55 205 C 15 155, -5 75, 55 8 C 115 75, 95 155, 55 205 Z`;

  return (
    <div className={`skills-overlay ${active ? 'active' : ''}`}>
      <canvas className="particles" ref={canvasRef}></canvas>
      
      <div className="blossom-root" ref={blossomRef}>
        <div className="core-ring" ref={ring2Ref}></div>
        <div className="core-ring" ref={ring1Ref}></div>
        <div className="core" ref={coreRef}></div>
        
        {skills.map((skill, i) => (
          <div key={i} className="petal-wrap" id={`pw-${i}`}>
            <svg viewBox="0 0 110 210" className="petal-svg">
              <defs>
                <linearGradient id={`pg-${i}`} x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor={skill.fill} stopOpacity="1" />
                  <stop offset="100%" stopColor="#E1F5EE" stopOpacity="0.85" />
                </linearGradient>
              </defs>
              <path d={petalD} fill={`url(#pg-${i})`} stroke="#0F6E56" strokeWidth="0.6" opacity="0.92" />
              <line x1="55" y1="200" x2="55" y2="20" stroke="rgba(8,80,65,0.18)" strokeWidth="0.8" />
              <path d="M 55 160 Q 30 135 18 115" stroke="rgba(8,80,65,0.12)" strokeWidth="0.7" fill="none" />
              <path d="M 55 160 Q 80 135 92 115" stroke="rgba(8,80,65,0.12)" strokeWidth="0.7" fill="none" />
              <path d="M 55 110 Q 32 88 22 68" stroke="rgba(8,80,65,0.10)" strokeWidth="0.6" fill="none" />
              <path d="M 55 110 Q 78 88 88 68" stroke="rgba(8,80,65,0.10)" strokeWidth="0.6" fill="none" />
            </svg>
            <div className="petal-label" id={`lbl-${i}`}>{skill.label}</div>
          </div>
        ))}
      </div>
      
      <button className="reset-btn" onClick={onClose}>CLOSE</button>
    </div>
  );
};

export default SkillsAnimation;
