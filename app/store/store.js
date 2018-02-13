import allReducers from '../reducers.js';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
//routeMiddleware can be used to hijack the location change status
import { routerMiddleware } from 'react-router-redux';

//This function is used to configure the redux store
//added middlewares to log the events
let configureStore = (initialState = {}, history) => {

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
        shouldHotReload: false,
      })
      : compose;

    //creating store here
    const store = createStore(
        allReducers,
        composeEnhancers(...enhancers)
    );

    return store;
}

export default configureStore;