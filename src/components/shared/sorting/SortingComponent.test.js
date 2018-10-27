import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import SortingComponent from './SortingComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Test SortingComponent', () => {
  it('should display sorting with ASC props', () => {
    // given
    const props = {
      sortingAvailable: true,
      sortType: 'ASC',
      onClick: sinon.spy(),
    };

    // when
    const enzymeWrapper = mount(<SortingComponent {...props} />);

    // then
    expect(enzymeWrapper.props().sortType).toBe(props.sortType);
    expect(enzymeWrapper.find('i')).toHaveLength(1);
    expect(
      enzymeWrapper
        .find('i')
        .at(0)
        .props().children,
    ).toBe('arrow_drop_down');
  });

  it('should display sorting with DESC props', () => {
    // given
    const props = {
      sortingAvailable: true,
      sortType: 'DESC',
      onClick: sinon.spy(),
    };

    // when
    const enzymeWrapper = mount(<SortingComponent {...props} />);

    // then
    expect(enzymeWrapper.props().sortType).toBe(props.sortType);
    expect(enzymeWrapper.find('i')).toHaveLength(1);
    expect(
      enzymeWrapper
        .find('i')
        .at(0)
        .props().children,
    ).toBe('arrow_drop_up');
  });

  it('should not display sorting when not available', () => {
    // given
    const props = {
      sortingAvailable: false,
      sortType: 'ASC',
      onClick: sinon.spy(),
    };

    // when
    const enzymeWrapper = mount(<SortingComponent {...props} />);

    // then
    expect(enzymeWrapper.props().sortType).toBe(props.sortType);
    expect(enzymeWrapper.find('i')).toHaveLength(0);
  });
});
