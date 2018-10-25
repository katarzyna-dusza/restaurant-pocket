import React, { Component } from 'react';
import RatingComponent from '../rating/RatingComponent';
import { checkName, alreadyExists } from '../../../input-validation';
import { Button, Input, Alert } from '../../../styles/SharedStyles';
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
    this.clearData();
  }

  setRating(event) {
    this.setState({ rating: event });
  }

  clearData() {
    this.setState({ name: '' });
    this.setRating(0);
  }

  displayAlert() {
    const ALERT_CHAR = `Please, use alphanumeric characters to write name.`;
    const ALERT_EXISTS = `This name already exists. Please, use another one.`;

    if (checkName(this.state.name)) {
      return (
        <Alert>
          <p>{ALERT_CHAR}</p>
        </Alert>
      );
    }

    return (
      alreadyExists(this.state.name, this.props.restaurantNames) && (
        <Alert>
          <p>{ALERT_EXISTS}</p>
        </Alert>
      )
    );
  }

  disableButton() {
    return this.displayAlert() || !this.state.name;
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
        <RatingComponent rating={this.state.rating} setRating={this.setRating} left />
        <Button disabled={this.disableButton()} onClick={this.addRestaurant}>
          Add
        </Button>
        {this.displayAlert()}
      </TooltipComponentWrapper>
    );
  }
}

export default TooltipComponent;
