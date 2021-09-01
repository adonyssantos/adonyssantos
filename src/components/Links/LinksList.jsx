import React from 'react';
import LinkItem from './LinkItem';
import '../../styles/components/Links/LinksList.scss';

const LinksList = ({ links }) => {
  return (
    <main className="content">
      <ul>
        {links.map(link => (
          <LinkItem key={link.title} link={link} />
        ))}
      </ul>
    </main>
  );
};

export default LinksList;
