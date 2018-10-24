import React from 'react';
import { Icon, AppName } from './shared/components';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <div>
    <Icon left link>
      <Link to="/">
        <i className="material-icons">restaurant</i>
      </Link>
    </Icon>
    <AppName>Favourite Restaurant</AppName>
    <Icon right>
      <i className="material-icons">person_outline</i>
    </Icon>
  </div>
);

export default MainNav;
