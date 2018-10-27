import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmptyListComponent from './EmptyListComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test EmptyListComponent', () => {
  it('should display proper text', () => {
    // given
    const props = {
      text: 'Something empty',
    };

    // when
    const enzymeWrapper = shallow(<EmptyListComponent {...props} />);

    // then
    expect(enzymeWrapper.props().children).toBe(props.text);
  });
});
