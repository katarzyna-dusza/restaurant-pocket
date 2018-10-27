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

const DEFAULT_ADDRESS = 'Berlin';

export class FavouriteRestaurantsComponent extends Component {
  componentDidMount() {
    const { address, fetchGeo } = this.props;
    const addressGeo = address ? address : DEFAULT_ADDRESS;

    fetchGeo(addressGeo);
  }

  render() {
    const {
      restaurants,
      restaurantNames,
      address,
      geo,
      addRestaurant,
      sortData,
      sortType,
    } = this.props;

    return (
      <MainComponentWrapper>
        <RestaurantsWrapper>
          <RestaurantsComponent
            sortData={sortData}
            sortType={sortType}
            restaurants={restaurants}
          />
        </RestaurantsWrapper>
        <MapWrapper>
          <MapComponent
            address={address}
            geo={geo}
            addRestaurant={addRestaurant}
            restaurantNames={restaurantNames}
            restaurants={restaurants}
          />
        </MapWrapper>
      </MainComponentWrapper>
    );
  }
}

export const mapStateToProps = (state, {}) => ({
  address: reducers.getAddress(state),
  geo: reducers.getGeo(state),
  restaurants: reducers.getRestaurants(state),
  restaurantNames: reducers.getRestaurantNames(state),
  sortType: reducers.getSortType(state),
});

const FavouriteRestaurantsComponentContainer = connect(
  mapStateToProps,
  actions,
)(FavouriteRestaurantsComponent);

export default FavouriteRestaurantsComponentContainer;
