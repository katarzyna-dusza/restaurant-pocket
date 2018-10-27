import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import MapComponent from './MapComponent';
import MarkerComponent from '../marker/MarkerComponent';
import GoogleMapReact from 'google-map-react';

Enzyme.configure({ adapter: new Adapter() });

describe('Test MapComponent', () => {
  it('should display component with a map', () => {
    // given
    const props = {
      geo: {
        lat: 52.521742,
        lng: 13.396832,
      },
      addRestaurant: sinon.spy(),
      restaurantNames: [],
      restaurants: [],
    };

    // when
    const enzymeWrapper = mount(<MapComponent {...props} />);

    // then
    expect(enzymeWrapper.props().geo).toBe(props.geo);
    expect(enzymeWrapper.find(GoogleMapReact)).toHaveLength(1);
    expect(enzymeWrapper.find(GoogleMapReact).props().center).toBe(props.geo);
  });

  it('should display MarkerComponent', () => {
    // given
    const props = {
      geo: {
        lat: 52.521742,
        lng: 13.396832,
      },
      addRestaurant: sinon.spy(),
      restaurantNames: [],
      restaurants: [],
    };

    // when
    const enzymeWrapper = mount(<MapComponent {...props} />);

    // then
    expect(enzymeWrapper.props().geo).toBe(props.geo);
    expect(enzymeWrapper.find(MarkerComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(MarkerComponent).props().lat).toBe(props.geo.lat);
    expect(enzymeWrapper.find(MarkerComponent).props().lng).toBe(props.geo.lng);
  });

  it('should display multiple MarkerComponents', () => {
    // given
    const props = {
      geo: {
        lat: 52.521742,
        lng: 13.396832,
      },
      addRestaurant: sinon.spy(),
      restaurantNames: ['one', 'two'],
      restaurants: [
        {
          lat: 52,
          lng: 13,
          name: 'one',
          rating: 3,
        },
        {
          lat: 52.52,
          lng: 13.39,
          name: 'two',
          rating: 5,
        },
      ],
    };

    // when
    const enzymeWrapper = mount(<MapComponent {...props} />);

    // then
    expect(enzymeWrapper.props().geo).toBe(props.geo);
    expect(enzymeWrapper.find(MarkerComponent)).toHaveLength(3);
    expect(
      enzymeWrapper
        .find(MarkerComponent)
        .at(0)
        .props().lat,
    ).toBe(props.geo.lat);
    expect(
      enzymeWrapper
        .find(MarkerComponent)
        .at(0)
        .props().lng,
    ).toBe(props.geo.lng);

    expect(
      enzymeWrapper
        .find(MarkerComponent)
        .at(1)
        .props().lat,
    ).toBe(props.restaurants[0].lat);
    expect(
      enzymeWrapper
        .find(MarkerComponent)
        .at(1)
        .props().lng,
    ).toBe(props.restaurants[0].lng);
    expect(
      enzymeWrapper
        .find(MarkerComponent)
        .at(2)
        .props().lat,
    ).toBe(props.restaurants[1].lat);
    expect(
      enzymeWrapper
        .find(MarkerComponent)
        .at(2)
        .props().lng,
    ).toBe(props.restaurants[1].lng);
  });
});
