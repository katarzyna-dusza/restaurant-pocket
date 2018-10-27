import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import FindRestaurantComponentContainer, {
  FindRestaurantComponent,
} from './FindRestaurantComponentContainer';
import InputComponent from '../../shared/input/InputComponent';
import ButtonComponent from '../../shared/button/ButtonComponent';
import { Tooltip } from 'react-tippy';
import { InputComponentWrapper } from '../../shared/input/InputComponentStyles';

Enzyme.configure({ adapter: new Adapter() });

describe('Test FindRestaurantComponent', () => {
  it('should display FindRestaurantComponent', () => {
    // given
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);

    // when
    const enzymeWrapper = mount(<FindRestaurantComponent store={store} />);

    // then
    expect(enzymeWrapper.find(ButtonComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(ButtonComponent).props().disabled).toBe(true);
    expect(enzymeWrapper.find(InputComponent)).toHaveLength(1);
    expect(enzymeWrapper.find(InputComponent).props().value).toBe('');
  });

  it('should display FindRestaurantComponent with enabled button and filled address', () => {
    // given
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const fakeAddress = 'Address 18, City';

    // when
    const enzymeWrapper = mount(<FindRestaurantComponent store={store} />);
    enzymeWrapper.setState({ address: fakeAddress });

    // then
    expect(enzymeWrapper.find(InputComponent).props().value).toBe('Address 18, City');
    expect(enzymeWrapper.find(ButtonComponent).props().disabled).toBe(false);
  });

  it('should display FindRestaurantComponent with disabled button, filled restaurant name with an error (forbidden char)', () => {
    // given
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const fakeAddress = 'Wrong address &^%';

    // when
    const enzymeWrapper = mount(<FindRestaurantComponent store={store} />);
    enzymeWrapper.setState({ address: fakeAddress });

    // then
    expect(enzymeWrapper.find(InputComponent).props().value).toBe('Wrong address &^%');
    expect(enzymeWrapper.find(InputComponent).props().open).toBe(true);
    expect(enzymeWrapper.find(ButtonComponent).props().disabled).toBe(true);
  });

  it('should react on Find event', () => {
    // given
    const fakeAddress = 'Address 18, City';
    const initialState = {};
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const props = {
      setAddress: sinon.spy(),
      history: {
        push: sinon.spy(),
      },
    };
    const event = {
      target: {
        value: fakeAddress,
      },
    };

    // when
    const enzymeWrapper = mount(
      <FindRestaurantComponent store={store} {...props} />,
    );
    enzymeWrapper.instance().handleAddressChange(event);
    enzymeWrapper.find(ButtonComponent).simulate('click');

    // then
    expect(enzymeWrapper.props().setAddress.callCount).toBe(1);
    expect(enzymeWrapper.props().history.push.callCount).toBe(1);
  });
});
