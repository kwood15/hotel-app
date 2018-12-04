import React from 'react';
import ReactStars from 'react-stars';
import { Flex } from '@rebass/grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../shared/SharedStyles';
import { HotelItemWrapper, HotelItemImage, HotelItemTitle } from './HotelStyles';

function formatName(name) {
  return name.toUpperCase().split('L').join('L ');
}

const HotelItem = ({ name, starRating, facilities }) => (
  <HotelItemWrapper itemScope itemType="http://schema.org/Hotel">
    <Flex alignItems="center" className="hotel">
      <HotelItemImage itemProp="photo" className="hotel__image hotel__image--placeholder">
        <p>Placeholder</p>
      </HotelItemImage>
      <Flex flex="1 1 auto" flexDirection="column">
        <HotelItemTitle className="hotel__title">
          <span itemProp="name">{formatName(name)}</span>
        </HotelItemTitle>
        <ReactStars count={starRating} size={24} color1={'#ffd700'} />
        <span className="rating" itemProp="starRating" itemScope itemType="http://schema.org/Rating">
          <meta itemProp="ratingValue" content={starRating} />
          {starRating} star rating
        </span>
      </Flex>
      <Flex flexDirection="column" mr={3}>
        <ul className="facilities-list">
          {facilities.map((facility, index) => (
            <li className="facilities-list__item"key={index}>
              <p><FontAwesomeIcon icon="check" />{facility}</p>
            </li>
          ))}
        </ul>
      </Flex>
      <Button>View Hotel</Button>
    </Flex>
  </HotelItemWrapper>
);

export default HotelItem;
