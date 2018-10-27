import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import ButtonComponent from './ButtonComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test ButtonComponent', () => {
  it('should be enabled', () => {
    // given
    const props = {
      big: true,
      disabled: false,
      onClick: sinon.spy(),
      text: 'Add',
    };

    // when
    const enzymeWrapper = shallow(<ButtonComponent {...props} />);

    // then
    expect(enzymeWrapper.props().disabled).toBe(false);
  });

  it('should be disabled', () => {
    // given
    const props = {
      big: true,
      disabled: true,
      onClick: sinon.spy(),
      text: 'Add',
    };

    // when
    const enzymeWrapper = shallow(<ButtonComponent {...props} />);

    // then
    expect(enzymeWrapper.props().disabled).toBe(true);
  });
});
