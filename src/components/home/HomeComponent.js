import React from 'react';
import FindRestaurantComponentContainer from './find-restaurant/FindRestaurantComponentContainer';
import { MainComponentWrapper } from '../../styles/SharedStyles';

const HomeComponent = (props) => (
  <MainComponentWrapper home>
    <FindRestaurantComponentContainer history={props.history} />
  </MainComponentWrapper>
);

export default HomeComponent;
