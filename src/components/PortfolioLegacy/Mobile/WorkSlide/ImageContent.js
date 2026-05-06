import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import vhCheck from 'vh-check';
import BluePrintImages from './ParallaxImages/BluePrintImages';
import BluePrintAppsImages from './ParallaxImages/BluePrintAppsImages';
import AdminPortalImages from './ParallaxImages/AdminPortalImages';
import NailBoutiqueImages from './ParallaxImages/NailBoutiqueImages';
import ReadpointImages from './ParallaxImages/ReadpointImages';

const ImageContainer = styled.div`
  width: 100%;
  height: 950vh;
  margin-bottom: 30vh;
  display: flex;
  flex-flow: column nowrap;
`;

const ImageBox = styled.div`
  margin-top: 30vh;
  height: 100vh;
  position: relative;
`;

class ImageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.ticking = false;
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const vhDiff = vhCheck().offset;
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.setState({ 
      scrollHeight: Math.round(window.document.documentElement.scrollHeight),
      screenHeight: Math.round(window.document.documentElement.clientHeight + vhDiff)
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        const { body, documentElement } = window.document;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
        
        // Boundaries for performance
        const minlimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
        const maxlimit = (documentElement.clientHeight * 1240) / documentElement.scrollHeight;
        
        if (sp >= minlimit && sp <= maxlimit) {
          this.setState({ scrollPercent: sp });
        }
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  render() {
    const { scrollPercent, scrollHeight, screenHeight } = this.state;
    const { pageSplitTimes } = this.props;
    const boxHeight = pageSplitTimes * 100;
    
    return (
      <ImageContainer>
        {/* Empty slide for index 0 */}
        <ImageBox height={boxHeight} />

        <ImageBox height={boxHeight}>
          <BluePrintImages
            boxHeight={boxHeight}
            index={1}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <BluePrintAppsImages
            boxHeight={boxHeight}
            index={2}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <AdminPortalImages
            boxHeight={boxHeight}
            index={3}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <NailBoutiqueImages
            boxHeight={boxHeight}
            index={4}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>
        <ImageBox height={boxHeight}>
          <ReadpointImages
            boxHeight={boxHeight}
            index={5}
            scrollPercent={scrollPercent}
            screenHeight={screenHeight}
            scrollHeight={scrollHeight}
          />
        </ImageBox>

        {/* Empty slide for index 6 */}
        <ImageBox height={boxHeight} />
      </ImageContainer>
    );
  }
}

ImageContent.propTypes = {
  pageSplitTimes: PropTypes.number.isRequired,
};

export default ImageContent;
