import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Resolve inspiration images dynamically using standard URL resolver syntax
const imgWarframeMenu = new URL('../warframe-menu-1920x1080.jpg', import.meta.url).href;
const imgWarframeRailjack = new URL('../L5L1VCu.jpg', import.meta.url).href;
const imgCyberpunkCore = new URL('../9v0cuznz03281.png', import.meta.url).href;
const imgHoloArch = new URL('../original-6ada7ba3d6854580ed7b865635b34fea.webp', import.meta.url).href;
const imgWireframe = new URL('../original-c7627ceb4cd5d66864ab5893238a0220.webp', import.meta.url).href;
const imgConsole = new URL('../original-c81536be180e8081ff37939f01166501.webp', import.meta.url).href;

const inspirationSlides = [
  {
    image: imgWarframeMenu,
    title: 'THE WARFRAME MUSE',
    caption: 'The definitive gaming inspiration. Holographic navigation panels floating in a 3D physical workspace, shifting dynamically with mouse movements.',
    tag: 'WARFRAME MENU UI'
  },
  {
    image: imgWarframeRailjack,
    title: 'DIEGETIC DESIGN LOGIC',
    caption: 'Sleek, transparent heads-up displays, glowing monospaced indicators, and a highly structured modular layout for high-density information.',
    tag: 'RAILJACK CONSOLE'
  },
  {
    image: imgCyberpunkCore,
    title: 'CYBERNETIC INTERFACE',
    caption: 'A masterclass in terminal-style tech UI, featuring bright warning elements, structural crosshairs, and data-grid micro-detailing.',
    tag: 'CYBERPUNK HUD'
  },
  {
    image: imgHoloArch,
    title: 'HOLOGRAPHIC ARCHITECTURE',
    caption: 'Early interface mockup showing glowing vertical rules, status dots, and adaptive contrast settings for maximum readability.',
    tag: 'WIDGET BLUEPRINT'
  },
  {
    image: imgWireframe,
    title: 'INTERACTIVE WIREFRAME',
    caption: 'Exploring core layouts where dynamic graphs, status widgets, and modular columns live harmoniously together.',
    tag: 'UI COMPOSITION'
  },
  {
    image: imgConsole,
    title: 'MINIMAL HIERARCHY',
    caption: 'Refining the minimal typography hierarchy: combining heavy futuristic headings with light, clean monospaced subheadings.',
    tag: 'CONSOLE SPEC'
  }
];

const DesignInspiration = ({ isOpen, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Reset slide index when modal is opened
  useEffect(() => {
    if (isOpen) {
      setActiveIdx(0);
    }
  }, [isOpen]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % inspirationSlides.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + inspirationSlides.length) % inspirationSlides.length);
  };

  // Close modal on Escape press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="insp-modal-portal">
          {/* Overlay Dimmer */}
          <motion.div
            className="insp-modal-dim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="insp-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            {/* Holographic Header */}
            <div className="insp-modal-header">
              <div className="header-meta">
                <span className="meta-tag">SYS.INSP // REF_ID: 104</span>
                <span className="meta-pulse"></span>
              </div>
              <h2 className="header-title">DESIGN STORY & INSPIRATION</h2>
              <button className="insp-close-btn" onClick={onClose} aria-label="Close Inspiration Dialog">
                <span className="btn-close-lbl">CLOSE // SYS.RET</span>
                <span className="btn-close-bar"></span>
              </button>
            </div>

            {/* Inner Content Grid */}
            <div className="insp-modal-content">
              
              {/* Narrative Panel (Left Column) */}
              <div className="insp-narrative-panel selectable-text">
                <section className="narrative-section">
                  <h3 className="section-subtitle">01 / THE DIEGETIC HUD</h3>
                  <p className="section-text">
                    This portfolio's homepage represents a deliberate departure from standard flat 2D portfolios. The design is heavily modeled after <strong>in-universe gaming menus</strong>—specifically the iconic spacecraft cockpit HUDs in <em>Warframe</em>. 
                  </p>
                  <p className="section-text">
                    In these interfaces, the menu exists physically in the game world, reflecting ambient light, reacting with a subtle parallax hover to camera angles, and framing the central figure. We translated this experience into the web medium by utilizing full-bleed coordinate systems and high-density, structural information hierarchies.
                  </p>
                </section>

                <section className="narrative-section">
                  <h3 className="section-subtitle">02 / CYBERNETIC UTILITY</h3>
                  <p className="section-text">
                    The visual language is characterized by raw engineering and cybernetic aesthetics: thin structural grids, glowing status indices, monospaced metrics, and custom theme dynamics. 
                  </p>
                  <p className="section-text">
                    Every section, from the "PORTFOLIO.SYS // INIT" console logs to the electric border frames, bridges standard user interface standards with visual assets reminiscent of scientific systems, complex telemetry boards, and custom hardware setups.
                  </p>
                </section>

                <section className="narrative-section">
                  <h3 className="section-subtitle">03 / REAL-TIME SEASONS</h3>
                  <p className="section-text">
                    An application should feel like a living, breathing ecosystem. By integrating the local time clock with custom rendering contexts, the site seamlessly transitions between seasonal cycles (such as <strong>Autumn Leaves</strong> and <strong>Winter Snow</strong>). 
                  </p>
                  <p className="section-text">
                    This interactive layer bridges the sterile space of digital engineering with the organic changes of our physical world—creating a premium user experience that is always dynamic, fresh, and engaging.
                  </p>
                </section>
              </div>

              {/* Media Carousel (Right Column) */}
              <div className="insp-carousel-panel">
                <div className="carousel-view-wrapper">
                  
                  {/* Slider Images */}
                  <div className="carousel-slider-track">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIdx}
                        className="carousel-slide"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <img 
                          src={inspirationSlides[activeIdx].image} 
                          alt={inspirationSlides[activeIdx].caption} 
                          className="carousel-img"
                        />
                        <div className="slide-tag">{inspirationSlides[activeIdx].tag}</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation Arrows */}
                  <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous Slide">
                    <span>←</span>
                  </button>
                  <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next Slide">
                    <span>→</span>
                  </button>
                </div>

                {/* Carousel Details & Pagination */}
                <div className="carousel-details">
                  <div className="details-header">
                    <span className="slide-num">[{String(activeIdx + 1).padStart(2, '0')} // 06]</span>
                    <h4 className="slide-title">{inspirationSlides[activeIdx].title}</h4>
                  </div>
                  <p className="slide-caption">{inspirationSlides[activeIdx].caption}</p>

                  {/* Monospaced Pagination Tabs */}
                  <div className="carousel-pagination">
                    {inspirationSlides.map((_, idx) => (
                      <button
                        key={idx}
                        className={`pagination-tab ${idx === activeIdx ? 'active' : ''}`}
                        onClick={() => setActiveIdx(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DesignInspiration;
