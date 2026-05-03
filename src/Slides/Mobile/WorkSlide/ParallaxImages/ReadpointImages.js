import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import dots from '../../../../Assets/Images/Readpoint/Group 1.png';
import bubbles from '../../../../Assets/Images/Readpoint/Group 3.png';
import bigBubble from '../../../../Assets/Images/Readpoint/Group 32.png';

const Dots = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 30}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -240vh;
left:0vw;
height: 20vh; 
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
height: 20vh;
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
height: 20vh;
filter: blur(0.1px);
`;

class ReadpointImages extends Component {
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
        <BigBubble src={bigBubble.default || bigBubble} scroll={scrollPercent} alt="bigBubble" />
        <Bubbles src={bubbles.default || bubbles} scroll={scrollPercent} alt="bubbles" />
        <Dots src={dots.default || dots} scroll={scrollPercent} alt="dots" />
      </React.Fragment>
    );
  }
}

ReadpointImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ReadpointImages;
