import { ADD_IMAGES } from '../actionTypes';

export default function images(state = [], action) {
  switch (action.type) {
      case ADD_IMAGES:
        const { images } = action;
        return {
          ...state,
          images
        };
      default:
        return state;
  }
}
