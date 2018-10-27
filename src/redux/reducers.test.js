import thunk from 'redux-thunk';
import deepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import reducers, * as reducerMethods from './reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Reducers', () => {
  it('should return the initial state of actions', () => {
    // then
    const expectedValue = {
      address: '',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    };
    expect(reducers(undefined, {})).toEqual(expectedValue);
  });

  it('should handle SORT action', () => {
    // given
    const actualValue = {
      address: '',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    };

    // when
    const action = {
      type: 'SORT',
      sortType: 'ASC',
    };

    // then
    const expectedValue = {
      address: '',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'ASC',
    };
    deepFreeze(actualValue);
    expect(reducers(actualValue, action)).toEqual(expectedValue);
  });

  it('should handle ADDRESS_SET action', () => {
    // given
    const actualValue = {
      address: '',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    };

    // when
    const action = {
      type: 'ADDRESS_SET',
      address: 'Address 18, City',
    };

    // then
    const expectedValue = {
      address: 'Address 18, City',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    };
    deepFreeze(actualValue);
    expect(reducers(actualValue, action)).toEqual(expectedValue);
  });

  it('should handle GEO_FETCHED action', () => {
    // given
    const actualValue = {
      address: 'Address 18, City',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    };

    // when
    const action = {
      type: 'GEO_FETCHED',
      geoData: { lat: 52.52000659999999, lng: 13.404954 },
    };

    // then
    const expectedValue = {
      address: 'Address 18, City',
      geo: { lat: 52.52000659999999, lng: 13.404954 },
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    };
    deepFreeze(actualValue);
    expect(reducers(actualValue, action)).toEqual(expectedValue);
  });

  it('should handle RESTAURANT_ADDED action', () => {
    // given
    const actualValue = {
      address: 'Address 18, City',
      geo: { lat: 52.52000659999999, lng: 13.404954 },
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    };

    // when
    const action = {
      type: 'RESTAURANT_ADDED',
      restaurantData: {
        lat: 52.52000659999999,
        lng: 13.404954,
        name: 'name',
        rating: 4,
      },
    };

    // then
    const expectedValue = {
      address: 'Address 18, City',
      geo: { lat: 52.52000659999999, lng: 13.404954 },
      restaurantNames: ['name'],
      restaurantsByName: {
        name: {
          lat: 52.52000659999999,
          lng: 13.404954,
          name: 'name',
          rating: 4,
        },
      },
      sortType: 'DESC',
    };
    deepFreeze(actualValue);
    expect(reducers(actualValue, action)).toEqual(expectedValue);
  });

  it('should return array of restaurants in descending order', () => {
    // given
    const store = mockStore({
      address: '',
      geo: {},
      restaurantNames: ['one', 'two'],
      restaurantsByName: {
        one: {
          lat: 52.52000659999999,
          lng: 13.404954,
          name: 'one',
          rating: 2,
        },
        two: {
          lat: 52.52000659999999,
          lng: 13.404954,
          name: 'two',
          rating: 4,
        },
      },
      sortType: 'DESC',
    });
    const state = store.getState();

    // when
    const actualValue = reducerMethods.getRestaurants(state);

    // then
    const expectedValue = [
      {
        lat: 52.52000659999999,
        lng: 13.404954,
        name: 'two',
        rating: 4,
      },
      {
        lat: 52.52000659999999,
        lng: 13.404954,
        name: 'one',
        rating: 2,
      },
    ];
    expect(actualValue).toEqual(expectedValue);
  });

  it('should return array of restaurants in ascending order', () => {
    // given
    const store = mockStore({
      address: '',
      geo: {},
      restaurantNames: ['one', 'two'],
      restaurantsByName: {
        one: {
          lat: 52.52000659999999,
          lng: 13.404954,
          name: 'one',
          rating: 2,
        },
        two: {
          lat: 52.52000659999999,
          lng: 13.404954,
          name: 'two',
          rating: 4,
        },
      },
      sortType: 'ASC',
    });
    const state = store.getState();

    // when
    const actualValue = reducerMethods.getRestaurants(state);

    // then
    const expectedValue = [
      {
        lat: 52.52000659999999,
        lng: 13.404954,
        name: 'one',
        rating: 2,
      },
      {
        lat: 52.52000659999999,
        lng: 13.404954,
        name: 'two',
        rating: 4,
      },
    ];
    expect(actualValue).toEqual(expectedValue);
  });

  it('should return array of restaurant names', () => {
    // given
    const store = mockStore({
      address: '',
      geo: {},
      restaurantNames: ['one', 'two'],
      restaurantsByName: {
        one: {
          lat: 52.52000659999999,
          lng: 13.404954,
          name: 'one',
          rating: 2,
        },
        two: {
          lat: 52.52000659999999,
          lng: 13.404954,
          name: 'two',
          rating: 4,
        },
      },
      sortType: 'DESC',
    });
    const state = store.getState();

    // when
    const actualValue = reducerMethods.getRestaurantNames(state);

    // then
    expect(actualValue).toEqual(['one', 'two']);
  });

  it('should return address', () => {
    // given
    const store = mockStore({
      address: 'Address 18, City',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    });
    const state = store.getState();

    // when
    const actualValue = reducerMethods.getAddress(state);

    // then
    expect(actualValue).toEqual('Address 18, City');
  });

  it('should return geo location', () => {
    // given
    const store = mockStore({
      address: 'Address 18, City',
      geo: { lat: 52.52000659999999, lng: 13.404954 },
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    });
    const state = store.getState();

    // when
    const actualValue = reducerMethods.getGeo(state);

    // then
    expect(actualValue).toEqual({ lat: 52.52000659999999, lng: 13.404954 });
  });

  it('should return sort type', () => {
    // given
    const store = mockStore({
      address: '',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'ASC',
    });
    const state = store.getState();

    // when
    const actualValue = reducerMethods.getSortType(state);

    // then
    expect(actualValue).toEqual('ASC');
  });
});
