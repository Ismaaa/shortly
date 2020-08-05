import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, rounded, handleClick }) => (
  <button
    type="submit"
    className={`Button ${rounded && 'Button--rounded'}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

Button.defaultProps = {
  rounded: false,
  handleClick: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
