import React from 'react';
import { Header, LinksList, Footer } from '../components/Links';
import linksData from '../../data/linksData.json';
import '../styles/containers/Links.scss';

const Links = () => {
  const { header, links } = linksData;

  return (
    <>
      <Header header={header} />
      <LinksList links={links} />
      <Footer />
    </>
  );
};

export default Links;
