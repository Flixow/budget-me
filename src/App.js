import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Budget from './pages/Budget';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/budget">Budget</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          Home page
        </Route>
        <Route path="/budget">
          <Budget />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
