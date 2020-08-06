import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { logger } from 'redux-logger/src';
import apiReducer, { apiMiddleware } from './ducks/api';
import linksReducer from './ducks/links';

const rootReducer = combineReducers({
  api: apiReducer,
  links: linksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger, apiMiddleware)),
);

export default store;
