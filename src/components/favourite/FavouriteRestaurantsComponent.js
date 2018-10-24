import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Restaurants from './Restaurants';
import Map from './Map';
import * as actions from '../../redux/actions';
import * as reducers from '../../redux/reducers';

import Tooltip from './Tooltip';

const FavouriteRestaurantsWrapper = styled.div`
  height: calc(100vh - 90px);
  width: 20%;
  margin-left: 1%;
  font-size: 40px;
  text-align: center;
  float: left;
`;

const MapWrapper = styled.div`
  height: calc(100vh - 90px);
  width: 78%;
  margin-top: 20px;
  box-shadow: 0 0 2px rgba(0,0,0,.12);
  background-color: white;
  font-size: 40px;
  text-align: center;
  float: right;

  > div {
    height: 100%;
    width: 100%;
  }
`;

class FavouriteRestaurantsComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { address, fetchGeo } = this.props;
    const addressGeo = address ? address : 'Berlin';
    fetchGeo(addressGeo);
  }

  render() {
    return (
      <div>
        <FavouriteRestaurantsWrapper>
          <Restaurants restaurants={this.props.restaurants}></Restaurants>
        </FavouriteRestaurantsWrapper>
        <MapWrapper>
          <Map address={this.props.address} geo={this.props.geo} addRestaurant={this.props.addRestaurant} />
        </MapWrapper>
      </div>
    );
  }
}

export const mapStateToProps = (state, { history }) => ({
    address: reducers.fetchAddress(state),
    geo: reducers.fetchGeo(state),
    restaurants: reducers.getRestaurants(state)
});

FavouriteRestaurantsComponent = connect(
    mapStateToProps,
    actions
)(FavouriteRestaurantsComponent);

export default FavouriteRestaurantsComponent;
