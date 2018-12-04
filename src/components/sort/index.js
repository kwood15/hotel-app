import React from 'react';
import { Flex, Box } from '@rebass/grid';

const Sort = ({
  starRatingValue,
  handleChange,
  handleSubmit
}) => (
  <Flex>
    <Box>
      <form onSubmit={handleSubmit}>
        <label>Sort by:</label>
        <div className="select">
          <select value={starRatingValue} onChange={handleChange}>
            <option value="High Rating">High Rating</option>
            <option value="Low Rating">Low Rating</option>
          </select>
          <div className="select__arrow"></div>
        </div>
      </form>
    </Box>
  </Flex>
);

export default Sort;
