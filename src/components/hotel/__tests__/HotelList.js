import React from 'react';
import { shallow } from 'enzyme';
import HotelList from '../HotelList';

describe('<HotelList />', () => {
  const props = {
    hotels: [],
    filteredHotels: []
  };

  const wrapper = shallow(<HotelList {...props} />);

  it('renders with the correct className', () => {
    expect(wrapper.hasClass('hotel-results')).toBe(true);
  });
});
