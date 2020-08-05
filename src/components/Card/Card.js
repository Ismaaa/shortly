import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, description, line }) => (
  <div className="Card">
    <img className="Card__image" src={image} alt="icon" />
    <h3 className="Card__title">{title}</h3>
    <p className="Text Card__description">{description}</p>
    {line && <hr className="Card__line" />}
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  line: PropTypes.bool,
};

export default Card;
