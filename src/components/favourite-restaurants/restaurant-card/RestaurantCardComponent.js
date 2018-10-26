import React from 'react';
import RatingComponent from '../rating/RatingComponent';
import {
  RestaurantCardComponentWrapper,
  Name,
  FoodIcon,
} from './RestaurantCardComponentStyles';

const RestaurantCardComponent = (props) => (
  <RestaurantCardComponentWrapper>
    <FoodIcon>
      <i className="material-icons">fastfood</i>
    </FoodIcon>
    <Name>{props.data.name}</Name>
    <RatingComponent rating={props.data.rating} readonly bottom right />
  </RestaurantCardComponentWrapper>
);

export default RestaurantCardComponent;
