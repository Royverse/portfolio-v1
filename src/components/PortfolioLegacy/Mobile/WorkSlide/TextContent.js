import React, { Component } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import device from '../../../../Assets/Responsive/breakpoints';

const TextContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 110px 24px 40px; /* Increased to clear season dropdown */
  pointer-events: none;
  z-index: 10;
`;

const ProjectID = styled(motion.div)`
  font-family: 'DM Mono', monospace;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: var(--accent);
  margin-bottom: 24px;
`;

const ProjectName = styled(motion.h2)`
  font-family: 'Bauhaus93';
  color: var(--ink);
  line-height: 1;
  margin-bottom: 16px;
  @media ${device.mobileS} { font-size: 36px; }
  @media ${device.mobileM} { font-size: 42px; }
  @media ${device.mobileL} { font-size: 48px; }
  @media ${device.tablet} { font-size: 64px; }
  @media ${device.laptop} { font-size: 80px; }
`;

const MyRole = styled(motion.div)`
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 32px;
`;

const ProjectDesc = styled(motion.p)`
  font-family: 'AvenirRoman';
  color: var(--ink);
  line-height: 1.6;
  max-width: 90%;
  @media ${device.mobileS} { font-size: 16px; }
  @media ${device.mobileM} { font-size: 18px; }
  @media ${device.mobileL} { font-size: 20px; }
`;

const ProjectType = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  right: 24px;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.3em;
  color: var(--ink-faint);
  writing-mode: vertical-rl;
  text-transform: uppercase;
`;

class TextContent extends Component {
  render() {
    const {
      number, projectName, projectDesc, roles, projectType, refreshToggle,
    } = this.props;

    if (!projectName) return null;

    return (
      <TextContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={projectName}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { 
                  staggerChildren: 0.12,
                  delayChildren: 0.2
                } 
              },
              exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }
            }}
          >
            <ProjectID
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              // PROJECT {number}
            </ProjectID>
 
            <ProjectName
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              {projectName}
            </ProjectName>
 
            <MyRole
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              {roles.join(' • ')}
            </MyRole>
 
            <ProjectDesc
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.9, ease: "easeOut" }
                }
              }}
            >
              {projectDesc}
            </ProjectDesc>
 
            <ProjectType
              variants={{
                hidden: { opacity: 0, scaleY: 0, originY: 1 },
                visible: { 
                  opacity: 1, 
                  scaleY: 1,
                  transition: { duration: 1, ease: "easeOut" }
                }
              }}
            >
              {projectType}
            </ProjectType>
          </motion.div>
        </AnimatePresence>
      </TextContainer>
    );
  }
}

TextContent.propTypes = {
  number: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectType: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
  refreshToggle: PropTypes.bool.isRequired,
};

export default TextContent;
