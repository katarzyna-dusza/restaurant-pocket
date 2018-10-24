import React, { Component } from 'react';
import Rating from 'react-rating';
import { RatingComponentReadOnlyWrapper, RatingComponentWrapper } from '../../styles/RatingComponentStyles';

class RatingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({rating: data});
    this.props.currentRating(data);
  }

  render() {
      if (this.props.readonly) {
        return (
          <RatingComponentReadOnlyWrapper>
          <Rating
            fractions={2}
            emptySymbol={<i className="material-icons">star_border</i>}
            fullSymbol={<i className="material-icons">star</i>}
            initialRating={this.props.rating}
            readonly
          />
          </RatingComponentReadOnlyWrapper>
        )
      }

      return (
        <RatingComponentWrapper>
        <Rating
          fractions={2}
          emptySymbol={<i className="material-icons">star_border</i>}
          fullSymbol={<i className="material-icons">star</i>}
          onChange={this.handleChange}
          initialRating={this.state.rating}
        />
        </RatingComponentWrapper>
      )
  }
}

export default RatingComponent;
