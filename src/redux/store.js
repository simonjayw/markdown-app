import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import combineReducers from './reducers';

const store = createStore(combineReducers, applyMiddleware(thunk, createLogger()));

export default store;
