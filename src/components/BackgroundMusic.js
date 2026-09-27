import React, { useState, useRef, useEffect } from 'react';
import './BackgroundMusic.css';
// Using new URL() for robust asset resolution in Parcel 2
const audioFile = new URL('../Assets/Sounds/experience_piano_cover.mp3', import.meta.url).href;

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.08; // Lowered volume to mask background noise
      audioRef.current.loop = true;
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className={`bg-music-wrap ${isPlaying ? 'playing' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <audio ref={audioRef} src={audioFile} preload="none" />
      
      <button 
        className="music-toggle-btn" 
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
      >
        <div className="equalizer">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </button>

      <div className="music-info-panel">
        <div className="music-text-group">
          <span className="music-title">Experience · Ludovico Einaudi</span>
          <span className="music-subtitle">Piano cover by Roy Mootsana</span>
        </div>
        <a 
          href="https://youtu.be/eHVTFIRLfzE?si=-9rVQJUgXYJnjr4A" 
          target="_blank" 
          rel="noopener noreferrer"
          className="youtube-link"
          aria-label="Listen on YouTube"
          onClick={(e) => e.stopPropagation()}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="yt-icon">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BackgroundMusic;
