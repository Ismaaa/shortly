import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, rounded, handleClick, small }) => (
  <button
    type="submit"
    className={`Button ${rounded && 'Button--rounded'} ${
      small && 'Button--small'
    }`}
    onClick={handleClick}
  >
    {title}
  </button>
);

Button.defaultProps = {
  rounded: false,
  small: false,
  handleClick: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  handleClick: PropTypes.func,
  small: PropTypes.bool,
};

export default Button;
