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
        <select value={starRatingValue} onChange={handleChange}>
          <option value="High Rating">High Rating</option>
          <option value="Low Rating">Low Rating</option>
        </select>
      </form>
    </Box>
  </Flex>
);

export default Sort;
