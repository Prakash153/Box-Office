import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route> Page Not Found </Route>
    </Switch>
  );
}

export default App;
