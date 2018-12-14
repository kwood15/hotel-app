import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
  const testFunc = jest.fn();

  let wrapper = shallow(
    <Checkbox
      id="carpark"
      name="car park"
      checked={false}
      type="checkbox"
      onChange={testFunc}
    />
  );

  it('renders with an {id} prop', () => {
    expect(wrapper.prop('id')).toBe('carpark');
  });

  it('renders with a {name} prop', () => {
    expect(wrapper.prop('name')).toBe('car park');
  });

  it('renders the correct {type} prop', () => {
    expect(wrapper.prop('type')).toBe('checkbox');
  });

  it('takes an {onChange} prop', () => {
    expect(wrapper.prop('onChange')).toBe(testFunc);
  });

  it('renders in an `unchecked` state', () => {
    expect(wrapper.prop('checked')).toBe(false);
  });

  it('shows a `checked` attribute once an option has been checked', () => {
    wrapper = shallow(
      <Checkbox checked id="carpark" name="car park" onChange={testFunc} />
    );
    expect(wrapper.prop('checked')).toBe(true);
  });
});
