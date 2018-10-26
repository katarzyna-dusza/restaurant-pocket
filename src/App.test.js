import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import MainNavComponent from './components/main-nav/MainNavComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App Component', () => {
  it('should render App content', () => {
    // when
    const enzymeWrapper = shallow(<App />);

    // then
    expect(enzymeWrapper.find(Router)).toHaveLength(1);
    expect(enzymeWrapper.find(Switch)).toHaveLength(1);
    expect(enzymeWrapper.find(Route)).toHaveLength(3);
    expect(enzymeWrapper.find(MainNavComponent)).toHaveLength(1);
  });
});
