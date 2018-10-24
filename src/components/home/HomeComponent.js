import React from 'react';
import FindRestaurantComponent from './find-restaurant/FindRestaurantComponent';
import { MainComponentWrapper } from '../../styles/SharedStyles';

const HomeComponent = (props) => (
  <MainComponentWrapper home>
    <FindRestaurantComponent history={props.history} />
  </MainComponentWrapper>
);

export default HomeComponent;
