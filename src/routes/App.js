import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Links, NotFound } from '../containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/links' component={Links} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
