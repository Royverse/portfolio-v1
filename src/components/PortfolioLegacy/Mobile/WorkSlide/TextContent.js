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
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: var(--accent);
  margin-bottom: 24px;
`;

const ProjectNameStage = styled.div`
  overflow: hidden;
  margin-bottom: 16px;
`;

const ProjectName = styled(motion.h2)`
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0;
  @media ${device.mobileS} { font-size: 32px; }
  @media ${device.mobileM} { font-size: 38px; }
  @media ${device.mobileL} { font-size: 44px; }
  @media ${device.tablet} { font-size: 64px; }
`;

const MyRoleStage = styled.div`
  overflow: hidden;
  margin-bottom: 32px;
`;

const MyRole = styled(motion.div)`
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 0;
`;

const ProjectDesc = styled(motion.p)`
  font-family: 'Epilogue', sans-serif;
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
  font-weight: 500;
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
 
            <ProjectNameStage>
              <ProjectName
                variants={{
                  hidden: { y: "100%" },
                  visible: { 
                    y: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
              >
                {projectName}
              </ProjectName>
            </ProjectNameStage>
 
            <MyRoleStage>
              <MyRole
                variants={{
                  hidden: { y: "100%" },
                  visible: { 
                    y: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
              >
                {roles.join(' • ')}
              </MyRole>
            </MyRoleStage>
 
            <ProjectDesc
              variants={{
                hidden: { opacity: 0, y: 15 },
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
