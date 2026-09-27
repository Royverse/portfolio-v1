import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

// Two-digit counter; String#padStart is missing from the oldest browserslist targets.
const pad2 = (n) => (n < 10 ? `0${n}` : `${n}`);

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
];

// Earlier portfolios aren't certificates, so they're linked from the footer instead of the list.
const previousPortfolios = [
    { label: "2024", url: "https://october-review.github.io/Roy/index.html" },
    { label: "2020", url: "https://roy-mootsana.github.io/portfoliov.01/works.html" },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.98) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
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
  top: 0; right: 0; bottom: 0; left: 0;
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
  object-fit: contain;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.loaded ? 1 : 0};
  transform: ${props => props.loaded ? 'translateY(0)' : 'translateY(16px)'};
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
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: .2em;
  color: #1e293b;
  border: 2px solid #1e293b;
  padding: 12px 28px;
  transition: all 0.2s;
  text-decoration: none;
  font-weight: 500;
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
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  letter-spacing: .2em;
  color: #475569;
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
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  padding: 4px 10px;
  border: 1px solid #cbd5e1;
  color: #64748b;
  background: white;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;

const MonoText = styled.span`
  font-family: 'DM Mono', monospace;
  font-size: ${props => props.size || '11px'};
  letter-spacing: ${props => props.spacing || '.4em'};
  color: ${props => props.color || '#64748b'};
  text-transform: uppercase;
`;

const BodyText = styled.span`
  font-family: 'Epilogue', sans-serif;
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
                                <MonoText size="10px" spacing=".3em">Continuous learning</MonoText>
                                <div style={{ marginTop: '4px' }}>
                                    <BodyText weight="500" size="24px" spacing="0.05em">UDEMY</BodyText>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <MonoText size="12px" spacing="0" style={{ display: 'block', lineHeight: 1 }}>{certificates.length}</MonoText>
                                <MonoText size="9px" spacing=".2em">Courses</MonoText>
                            </div>
                        </ListHeader>
                        
                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            {certificates.map((cert, i) => (
                                <IndexItem 
                                    key={cert.id}
                                    active={i === activeIndex}
                                    onClick={() => setActiveIndex(i)}
                                >
                                    <MonoText 
                                        size="11px" 
                                        spacing="0" 
                                        color={i === activeIndex ? '#1e293b' : '#64748b'}
                                    >
                                        {pad2(i + 1)}
                                    </MonoText>
                                    
                                    <BodyText 
                                        size="14px" 
                                        spacing="0.05em" 
                                        weight={i === activeIndex ? '500' : '400'}
                                        color={i === activeIndex ? '#0f172a' : '#475569'}
                                        transform="uppercase"
                                        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                    >
                                        {cert.label}
                                    </BodyText>
                                    
                                    <MonoText 
                                        size="10px" 
                                        spacing="0" 
                                        color="#64748b"
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
                                <MonoText size="11px" spacing=".3em">Certificate preview</MonoText>
                            </div>
                            <div style={{ background: '#f8fafc', padding: '4px 12px', borderRadius: '4px' }}>
                                <MonoText size="11px" spacing=".1em">{currentCert.id}</MonoText>
                            </div>
                        </PreviewHeader>

                        <ImageArea>
                            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CertImage
                                    src={currentCert.img}
                                    alt={currentCert.label}
                                    loaded={imgLoaded}
                                    onLoad={() => setImgLoaded(true)}
                                />
                            </div>
                        </ImageArea>

                        <MetadataFooter>
                            <div style={{ display: 'flex', flexDirection: 'column', flex: '1', minWidth: '0' }}>
                                <MonoText size="10px" spacing=".3em" style={{ marginBottom: '4px' }}>Course</MonoText>
                                <BodyText weight="500" size="18px" transform="uppercase" spacing="-0.02em" style={{ lineHeight: '1.2' }}>{currentCert.label}</BodyText>
                            </div>
                            
                            <div style={{ display: 'none' }} className="desktop-meta"> 
                                {/* Only show these on desktop to keep layout clean if needed, or keep them if they fit */}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }} className="cert-meta-item">
                                <MonoText size="10px" spacing=".3em" style={{ marginBottom: '4px' }}>Issuer</MonoText>
                                <BodyText size="14px" color="#64748b" transform="uppercase" spacing=".1em">
                                    Udemy
                                </BodyText>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }} className="cert-meta-item">
                                <MonoText size="10px" spacing=".3em" style={{ marginBottom: '4px' }}>Year</MonoText>
                                <BodyText size="14px" color="#64748b" transform="uppercase" spacing=".1em">{currentCert.year}</BodyText>
                            </div>

                            <ViewButton href={currentCert.img} target="_blank" rel="noopener noreferrer">
                                View certificate ↗
                            </ViewButton>
                        </MetadataFooter>
                    </PreviewPane>
                </MainFrame>

                <HUDFooter>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <KeyCap>UP</KeyCap>
                            <KeyCap>DOWN</KeyCap>
                            <MonoText size="11px" spacing=".2em">Browse</MonoText>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <KeyCap>ESC</KeyCap>
                            <MonoText size="11px" spacing=".2em">Close</MonoText>
                        </div>
                    </div>
                    
                    <div style={{ display: 'none' }}>
                        {/* Hidden on small screens in original, mimicking with styled components or inline logic if needed */}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hud-footer-right">
                        <MonoText size="11px" spacing=".2em">Previous portfolios</MonoText>
                        {previousPortfolios.map(({ label, url }) => (
                            <LegacyLink key={label} href={url} target="_blank" rel="noopener noreferrer">
                                {label} ↗
                            </LegacyLink>
                        ))}
                    </div>
                </HUDFooter>
            </HUDContainer>
        </OverlayWrapper>
    );
};

export default CertificateOverlay;
