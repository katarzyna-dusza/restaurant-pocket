import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainNavComponent from './components/navigation/MainNavComponent';
import HomeComponent from './components/home/HomeComponent';
import FavouriteRestaurantsComponent from './components/favourite/FavouriteRestaurantsComponent';

const App = () => (
  <Router>
    <div>
      <MainNavComponent />
      <Route exact path="/" component={HomeComponent} />
      <Route path="/favourite" component={FavouriteRestaurantsComponent} />
    </div>
  </Router>
);

export default App;
