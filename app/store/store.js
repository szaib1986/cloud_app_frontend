import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers.js';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

let configureStore = () => {

    console.log('configuring store')

    const logger = createLogger();

    const store = createStore(
        allReducers,
        applyMiddleware(thunk, promise, logger)
    )

    return store;
}

export default configureStore;