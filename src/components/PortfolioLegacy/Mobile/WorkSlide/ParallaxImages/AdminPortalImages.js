import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const dots = new URL('../../../../../Assets/Images/portal/Group 23.png', import.meta.url).href;
const bubbles = new URL('../../../../../Assets/Images/portal/Group 25.png', import.meta.url).href;
const paths = new URL('../../../../../Assets/Images/portal/Group 24.png', import.meta.url).href;
const bigBubble = new URL('../../../../../Assets/Images/portal/Group 26.png', import.meta.url).href;

const Dots = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 35}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`;

const Bubbles = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 28}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`;

const Paths = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.8)`,
  }),
})`
position: absolute;
bottom: 60vh;
right: 2vw;
height: 20vh;
filter: blur(0.1px);
`;

const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.7)`,
  }),
})`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`;

class AdminPortalImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + (index - 1);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Paths src={paths} scroll={scrollPercent} alt="paths" />
        <BigBubble src={bigBubble} scroll={scrollPercent} alt="bigBubble" />
        <Bubbles src={bubbles} scroll={scrollPercent} alt="bubbles" />
        <Dots src={dots} scroll={scrollPercent} alt="dots" />
      </React.Fragment>
    );
  }
}

AdminPortalImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default AdminPortalImages;
