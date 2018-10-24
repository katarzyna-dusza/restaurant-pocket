import React from 'react';
import Rating from 'react-rating';
import {
  RatingComponentReadOnlyWrapper,
  RatingComponentWrapper,
} from './RatingComponentStyles';

const RatingComponent = (props) => {
  if (props.readonly) {
    return (
      <RatingComponentReadOnlyWrapper>
        <Rating
          fractions={2}
          emptySymbol={<i className="material-icons">star_border</i>}
          fullSymbol={<i className="material-icons">star</i>}
          initialRating={props.rating}
          readonly
        />
      </RatingComponentReadOnlyWrapper>
    );
  }

  return (
    <RatingComponentWrapper>
      <Rating
        fractions={2}
        emptySymbol={<i className="material-icons">star_border</i>}
        fullSymbol={<i className="material-icons">star</i>}
        onChange={props.setRating}
        initialRating={props.rating}
      />
    </RatingComponentWrapper>
  );
};

export default RatingComponent;
