import { applyMiddleware, combineReducers, createStore } from 'redux';
import imageReducer from './reducers/images';

import thunk from 'redux-thunk';

//actions


export function configureStore(initialState = { images: ['hello'] }) {
  const store = createStore(imageReducer, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
