import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputComponent from '../../shared/input/InputComponent';
import ButtonComponent from '../../shared/button/ButtonComponent';
import * as actions from '../../../redux/actions';
import {
  isAddressValid,
  isAddressReachedLimit,
} from '../../../input-validation';
import background from './background.jpg';
import {
  FindRestaurantComponentWrapper,
  BackgroundImage,
  HomeHeader,
} from './FindRestaurantComponentStyles';

const APP_NAME = 'Find your favourite restaurant';
const APP_NAME_SMALL = 'Taste your perfect meal';
const ALERT_MSG =
  'Please, use alphanumeric characters and optionally `.`, `,`, `/` to write correct address. The address should have max 40 characters.';

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

  disableButton() {
    return (
      !isAddressValid(this.state.address) ||
      !this.state.address ||
      isAddressReachedLimit(this.state.address)
    );
  }

  render() {
    return (
      <BackgroundImage imageSrc={background}>
        <FindRestaurantComponentWrapper>
          <HomeHeader big>{APP_NAME}</HomeHeader>
          <HomeHeader>{APP_NAME_SMALL}</HomeHeader>
          <InputComponent
            big
            message={ALERT_MSG}
            position={'bottom'}
            open={
              !isAddressValid(this.state.address) ||
              isAddressReachedLimit(this.state.address)
            }
            placeholder={'Type your address'}
            value={this.state.address}
            handleChange={this.handleAddressChange}
          />
          <ButtonComponent
            big
            disabled={this.disableButton()}
            onClick={this.findRestaurant}
            text={'Find'}
          />
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
