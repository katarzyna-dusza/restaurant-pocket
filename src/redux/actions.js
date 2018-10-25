import Geocode from 'react-geocode';
import API_KEY from '../api-key';

Geocode.setApiKey(API_KEY);

const address_set = (address) => ({
  type: 'ADDRESS_SET',
  address,
});

const restaurant_added = (restaurantData) => ({
  type: 'RESTAURANT_ADDED',
  restaurantData,
});

const geo_fetched = (geoData) => ({
  type: 'GEO_FETCHED',
  geoData,
});

export const setAddress = (address) => address_set(address);

export const addRestaurant = (restaurant) => restaurant_added(restaurant);

export const fetchGeo = (address) => (dispatch) =>
  Geocode.fromAddress(address)
    .then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      return dispatch(geo_fetched({ lat, lng }));
    })
    .catch(console.log);

const actions = {
  ...setAddress,
  ...addRestaurant,
  ...fetchGeo,
};

export default actions;
