import React, { Component } from 'react';
import styled from 'styled-components';
import Pagination from "react-js-pagination";
import RestaurantCard from './RestaurantCard';

const ITEMS_PER_PAGE = 5;
const MAX_PAGINATION_RANGE = 3;

const RestaurantsWrapper = styled.div`
  height: calc(100vh - 90px);
  margin-top: 20px;
  font-size: 40px;
  text-align: center;
`;

const PaginationWrapper = styled.div`
  height: 80px;
  width: 20%;
  margin-left: 1%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 80px;

  > ul {
    width: 100%;
    margin: auto;
    padding: 0;
    font-size: 18px;
    position: absolute;
    bottom: 30px;
    list-style: none;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 5px;

      &.active > a {
        font-weight: bold;
      }

      a {
        color: #a51a1a;
        text-decoration: none;
      }
    }
  }
`;

const Header = styled.div`
  padding: 0 5px 40px;
  font-size: 20px;
  font-weight: 600;
  text-align: left;

  > i {
    float: right;
  }
`;

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: this.props.restaurants.sort(this.compareRatings),
      activePage: 1,
      sort: 'desc'
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.sort = this.sort.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  paginateData(restaurants) {
      const pageIndex = this.state.activePage - 1;
      const start = pageIndex * ITEMS_PER_PAGE;
      const end = pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

      return restaurants.slice(start, end);
  }

  displayPagination() {
    return this.state.restaurants.length > ITEMS_PER_PAGE
      ? <Pagination
            activePage={this.state.activePage}
            totalItemsCount={this.state.restaurants.length}
            itemsCountPerPage={ITEMS_PER_PAGE}
            pageRangeDisplayed={MAX_PAGINATION_RANGE}
            onChange={this.handlePageChange}
            prevPageText="<"
            nextPageText=">"
        />
      : '';
  }

  sort(event) {
    const selectedSorting = event.target.getAttribute("data-type");
    this.setState({ sort: selectedSorting });
    this.setState({ restaurants: this.state.restaurants.reverse() });
  }

  displaySorting() {
    return 'desc' === this.state.sort
      ? <i className="material-icons" data-type="asc" onClick={this.sort}>arrow_drop_up</i>
      : <i className="material-icons" data-type="desc" onClick={this.sort}>arrow_drop_down</i>;
  }

  compareRatings(firstObj, secondObj) {
     return firstObj.rating - secondObj.rating;
  }

  render() {
    const restaurantList = this.state.restaurants.map((r, i) =>
      <RestaurantCard key={i} data={r}></RestaurantCard>
    );

    if (0 === this.state.restaurants.length) {
      return (
        <div>Pusto</div>
      )
    }

    return (
      <RestaurantsWrapper>
        <Header>
          Your restaurants
          { this.displaySorting() }
        </Header>
          { this.paginateData(restaurantList) }
        <PaginationWrapper>{ this.displayPagination() }</PaginationWrapper>
      </RestaurantsWrapper>
    );
  }
}

export default Restaurants;
