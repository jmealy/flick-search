import React from 'react';
import flickrApi from '../services/flickrApiService';

const PhotoGrid = () => {

  const getImages = async () => {
    const images = await flickrApi.getImageUrls();
    
    return images
  };

  getImages();

  // console.log(images);

  return (
    <div>
    </div>
  );
}

export default PhotoGrid;