import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import Geocode from 'react-geocode';
import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Actions', () => {
  it('should create SORT action', () => {
    // given
    const actionDataToSend = 'ASC';
    const store = mockStore({
      address: '',
      geo: { lat: 52.52000659999999, lng: 13.404954 },
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    });

    // when
    store.dispatch(actions.sortData(actionDataToSend));

    // then
    expect(store.getActions()).toEqual([{ sortType: 'ASC', type: 'SORT' }]);
  });

  it('should create ADDRESS_SET action', () => {
    // given
    const actionDataToSend = 'Address 18, City';
    const store = mockStore({
      address: '',
      geo: { lat: 52.52000659999999, lng: 13.404954 },
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    });

    // when
    store.dispatch(actions.setAddress(actionDataToSend));

    // then
    expect(store.getActions()).toEqual([{ address: 'Address 18, City', type: 'ADDRESS_SET' }]);
  });

  it('should create RESTAURANT_ADDED action', () => {
    // given
    const actionDataToSend = {
      lat: 52.52000659999999,
      lng: 13.404954,
      name: 'test',
      rating: 3,
    };
    const store = mockStore({
      address: '',
      geo: { lat: 52.52000659999999, lng: 13.404954 },
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    });

    // when
    store.dispatch(actions.addRestaurant(actionDataToSend));

    // then
    const expectedActions = [
      { restaurantData: actionDataToSend, type: 'RESTAURANT_ADDED' },
    ];
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create GEO_FETCHED action', () => {
    // given
    const actionDataToSend = 'Berlin';
    const actionDataResponse = {
      results: [
        {
          geometry: {
            location: {
              lat: 52.521742,
              lng: 13.396832,
            },
          },
        },
      ],
    };
    const store = mockStore({
      address: '',
      geo: { lat: 52.521742, lng: 13.396832 },
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    });

    // when
    sinon
      .stub(Geocode, 'fromAddress')
      .usingPromise()
      .resolves(actionDataResponse);

    // then
    return store.dispatch(actions.fetchGeo(actionDataToSend)).then(() => {
      expect(store.getActions()).toEqual([{ geoData: { lat: 52.521742, lng: 13.396832 }, type: 'GEO_FETCHED' }]);
    });
  });
});
