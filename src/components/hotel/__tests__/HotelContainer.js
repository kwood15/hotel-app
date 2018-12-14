import React from 'react';
import { mount } from 'enzyme';
import HotelContainer from '../HotelContainer';
import HotelList from '../HotelList';
import Sort from '../../sort';
import Facilities from '../../facilities';

describe('<HotelContainer />', () => {
  const testChangeFunc = jest.fn();
  const testSubmitFunc = jest.fn();

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

  const sortProps = {
    starRatingValue: 'High Rating',
    handleChange: testChangeFunc,
    handleSubmit: testSubmitFunc
  };

  const wrapper = mount(
    <HotelContainer>
      <Sort {...sortProps} />
      <Facilities handleFacilityChange={testChangeFunc} />
      <HotelList hotels={hotels} />
    </HotelContainer>
  );

  it('shows the correct className', () => {
    expect(wrapper.childAt(0).hasClass('hotel-container')).toBe(true);
  });

  it('renders the correct children components', () => {
    expect(wrapper.find(Sort).exists()).toBe(true);
    expect(wrapper.find(Facilities).exists()).toBe(true);
    expect(wrapper.find(HotelList).exists()).toBe(true);
  });
});
