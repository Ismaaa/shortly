import React from 'react';
import { useSelector } from 'react-redux';
import LinkItem from './LinkItem';

const LinksList = () => {
  const { links } = useSelector((store) => store.links);

  return links.map((link) => <LinkItem key={link.id} link={link} />);
};

export default LinksList;
