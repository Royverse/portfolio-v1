import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const certificates = [
    { id: "UC-8a228f64", label: "Fast-start Usability Testing and UX Research", year: "2022", img: "https://i.ibb.co/SyG2L4M/UC-8a228f64-b1ef-4af9-91b4-45c6d95f344f.jpg" },
    { id: "UC-1e292c0e", label: "UI Design Bootcamp: Typography, Colour & Grids", year: "2022", img: "https://i.ibb.co/4PScnYX/UC-1e292c0e-9a15-4ce4-83e9-fceaab5d7cd4.jpg" },
    { id: "UC-1f48a65a", label: "UX Strategy Fundamentals", year: "2022", img: "https://i.ibb.co/4ZLGWZC/UC-1f48a65a-0bac-42ac-aaee-ebb0aab31fcd.jpg" },
    { id: "UC-06d5461e", label: "Omnichannel Customer Experience Management", year: "2022", img: "https://i.ibb.co/s1yX3Qs/UC-06d5461e-d41d-4652-b248-5b0a569041e1.jpg" },
    { id: "UC-6b56c1ef", label: "Build a Powerful UX Portfolio", year: "2023", img: "https://i.ibb.co/LvcYRr8/UC-6b56c1ef-9807-43f4-bbf7-763ce9fd2bd2.jpg" },
    { id: "UC-76a2db1c", label: "The Simple Way to Conduct a UX Audit", year: "2022", img: "https://i.ibb.co/NWpFMz4/UC-76a2db1c-d761-49ef-8816-6d47a730b76f.jpg" },
    { id: "UC-77af04ba", label: "Sketching for UX Designers", year: "2022", img: "https://i.ibb.co/Z6dQ4yp/UC-77af04ba-e9a6-4578-a689-2f8336524ec2-1.jpg" },
    { id: "UC-93dcdf48", label: "Master Digital Product Design: UX & UI", year: "2022", img: "https://i.ibb.co/HTbKBTZ/UC-93dcdf48-e64a-46e1-92b3-919d7306e78e-1.jpg" },
    { id: "UC-a2ac7cfa", label: "Design for Humanity: UX Perspective", year: "2022", img: "https://i.ibb.co/wBM3dLn/UC-a2ac7cfa-ee04-4db9-8008-c342afe83112.jpg" },
    { id: "UC-aa6b97d3", label: "Learn Figma: UI/UX Design Training", year: "2022", img: "https://i.ibb.co/ZGC487F/UC-aa6b97d3-e1f2-4298-b89f-31ec92077e62.jpg" },
    { id: "UC-da50dcfe", label: "UX Design College Class", year: "2022", img: "https://i.ibb.co/9p0MQSh/UC-da50dcfe-96f0-4100-97cb-60fadd0dc4ac.jpg" },
    { id: "UC-ead34a9d", label: "UX Design & User Experience Design", year: "2022", img: "https://i.ibb.co/9ZKjTmf/UC-ead34a9d-415f-4594-a3d0-809e1c2e4845-1.jpg" },
    { id: "UC-f03d711a", label: "Modern Copywriting: Writing that Sells", year: "2022", img: "https://i.ibb.co/c8zwQ6R/UC-f03d711a-a59b-4351-b0c2-0c910327e86f.jpg" },
    { id: "LGC-PORTFOLIO", label: "Portfolio Version 2 2024", year: "2024", isIframe: true, url: "https://october-review.github.io/Roy/index.html", isLegacy: true },
    { id: "LGC-V01", label: "Portfolio Version 1 2020", year: "2020", isIframe: true, url: "https://roy-mootsana.github.io/portfoliov.01/works.html", isLegacy: true },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.98) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const OverlayWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000000;
  background: rgba(241, 245, 249, 0.9);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  opacity: ${props => props.active ? 1 : 0};
  pointer-events: ${props => props.active ? 'auto' : 'none'};
  transition: opacity 0.3s ease;
  animation: ${props => props.active ? fadeIn : 'none'} 0.3s ease-out;
`;

const HUDContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

const MainFrame = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 400px 1fr;
  border: 1px solid #e2e8f0;
  position: relative;
  background: white;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HUDScanline = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.01) 50%);
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 0;
`;

const Corner = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: #cbd5e1;
  border-style: solid;
  z-index: 20;
  ${props => props.pos === 'tl' && 'top: -1px; left: -1px; border-width: 2px 0 0 2px;'}
  ${props => props.pos === 'tr' && 'top: -1px; right: -1px; border-width: 2px 2px 0 0;'}
  ${props => props.pos === 'bl' && 'bottom: -1px; left: -1px; border-width: 0 0 2px 2px;'}
  ${props => props.pos === 'br' && 'bottom: -1px; right: -1px; border-width: 0 2px 2px 0;'}
`;

const ListPane = styled.div`
  border-right: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(248, 250, 252, 0.5);
  z-index: 10;
`;

const ListHeader = styled.div`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  z-index: 20;
  padding: 24px 32px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const IndexItem = styled.div`
  padding: 20px 32px;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  border-bottom: 1px solid #f8fafc;
  position: relative;
  transition: all 0.2s;
  background: ${props => props.active ? 'white' : 'transparent'};
  box-shadow: ${props => props.active ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'};

  &:hover {
    background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.4)'};
  }

  ${props => props.active && `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 6px;
      background: #1e293b;
    }
  `}

  ${props => props.isLegacy && !props.active && `
    background: rgba(79, 70, 229, 0.04);
    &:hover {
      background: rgba(79, 70, 229, 0.08);
    }
  `}
`;

const PreviewPane = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 100px;
  overflow: hidden;
  position: relative;
  z-index: 10;
  background: white;
`;

const PreviewHeader = styled.div`
  padding: 0 40px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: #1e293b;
`;

const ImageArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: rgba(248, 250, 252, 0.3);
`;

const CertImage = styled.img`
  max-width: 100%;
  max-height: 60vh;
  object-contain;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.loaded ? 1 : 0};
  transform: ${props => props.loaded ? 'translateY(0)' : 'translateY(16px)'};
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.loaded ? 1 : 0};
  transform: ${props => props.loaded ? 'translateY(0)' : 'translateY(16px)'};
  background: #fff;
  border: 1px solid #e2e8f0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
    pointer-events: none;
  }
`;

const StyledIframe = styled.iframe`
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: 0 0;
  border: none;
  background: white;
`;

const MetadataFooter = styled.div`
  padding: 24px 40px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  background: white;
  min-height: 100px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const ViewButton = styled.a`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  letter-spacing: .2em;
  color: #1e293b;
  border: 2px solid #1e293b;
  padding: 12px 28px;
  transition: all 0.2s;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: #1e293b;
    color: white;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
`;

const LegacyLink = styled.a`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  letter-spacing: .2em;
  color: #94a3b8;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;
  text-transform: uppercase;

  &:hover {
    color: #1e293b;
    border-bottom: 1px solid #1e293b;
  }
`;

const HUDFooter = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

const KeyCap = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: 11px;
  padding: 4px 10px;
  border: 1px solid #cbd5e1;
  color: #64748b;
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;

const MonoText = styled.span`
  font-family: 'Share Tech Mono', monospace;
  font-size: ${props => props.size || '11px'};
  letter-spacing: ${props => props.spacing || '.4em'};
  color: ${props => props.color || '#94a3b8'};
  text-transform: uppercase;
`;

const BarlowText = styled.span`
  font-family: 'Barlow', sans-serif;
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || '14px'};
  letter-spacing: ${props => props.spacing || 'normal'};
  color: ${props => props.color || '#1e293b'};
  text-transform: ${props => props.transform || 'none'};
`;

const CertificateOverlay = ({ active, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [imgLoaded, setImgLoaded] = useState(false);

    const currentCert = certificates[activeIndex];

    const navigate = useCallback((direction) => {
        if (direction === 'down') {
            setActiveIndex(prev => Math.min(prev + 1, certificates.length - 1));
        } else {
            setActiveIndex(prev => Math.max(prev - 1, 0));
        }
    }, []);

    useEffect(() => {
        if (!active) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                navigate('down');
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                navigate('up');
            } else if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [active, navigate, onClose]);

    useEffect(() => {
        setImgLoaded(false);
    }, [activeIndex]);

    if (!active) return null;

    return (
        <OverlayWrapper active={active} onClick={e => e.target === e.currentTarget && onClose()}>
            <HUDContainer>
                <MainFrame>
                    <HUDScanline />
                    
                    <Corner pos="tl" />
                    <Corner pos="tr" />
                    <Corner pos="bl" />
                    <Corner pos="br" />

                    {/* List Pane */}
                    <ListPane>
                        <ListHeader>
                            <div>
                                <MonoText size="10px" spacing=".4em">Archive Data</MonoText>
                                <div style={{ marginTop: '4px' }}>
                                    <BarlowText weight="700" size="24px" spacing="0.05em">INDEX</BarlowText>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <MonoText size="12px" spacing="0" color="#94a3b8" style={{ display: 'block', lineHeight: 1 }}>{certificates.length}</MonoText>
                                <MonoText size="8px" spacing=".2em" color="#cbd5e1">Entries</MonoText>
                            </div>
                        </ListHeader>
                        
                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            {certificates.map((cert, i) => (
                                <IndexItem 
                                    key={cert.id}
                                    active={i === activeIndex}
                                    isLegacy={cert.isLegacy}
                                    onClick={() => setActiveIndex(i)}
                                >
                                    <MonoText 
                                        size="11px" 
                                        spacing="0" 
                                        color={i === activeIndex ? '#1e293b' : '#cbd5e1'}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </MonoText>
                                    
                                    <BarlowText 
                                        size="14px" 
                                        spacing="0.05em" 
                                        weight={i === activeIndex ? '500' : '400'}
                                        color={i === activeIndex ? '#0f172a' : (cert.isLegacy ? '#4f46e5' : '#94a3b8')}
                                        transform="uppercase"
                                        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                    >
                                        {cert.label}
                                    </BarlowText>
                                    
                                    <MonoText 
                                        size="10px" 
                                        spacing="0" 
                                        color={i === activeIndex ? '#64748b' : '#cbd5e1'}
                                        style={{ textAlign: 'right' }}
                                    >
                                        {cert.year}
                                    </MonoText>
                                </IndexItem>
                            ))}
                        </div>
                    </ListPane>

                    {/* Preview Pane */}
                    <PreviewPane>
                        <PreviewHeader>
                            <StatusDot />
                            <div style={{ flex: 1 }}>
                                <MonoText size="11px" spacing=".5em" color="#94a3b8">Registry // File_Preview</MonoText>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '4px 12px', borderRadius: '4px' }}>
                                <MonoText size="11px" spacing=".1em" color="#cbd5e1">{currentCert.id}</MonoText>
                            </div>
                        </PreviewHeader>

                        <ImageArea>
                            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {currentCert.isIframe ? (
                                    <IframeContainer loaded={imgLoaded}>
                                        <StyledIframe 
                                            src={currentCert.url} 
                                            title={currentCert.label}
                                            onLoad={() => setImgLoaded(true)}
                                            scrolling="no"
                                        />
                                    </IframeContainer>
                                ) : (
                                    <CertImage 
                                        src={currentCert.img}
                                        alt={currentCert.label}
                                        loaded={imgLoaded}
                                        onLoad={() => setImgLoaded(true)}
                                    />
                                )}
                            </div>
                        </ImageArea>

                        <MetadataFooter>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: '1', minWidth: '0' }}>
                                <MonoText size="10px" spacing=".3em" color="#cbd5e1" style={{ marginBottom: '4px' }}>Course Title</MonoText>
                                <BarlowText weight="600" size="18px" transform="uppercase" spacing="-0.02em" style={{ lineHeight: '1.2' }}>{currentCert.label}</BarlowText>
                            </div>
                            
                            <div style={{ display: 'none' }} className="desktop-meta"> 
                                {/* Only show these on desktop to keep layout clean if needed, or keep them if they fit */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }} className="cert-meta-item">
                                <MonoText size="10px" spacing=".3em" color="#cbd5e1" style={{ marginBottom: '4px' }}>Source</MonoText>
                                <BarlowText size="14px" color="#64748b" transform="uppercase" spacing=".1em">
                                    {currentCert.id.startsWith('LGC') ? 'ARCHIVE' : 'UDEMY'}
                                </BarlowText>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }} className="cert-meta-item">
                                <MonoText size="10px" spacing=".3em" color="#cbd5e1" style={{ marginBottom: '4px' }}>Date</MonoText>
                                <BarlowText size="14px" color="#64748b" transform="uppercase" spacing=".1em">{currentCert.year}</BarlowText>
                            </div>

                            <ViewButton href={currentCert.url || currentCert.img} target="_blank">
                                {currentCert.url ? 'Open Site ↗' : 'Open File ↗'}
                            </ViewButton>
                        </MetadataFooter>
                    </PreviewPane>
                </MainFrame>

                <HUDFooter>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <KeyCap>UP</KeyCap>
                            <KeyCap>DOWN</KeyCap>
                            <MonoText size="11px" spacing=".2em" color="#94a3b8" weight="500">Navigate Archive</MonoText>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <KeyCap>ESC</KeyCap>
                            <MonoText size="11px" spacing=".2em" color="#94a3b8" weight="500">Exit</MonoText>
                        </div>
                    </div>
                    
                    <div style={{ display: 'none' }}>
                        {/* Hidden on small screens in original, mimicking with styled components or inline logic if needed */}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hud-footer-right">
                        <LegacyLink href="https://october-review.github.io/Roy/index.html" target="_blank">
                            Legacy System Access ↗
                        </LegacyLink>
                        <div style={{ height: '1px', width: '40px', background: '#e2e8f0' }} />
                        <MonoText size="11px" spacing=".1em" color="#94a3b8">ROY_MOOTSANA // CORE_SYSTEM_ACTIVE</MonoText>
                    </div>
                </HUDFooter>
            </HUDContainer>
        </OverlayWrapper>
    );
};

export default CertificateOverlay;
