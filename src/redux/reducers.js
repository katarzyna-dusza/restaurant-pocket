import { combineReducers } from 'redux';

const sortAsc = (firstObj, secondObj) => firstObj.rating - secondObj.rating;
const sortDesc = (firstObj, secondObj) => secondObj.rating - firstObj.rating;

export const sortType = (state = 'DESC', action) => {
  switch (action.type) {
    case 'SORT':
      return action.sortType;
    default:
      return state;
  }
};

export const address = (state = '', action) => {
  switch (action.type) {
    case 'ADDRESS_SET':
      return action.address;
    default:
      return state;
  }
};

export const geo = (state = {}, action) => {
  switch (action.type) {
    case 'GEO_FETCHED':
      return {
        ...state,
        lat: action.geoData.lat,
        lng: action.geoData.lng,
      };
    default:
      return state;
  }
};

export const restaurantNames = (state = [], action) => {
  switch (action.type) {
    case 'RESTAURANT_ADDED':
      return [...state, action.restaurantData.name];
    default:
      return state;
  }
};

export const restaurantsByName = (state = {}, action) => {
  switch (action.type) {
    case 'RESTAURANT_ADDED':
      return {
        ...state,
        [action.restaurantData.name]: action.restaurantData,
      };
    default:
      return state;
  }
};

export const getRestaurants = (state) => {
  const names = state.restaurantNames;

  return 'DESC' === state.sortType
    ? names.map((name) => state.restaurantsByName[name]).sort(sortDesc)
    : names.map((name) => state.restaurantsByName[name]).sort(sortAsc);
};

export const getRestaurantNames = (state) => state.restaurantNames;

export const getAddress = (state) => state.address;

export const getGeo = (state) => state.geo;

export const getSortType = (state) => state.sortType;

const reducers = combineReducers({
  address,
  geo,
  restaurantNames,
  restaurantsByName,
  sortType,
});

export default reducers;
