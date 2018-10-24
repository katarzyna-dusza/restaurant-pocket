import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../config';
import Tooltip from './Tooltip';

const ZOOM = 10;

const Map = (props) => (
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      center={ props.geo }
      defaultZoom={15}
    >
      <Tooltip
        lat={ props.geo.lat }
        lng={ props.geo.lng }
        addRestaurant={ props.addRestaurant }
      />
    </GoogleMapReact>
  </div>
);

export default Map;
