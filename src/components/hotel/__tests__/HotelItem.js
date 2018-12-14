import React from 'react';
import { mount } from 'enzyme';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import HotelItem from '../HotelItem';
import { HotelItemWrapper } from '../HotelStyles';

library.add(faCheck);

describe('<HotelItem />', () => {
  const wrapper = mount(
    <HotelItem
      name="HOTEL ONE"
      starRating={5}
      facilities={['car park', 'pool']}
      icon="check"
    />
  );

  it('shows the correct className', () => {
    expect(wrapper.find(HotelItemWrapper).hasClass('hotel-item')).toBe(true);
  });

  it('takes a {starRating} prop that accepts a value', () => {
    expect(wrapper.prop('starRating')).toBe(5);
  });

  it('takes a {facilities} prop that accepts a list of values', () => {
    expect(wrapper.prop('facilities')).toContain('car park');
    expect(wrapper.prop('facilities')).toContain('pool');
  });
});
