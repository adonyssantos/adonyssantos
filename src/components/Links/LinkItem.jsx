import React from 'react';
import '../../styles/components/Links/LinkItem.scss';

function LinkItem({ link }) {
  const { url, title, openInNewTab } = link;

  return (
    <li>
      {openInNewTab ? (
        <a
          target="_blank"
          href={url}
          rel="noopener noreferrer"
          className="link"
        >
          {title}
        </a>
      ) : (
        <a href={url} className="link">
          {title}
        </a>
      )}
    </li>
  );
}

export default LinkItem;
