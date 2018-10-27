import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PaginatedListComponent from './PaginatedListComponent';
import Pagination from 'react-js-pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('Test PaginatedListComponent', () => {
  it('should not display pagination', () => {
    // given
    const props = {
      data: [1, 2, 3],
    };

    // when
    const enzymeWrapper = mount(<PaginatedListComponent {...props} />);

    // then
    expect(enzymeWrapper.props().data).toEqual(props.data);
    expect(enzymeWrapper.find(Pagination)).toHaveLength(0);
  });

  it('should not display pagination, where 4 is max ITEMS_PER_PAGE', () => {
    // given
    const props = {
      data: [1, 2, 3, 4],
    };

    // when
    const enzymeWrapper = mount(<PaginatedListComponent {...props} />);

    // then
    expect(enzymeWrapper.props().data).toEqual(props.data);
    expect(enzymeWrapper.find(Pagination)).toHaveLength(0);
  });

  it('should display pagination', () => {
    // given
    const props = {
      data: [1, 2, 3, 4, 5],
    };

    // when
    const enzymeWrapper = mount(<PaginatedListComponent {...props} />);

    // then
    expect(enzymeWrapper.props().data).toEqual(props.data);
    expect(enzymeWrapper.find(Pagination)).toHaveLength(1);
  });

  it('should display pagination with paged data (from second page)', () => {
    // given
    const props = {
      data: [1, 2, 3, 4, 5, 6, 7, 8],
    };

    // when
    const enzymeWrapper = mount(<PaginatedListComponent {...props} />);
    const secondPageButton = enzymeWrapper.find('li').at(3);
    secondPageButton.simulate('click');

    // then
    expect(enzymeWrapper.props().data).toEqual(props.data);
    expect(enzymeWrapper.find(Pagination)).toHaveLength(1);
    expect(enzymeWrapper.state().activePage).toBe(2);
    expect(enzymeWrapper.children().props().children[0]).toEqual[(5, 6, 7, 8)];
  });
});
