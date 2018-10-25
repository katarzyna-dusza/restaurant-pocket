import React from 'react';
import Rating from 'react-rating';
import {
  RatingComponentReadOnlyWrapper,
  RatingComponentWrapper,
} from './RatingComponentStyles';

const RatingComponent = (props) => (
  <RatingComponentWrapper readOnly={props.readonly} top={props.top} bottom={props.bottom} left={props.left} right={props.right}>
    <Rating
      fractions={2}
      emptySymbol={<i className="material-icons">star_border</i>}
      fullSymbol={<i className="material-icons">star</i>}
      onChange={props.setRating}
      initialRating={props.rating}
      readonly={props.readonly}
    />
  </RatingComponentWrapper>
);

export default RatingComponent;
