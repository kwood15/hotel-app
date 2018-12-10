import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';
import HotelItem from './HotelItem';
import { Title } from '../shared/SharedStyles';
import { HotelListSection } from './HotelStyles';

class HotelList extends Component {
  renderData(hotels, filteredHotels) {
    if (filteredHotels && filteredHotels.length) {
      return (
        <HotelListSection className="hotel-results">
          <Title>Hotels with your chosen facilities</Title>
          {filteredHotels.map(filteredHotel => (
            <HotelItem key={filteredHotel.name} {...filteredHotel} />
          ))}
        </HotelListSection>
      );
    } else {
      return (
        <HotelListSection className="hotel-results">
          <Title>Hotels in Manchester</Title>
          {hotels.map(hotel => (
            <HotelItem key={hotel.name} {...hotel} />
          ))}
        </HotelListSection>
      );
    }
  }

  renderLoading() {
    return <p>Loading...</p>
  }

  render() {
    const { hotels, filteredHotels } = this.props;

    return (
      <Flex flexDirection="column">
        <Flex as="section" className="hotel-results">
          <Flex width={[1, 1, 3/4]} flexDirection="column">
            {hotels && hotels.length ? this.renderData(hotels, filteredHotels) : this.renderLoading()}
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default HotelList;

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};

