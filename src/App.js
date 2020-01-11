import React, { Fragment, Suspense, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import GlobalStyles from 'index.css';
import { LoadingIndicator, Navigation } from 'components';
import theme from 'theme';

import Budget from './pages/Budget';

const RootPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(lng => {
    i18n.changeLanguage(lng);
  });

  return (
    <Fragment>
      <GlobalStyles />

      <Router>
        <Navigation
          items={[
            { content: 'Home', to: '/' },
            { content: 'Budget', to: '/budget' },
          ]}
          RightElement={(
            <div>
              <button onClick={() => changeLanguage('pl')}>pl</button>
              <button onClick={() => changeLanguage('en')}>en</button>
            </div>
          )}
        />
        <Switch>
          <Route exact path="/">
            {t('Home')}
          </Route>
          <Route path="/budget">
            <Budget />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingIndicator />}>
        <RootPage />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
