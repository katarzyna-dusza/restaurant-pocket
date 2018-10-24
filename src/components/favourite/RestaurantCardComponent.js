import React from 'react';
import RatingComponent from './RatingComponent';
import { RestaurantCardComponentWrapper, Name, FoodIcon } from '../../styles/RestaurantCardComponentStyles';

const RestaurantCardComponent = (props) => (
  <RestaurantCardComponentWrapper>
    <FoodIcon>
      <i className="material-icons">fastfood</i>
    </FoodIcon>
    <Name>{props.data.name}</Name>
    <RatingComponent readonly rating={props.data.rating} />
  </RestaurantCardComponentWrapper>
);

export default RestaurantCardComponent;
