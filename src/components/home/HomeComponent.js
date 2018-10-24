import React from 'react';
import FindRestaurantComponent from './find-restaurant/FindRestaurantComponent';
import { HomeComponentWrapper } from './HomeComponentStyles';

const HomeComponent = (props) => (
  <HomeComponentWrapper>
    <FindRestaurantComponent history={props.history} />
  </HomeComponentWrapper>
);

export default HomeComponent;
