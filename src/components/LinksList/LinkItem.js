import React from 'react';
import PropTypes from 'prop-types';

const LinkItem = ({ link }) => (
  <ul>
    <li>{link.hashid}</li>
    <li>{link.url}</li>
    <li>{link.created_at}</li>
  </ul>
);

LinkItem.propTypes = {
  link: PropTypes.shape({
    hashid: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
