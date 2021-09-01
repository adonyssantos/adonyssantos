import React from 'react';
import '../../styles/components/Links/Header.scss';

const Header = ({ header }) => {
  const { image, fullname, title } = header;

  return (
    <header>
      <nav className="logo">
        <img src={image.url} alt={image.alt} />
        <h1>{fullname}</h1>
        <p>{title}</p>
      </nav>
    </header>
  );
};

export default Header;
