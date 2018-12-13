import React from 'react';
import { shallow } from 'enzyme';
import HotelList from '../HotelList';
import HotelItem from '../HotelItem';

describe('<HotelList />', () => {
  const props = {
    hotels: [
      {
        key: 'hotelone',
        name: 'hotelone',
        starRating: 5,
        facilities: ['car park', 'pool']
      },
      {
        key: 'hoteltwo',
        name: 'hoteltwo',
        starRating: 3,
        facilities: ['car park', 'gym']
      },
      {
        key: 'hotelthree',
        name: 'hotelthree',
        starRating: 3,
        facilities: []
      }
    ]
  };

  const wrapper = shallow(<HotelList {...props} />);

  it('shows the correct className', () => {
    expect(wrapper.hasClass('hotel-results')).toBe(true);
  });

  it('shows 3 hotels', () => {
    expect(wrapper.find(HotelItem)).toHaveLength(3);
  });
  it('shows the default order', () => {
    expect(wrapper.find(HotelItem).at(0).prop('name')).toEqual('hotelone');
    expect(wrapper.find(HotelItem).at(1).prop('name')).toEqual('hoteltwo');
    expect(wrapper.find(HotelItem).at(2).prop('name')).toEqual('hotelthree');
  });
});
