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

class FavouriteRestaurantsComponent extends Component {
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

export const mapStateToProps = (state, { history }) => ({
  address: reducers.fetchAddress(state),
  geo: reducers.fetchGeo(state),
  restaurants: reducers.getRestaurants(state),
  restaurantNames: reducers.getRestaurantNames(state),
  sortType: reducers.getSortType(state),
});

FavouriteRestaurantsComponent = connect(
  mapStateToProps,
  actions,
)(FavouriteRestaurantsComponent);

export default FavouriteRestaurantsComponent;
