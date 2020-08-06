import React from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';

const LinkItem = ({ link }) => {
  return (
    <div className="LinksList__item">
      <span className="LinksList__link">{link.url}</span>
      <div className="LinksList__actions">
        <a
          className="LinksList__generatedLink"
          href={`https://rel.ink/${link.hashid}`}
          target="_blank"
          rel="noreferrer"
        >
          https://rel.ink/${link.hashid}
        </a>
        <Button title="Copy" small />
      </div>
    </div>
  );
};

LinkItem.propTypes = {
  link: PropTypes.shape({
    hashid: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkItem;
