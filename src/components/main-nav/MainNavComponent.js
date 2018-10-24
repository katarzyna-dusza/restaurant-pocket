import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../styles/SharedStyles';
import { MainNavComponentWrapper, AppName } from './MainNavComponentStyles';

const MainNavComponent = () => (
  <MainNavComponentWrapper>
    <Icon left link>
      <Link to="/">
        <i className="material-icons">restaurant</i>
      </Link>
    </Icon>
    <AppName>Favourite Restaurant</AppName>
    <Icon right>
      <i className="material-icons">person_outline</i>
    </Icon>
  </MainNavComponentWrapper>
);

export default MainNavComponent;
