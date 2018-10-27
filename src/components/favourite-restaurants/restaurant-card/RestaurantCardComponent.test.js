import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import RestaurantCardComponent from './RestaurantCardComponent';
import RatingComponent from '../rating/RatingComponent';
import Rating from 'react-rating';

Enzyme.configure({ adapter: new Adapter() });

describe('Test RestaurantCardComponent', () => {
  it('should display Restaurant Card', () => {
    // given
    const props = {
      data: {
        name: 'name',
        rating: 3,
      },
    };

    // when
    const enzymeWrapper = mount(<RestaurantCardComponent {...props} />);

    // then
    expect(enzymeWrapper.props().data).toEqual({name: 'name', rating: 3});
    expect(enzymeWrapper.find(RatingComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(Rating).props().initialRating).toBe(3);
    expect(enzymeWrapper.find(Rating).props().readonly).toBe(true);
  });
});
