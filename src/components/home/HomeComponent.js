import React from 'react';
import styled from 'styled-components';
import FindRestaurant from './FindRestaurant';

const FindRestaurantWrapper = styled.div`
  height: calc(100vh - 90px);
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 0 2px rgba(0,0,0,.12)
  background-color: white;
  font-size: 40px;
  text-align: center;

  > div {
    height: 100%;
    width: 100%;
  }
`;

const HomeComponent = (props) => (
  <FindRestaurantWrapper>
    <FindRestaurant history={ props.history }></FindRestaurant>
  </FindRestaurantWrapper>
);

export default HomeComponent;
