import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import RatingComponent from './RatingComponent';
import Rating from 'react-rating';

Enzyme.configure({ adapter: new Adapter() });

describe('Test RatingComponent', () => {
  it('should display empty rating', () => {
    // given
    const props = {
      rating: 0,
      setRating: sinon.spy(),
      readonly: false,
    };

    // when
    const enzymeWrapper = mount(<RatingComponent {...props} />);

    // then
    expect(enzymeWrapper.props().rating).toBe(0);
    expect(enzymeWrapper.props().readonly).toBe(false);
    expect(enzymeWrapper.find(Rating).props().initialRating).toBe(0);
    expect(enzymeWrapper.find(Rating).props().readonly).toBe(false);
  });

  it('should display full rating', () => {
    // given
    const props = {
      rating: 5,
      setRating: sinon.spy(),
      readonly: false,
    };

    // when
    const enzymeWrapper = mount(<RatingComponent {...props} />);

    // then
    expect(enzymeWrapper.props().rating).toBe(5);
    expect(enzymeWrapper.props().readonly).toBe(false);
    expect(enzymeWrapper.find(Rating).props().initialRating).toBe(5);
    expect(enzymeWrapper.find(Rating).props().readonly).toBe(false);
  });

  it('should display readonly rating', () => {
    // given
    const props = {
      rating: 5,
      setRating: sinon.spy(),
      readonly: true,
    };

    // when
    const enzymeWrapper = mount(<RatingComponent {...props} />);

    // then
    expect(enzymeWrapper.props().rating).toBe(5);
    expect(enzymeWrapper.props().readonly).toBe(true);
    expect(enzymeWrapper.find(Rating).props().initialRating).toBe(5);
    expect(enzymeWrapper.find(Rating).props().readonly).toBe(true);
  });
});
