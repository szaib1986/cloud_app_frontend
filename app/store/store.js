import allReducers from '../reducers.js';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
let configureStore = (initialState = {}, history) => {
console.log('Configuring Store')
    const logger = createLogger();

    const middlewares = [
        thunk,
        promise,
        logger,
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
        // Prevent recomputing reducers for `replaceReducer`
        shouldHotReload: false,
      })
      : compose;

    const store = createStore(
        allReducers,
        composeEnhancers(...enhancers)
    );

    return store;
}

export default configureStore;