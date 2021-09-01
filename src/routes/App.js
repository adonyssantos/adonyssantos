import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Links, NotFound } from '../containers';
import { redirectsList } from './helpers/redirectsList';
import redirects from '../../data/redirects.json';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {redirectsList(redirects)}

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/links" component={Links} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
