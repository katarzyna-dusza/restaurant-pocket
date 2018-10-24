import { combineReducers } from 'redux';

const compareRatings = (firstObj, secondObj) => firstObj.rating - secondObj.rating;

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
              lng: action.geoData.lng
            };
        default:
            return state;
    }
};

export const restaurant = (state = [], action) => {
    switch (action.type) {
        case 'RESTAURANT_ADDED':
            return {
              ...state,

            };
        default:
            return state;
    }
};

export const restaurantNames = (state = [], action) => {
    switch (action.type) {
        case 'RESTAURANT_ADDED':
            return [
                ...state,
                action.restaurantData.name
            ];
        default:
            return state;
    }
};

export const restaurantsByName = (state = {}, action) => { debugger;
    switch (action.type) {
        case 'RESTAURANT_ADDED':
            return {
                ...state,
                [action.restaurantData.name]: action.restaurantData
            };
        default:
            return state;
    }
};

export const getRestaurants = (state) => { debugger;
    const names = state.restaurantNames;
    return names.map(name => state.restaurantsByName[name]).sort(compareRatings);
};

export const fetchAddress = (state) => {
    return state.address;
};

export const fetchGeo = (state) => {
    return state.geo;
};

const reducers = combineReducers({
    address,
    geo,
    restaurantNames,
    restaurantsByName
});

export default reducers;
