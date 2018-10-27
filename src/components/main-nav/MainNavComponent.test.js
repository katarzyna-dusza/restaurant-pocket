import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainNavComponent from './MainNavComponent';
import { AppName, Icon } from './MainNavComponentStyles';

Enzyme.configure({ adapter: new Adapter() });

describe('Test MainNavComponent', () => {
  it('should render MainNavComponent', () => {
    // when
    const enzymeWrapper = shallow(<MainNavComponent />);

    // then
    expect(enzymeWrapper.find(Icon)).toHaveLength(2);
    expect(enzymeWrapper.find(AppName)).toHaveLength(1);
  });
});
