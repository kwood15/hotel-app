import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';
import ReactStars from 'react-stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../shared/SharedStyles';
import { HotelItemWrapper, HotelItemImage, HotelItemTitle } from './HotelStyles';

function formatHotelName(str) {
  return str.toUpperCase(str).split('L').join('L ');
}

const HotelItem = ({ name, starRating, facilities }) => (
  <HotelItemWrapper itemScope itemType="http://schema.org/Hotel">
    <Flex flexWrap="wrap" alignItems="center" className="hotel">
      <HotelItemImage itemProp="photo" className="hotel__image hotel__image--placeholder">
        <p>Placeholder</p>
      </HotelItemImage>
      <Flex flex="1 1 auto" flexDirection="column">
        <HotelItemTitle className="hotel__title">
          <span itemProp="name">{formatHotelName(name)}</span>
        </HotelItemTitle>
        <ReactStars count={starRating} size={24} color1={`#fcc82b`} />
        <span className="rating" itemProp="starRating" itemScope itemType="http://schema.org/Rating">
          <meta itemProp="ratingValue" content={starRating} />
          {starRating} star rating
        </span>
      </Flex>
      <Flex flexDirection="column" mr={3}>
        <ul className="facilities-list">
          {facilities.map((facility, index) => (
            <li className="facilities-list__item"key={index}>
              <p><FontAwesomeIcon color={`${props => props.theme.primaryColor}`} icon="check" />{facility}</p>
            </li>
          ))}
        </ul>
      </Flex>
      <Button>View Hotel</Button>
    </Flex>
  </HotelItemWrapper>
);

HotelItem.propTypes = {
  name: PropTypes.string.isRequired,
  starRating: PropTypes.number.isRequired,
  facilities: PropTypes.arrayOf(PropTypes.string),
};

export default HotelItem;
