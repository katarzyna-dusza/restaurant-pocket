import React, { Component } from 'react';
import RatingComponent from '../rating/RatingComponent';
import { Button, Input } from '../../../styles/SharedStyles';
import {
  TooltipComponentWrapper,
  Header,
  Label,
} from './TooltipComponentStyles';

class TooltipComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      rating: 0,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.setRating = this.setRating.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  addRestaurant() {
    const { name, rating } = this.state;

    const restaurant = { name, rating };
    this.props.addRestaurant(restaurant);
  }

  setRating(event) {
    this.setState({ rating: event });
  }

  render() {
    return (
      <TooltipComponentWrapper>
        <Header>Do you like this place?</Header>
        <Label>Name it:</Label>
        <Input
          placeholder="Type restaurant name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <Label>Rate it:</Label>
        <RatingComponent currentRating={this.setRating} />
        <Button onClick={this.addRestaurant}>Add</Button>
      </TooltipComponentWrapper>
    );
  }
}

export default TooltipComponent;