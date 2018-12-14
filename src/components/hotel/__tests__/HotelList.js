import React from 'react';
import { shallow } from 'enzyme';
import HotelList from '../HotelList';
import HotelItem from '../HotelItem';

describe('<HotelList />', () => {
  const hotels = [
    {
      key: 'hotelone',
      name: 'HOTEL ONE',
      starRating: 5,
      facilities: ['car park', 'pool']
    },
    {
      key: 'hoteltwo',
      name: 'HOTEL TWO',
      starRating: 3,
      facilities: ['car park', 'gym']
    },
    {
      key: 'hotelthree',
      name: 'HOTEL THREE',
      starRating: 3,
      facilities: []
    }
  ];

  const filteredHotels = [];

  const wrapper = shallow(
    <HotelList hotels={hotels} filteredHotels={filteredHotels} />
  );

  it('shows the correct className', () => {
    expect(wrapper.hasClass('hotel-results')).toBe(true);
  });

  it('takes a {filteredHotels} prop that initially contains no value ', () => {
    expect(wrapper.prop('filteredHotels')).toBe(undefined);
  });

  it('shows 3 <HotelItem /> components', () => {
    expect(wrapper.find(HotelItem)).toHaveLength(3);
  });

  it('shows 3 <HotelItem /> components in the default order', () => {
    expect(wrapper.find(HotelItem).at(0).prop('name')).toEqual('HOTEL ONE');
    expect(wrapper.find(HotelItem).at(1).prop('name')).toEqual('HOTEL TWO');
    expect(wrapper.find(HotelItem).at(2).prop('name')).toEqual('HOTEL THREE');
  });
});
