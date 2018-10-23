import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

export const configureStore = () => {
    const middlewares = [createLogger()];

    return createStore(
        reducers,
        applyMiddleware(...middlewares),
    );
};
