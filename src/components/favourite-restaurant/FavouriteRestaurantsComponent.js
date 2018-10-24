import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantsComponent from './restaurants/RestaurantsComponent';
import MapComponent from './map/MapComponent';
import * as actions from '../../redux/actions';
import * as reducers from '../../redux/reducers';
import { MainComponentWrapper } from '../../styles/SharedStyles';
import {
  MapWrapper,
  RestaurantsWrapper,
} from './FavouriteRestaurantsComponentStyles';

class FavouriteRestaurantsComponent extends Component {
  componentDidMount() {
    const { address, fetchGeo } = this.props;
    const addressGeo = address ? address : 'Berlin';

    fetchGeo(addressGeo);
  }

  render() {
    const {restaurants, restaurantNames, address, geo, addRestaurant} = this.props;

    return (
      <MainComponentWrapper>
        <RestaurantsWrapper>
          <RestaurantsComponent restaurants={restaurants} />
        </RestaurantsWrapper>
        <MapWrapper>
          <MapComponent
            address={address}
            geo={geo}
            addRestaurant={addRestaurant}
            restaurantNames={restaurantNames}
          />
        </MapWrapper>
      </MainComponentWrapper>
    );
  }
}

export const mapStateToProps = (state, { history }) => ({
  address: reducers.fetchAddress(state),
  geo: reducers.fetchGeo(state),
  restaurants: reducers.getRestaurants(state),
  restaurantNames: reducers.getRestaurantNames(state)
});

FavouriteRestaurantsComponent = connect(
  mapStateToProps,
  actions,
)(FavouriteRestaurantsComponent);

export default FavouriteRestaurantsComponent;
