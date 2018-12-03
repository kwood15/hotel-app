import React from 'react';
import { Flex, Box } from '@rebass/grid';

const Facilities = ({ hotels, handleClick }) => {
  return (
    <Flex>
      <Flex flexDirection="column">
        {hotels.map(hotel => (
          <Box key={hotel.name}>
            {hotel.facilities.map((facility, index) => (
              <button key={index} onClick={handleClick}>{facility}</button>
            ))}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default Facilities;
