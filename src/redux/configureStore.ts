import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic } from './epics/root';
import { rootReducer } from './reducers/root';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  // @ts-ignore
  epicMiddleware.run(rootEpic);

  return store;
}
