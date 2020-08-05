import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, handleChange, type }) => (
  <input
    className="Input"
    placeholder={placeholder}
    type={type}
    onChange={handleChange}
    required
  />
);

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
