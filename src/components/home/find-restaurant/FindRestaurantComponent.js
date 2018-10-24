import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import background from './background.jpg';
import { Input, Button } from '../../../styles/SharedStyles';
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
          <Button big onClick={this.findRestaurant}>
            Find
          </Button>
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
