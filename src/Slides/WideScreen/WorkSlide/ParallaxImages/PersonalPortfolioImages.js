import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const dots = new URL('../../../../Assets/Images/Showcase/Dots2.png', import.meta.url).href;
const bubbles = new URL('../../../../Assets/Images/Showcase/testing2.jpg', import.meta.url).href;
const paths = new URL('../../../../Assets/Images/Showcase/t2 (3).jpg', import.meta.url).href;
const bigBubble = new URL('../../../../Assets/Images/Showcase/t2 (1).jpg', import.meta.url).href;

const Dots = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 30}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -240vh;
left:0vw;
height: 50vh; 
`;

const Bubbles = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 23}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:-225vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.1px);
`;

const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(0.7)`,
  }),
})`
bottom:-125vh;
left:-4vw;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`;

const Paths = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
bottom:-80vh;
right: 1vw;
transform-origin: right center;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`;

class PersonalPortfolioImages extends Component {
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

PersonalPortfolioImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default PersonalPortfolioImages;
