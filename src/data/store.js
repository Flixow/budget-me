import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'data/reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'data/middlewares/promise';
// import notificationMiddleware from 'data/middlewares/notifications';

function configureStore() {
  const middlewares = [
    thunk,
    promiseMiddleware,
    // notificationMiddleware,
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, {}, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('data/reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}

export default configureStore;
