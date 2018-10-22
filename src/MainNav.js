import React from 'react';
import { Icon, AppName } from './shared/components'

const MainNav = () => (
  <div>
    <Icon left>
      <i className="material-icons">restaurant</i>
    </Icon>
    <AppName>Favourite Restaurant</AppName>
    <Icon right>
      <i className="material-icons">person_outline</i>
    </Icon>
  </div>
);

export default MainNav;
