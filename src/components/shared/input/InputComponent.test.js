import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import InputComponent from './InputComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test InputComponent', () => {
  it('should display an input without a tooltip', () => {
    // given
    const props = {
      message: 'Something went wrong.',
      position: 'bottom',
      open: false,
      placeholder: 'Fill me',
      value: '',
      handleChange: sinon.spy(),
    };

    // when
    const enzymeWrapper = mount(<InputComponent {...props} />);

    // then
    expect(enzymeWrapper.props().message).toBe(props.message);
    expect(enzymeWrapper.props().position).toBe(props.position);
    expect(enzymeWrapper.props().open).toBe(props.open);

    expect(enzymeWrapper.find('input').props().placeholder).toBe(
      props.placeholder,
    );
    expect(enzymeWrapper.find('input').props().value).toBe(props.value);
  });

  it('should display an input wit a tooltip', () => {
    // given
    const props = {
      message: 'Something went wrong.',
      position: 'bottom',
      open: true,
      placeholder: 'Fill me',
      value: 'something**',
      handleChange: sinon.spy(),
    };

    // when
    const enzymeWrapper = mount(<InputComponent {...props} />);

    // then
    expect(enzymeWrapper.props().message).toBe(props.message);
    expect(enzymeWrapper.props().position).toBe(props.position);
    expect(enzymeWrapper.props().open).toBe(props.open);

    expect(enzymeWrapper.find('input').props().placeholder).toBe(
      props.placeholder,
    );
    expect(enzymeWrapper.find('input').props().value).toBe(props.value);
  });

  it('should react on change', () => {
    // given
    const props = {
      message: 'Something went wrong.',
      position: 'bottom',
      open: false,
      placeholder: 'Fill me',
      value: 'i',
      handleChange: sinon.spy(),
    };
    const event = { target: { value: 'something' } };

    // when
    const enzymeWrapper = mount(<InputComponent {...props} />);
    enzymeWrapper.find('input').simulate('change', event);

    // then
    expect(props.handleChange.calledOnce).toBeTruthy();
  });
});
