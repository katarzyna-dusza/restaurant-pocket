import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import HomeComponent from './HomeComponent';
import FindRestaurantComponentContainer from './find-restaurant/FindRestaurantComponentContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Test HomeComponent', () => {
  it('should render HomeComponent', () => {
    // given
    const history = {
      push: sinon.spy(),
    };
    // when
    const enzymeWrapper = shallow(<HomeComponent history={history} />);

    // then
    expect(enzymeWrapper.find(FindRestaurantComponentContainer)).toHaveLength(
      1,
    );
  });
});
