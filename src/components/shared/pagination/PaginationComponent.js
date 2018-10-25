import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import { PaginationWrapper } from './PaginationComponentStyles';

const ITEMS_PER_PAGE = 5;
const MAX_PAGINATION_RANGE = 3;

class PaginationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: 1
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  paginateData() {
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
            prevPageText="<"
            nextPageText=">"
          />
        </PaginationWrapper>
      )
    }
  }

  render() {
    return (
      <div>
        {this.paginateData()}
        {this.displayPagination()}
      </div>
    );
  }
}

export default PaginationComponent;
