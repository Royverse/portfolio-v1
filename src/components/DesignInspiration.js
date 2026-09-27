import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Two-digit counter; String#padStart is missing from the oldest browserslist targets.
const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);

// Resolve inspiration images dynamically using standard URL resolver syntax
const imgWarframeMenu = new URL('../warframe-menu-1920x1080.jpg', import.meta.url).href;
const imgWarframeRailjack = new URL('../L5L1VCu.jpg', import.meta.url).href;
const imgCyberpunkCore = new URL('../9v0cuznz03281.png', import.meta.url).href;
const imgHoloArch = new URL('../original-6ada7ba3d6854580ed7b865635b34fea.webp', import.meta.url).href;
const imgWireframe = new URL('../original-c7627ceb4cd5d66864ab5893238a0220.webp', import.meta.url).href;
const imgConsole = new URL('../original-c81536be180e8081ff37939f01166501.webp', import.meta.url).href;

// All six are other people's work (game menus and fan-made concepts), shown
// as references. Each caption says what the site borrowed from it.
const inspirationSlides = [
  {
    image: imgWarframeMenu,
    title: 'WARFRAME MENU',
    caption: 'The main reference. The menu floats inside the ship, tilted into the scene, with the character framed on the right. The homepage copies that split: menu on the left, portrait on the right.',
    tag: 'REFERENCE · WARFRAME'
  },
  {
    image: imgWarframeRailjack,
    title: 'WARFRAME, LATER VERSION',
    caption: 'A later version of the same menu. Each item sits on its own translucent plate, which is where the glass panels on this site come from.',
    tag: 'REFERENCE · WARFRAME'
  },
  {
    image: imgCyberpunkCore,
    title: 'HALO: REACH ARMORY',
    caption: 'A plain vertical list, a thin bar marking the selected item, and the character on the right. The accent bars beside the menu items here come from this screen.',
    tag: 'REFERENCE · HALO: REACH'
  },
  {
    image: imgHoloArch,
    title: 'THOR MENU CONCEPT',
    caption: 'A fan-made game menu, not my work. Widely spaced capitals on the left, a lit figure on the right, and almost nothing else on screen.',
    tag: 'REFERENCE · FAN CONCEPT'
  },
  {
    image: imgWireframe,
    title: 'GAME HUB CONCEPT',
    caption: 'A fan-made concept, not my work. A frosted panel over a blurred scene, with a list, a character card and a stats panel side by side. The model for the frosted overlays.',
    tag: 'REFERENCE · FAN CONCEPT'
  },
  {
    image: imgConsole,
    title: 'ZENITH MENU CONCEPT',
    caption: 'A fan-made concept, not my work. Small, widely spaced capitals and very little else. The reason the labels here are small, spaced-out monospace.',
    tag: 'REFERENCE · FAN CONCEPT'
  }
];

const DesignInspiration = ({ isOpen, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Reset slide index when modal is opened, and warm the cache for every slide
  // so paging never shows an empty frame while an image downloads.
  useEffect(() => {
    if (isOpen) {
      setActiveIdx(0);
      inspirationSlides.forEach(({ image }) => { new Image().src = image; });
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
        <motion.div 
          className="insp-modal-portal"
          key="design-inspiration-portal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay Dimmer */}
          <div
            className="insp-modal-dim"
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
                <span className="meta-tag">DESIGN NOTES</span>
                <span className="meta-pulse"></span>
              </div>
              <h2 className="header-title">DESIGN STORY & INSPIRATION</h2>
              <button className="insp-close-btn" onClick={onClose} aria-label="Close design story">
                <span className="btn-close-lbl">CLOSE</span>
                <span className="btn-close-bar"></span>
              </button>
            </div>

            {/* Inner Content Grid */}
            <div className="insp-modal-content">
              
              {/* Narrative Panel (Left Column) */}
              <div className="insp-narrative-panel selectable-text">
                <section className="narrative-section">
                  <h3 className="section-subtitle">01 / WHY IT LOOKS LIKE A GAME MENU</h3>
                  <p className="section-text">
                    I have always liked game menus that live inside the world, like the ones in <em>Warframe</em>. They catch the light, shift as the camera moves and frame the character, instead of sitting flat on the screen.
                  </p>
                  <p className="section-text">
                    I wanted this homepage to feel the same, hence the glass panels, thin rules, small monospaced labels and a portrait that tilts under your cursor. The images alongside are the references I worked from. None of them are mine.
                  </p>
                </section>

                <section className="narrative-section">
                  <h3 className="section-subtitle">02 / DAY AND NIGHT</h3>
                  <p className="section-text">
                    The site follows your clock: falling leaves in daylight, snow at night. You can pin either one from the picker in the corner.
                  </p>
                </section>

                <section className="narrative-section">
                  <h3 className="section-subtitle">03 / KEEPING IT FAST</h3>
                  <p className="section-text">
                    All this motion has a cost, so the heavy parts (the skills tree, the projects grid and the animations) load after the first screen is up. That cut the first download by about two-thirds.
                  </p>
                </section>
              </div>

              {/* Media Carousel (Right Column) */}
              <div className="insp-carousel-panel">
                <div className="carousel-view-wrapper">
                  
                  {/* Slider Images */}
                  <div className="carousel-slider-track">
                    {/* Enter-only fade. framer-motion 4's exitBeforeEnter left the frame
                        empty when slides were changed mid-exit (the new slide never
                        mounted), so the old slide now just unmounts. */}
                    <motion.div
                      key={activeIdx}
                      className="carousel-slide"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <img
                        src={inspirationSlides[activeIdx].image}
                        alt={`${inspirationSlides[activeIdx].title}: ${inspirationSlides[activeIdx].caption}`}
                        className="carousel-img"
                      />
                      <div className="slide-tag">{inspirationSlides[activeIdx].tag}</div>
                    </motion.div>
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
                    <span className="slide-num">[{pad2(activeIdx + 1)} // 06]</span>
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
                        {pad2(idx + 1)}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesignInspiration;
