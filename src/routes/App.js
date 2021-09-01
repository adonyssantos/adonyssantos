import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Links, Discord, PuzzlerDev, NotFound } from '../containers';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/links" component={Links} />
      <Route exact path="/discord" component={Discord} />
      <Route exact path="/puzzlerdev" component={PuzzlerDev} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
