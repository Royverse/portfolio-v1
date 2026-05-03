import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import longCatData from './Assets/Images/Portrait/longcat.json';

const LongCat = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Wait a bit after load to start
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible || !longCatData || !containerRef.current) return;

    // GSAP Walk across the bottom
    const walkDuration = 40; 
    const screenWidth = window.innerWidth;
    const catWidth = 300; 

    const anim = gsap.fromTo(containerRef.current, 
      { x: -catWidth, opacity: 1, scaleX: -1 }, 
      { 
        x: screenWidth + catWidth, 
        scaleX: -1,
        duration: walkDuration, 
        ease: "none",
        onComplete: () => {
          setVisible(false);
        }
      }
    );

    return () => {
      anim.kill();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        bottom: '-20px', 
        left: 0,
        width: '300px',
        zIndex: 2, // Lower z-index to go behind portrait
        pointerEvents: 'none',
        opacity: 0
      }}
    >
      <Lottie 
        animationData={longCatData} 
        loop={true} 
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default LongCat;
