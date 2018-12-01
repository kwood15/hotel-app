import React from 'react';
import { FacilitiesWrapper, FacilitiesList, FacilitiesListItem } from './FacilitiesStyles';

const Facilities = ({ hotels, handleClick }) => {
  return (
    <FacilitiesWrapper className="filters filters--facilities">
      <FacilitiesList>
        {hotels.map(hotel => (
          <FacilitiesListItem key={hotel.name}>
            {hotel.facilities.map((facility, index) => (
              <button key={index} onClick={handleClick}>{facility}</button>
            ))}
          </FacilitiesListItem>
        ))}
      </FacilitiesList>
    </FacilitiesWrapper>
  );
}

export default Facilities;
