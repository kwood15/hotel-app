import React from 'react';
import { HotelsListItem } from './HotelsStyles';

const HotelItem = ({ name, starRating, facilities }) => (
  <HotelsListItem>
    <h3>{name}</h3>
    <span>{starRating}</span>
    <ul>
      {facilities.map((facility, index) => (
        <li key={index}>{facility}</li>
      ))}
    </ul>
  </HotelsListItem>
);

export default HotelItem;
