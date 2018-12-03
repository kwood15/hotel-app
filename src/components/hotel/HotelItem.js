import React from 'react';
import ReactStars from 'react-stars';
import { Box } from '@rebass/grid';

const HotelItem = ({ name, starRating, facilities }) => (
  <Box>
    <h3>{name.toUpperCase().split('L').join('L ')}</h3>
    <ReactStars count={starRating} size={24} color1={'#ffd700'} />
    <span>{starRating} star rating</span>
    <ul>
      {facilities.map((facility, index) => (
        <li key={index}>{facility}</li>
      ))}
    </ul>
  </Box>
);

export default HotelItem;
