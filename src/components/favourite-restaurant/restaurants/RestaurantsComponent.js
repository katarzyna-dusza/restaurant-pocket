import React  from 'react';
import RestaurantCardComponent from '../restaurant-card/RestaurantCardComponent';
import PaginationComponent from '../../shared/pagination/PaginationComponent';
import SortingComponent from '../../shared/sorting/SortingComponent';
import EmptyListComponent from '../../shared/empty-list/EmptyListComponent';
import { RestaurantsComponentWrapper, Header } from './RestaurantsComponentStyles';

const RestaurantsComponent = (props) =>  {
  const sortRestaurants = (event) => {
    const selectedSortType = event.target.getAttribute('data-type');
    props.sortData(selectedSortType)
  }

  const restaurantList = props.restaurants.map((r, i) => (
    <RestaurantCardComponent key={i} data={r} />
  ));

  if (0 === props.restaurants.length) {
    return (
      <RestaurantsComponentWrapper>
        <EmptyListComponent text='No favourite restaurants'></EmptyListComponent>
      </RestaurantsComponentWrapper>
    );
  }

  return (
    <RestaurantsComponentWrapper>
      <Header>
        Your restaurants
        <SortingComponent sortType={props.sortType} onClick={sortRestaurants} sortingAvailable={props.restaurants.length > 1} />
      </Header>
      <PaginationComponent data={restaurantList} />
    </RestaurantsComponentWrapper>
  );
}

export default RestaurantsComponent;
