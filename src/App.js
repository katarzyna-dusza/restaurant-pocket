import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainNavComponent from './components/main-nav/MainNavComponent';
import HomeComponent from './components/home/HomeComponent';
import FavouriteRestaurantsComponentContainer from './components/favourite-restaurants/FavouriteRestaurantsComponentContainer';

const App = () => (
  <Router>
    <div>
      <MainNavComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route
          path="/favourite"
          component={FavouriteRestaurantsComponentContainer}
        />
        <Route component={HomeComponent} />
      </Switch>
    </div>
  </Router>
);

export default App;
