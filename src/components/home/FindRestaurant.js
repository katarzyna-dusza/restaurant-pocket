import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BackgroundImage, Header, FindInput, Button } from '../../shared/components';
import background from './background.jpg';
import * as actions from '../../redux/actions';
import reducers, { getAddress } from '../../redux/reducers';

const FindWrapper = styled.div`
  width: 50%;
  margin-left: 20%;
  padding: 5%;
  top: 20%;
  position: relative;
`;

class FindRestaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFind = this.handleFind.bind(this);
  }

  handleChange(event) {
    this.setState({address: event.target.value});
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
          <FindInput placeholder="Type your address" value={this.state.address} onChange={this.handleChange}></FindInput>
          <Button big onClick={this.handleFind}>Find</Button>
        </FindWrapper>
      </BackgroundImage>
    );
  }
}

export const mapStateToProps = (state, {}) => ({});

FindRestaurant = connect(
    mapStateToProps,
    actions
)(FindRestaurant);

export default FindRestaurant;
