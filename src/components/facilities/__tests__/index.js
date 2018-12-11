import React from 'react';
import { shallow } from 'enzyme';
import Facilities from '../index';
import { FacilityGroup } from '../FacilityStyles';

describe('<Facilities />', () => {
  const props = {
    hotels: [{
      name: 'testName',
      starRatingValue: '5',
      key: 'testKey',
      facilities: ['testA', 'testB'],
    }],
    handleFacilityChange: () => 'test',
    checkedItems: new Map()
  };

  const wrapper = shallow(<Facilities {...props} />);

  it('renders with the correct className', () => {
    expect(wrapper.hasClass('facilities')).toBe(true);
  });

  it('renders 2 <FacilityGroup /> components', () => {
    expect(wrapper.find(FacilityGroup)).toHaveLength(2);
  });
});
