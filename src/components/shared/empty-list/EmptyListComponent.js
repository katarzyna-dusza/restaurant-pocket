import React from 'react';
import { EmptyListComponentWrapper } from './EmptyListComponentStyles';

const EmptyListComponent = (props) => (
  <EmptyListComponentWrapper>{props.text}</EmptyListComponentWrapper>
);

export default EmptyListComponent;
