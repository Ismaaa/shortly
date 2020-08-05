import React from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';

const Cta = ({ text }) => (
  <div className="Cta">
    <h1 className="Cta__title">{text}</h1>
    <Button title="Get Started" rounded />
  </div>
);

Cta.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Cta;
