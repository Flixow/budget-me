import React, { Fragment, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import GlobalStyles from 'index.css';
import { SuspenseErrorBoundary, Navigation, Button } from 'components';
import theme from 'theme';

import Budget from './pages/Budget';

const RootPage = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(lng => {
    i18n.changeLanguage(lng);
  }, [i18n]);

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
              <Button
                variant="regular"
                primary={i18n.language === 'pl'}
                onClick={() => changeLanguage('pl')}
              >
                pl
              </Button>
              <Button
                variant="regular"
                primary={i18n.language === 'en'}
                onClick={() => changeLanguage('en')}
              >
                en
              </Button>
            </div>
          )}
        />

        <Switch>
          <Route exact path="/">
            {t('Home')}
          </Route>
          <Route path="/budget">
            <SuspenseErrorBoundary>
              <Budget />
            </SuspenseErrorBoundary>
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
      <SuspenseErrorBoundary>
        <RootPage />
      </SuspenseErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
