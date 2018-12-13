import React from 'react';
import { shallow } from 'enzyme';
import Facilities from '../index';
import Checkbox from '../../form/Checkbox';
import { FacilityGroup, FacilityLabel } from '../FacilityStyles';

describe('<Facilities />', () => {
  const testFunc = jest.fn();

  const props = {
    uniqueFacilities: ['car park', 'pool', 'gym'],
    handleFacilityChange: () => 'mockChange',
    checkedItems: new Map()
  };

  const checkboxProps = {
    id: 'carpark',
    type: 'checkbox',
    name: 'car park',
    checked: false
  };

  const wrapper = shallow(
    <Facilities {...props}>
      <FacilityGroup>
        <Checkbox onChange={testFunc} {...checkboxProps} />
        <FacilityLabel htmlFor="carpark">car park</FacilityLabel>
      </FacilityGroup>
    </Facilities>
  );

  it('shows the correct className', () => {
    expect(wrapper.hasClass('facilities')).toBe(true);
  });

  it('shows 3 <FacilityGroup /> components', () => {
    expect(wrapper.find(FacilityGroup)).toHaveLength(3);
  });

  it('shows 3 <FacilityLabel /> components', () => {
    expect(wrapper.find(FacilityLabel)).toHaveLength(3);
  });

  it('shows 3 <FacilityLabel /> components with the correct {htmlFor} props', () => {
    expect(wrapper.find(FacilityLabel).at(0).prop('htmlFor')).toEqual('carpark');
    expect(wrapper.find(FacilityLabel).at(1).prop('htmlFor')).toEqual('pool');
    expect(wrapper.find(FacilityLabel).at(2).prop('htmlFor')).toEqual('gym');
  });

  it('shows the correct label text for the <FacilityLabel /> component', () => {
    expect(wrapper.find(FacilityLabel).at(0).contains('car park')).toBe(true);
    expect(wrapper.find(FacilityLabel).at(1).contains('pool')).toBe(true);
    expect(wrapper.find(FacilityLabel).at(2).contains('gym')).toBe(true);
  });

  it('shows the <Checkbox /> components with an {onChange} prop', () => {
    expect(wrapper.find(Checkbox).at(0).simulate('change', { target: { name: 'car park' } }));
    expect(wrapper.find(Checkbox).at(1).simulate('change', { target: { name: 'pool' } }));
    expect(wrapper.find(Checkbox).at(2).simulate('change', { target: { name: 'gym' } }));
  });
});
