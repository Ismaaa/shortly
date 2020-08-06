import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder, handleChange, type, error }) => (
  <input
    className={`Input ${error && 'Input--error'}`}
    placeholder={placeholder}
    type={type}
    onChange={handleChange}
    required
  />
);

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  error: false,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.bool,
};

export default Input;
