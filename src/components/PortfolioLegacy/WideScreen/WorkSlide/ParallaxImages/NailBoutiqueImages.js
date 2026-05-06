import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const dots = new URL('../../../../../Assets/Images/nails/Group 9.png', import.meta.url).href;
const bubbles = new URL('../../../../../Assets/Images/nails/Group 27.png', import.meta.url).href;
const bigBubble = new URL('../../../../../Assets/Images/nails/Group 28.png', import.meta.url).href;

const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 8}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left: -4vw;
height: 50vh;
filter: blur(0.8px);
`;

const Bubbles = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 12}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -50vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.4px);
`;


const Dots = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${scroll * 25}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 30vh;
left: 0vw;
height: 40vh;
`;

class NailBoutiqueImages extends Component {
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
        <BigBubble src={bigBubble} scroll={scrollPercent} alt="bigBubble" />
        <Bubbles src={bubbles} scroll={scrollPercent} alt="bubbles" />
        <Dots src={dots} scroll={scrollPercent} alt="dots" />
      </React.Fragment>
    );
  }
}

NailBoutiqueImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default NailBoutiqueImages;
