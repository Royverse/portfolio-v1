import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import pikachuData from '../Assets/Images/Portrait/Pikachu.json';
import bulbasaurData from '../Assets/Images/Portrait/Bulbasaur.json';

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
      <Lottie 
        animationData={animationData} 
        loop={true} 
        speed={1.5}
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
};

export default PokemonRunner;
