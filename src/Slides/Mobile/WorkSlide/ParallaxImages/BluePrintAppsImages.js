import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import homeImg from '../../../../Assets/Images/ppapps/Group 19.png';
import restaurantImg from '../../../../Assets/Images/ppapps/Group 22.png';
import addRestaurantImg from '../../../../Assets/Images/ppapps/Group 30.png';
import addFoodImg from '../../../../Assets/Images/ppapps/Group 31.png';

const Restaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
height: 30vh; 
`;

const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 2vw;
height: 20vh;
filter: blur(0.2px);
`;

const AddFood = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-60vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`;

const AddRestaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-45vh;
right: 4vw;
position: absolute;
height: 30vh;
filter: blur(0.2px);
`;

class BluePrintAppsImages extends Component {
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
        <AddFood src={addFoodImg.default || addFoodImg} scroll={scrollPercent} alt="addFood" />
        <AddRestaurant src={addRestaurantImg.default || addRestaurantImg} scroll={scrollPercent} alt="addRestaurant" />
        <Home src={homeImg.default || homeImg} scroll={scrollPercent} alt="Home" />
        <Restaurant src={restaurantImg.default || restaurantImg} scroll={scrollPercent} alt="Restaurant" />
      </React.Fragment>
    );
  }
}

BluePrintAppsImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default BluePrintAppsImages;
