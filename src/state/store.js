import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';

//actions


export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
