import React from 'react';
import ReactStars from 'react-stars';
import { HotelsListItem } from './HotelsStyles';

const HotelItem = ({ name, starRating, facilities }) => (
  <HotelsListItem>
    <h3>{name}</h3>
    <ReactStars
      count={starRating}
      size={24}
      color1={'#ffd700'}
    />
    <span>{starRating} star rating</span>
    <ul>
      {facilities.map((facility, index) => (
        <li key={index}>{facility}</li>
      ))}
    </ul>
  </HotelsListItem>
);

export default HotelItem;
