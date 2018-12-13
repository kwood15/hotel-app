import React from 'react';
import { shallow } from 'enzyme';
import Facilities from '../index';
import { FacilityGroup } from '../FacilityStyles';

describe('<Facilities />', () => {
  const props = {
    hotels: [{
      key: 'hotelone',
      name: 'hotelone',
      starRatingValue: '5',
      facilities: ['car park', 'pool'],
    }],
    uniqueFacilities: ['car park', 'car park', 'gym'],
    handleFacilityChange: () => 'mockChange',
    checkedItems: new Map()
  };

  const wrapper = shallow(<Facilities {...props} />);

  it('renders with the correct className', () => {
    expect(wrapper.hasClass('facilities')).toBe(true);
  });

  it('renders 3 <FacilityGroup /> components', () => {
    expect(wrapper.find(FacilityGroup)).toHaveLength(3);
  });
});
