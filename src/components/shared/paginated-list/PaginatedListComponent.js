import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import { PaginationWrapper } from './PaginatedListComponentStyles';

const ITEMS_PER_PAGE = 5;
const MAX_PAGINATION_RANGE = 3;
const PREV = '<';
const NEXT = '>';

class PaginatedListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  displayPaginatedData() {
    const pageIndex = this.state.activePage - 1;
    const start = pageIndex * ITEMS_PER_PAGE;
    const end = pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    return this.props.data.slice(start, end);
  }

  displayPagination() {
    const shouldDisplayPagination = this.props.data.length > ITEMS_PER_PAGE;

    if (shouldDisplayPagination) {
      return (
        <PaginationWrapper>
          <Pagination
            activePage={this.state.activePage}
            totalItemsCount={this.props.data.length}
            itemsCountPerPage={ITEMS_PER_PAGE}
            pageRangeDisplayed={MAX_PAGINATION_RANGE}
            onChange={this.handlePageChange}
            prevPageText={PREV}
            nextPageText={NEXT}
          />
        </PaginationWrapper>
      );
    }
  }

  render() {
    return (
      <div>
        {this.displayPaginatedData()}
        {this.displayPagination()}
      </div>
    );
  }
}

export default PaginatedListComponent;
