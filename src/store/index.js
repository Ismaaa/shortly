import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger/src';
import apiReducer, { apiMiddleware } from './ducks/api';
import linksReducer from './ducks/links';

const logMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
});

const rootReducer = combineReducers({
  api: apiReducer,
  links: linksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logMiddleware, apiMiddleware)),
);

export default store;
