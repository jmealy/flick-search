import { ADD_IMAGES } from '../actionTypes';

export default function images(state = [], action) {
  switch (action.type) {
      case ADD_IMAGES:
        return {
          ...state,
          images: action.images || null
        };
      default:
        return state;
  }
}
