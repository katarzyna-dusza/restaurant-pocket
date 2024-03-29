import React from 'react';
import { Link } from 'react-router-dom';
import {
  MainNavComponentWrapper,
  AppName,
  Icon,
} from './MainNavComponentStyles';

const MainNavComponent = () => (
  <MainNavComponentWrapper>
    <Icon left link>
      <Link to="/">
        <i className="material-icons">restaurant</i>
      </Link>
    </Icon>
    <AppName>Restaurant Pocket</AppName>
    <Icon right>
      <i className="material-icons">person_outline</i>
    </Icon>
  </MainNavComponentWrapper>
);

export default MainNavComponent;
