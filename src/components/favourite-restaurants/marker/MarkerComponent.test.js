import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import MarkerComponent from './MarkerComponent';
import RatingComponent from '../rating/RatingComponent';
import InputComponent from '../../shared/input/InputComponent';
import ButtonComponent from '../../shared/button/ButtonComponent';
import LabelComponent from '../../shared/label/LabelComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test MarkerComponent', () => {
  it('should display marker icon on the map with initial state', () => {
    // when
    const enzymeWrapper = mount(<MarkerComponent />);

    // then
    expect(enzymeWrapper.find('i')).toHaveLength(1);
    expect(enzymeWrapper.state().name).toBe('');
    expect(enzymeWrapper.state().rating).toBe(0);
    expect(enzymeWrapper.state().showMarker).toBe(false);
  });

  it('should display MarkerComponent with the form in initial state', () => {
    // when
    const enzymeWrapper = mount(<MarkerComponent />);
    enzymeWrapper.find('i').simulate('click');

    // then
    expect(enzymeWrapper.state().name).toBe('');
    expect(enzymeWrapper.state().rating).toBe(0);
    expect(enzymeWrapper.state().showMarker).toBe(true);
    expect(enzymeWrapper.find(InputComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(ButtonComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(RatingComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(LabelComponent)).toHaveLength(2);

    expect(enzymeWrapper.find(ButtonComponent).props().disabled).toBe(true);
    expect(enzymeWrapper.find(RatingComponent).props().rating).toBe(
      enzymeWrapper.state().rating,
    );
    expect(enzymeWrapper.find(InputComponent).props().open).toBe(false);
  });

  it('should display MarkerComponent with the form: enabled button, filled restaurant name', () => {
    // given
    const props = {
      restaurantNames: [],
    };
    const restaurantName = 'name';

    // when
    const enzymeWrapper = mount(<MarkerComponent {...props} />);
    enzymeWrapper.find('i').simulate('click');
    enzymeWrapper.setState({ name: restaurantName });

    // then
    expect(enzymeWrapper.find(InputComponent).props().value).toBe('name');
    expect(enzymeWrapper.find(ButtonComponent).props().disabled).toBe(false);
  });

  it('should display MarkerComponent with the form: disabled button, filled restaurant name with an error (forbidden char)', () => {
    // given
    const props = {
      restaurantNames: [],
    };
    const restaurantName = 'name**';

    // when
    const enzymeWrapper = mount(<MarkerComponent {...props} />);
    enzymeWrapper.find('i').simulate('click');
    enzymeWrapper.setState({ name: restaurantName });

    // then
    expect(enzymeWrapper.find(InputComponent).props().value).toBe('name**');
    expect(enzymeWrapper.find(InputComponent).props().open).toBe(true);
    expect(enzymeWrapper.find(ButtonComponent).props().disabled).toBe(true);
  });

  it('should display MarkerComponent with the form: disabled button, filled restaurant name with an error (name exists)', () => {
    // given
    const props = {
      restaurantNames: ['name'],
    };
    const restaurantName = 'name';

    // when
    const enzymeWrapper = mount(<MarkerComponent {...props} />);
    enzymeWrapper.find('i').simulate('click');
    enzymeWrapper.setState({ name: restaurantName });

    // then
    expect(enzymeWrapper.find(InputComponent).props().value).toBe('name');
    expect(enzymeWrapper.find(InputComponent).props().open).toBe(true);
    expect(enzymeWrapper.find(ButtonComponent).props().disabled).toBe(true);
  });

  it('should react on addRestaurant event', () => {
    // given
    const props = {
      restaurantNames: [],
      addRestaurant: sinon.spy(),
    };
    const restaurantName = 'name';
    const ratingNumber = 3;
    const event = {
      target: {
        value: restaurantName,
      },
    };

    // when
    const enzymeWrapper = mount(<MarkerComponent {...props} />);
    enzymeWrapper.find('i').simulate('click');
    enzymeWrapper.instance().handleNameChange(event);
    enzymeWrapper.setState({ rating: ratingNumber });
    enzymeWrapper.find(ButtonComponent).simulate('click');

    // then
    expect(enzymeWrapper.find('i')).toHaveLength(1);
    expect(enzymeWrapper.state().name).toBe('');
    expect(enzymeWrapper.state().rating).toBe(0);
    expect(enzymeWrapper.state().showMarker).toBe(false);
  });
});
