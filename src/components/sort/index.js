import React from 'react';
import { SortByWrapper } from './SortByStyles';

const Sort = ({
  starRatingValue,
  handleChange,
  handleSubmit,
  sortByRatingDesc,
  sortByRatingAsc
}) => (
  <SortByWrapper>
    <div className="sort-by">
      <form onSubmit={handleSubmit}>
        <label>Sort by:</label>
        <button onClick={sortByRatingDesc}>High Rating</button>
        <button onClick={sortByRatingAsc}>Low Rating</button>
      </form>
    </div>

    <div className="sort-by">
      <form onSubmit={handleSubmit}>
        <label>Sort by:</label>
        <select value={starRatingValue} onChange={handleChange}>
          <option value="High Rating">High Rating</option>
          <option value="Low Rating">Low Rating</option>
        </select>
      </form>
    </div>
  </SortByWrapper>
);

export default Sort;
