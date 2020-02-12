import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactQueryConfigProvider } from 'react-query';
import configureStore from 'data/store';

import App from './App';
import './i18n/i18n';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const queryConfig = {
  suspense: true,
};

const renderApp = () => {
  return render(
    <ReactQueryConfigProvider config={queryConfig}>
      <Provider store={store}>
        <App />
      </Provider>
    </ReactQueryConfigProvider>,
    document.getElementById('root'),
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
