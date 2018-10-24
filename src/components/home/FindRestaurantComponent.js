import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  BackgroundImage,
  Header,
  Input,
  Button,
} from '../../shared/components';
import * as actions from '../../redux/actions';
import background from './background.jpg';

const FindWrapper = styled.div`
  width: 50%;
  margin-left: 20%;
  padding: 5%;
  position: relative;
  top: 20%;
`;

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
    const { setAddress } = this.props;
    setAddress(this.state.address);
    this.props.history.push('/favourite');
  }

  render() {
    return (
      <BackgroundImage imageSrc={background}>
        <FindWrapper>
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
        </FindWrapper>
      </BackgroundImage>
    );
  }
}

export const mapStateToProps = (state, {}) => ({});

FindRestaurantComponent = connect(
  mapStateToProps,
  actions,
)(FindRestaurantComponent);

export default FindRestaurantComponent;
