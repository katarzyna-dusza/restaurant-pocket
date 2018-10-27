import React from 'react';
import thunkMiddleware from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import FavouriteRestaurantsComponentContainer, {
  FavouriteRestaurantsComponent,
} from './FavouriteRestaurantsComponentContainer';
import RestaurantsComponent from './restaurants/RestaurantsComponent';
import MapComponent from './map/MapComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test FavouriteRestaurantsComponent', () => {
  it('should display FavouriteRestaurantsComponent', () => {
    // given
    const initialState = {
      restaurantsByName: {},
      restaurantNames: [],
      geo: {
        lat: 52.52000659999999,
        lng: 13.404954,
      },
      address: '',
      restaurants: [],
    };
    const mockStore = configureStore([thunkMiddleware]);
    const store = mockStore(initialState);

    // when
    const enzymeWrapper = mount(
      <FavouriteRestaurantsComponentContainer store={store} />,
    );

    // then
    expect(enzymeWrapper.find(RestaurantsComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(MapComponent)).toHaveLength(1);
  });

  it('should react on Fetch Geo event', () => {
    // given
    const initialState = {};
    const mockStore = configureStore([thunkMiddleware]);
    const store = mockStore(initialState);
    const fakeAddress = 'Address 18, City';
    const props = {
      address: fakeAddress,
      fetchGeo: sinon.spy(),
      restaurants: [],
      geo: {
        lat: 52.52000659999999,
        lng: 13.404954,
      },
    };

    // when
    const enzymeWrapper = mount(
      <FavouriteRestaurantsComponent {...props} store={store} />,
    );

    // then
    // componentDidMount called
    expect(enzymeWrapper.props().fetchGeo.callCount).toBe(1);
  });
});
