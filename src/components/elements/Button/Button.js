import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, rounded }) => (
  <button className={`Button ${rounded && 'Button--rounded'}`} type="button">
    {title}
  </button>
);

Button.defaultProps = {
  rounded: false,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};

export default Button;
