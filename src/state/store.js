import { createStore, applyMiddleware } from 'redux';

import { reducer } from './reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
}

export const store = createStore(reducer, applyMiddleware(logger));
