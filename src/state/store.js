import { applyMiddleware, createStore, compose } from 'redux';
import imageReducer from './reducers/images';
import thunk from 'redux-thunk';

export function configureStore(initialState = { images: [] }) {
  const store = createStore(
    imageReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
  return store;
}

export const store = configureStore();
