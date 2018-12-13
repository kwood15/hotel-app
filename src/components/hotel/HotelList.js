import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@rebass/grid';
import HotelItem from './HotelItem';
import { Title } from '../shared/SharedStyles';
import { HotelListSection } from './HotelStyles';

class HotelList extends Component {
  renderData = (hotels, filteredHotels) => { // searchedHotels
    if (filteredHotels && filteredHotels.length) {
      return (
        <HotelListSection className="hotel-results">
          <Title>Hotels with your chosen facilities</Title>
          {filteredHotels.map(filteredHotel => (
            <HotelItem key={filteredHotel.name} {...filteredHotel} />
          ))}
        </HotelListSection>
      );
    }
    // if (searchedHotels && searchedHotels.length) {
    //   return (
    //     <HotelListSection className="hotel-results">
    //       <Title>Hotels based on your search</Title>
    //       {searchedHotels.map(searchedHotel => (
    //         <HotelItem key={searchedHotel.name} {...searchedHotel} />
    //       ))}
    //     </HotelListSection>
    //   );
    // }
    return (
      <HotelListSection className="hotel-results">
        <Title>Hotels in Manchester</Title>
        {hotels.map(hotel => (
          <HotelItem key={hotel.name} {...hotel} />
        ))}
      </HotelListSection>
    );
  }

  renderLoading = () => <p>Loading...</p>

  render() {
    const { hotels, filteredHotels } = this.props; // searchedHotels

    return (
      <Box width={1} my={4} className="hotel-results">
        {hotels && hotels.length
          ? this.renderData(hotels, filteredHotels) : this.renderLoading()}
        {/* searchedHotels */}
      </Box>
    );
  }
}

export default HotelList;

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};
