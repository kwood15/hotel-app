import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, type = 'checkbox', name, checked = false, onChange }) => (
  <input id={id} type={type} name={name} checked={checked} onChange={onChange} className="checkbox__input" />
);

Checkbox.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default Checkbox;
