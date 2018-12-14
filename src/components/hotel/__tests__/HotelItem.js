import React from 'react';
import { shallow } from 'enzyme';
import HotelItem from '../HotelItem';

describe('<HotelItem />', () => {
  const wrapper = shallow(
    <HotelItem
      name="HOTEL ONE"
      starRating={5}
      facilities={['car park', 'pool']}
    />
  );

  it('shows the correct className', () => {
    expect(wrapper.hasClass('hotel-item')).toBe(true);
  });

  it.skip('takes a {starRating} prop that accepts a value', () => {
    expect(wrapper.prop('starRating')).toBe(5);
  });

  it.skip('takes a {facilities} prop that accepts a list of values', () => {
    expect(wrapper.prop('facilities')).toContain(['car park', 'pool']);
  });
});
