import React from 'react';
import FindRestaurantComponent from './FindRestaurantComponent';
import { HomeComponentWrapper } from '../../styles/HomeComponentStyles';

const HomeComponent = (props) => (
  <HomeComponentWrapper>
    <FindRestaurantComponent history={props.history} />
  </HomeComponentWrapper>
);

export default HomeComponent;
