import React, { Component } from 'react';
import RatingComponent from '../rating/RatingComponent';
import InputComponent from '../../shared/input/InputComponent';
import ButtonComponent from '../../shared/button/ButtonComponent';
import LabelComponent from '../../shared/label/LabelComponent';
import {
  isNameValid,
  alreadyExists,
  isNameReachedLimit,
} from '../../../input-validation';
import {
  MarkerComponentWrapper,
  MarkerIcon,
  Header,
} from './MarkerComponentStyles';

const ALERT_CHAR =
  'Please, use alphanumeric characters to write name. The first character must be a letter. The name should have max 20 characters.';
const ALERT_EXISTS = 'This name already exists. Please, use another one.';

class MarkerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      rating: 0,
      showMarker: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.setRating = this.setRating.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
    this.toggleMarker = this.toggleMarker.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  addRestaurant() {
    const { name, rating } = this.state;
    const { lat, lng } = this.props;

    const restaurant = { name, rating, lat, lng };
    this.props.addRestaurant(restaurant);
    this.clearData();
  }

  setRating(event) {
    this.setState({ rating: event });
  }

  clearData() {
    this.setState({ showMarker: !this.state.showMarker });
    this.setState({ name: '' });
    this.setRating(0);
  }

  toggleMarker() {
    this.clearData();
  }

  errorMessage() {
    return !isNameValid(this.state.name) || isNameReachedLimit(this.state.name)
      ? ALERT_CHAR
      : ALERT_EXISTS;
  }

  isNameAllowed() {
    return (
      isNameValid(this.state.name) &&
      !alreadyExists(this.state.name, this.props.restaurantNames) &&
      !isNameReachedLimit(this.state.name)
    );
  }

  disableButton() {
    return !this.isNameAllowed() || !this.state.name;
  }

  render() {
    if (this.state.showMarker) {
      return (
        <MarkerComponentWrapper>
          <Header>
            Do you like this place?
            <i className="material-icons" onClick={this.toggleMarker}>
              close
            </i>
          </Header>
          <LabelComponent text={'Name'} />
          <InputComponent
            message={this.errorMessage()}
            position={'bottom'}
            open={!this.isNameAllowed() && this.state.name.length !== 0}
            placeholder={'Type restaurant name'}
            value={this.state.name}
            handleChange={this.handleNameChange}
          />
          <LabelComponent text={'Rate'} />
          <RatingComponent
            rating={this.state.rating}
            setRating={this.setRating}
            left
          />
          <ButtonComponent
            text={'Add'}
            disabled={this.disableButton()}
            onClick={this.addRestaurant}
          />
        </MarkerComponentWrapper>
      );
    }

    return (
      <MarkerIcon>
        <i className="material-icons" onClick={this.toggleMarker}>
          room
        </i>
      </MarkerIcon>
    );
  }
}
export default MarkerComponent;
