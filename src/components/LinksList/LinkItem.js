import React from 'react';

const LinkItem = ({ link }) => {
  console.log(link);

  return (
    <ul>
      <li>{link.hashid}</li>
      <li>{link.url}</li>
      <li>{link.created_at}</li>
    </ul>
  );
};

export default LinkItem;
