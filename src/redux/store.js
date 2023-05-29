import { legacy_createStore as createStore, compose } from 'redux';
import rootReducer from './reducers';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));
const store = configureStore({});

sagaMiddleware.run(rootSaga);
export default store;
