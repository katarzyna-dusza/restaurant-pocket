import React from 'react';
import { Icon, BackgroundImage, Header, FindInput, Button } from './components';
import FindRestaurantBackground from './photo4.jpg';
import styled from 'styled-components';

const FindWrapper = styled.div`
  width: 50%;
  margin-left: 20%;
  padding: 5%;
  top: 20%;
  position: relative;
`;

const FindRestaurant = () => (
  <BackgroundImage imageSrc={FindRestaurantBackground}>
    <FindWrapper>
      <Header big>Find your favourite restaurant</Header>
      <Header>Taste your perfect meal</Header>
      <FindInput placeholder="Type your address"></FindInput>
      <Button big>Find</Button>
    </FindWrapper>
  </BackgroundImage>
);

export default FindRestaurant;
