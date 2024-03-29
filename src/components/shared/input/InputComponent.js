import React from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { InputComponentWrapper } from './InputComponentStyles';

const THEME = 'dark';

const InputComponent = (props) => (
  <Tooltip
    title={props.message}
    position={props.position}
    arrow={true}
    theme={THEME}
    open={props.open}>
    <InputComponentWrapper
      big={props.big}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
    />
  </Tooltip>
);

export default InputComponent;
