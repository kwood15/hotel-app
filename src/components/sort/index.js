import React, { Fragment } from 'react';

const Sort = ({ starRatingValue, starRating }) => (
  <Fragment>
    <option value={starRatingValue}>{starRating}</option>
  </Fragment>
);

export default Sort;
