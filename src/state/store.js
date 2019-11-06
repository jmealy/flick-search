import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import imageReducer from './reducers/images';
import thunk from 'redux-thunk';

export function configureStore(initialState = { images: ['hello', 'there'] }) {
  const store = createStore(
    imageReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export const store = configureStore();
