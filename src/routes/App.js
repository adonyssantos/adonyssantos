import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Links, Discord, PuzzlerDev, NotFound } from '../containers';
import redirects from '../../data/redirects.json';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/links" component={Links} />

      {redirects.map(redirect => {
        const { from, to } = redirect;

        return (
          <Route
            exact
            path={from}
            component={() => {
              window.location.href = to;
              return null;
            }}
          />
        );
      })}

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
