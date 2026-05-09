import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import pikachuData from '../Assets/Images/Portrait/Pikachu.json';
import bulbasaurData from '../Assets/Images/Portrait/Bulbasaur.json';

const LightningSparks = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
      {/* Intense Electric Core Glow */}
      <motion.div
        style={{
          position: 'absolute',
          top: '8px',
          left: '-32px',
          bottom: '8px',
          right: '16px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(250, 204, 21, 0.8)',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
        animate={{ opacity: [0.2, 0.7, 0.3, 0.8, 0.2], scale: [0.9, 1.1, 0.95, 1.05, 0.9] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Main Top Lightning Streak (Jagged Bolt) */}
      <motion.svg
        viewBox="0 0 100 30"
        style={{
          position: 'absolute',
          top: '25%',
          left: '-96px',
          width: '160px',
          height: '40px',
          color: '#FDE047',
          filter: 'drop-shadow(0 0 8px rgba(253, 224, 71, 1))',
          originX: 1,
        }}
        preserveAspectRatio="none"
        animate={{ 
          opacity: [0, 1, 0, 0], 
          scaleX: [0.3, 1.5, 0.5, 0],
          x: [0, -20, -50, -50]
        }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut", delay: 0.1, repeatDelay: 0.3 }}
      >
        <path d="M100 15 L70 5 L80 15 L40 8 L50 22 L0 15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="miter" strokeLinecap="round" />
      </motion.svg>

      {/* Bottom Jagged Bolt */}
      <motion.svg
        viewBox="0 0 100 30"
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '-80px',
          width: '128px',
          height: '32px',
          color: '#FEF9C3',
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))',
          originX: 1,
        }}
        preserveAspectRatio="none"
        animate={{ 
          opacity: [0, 0, 1, 0], 
          scaleX: [0, 0.5, 1.2, 0.2],
          x: [0, 0, -30, -60]
        }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeOut", delay: 0.4, repeatDelay: 0.4 }}
      >
        <path d="M100 15 L80 25 L85 15 L30 22 L40 5 L0 15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter" strokeLinecap="round" />
      </motion.svg>

      {/* Straight High-Speed Anime Speed Lines */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '-112px',
          height: '4px',
          backgroundColor: '#FFFFFF',
          borderRadius: '9999px',
          filter: 'drop-shadow(0 0 8px rgba(253, 224, 71, 1))',
          originX: 1,
        }}
        animate={{
          width: ["0px", "90px", "20px", "0px"],
          opacity: [0, 1, 0, 0],
          x: [0, -40, -90, -90]
        }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear", delay: 0.2, repeatDelay: 0.5 }}
      />
    </div>
  );
};

const BulbasaurLeaves = () => {
  const leafCount = 10;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
      {/* Nature Core Glow */}
      <motion.div
        style={{
          position: 'absolute',
          top: '12px',
          left: '-24px',
          bottom: '12px',
          right: '24px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(34, 197, 94, 0.45)',
          filter: 'blur(35px)',
          mixBlendMode: 'screen',
        }}
        animate={{ opacity: [0.2, 0.6, 0.25], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* High-speed leaves flying off back */}
      {Array.from({ length: leafCount }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            top: `${20 + Math.random() * 60}%`,
            left: '30px',
            width: `${10 + Math.random() * 10}px`,
            height: `${8 + Math.random() * 8}px`,
            background: i % 2 === 0 
              ? 'linear-gradient(to bottom right, #309900, #005600)' 
              : 'linear-gradient(to bottom right, #5e9900, #2b5600)',
            borderRadius: '5% 40% 70%',
            transform: 'skew(20deg)',
            opacity: 0.8,
          }}
          animate={{
            x: [0, -140 - Math.random() * 120],
            y: [0, (Math.random() - 0.5) * 50],
            rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            opacity: [0.8, 1, 0],
          }}
          transition={{
            duration: 0.7 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 1.5,
          }}
        />
      ))}

      {/* Quick Speed Lines (Green-tinted) */}
      <motion.div
        style={{
          position: 'absolute',
          top: '40%',
          left: '-100px',
          height: '2px',
          backgroundColor: '#4ade80',
          borderRadius: '9999px',
          filter: 'blur(1px)',
          originX: 1,
        }}
        animate={{
          width: ["0px", "100px", "0px"],
          opacity: [0, 0.8, 0],
          x: [0, -80, -150]
        }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "linear", delay: 0.3 }}
      />
    </div>
  );
};

const PokemonRunner = ({ theme, onComplete }) => {
  const isWinter = theme === 'winter';
  const animationData = isWinter ? bulbasaurData : pikachuData;

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: [ -100, 250 ],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ 
        duration: 3.5, 
        times: [0, 0.1, 0.9, 1],
        ease: "linear"
      }}
      onAnimationComplete={onComplete}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '120px',
        height: '120px',
        pointerEvents: 'none',
        zIndex: 100
      }}
    >
      {/* Dynamic Aura effects based on theme */}
      {isWinter ? <BulbasaurLeaves /> : <LightningSparks />}

      <Lottie 
        animationData={animationData} 
        loop={true} 
        speed={1.5}
        style={{ width: '100%', height: '100%', position: 'relative', zIndex: 1 }}
      />
    </motion.div>
  );
};

export default PokemonRunner;
