import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { checkAddress } from '../../../input-validation';
import background from './background.jpg';
import { Input, Button, Alert } from '../../../styles/SharedStyles';
import {
  FindRestaurantComponentWrapper,
  BackgroundImage,
  HomeHeader,
} from './FindRestaurantComponentStyles';

class FindRestaurantComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
    };

    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.findRestaurant = this.findRestaurant.bind(this);
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  findRestaurant() {
    const { setAddress, history } = this.props;

    setAddress(this.state.address);
    history.push('/favourite');
  }

  displayAlert() {
    const ALERT = `Please, use alphanumeric characters and optionally '.', ',', '/' to write correct address.`;

    return (
      checkAddress(this.state.address) && (
        <Alert home>
          <p>{ALERT}</p>
        </Alert>
      )
    );
  }

  disableButton() {
    return this.displayAlert() || !this.state.address;
  }

  render() {
    return (
      <BackgroundImage imageSrc={background}>
        <FindRestaurantComponentWrapper>
          <HomeHeader big>Find your favourite restaurant</HomeHeader>
          <HomeHeader>Taste your perfect meal</HomeHeader>
          <Input
            big
            placeholder="Type your address"
            value={this.state.address}
            onChange={this.handleAddressChange}
          />
          <Button
            big
            disabled={this.disableButton()}
            onClick={this.findRestaurant}>
            Find
          </Button>
          {this.displayAlert()}
        </FindRestaurantComponentWrapper>
      </BackgroundImage>
    );
  }
}

export const mapStateToProps = (state, { history }) => ({});

FindRestaurantComponent = connect(
  mapStateToProps,
  actions,
)(FindRestaurantComponent);

export default FindRestaurantComponent;
