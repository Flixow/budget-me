import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navigation from 'components/Navigation/Navigation';
import GlobalStyles from 'index.css';
import theme from 'theme';

import Budget from './pages/Budget';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />

        <Router>
          <Navigation
            items={[
              { content: 'Home', to: '/' },
              { content: 'Budget', to: '/budget' },
            ]}
          />
          <Switch>
            <Route exact path="/">
              {'Home page'}
            </Route>
            <Route path="/budget">
              <Budget />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
