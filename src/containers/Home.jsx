import React from 'react';
import '../styles/containers/Home.scss';
import { Redirect } from 'react-router-dom';

const Home = () => {
  return <Redirect to="/links" />;
};

export default Home;
