import React, { Component } from 'react';
import RatingComponent from '../rating/RatingComponent';
import InputComponent from '../../shared/input/InputComponent';
import ButtonComponent from '../../shared/button/ButtonComponent';
import { isNameValid, alreadyExists } from '../../../input-validation';
import {
  TooltipComponentWrapper,
  Header,
  Label,
} from './TooltipComponentStyles';
import {Tooltip} from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const ALERT_CHAR = 'Please, use alphanumeric characters to write name. The first character must be a letter.'
const ALERT_EXISTS = 'This name already exists. Please, use another one.';

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

  errorMessage() {
    return !isNameValid(this.state.name) ? ALERT_CHAR : ALERT_EXISTS;
  }

  isNameAllowed() {
    return isNameValid(this.state.name) && !alreadyExists(this.state.name, this.props.restaurantNames);
  }

  disableButton() {
    return !this.isNameAllowed() || !this.state.name;
  }

  render() {
    return (
      <TooltipComponentWrapper>
        <Header>Do you like this place?</Header>
        <Label>Name it:</Label>
        <InputComponent message={this.errorMessage()} position="bottom" open={!this.isNameAllowed() && this.state.name.length !== 0} placeholder="Type restaurant name" value={this.state.name} handleChange={this.handleNameChange} />
        <Label>Rate it:</Label>
        <RatingComponent rating={this.state.rating} setRating={this.setRating} left />
        <ButtonComponent text={"Add"} disabled={this.disableButton()} onClick={this.addRestaurant} />
      </TooltipComponentWrapper>
    );
  }
}



export default TooltipComponent;
