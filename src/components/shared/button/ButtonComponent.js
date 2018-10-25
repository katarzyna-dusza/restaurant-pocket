import React from 'react';
import { ButtonComponentWrapper } from './ButtonComponentStyles';

const ButtonComponent = (props) => (
  <ButtonComponentWrapper
    big={props.big}
    disabled={props.disabled}
    onClick={props.onClick}>
    {props.text}
  </ButtonComponentWrapper>
);

export default ButtonComponent;
