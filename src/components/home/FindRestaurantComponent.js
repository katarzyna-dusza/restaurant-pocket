import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Header,
  Input,
  Button,
} from '../../styles/SharedStyles';
import { FindRestaurantComponentWrapper, BackgroundImage } from '../../styles/FindRestaurantComponentStyles';
import * as actions from '../../redux/actions';
import background from './background.jpg';

class FindRestaurantComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFind = this.handleFind.bind(this);
  }

  handleChange(event) {
    this.setState({ address: event.target.value });
  }

  handleFind() {
    const { setAddress, history } = this.props;
    setAddress(this.state.address);
    history.push('/favourite');
  }

  render() {
    return (
      <BackgroundImage imageSrc={background}>
        <FindRestaurantComponentWrapper>
          <Header big>Find your favourite restaurant</Header>
          <Header>Taste your perfect meal</Header>
          <Input
            big
            placeholder="Type your address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <Button big onClick={this.handleFind}>
            Find
          </Button>
        </FindRestaurantComponentWrapper>
      </BackgroundImage>
    );
  }
}

export const mapStateToProps = (state, {history}) => ({});

FindRestaurantComponent = connect(
  mapStateToProps,
  actions,
)(FindRestaurantComponent);

export default FindRestaurantComponent;
