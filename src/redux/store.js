import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export const configureStore = () => {
  const middlewares = [thunkMiddleware, createLogger()];

  return createStore(
    reducers,
    applyMiddleware(...middlewares)
  );
};
