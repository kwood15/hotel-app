import React from 'react';
import ReactStars from 'react-stars';
import { Box } from '@rebass/grid';

function formatName(name) {
  return name.toUpperCase().split('L').join('L ');
}

const HotelItem = ({ name, starRating, facilities }) => (
  <Box className="hotel" itemScope itemType="http://schema.org/Hotel">
    <h3 className="hotel__title">
      <span itemProp="name">{formatName(name)}</span>
    </h3>
    <ReactStars count={starRating} size={24} color1={'#ffd700'} />
    <span className="rating" itemProp="starRating" itemScope itemType="http://schema.org/Rating">
      <meta itemProp="ratingValue" content={starRating} />
      {starRating} star rating
    </span>
    <ul className="hotel__facilities">
      {facilities.map((facility, index) => (
        <li key={index}>{facility}</li>
      ))}
    </ul>
  </Box>
);

export default HotelItem;
