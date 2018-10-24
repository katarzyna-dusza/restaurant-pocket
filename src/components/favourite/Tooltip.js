import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../shared/components';
import * as actions from '../../redux/actions';
import RatingComponent from './RatingComponent';

const Header = styled.div`
  padding: 10px 15px;
  font-size: 18px;
  text-align: left;
  border-bottom: 1px solid lightgrey;
`;

const Label = styled.div`
  width: fit-content;
  margin: 10px 15px;
  font-size: 14px;
`;

const TooltipWrapperA = styled.div`
position: relative;
width: 300px;
height: 200px;
left: -120px;
top: -200px;
border-radius: 3px;
background-color: white;
font-size: 16px;
padding: 4px;
cursor: pointer

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 10px;
      border-style: solid;
      border-color: #FFFFFF transparent transparent transparent;
      top: 204px;
      left: 120px;
    }
}
`;

const Rating = styled.div`

`;

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      rating: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    // this.rating = this.rating.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  addRestaurant() {
    console.log(this.state)
    // const restaurant = {
    //   name: this.state.name,
    //   rating: Math.floor(Math.random() * 5) + 1,
    // };
    // this.props.addRestaurant(restaurant);
  }

  // rating(event) {
  //   this.setState({ rating: event });
  //   console.log(event)
  //   console.log(this.state)
  // }

  render() {
    return (
      <TooltipWrapperA>
        <Header>Do you like the restaurant?</Header>
        <Label>Name it:</Label>
        <Input
          placeholder="Type restaurant name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Label>Rate it:</Label>
        <RatingComponent />
        <Button onClick={this.addRestaurant}>Add</Button>
      </TooltipWrapperA>
    );
  }
}

export default Tooltip;
