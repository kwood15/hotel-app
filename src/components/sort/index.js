import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';

const Sort = ({
  starRatingValue,
  handleChange,
  handleSubmit
}) => (
  <Flex>
    <form className="sort-by__form" onSubmit={handleSubmit}>
      <label htmlFor="sortByDropdown u-padding-bottom-medium">Sort by:</label>
      <div className="sort-by__dropdown select">
        <select id="sortByDropdown" value={starRatingValue} onChange={handleChange}>
          <option className="sort-by__dropdown-options" value="High Rating">High Rating</option>
          <option className="sort-by__dropdown-options" value="Low Rating">Low Rating</option>
        </select>
        <div className="select__arrow" />
      </div>
    </form>
  </Flex>
);

export default Sort;

Sort.propTypes = {
  starRatingValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
