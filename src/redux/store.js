import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

export const configureStore = () => {
    const middlewares = [thunkMiddleware, createLogger()];

    return createStore(
        reducers,
        applyMiddleware(...middlewares),
    );
};
