import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import RestaurantCardComponent from './RestaurantCardComponent';
import {
  RestaurantsComponentWrapper,
  PaginationWrapper,
  EmptyList,
  Header,
} from '../../styles/RestaurantsComponentStyles';

const ITEMS_PER_PAGE = 5;
const MAX_PAGINATION_RANGE = 3;

class RestaurantsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
      sort: 'desc',
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.sortRestaurants = this.sortRestaurants.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  paginateData(restaurants) {
    const pageIndex = this.state.activePage - 1;
    const start = pageIndex * ITEMS_PER_PAGE;
    const end = pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    return restaurants.slice(start, end);
  }

  displayPagination() {
    return this.props.restaurants.length > ITEMS_PER_PAGE ? (
      <Pagination
        activePage={this.state.activePage}
        totalItemsCount={this.props.restaurants.length}
        itemsCountPerPage={ITEMS_PER_PAGE}
        pageRangeDisplayed={MAX_PAGINATION_RANGE}
        onChange={this.handlePageChange}
        prevPageText="<"
        nextPageText=">"
      />
    ) : (
      ''
    );
  }

  sortRestaurants(event) {
    const selectedSorting = event.target.getAttribute('data-type');

    this.setState({ sort: selectedSorting });
    this.setState({ restaurants: this.props.restaurants.reverse() });
  }

  displaySorting() {
    return 'desc' === this.state.sort ? (
      <i className="material-icons" data-type="asc" onClick={this.sortRestaurants}>
        arrow_drop_up
      </i>
    ) : (
      <i className="material-icons" data-type="desc" onClick={this.sortRestaurants}>
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
          <EmptyList>No favourite restaurants</EmptyList>
        </RestaurantsComponentWrapper>
      );
    }

    return (
      <RestaurantsComponentWrapper>
        <Header>
          Your restaurants
          {this.props.restaurants.length > 1 ? this.displaySorting() : ''}
        </Header>
        {this.paginateData(restaurantList)}
        <PaginationWrapper>{this.displayPagination()}</PaginationWrapper>
      </RestaurantsComponentWrapper>
    );
  }
}

export default RestaurantsComponent;
