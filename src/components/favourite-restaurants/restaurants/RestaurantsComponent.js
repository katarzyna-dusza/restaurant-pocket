import React from 'react';
import RestaurantCardComponent from '../restaurant-card/RestaurantCardComponent';
import PaginatedListComponent from '../../shared/paginated-list/PaginatedListComponent';
import SortingComponent from '../../shared/sorting/SortingComponent';
import EmptyListComponent from '../../shared/empty-list/EmptyListComponent';
import {
  RestaurantsComponentWrapper,
  Header,
} from './RestaurantsComponentStyles';

const EMPTY_RESTAURANTS_LIST = 'No favourite restaurants';

const RestaurantsComponent = (props) => {
  const sortRestaurants = (event) => {
    const selectedSortType = event.target.getAttribute('data-type');
    props.sortData(selectedSortType);
  };

  const restaurantList = props.restaurants.map((r, i) => (
    <RestaurantCardComponent key={i} data={r} />
  ));

  if (0 === props.restaurants.length) {
    return (
      <RestaurantsComponentWrapper>
        <EmptyListComponent text={EMPTY_RESTAURANTS_LIST} />
      </RestaurantsComponentWrapper>
    );
  }

  return (
    <RestaurantsComponentWrapper>
      <Header>
        Favourite restaurants
        <SortingComponent
          sortType={props.sortType}
          onClick={sortRestaurants}
          sortingAvailable={props.restaurants.length > 1}
        />
      </Header>
      <PaginatedListComponent data={restaurantList} />
    </RestaurantsComponentWrapper>
  );
};

export default RestaurantsComponent;
