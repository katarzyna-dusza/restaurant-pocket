import React, { Component } from 'react';
import styled from 'styled-components';

const RestaurantCardWrapper = styled.div`
  height: 100px;
  margin: 5px 0;
  padding: 5px 10px;
  position: relative;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  border-bottom: 1px solid lightgrey;
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
`;

const Name = styled.div`
  padding: 5px 10px;
  display: inline;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  text-align: left;
  float: left;
`;

const OriginalName = styled.div`
  width: 100%;
  padding: 5px 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 15px;
  text-align: left;
`;

const Rating = styled.div`
  width: 100%;
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 10px;
  text-align: right;

  > i {
    color: #f4e21a;
  }
`;

const Icon = styled.div`
  width: 30px;
  display: inline;
  color: #a51a1a;
  float: left;
`;

class RestaurantCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rating = [];
    for (let i = 0; i < this.props.data.rating; i++) {
      rating.push(
        <i key={i} className="material-icons">
          star
        </i>,
      );
    }

    return (
      <RestaurantCardWrapper>
        <Icon>
          <i className="material-icons">fastfood</i>
        </Icon>
        <Name>{this.props.data.name}</Name>
        <Rating>{rating}</Rating>
      </RestaurantCardWrapper>
    );
  }
}

export default RestaurantCard;
