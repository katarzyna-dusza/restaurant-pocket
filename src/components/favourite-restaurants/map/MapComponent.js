import React from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerComponent from '../marker/MarkerComponent';
import API_KEY from '../../../api-key';
import { MapComponentWrapper } from './MapComponentStyles';

const DEFAULT_ZOOM = 15;
const DEFAULT_LAT = 52.521742;
const DEFAULT_LNG = 13.396832;



const MapComponent = (props) => {

const markers = props.restaurants.map((r, i) => (
  <MarkerComponent key={i}
    lat={r.lat}
    lng={r.lng}
    addRestaurant={props.addRestaurant}
    restaurantNames={props.restaurantNames}
  />
));

return (
  <MapComponentWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      center={props.geo}
      defaultCenter={{ lat: DEFAULT_LAT, lng: DEFAULT_LNG }}
      defaultZoom={DEFAULT_ZOOM}>
      <MarkerComponent
        lat={props.geo.lat}
        lng={props.geo.lng}
        addRestaurant={props.addRestaurant}
        restaurantNames={props.restaurantNames}
      />
      { markers }
    </GoogleMapReact>
  </MapComponentWrapper>
)};

export default MapComponent;
