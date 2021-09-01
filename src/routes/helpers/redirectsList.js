import React from 'react';
import { Route } from 'react-router-dom';

export const redirectToExternalLink = (from, to) => {
  return (
    <Route
      exact
      path={from}
      key={from}
      component={() => {
        window.location.href = to;
        return null;
      }}
    />
  );
};

export const redirectsList = redirects => {
  return redirects.map(redirect => {
    const { from, to } = redirect;

    if (!Array.isArray(from)) {
      return redirectToExternalLink(from, to);
    }

    return from.map(item => redirectToExternalLink(item, to));
  });
};

export default redirectsList;
