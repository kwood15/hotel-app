import React from 'react';
import { shallow } from 'enzyme';
import Facilities from '../index';

describe('<Facilities />', () => {
  const props = {
    hotels: [{
      facilities: ['testA', 'testB'],
    }],
    handleFacilityChange: () => 'test',
    checkedItems: new Map()
  };

  const wrapper = shallow(<Facilities {...props} />);

  it('renders with the correct className', () => {
    expect(wrapper.hasClass('facilities')).toBe(true);
  });
});
