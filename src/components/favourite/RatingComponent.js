import React, { Component } from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';

const RatingWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  font-family: 'Ubuntu', sans-serif;
  font-size: 10px;
  text-align: right;

  i {
    color: #f4e21a;
  }
`;

const RatingWrapperSecond = styled.div`
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
  text-align: left;
  font-size: 10px;
  margin: 0 12px;

  i {
    color: #f4e21a;
    font-size: 30px;
  }
`;

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
          <RatingWrapper>
          <Rating
            fractions={2}
            emptySymbol={<i className="material-icons">star_border</i>}
            fullSymbol={<i className="material-icons">star</i>}
            initialRating={this.props.rating}
            readonly
          />
          </RatingWrapper>
        )
      }

      return (
        <RatingWrapperSecond>
        <Rating
          fractions={2}
          emptySymbol={<i className="material-icons">star_border</i>}
          fullSymbol={<i className="material-icons">star</i>}
          onChange={this.handleChange}
          initialRating={this.state.rating}
        />
        </RatingWrapperSecond>
      )
  }
}

export default RatingComponent;
