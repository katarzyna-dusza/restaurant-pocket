import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Restaurants from './Restaurants';
import Map from './Map';
import * as actions from '../../redux/actions';
import * as reducers from '../../redux/reducers';

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
`;

class FavouriteRestaurantsComponent extends Component {
  render() {
    const restaurants = [
      {
        name: 'My super restaurant1',
        rating: 1
      },
      {
        name: 'My super restaurant2',
        rating: 2
      },
      {
        name: 'My super restaurant2.5',
        rating: 2.5
      },
      {
        name: 'My super restaurant3',
        rating: 3
      },
      {
        name: 'My super restaurant4',
        rating: 4
      },
      {
        name: 'My super restaurant4.5',
        rating: 4.5
      }
    ];

    return (
      <div>
        <FavouriteRestaurantsWrapper>
          <Restaurants restaurants={restaurants}></Restaurants>
        </FavouriteRestaurantsWrapper>
        <MapWrapper>
          <Map isMarkerShown={false} address={this.props.address} />
        </MapWrapper>
      </div>
    );
  }
}

export const mapStateToProps = (state, { history }) => ({
    address: reducers.getAddress(state)
});

FavouriteRestaurantsComponent = connect(
    mapStateToProps,
    actions
)(FavouriteRestaurantsComponent);

export default FavouriteRestaurantsComponent;
