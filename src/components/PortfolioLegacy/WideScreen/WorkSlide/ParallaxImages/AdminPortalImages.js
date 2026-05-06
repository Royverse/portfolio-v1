import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const dots = new URL('../../../../../Assets/Images/portal/Group 23.png', import.meta.url).href;
const bubbles = new URL('../../../../../Assets/Images/portal/Group 25.png', import.meta.url).href;
const paths = new URL('../../../../../Assets/Images/portal/Group 24.png', import.meta.url).href;
const bigBubble = new URL('../../../../../Assets/Images/portal/Group 26.png', import.meta.url).href;

/* Foreground — enters first, exits first */
const Paths = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom: 10vh;
right: 1vw;
transform-origin: right center;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`;

const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom: -10vh;
left: -4vw;
position: absolute;
height: 50vh;
filter: blur(0.3px);
`;

/* Mid-depth */
const Bubbles = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -35vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.1px);
`;

/* Background — slowest, exits last but still within section */
const Dots = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left: 0vw;
height: 50vh;
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
