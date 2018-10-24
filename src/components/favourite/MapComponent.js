import React from 'react';
import GoogleMapReact from 'google-map-react';
import TooltipComponent from './TooltipComponent';
import API_KEY from '../../config';
import { MapComponentWrapper } from '../../styles/MapComponentStyles';

const DEFAULT_ZOOM = 15;
const DEFAULT_LAT = 52.521742;
const DEFAULT_LNG = 13.396832;

const MapComponent = (props) => (
  <MapComponentWrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      center={props.geo}
      defaultCenter={{lat: DEFAULT_LAT, lng: DEFAULT_LNG}}
      defaultZoom={DEFAULT_ZOOM}>
      <TooltipComponent
        lat={props.geo.lat}
        lng={props.geo.lng}
        addRestaurant={props.addRestaurant}
      />
    </GoogleMapReact>
  </MapComponentWrapper>
);

export default MapComponent;
