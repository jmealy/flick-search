import { ADD_IMAGES } from '../actionTypes';

export default function addImages(images) {
  return {
    type: ADD_IMAGES,
    images
  }
}