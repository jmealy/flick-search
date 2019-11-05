import { ADD_IMAGES } from '../actionTypes';

export default function addImages(images) {
  return {
    type: actionTypes.ADD_IMAGES,
    images
  }
}