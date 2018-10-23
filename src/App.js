import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainNav from './MainNav';
import HomeComponent from './components/home/HomeComponent';
import FavouriteRestaurantsComponent from './components/favourite/FavouriteRestaurantsComponent';

const MainNavWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: #a51a1a;
  -webkit-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 1px 10px 0px rgba(0,0,0,0.75);
`;

const App = () => (
  <Router>
    <div>
      <MainNavWrapper>
        <MainNav></MainNav>
      </MainNavWrapper>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/favourite" component={FavouriteRestaurantsComponent} />
    </div>
  </Router>
);

export default App;
