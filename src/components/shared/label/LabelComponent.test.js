import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LabelComponent from './LabelComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test LabelComponent', () => {
  it('should display proper label', () => {
    // given
    const props = {
      text: 'Name',
    };

    // when
    const enzymeWrapper = shallow(<LabelComponent {...props} />);

    // then
    expect(enzymeWrapper.props().children).toEqual(['Name', ':']);
  });
});
