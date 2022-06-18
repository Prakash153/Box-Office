import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        prakash
      </Route>
      <Route exact path="/starred">
        this is starred
      </Route>
      <Route> This is 404 Page </Route>
    </Switch>
  );
}

export default App;
