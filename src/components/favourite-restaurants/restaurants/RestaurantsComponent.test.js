import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import RestaurantsComponent from './RestaurantsComponent';
import RestaurantCardComponent from '../restaurant-card/RestaurantCardComponent';
import PaginatedListComponent from '../../shared/paginated-list/PaginatedListComponent';
import SortingComponent from '../../shared/sorting/SortingComponent';
import EmptyListComponent from '../../shared/empty-list/EmptyListComponent';
import Pagination from 'react-js-pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('Test RestaurantsComponent', () => {
  it('should display EmptyList', () => {
    // given
    const props = {
      restaurants: [],
    };

    // when
    const enzymeWrapper = mount(<RestaurantsComponent {...props} />);

    // then
    expect(enzymeWrapper.find(EmptyListComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(SortingComponent)).toHaveLength(0);
    expect(enzymeWrapper.find(PaginatedListComponent)).toHaveLength(0);
    expect(enzymeWrapper.find(RestaurantCardComponent)).toHaveLength(0);
  });

  it('should display a list with one entry (without sorting and without visible pagination)', () => {
    // given
    const props = {
      restaurants: [{ name: 'name', rating: 3 }],
    };

    // when
    const enzymeWrapper = mount(<RestaurantsComponent {...props} />);

    // then
    expect(enzymeWrapper.find(EmptyListComponent)).toHaveLength(0);
    expect(enzymeWrapper.find(SortingComponent)).toHaveLength(1);
    expect(
      enzymeWrapper.find(SortingComponent).props().sortingAvailable,
    ).toBe(false);
    expect(enzymeWrapper.find(PaginatedListComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(Pagination)).toHaveLength(0);
    expect(enzymeWrapper.find(RestaurantCardComponent)).toHaveLength(1);
  });

  it('should display a list with one entry (with sorting and visible pagination)', () => {
    // given
    const props = {
      sortType: 'DESC',
      restaurants: [
        { name: 'name', rating: 3 },
        { name: 'name1', rating: 3 },
        { name: 'name2', rating: 3 },
        { name: 'name3', rating: 3 },
        { name: 'name4', rating: 3 },
      ],
    };
    const ITEMS_PER_PAGE = 4;

    // when
    const enzymeWrapper = mount(<RestaurantsComponent {...props} />);

    // then
    expect(enzymeWrapper.find(EmptyListComponent)).toHaveLength(0);
    expect(enzymeWrapper.find(SortingComponent)).toHaveLength(1);
    expect(
      enzymeWrapper.find(SortingComponent).props().sortingAvailable,
    ).toBe(true);
    expect(
      enzymeWrapper
        .find('i')
        .at(0)
        .props().children,
    ).toBe('arrow_drop_up');
    expect(enzymeWrapper.find(PaginatedListComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(Pagination)).toHaveLength(1);
    expect(enzymeWrapper.find(RestaurantCardComponent)).toHaveLength(
      ITEMS_PER_PAGE,
    );
  });

  it('should react on Sort event', () => {
    // given
    const props = {
      sortType: 'DESC',
      restaurants: [
        { name: 'name', rating: 3 },
        { name: 'name1', rating: 3 },
        { name: 'name2', rating: 3 },
        { name: 'name3', rating: 3 },
        { name: 'name4', rating: 3 },
      ],
      sortData: sinon.spy(),
    };

    // when
    const enzymeWrapper = mount(<RestaurantsComponent {...props} />);
    enzymeWrapper.find(SortingComponent).simulate('click');

    // then
    expect(props.sortData.callCount).toBe(1);
  });
});
