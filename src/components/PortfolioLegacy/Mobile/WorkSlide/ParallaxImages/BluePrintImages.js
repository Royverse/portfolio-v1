import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const voistrapHomeImg = new URL('../../../../../Assets/Images/storybook/Group 14.png', import.meta.url).href;
const voistrapMeetingsImg = new URL('../../../../../Assets/Images/storybook/Group 16.png', import.meta.url).href;
const voistrapPeopleImg = new URL('../../../../../Assets/Images/storybook/Group 29.png', import.meta.url).href;
const voistrapPhoneScoreImg = new URL('../../../../../Assets/Images/storybook/Group 34.png', import.meta.url).href;

const VoistrapPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`;

const VoistrapPhoneMeetings = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
right: 2vw;
height:20vh;
filter: blur(0.1px);
`;

const VoistrapPhoneScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom: 25vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`;

const VoistrapPhonePeople = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`;

class BluePrintImages extends Component {
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
        <VoistrapPhonePeople src={voistrapPeopleImg} scroll={scrollPercent} alt="voistrapPeople" />
        <VoistrapPhoneScore src={voistrapPhoneScoreImg} scroll={scrollPercent} alt="voistrapPhone" />
        <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={scrollPercent} alt="voistrapMeetings" />
        <VoistrapPhoneHome src={voistrapHomeImg} scroll={scrollPercent} alt="voistrapHome" />
      </React.Fragment>
    );
  }
}

BluePrintImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default BluePrintImages;
