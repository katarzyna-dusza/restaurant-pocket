import React, { Component } from 'react';
import RestaurantCardComponent from '../restaurant-card/RestaurantCardComponent';
import PaginationComponent from '../../shared/pagination/PaginationComponent';
import {
  RestaurantsComponentWrapper,
  EmptyList,
  Header,
} from './RestaurantsComponentStyles';

class RestaurantsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'desc',
    };

    this.sortRestaurants = this.sortRestaurants.bind(this);
  }

  sortRestaurants(event) {
    const selectedSorting = event.target.getAttribute('data-type');

    this.setState({ sort: selectedSorting });
    this.setState({ restaurants: this.props.restaurants.reverse() });
  }

  displaySorting() {
    return 'desc' === this.state.sort ? (
      <i
        className="material-icons"
        data-type="asc"
        onClick={this.sortRestaurants}>
        arrow_drop_up
      </i>
    ) : (
      <i
        className="material-icons"
        data-type="desc"
        onClick={this.sortRestaurants}>
        arrow_drop_down
      </i>
    );
  }

  render() {
    const restaurantList = this.props.restaurants.map((r, i) => (
      <RestaurantCardComponent key={i} data={r} />
    ));

    if (0 === this.props.restaurants.length) {
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
          {this.props.restaurants.length > 1 ? this.displaySorting() : ''}
        </Header>
        <PaginationComponent data={restaurantList} />
      </RestaurantsComponentWrapper>
    );
  }
}

export default RestaurantsComponent;
