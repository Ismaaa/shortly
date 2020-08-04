import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder }) => (
  <input className="Input" placeholder={placeholder} type="text" />
);

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
};

export default Input;
