import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Portrait from './components/Portrait';
import Lightning from './components/Lightning';
import { useTheme } from './components/ThemeContext';
import DesignInspiration from './components/DesignInspiration';

const SkillsAnimation = React.lazy(() => import('./components/SkillsAnimation'));
const WorkShowcase = React.lazy(() => import('./components/WorkShowcase'));
// Carries lottie-web and the runner animations — most of the old main bundle.
const DataAnalysis = React.lazy(() => import('./components/DataAnalysis'));

// Same breakpoint that hides `.desktop-only` in Menu.css.
const DESKTOP_QUERY = '(min-width: 769px)';

// Same box DataAnalysis renders (class margin + its 200×130 wrapper).
const runnerPlaceholder = <div className="data-analysis-wrap" style={{ width: '200px', height: '130px' }} />;

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const update = () => setIsDesktop(mq.matches);
    // Safari < 14 only has the older addListener API.
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);
  return isDesktop;
};

const MenuScreen = ({ onProjectsClick }) => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [showLightning, setShowLightning] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [showInspiration, setShowInspiration] = useState(false);
  // Heavy, non-critical UI (the Skills/Projects overlays and the desktop Lottie
  // runner) loads after the page has finished loading — or as soon as someone
  // reaches for the nav — instead of competing with the first paint.
  const [deferredReady, setDeferredReady] = useState(false);
  const returnFocusRef = useRef(null);
  const fabRef = useRef(null);
  const isDesktop = useIsDesktop();
  const { activeTheme } = useTheme();

  const overlayOpen = activeTab === 'SKILLS' || activeTab === 'AI LABS';
  // React 16 only forwards `inert` as a string, hence '' rather than true.
  const coveredAttr = overlayOpen ? '' : undefined;

  useEffect(() => {
    if (deferredReady) return undefined;
    let idleId;
    let timerId;
    const ready = () => setDeferredReady(true);
    const schedule = () => {
      if (window.requestIdleCallback) idleId = window.requestIdleCallback(ready, { timeout: 2000 });
      else timerId = setTimeout(ready, 1000);
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule);
    return () => {
      window.removeEventListener('load', schedule);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      clearTimeout(timerId);
    };
  }, [deferredReady]);

  const loadDeferred = () => setDeferredReady(true);

  // Hand focus back to whatever opened an overlay once it closes. Mobile menu
  // pills unmount when the menu closes, so fall back to the menu button.
  useEffect(() => {
    if (overlayOpen) return;
    const opener = returnFocusRef.current;
    returnFocusRef.current = null;
    if (!opener) return;
    if (document.body.contains(opener)) opener.focus();
    else if (fabRef.current) fabRef.current.focus();
  }, [overlayOpen]);

  useEffect(() => {
    if (activeTab === 'SKILLS') {
      document.body.classList.add('force-light-theme');
    } else {
      document.body.classList.remove('force-light-theme');
    }

    return () => {
      document.body.classList.remove('force-light-theme');
    };
  }, [activeTab]);

  const handleNavClick = (tab) => {
    setIsFabOpen(false);
    if (tab === 'PROFESSIONAL') {
      setActiveTab('PROFESSIONAL');
      onProjectsClick();
      return;
    }

    returnFocusRef.current = document.activeElement;
    setDeferredReady(true);

    if (tab === 'AI LABS') {
      setShowLightning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setTimeout(() => setShowLightning(false), 800);
      }, 800);
      return;
    }

    setActiveTab(tab);
  };

  const handleCloseOverlay = () => {
    setActiveTab('HOME');
  };

  const toggleFab = () => {
    setDeferredReady(true);
    setIsFabOpen(!isFabOpen);
  };

  const menuItems = [
    { id: 'PROFESSIONAL', label: 'EXPERIENCE' },
    { id: 'AI LABS', label: 'AI EXPERIMENTS' },
    { id: 'SKILLS', label: 'COMPETENCIES' },
  ];

  return (
    <div className="scene">
      {/* Portrait */}
      <Portrait covered={overlayOpen} />

      {/* Desktop Navigation Menu */}
      <div className="nav-panel desktop-only" inert={coveredAttr}>
        <div className="sys-label-container">
          <p className="sys-label">PORTFOLIO.SYS // INIT</p>
          <button 
            className="sys-insp-trigger"
            onClick={() => setShowInspiration(true)}
            aria-label="View Design Inspiration & Story"
            title="Design Inspiration & Story"
          >
            <span className="sys-insp-dot"></span>
            <span className="sys-insp-icon">i</span>
          </button>
        </div>
        <h1 className="name">ROY MOOTSANA</h1>
        <p className="title">SOFTWARE ENGINEER</p>
        <div className="divider"></div>

        <nav className="main-nav" onMouseEnter={loadDeferred} onFocus={loadDeferred}>
          <button
            className={`nav-item ${activeTab === 'SKILLS' ? 'active' : ''}`}
            onClick={() => handleNavClick('SKILLS')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">CORE COMPETENCIES</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'AI LABS' ? 'active' : ''}`}
            onClick={() => handleNavClick('AI LABS')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">AI EXPERIMENTS & PROJECTS</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'PROFESSIONAL' ? 'active' : ''}`}
            onClick={() => handleNavClick('PROFESSIONAL')}
          >
            <span className="nav-bar"></span>
            <span className="nav-label">PROFESSIONAL EXPERIENCE</span>
          </button>
        </nav>

        <div className="status">
          <span className="status-dot"></span>
          <span className="status-label">EMPLOYED // OPEN TO OFFERS</span>
        </div>

        {/* Phones never see this panel, so they skip the Lottie download. The
            placeholder holds the runner's space so the centred nav doesn't jump
            when it lands. */}
        {isDesktop && (deferredReady ? (
          <Suspense fallback={runnerPlaceholder}>
            <DataAnalysis visible={activeTab === 'HOME'} theme={activeTheme} />
          </Suspense>
        ) : runnerPlaceholder)}
      </div>

      {/* Mobile FAB Menu */}
      <div className="mobile-only" inert={coveredAttr}>
        <motion.div 
          className="mobile-hero-info"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="sys-label-container mobile-sys-container">
            <p className="sys-label">PORTFOLIO.SYS // INIT</p>
            <button 
              className="sys-insp-trigger"
              onClick={() => setShowInspiration(true)}
              aria-label="View Design Inspiration & Story"
              title="Design Inspiration & Story"
            >
              <span className="sys-insp-dot"></span>
              <span className="sys-insp-icon">i</span>
            </button>
          </div>
          <h1 className="mobile-name">ROY MOOTSANA</h1>
          <p className="mobile-title">SOFTWARE ENGINEER</p>
        </motion.div>

        <AnimatePresence>
          {isFabOpen && (
            <>
              <motion.div 
                className="fab-dim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFabOpen(false)}
                role="presentation"
              />
              <div className="fab-pills">
                {menuItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    className="fab-pill"
                    initial={{ opacity: 0, x: 20, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 20, y: 10 }}
                    transition={{ delay: i * 0.05, type: 'spring', damping: 20 }}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <div className="pill-bar"></div>
                    <span className="pill-txt">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>

        <button
          ref={fabRef}
          className={`fab-main ${isFabOpen ? 'open' : ''}`}
          onClick={toggleFab}
          aria-label="Toggle menu"
          aria-expanded={isFabOpen}
        >
          <div className="fab-icon-wrap">
            <span className="fab-line l1"></span>
            <span className="fab-line l2"></span>
            <span className="fab-line l3"></span>
          </div>
        </button>
      </div>

      {/* Skills Blossom Overlay */}
      {deferredReady && (
        <Suspense fallback={null}>
          <SkillsAnimation active={activeTab === 'SKILLS'} onClose={handleCloseOverlay} />
        </Suspense>
      )}

      {/* Experience / Work Showcase Overlay */}
      {deferredReady && (
        <Suspense fallback={null}>
          <WorkShowcase active={activeTab === 'AI LABS'} onClose={handleCloseOverlay} />
        </Suspense>
      )}

      {/* Lightning Strike Transition */}
      {showLightning && (
        <div className={`lightning-strike-wrap ${showLightning ? 'active' : ''}`}>
          <Lightning hue={200} speed={3} intensity={0.2} size={0.5} />
        </div>
      )}

      {/* Design Inspiration Modal */}
      <DesignInspiration isOpen={showInspiration} onClose={() => setShowInspiration(false)} />
    </div>
  );
};

export default MenuScreen;
