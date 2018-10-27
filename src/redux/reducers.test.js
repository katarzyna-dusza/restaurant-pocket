import thunk from 'redux-thunk';
import deepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import reducers, * as reducerMethods from './reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Reducers', () => {
  it('should return the initial state of actions', () => {
    // given
    const expectedValue = {
      address: '',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'DESC',
    };

    // then
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
    const expectedValue = {
      address: '',
      geo: {},
      restaurantNames: [],
      restaurantsByName: {},
      sortType: 'ASC',
    };

    // when
    const action = {
      type: 'SORT',
      sortType: 'ASC',
    };

    // then
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
    const expectedValue = {
      address: 'Address 18, City',
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
    const expectedValue = {
      address: 'Address 18, City',
      geo: { lat: 52.52000659999999, lng: 13.404954 },
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
    deepFreeze(actualValue);
    expect(reducers(actualValue, action)).toEqual(expectedValue);
  });

  it('should return array of restaurants in descending order', () => {
    // given
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
    expect(actualValue).toEqual(expectedValue);
  });

  it('should return array of restaurants in ascending order', () => {
    // given
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
    expect(actualValue).toEqual(expectedValue);
  });

  it('should return array of restaurant names', () => {
    // given
    const expectedValue = ['one', 'two'];
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
    expect(actualValue).toEqual(expectedValue);
  });

  it('should return address', () => {
    // given
    const expectedValue = 'Address 18, City';
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
    expect(actualValue).toEqual(expectedValue);
  });

  it('should return geo location', () => {
    // given
    const expectedValue = { lat: 52.52000659999999, lng: 13.404954 };
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
    expect(actualValue).toEqual(expectedValue);
  });

  it('should return sort type', () => {
    // given
    const expectedValue = 'ASC';
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
    expect(actualValue).toEqual(expectedValue);
  });
});
