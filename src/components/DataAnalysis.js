import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import dataAnalysisData from '../Assets/Images/Portrait/Data Analysis.json';
import PokemonRunner from './PokemonRunner';

const DataAnalysis = ({ visible, theme }) => {
  const [showIntro, setShowIntro] = useState(true);

  // Re-trigger intro when theme changes if not already visible
  useEffect(() => {
    setShowIntro(true);
  }, [theme]);

  return (
    <div 
      className={`data-analysis-wrap ${!visible ? 'hidden' : ''}`}
      style={{ 
        position: 'relative',
        height: '130px',
        width: '200px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {showIntro ? (
        <PokemonRunner theme={theme} onComplete={() => setShowIntro(false)} />
      ) : (
        <Lottie 
          animationData={dataAnalysisData} 
          loop={true} 
          speed={0.4}
          style={{ width: '150px', height: 'auto' }}
        />
      )}
    </div>
  );
};

export default DataAnalysis;
