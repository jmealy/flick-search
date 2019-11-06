import React from 'react';
import { connect } from 'react-redux';
import flickrApi from '../../services/flickrApiService';

const PhotoGrid = (props) => {

  console.log(props.images);
  // const getImages = async () => {
  //   const images = await flickrApi.getImageUrls();
    
  //   return images
  // };

  // getImages();


  return (
    <div>
    </div>
  );
}

const mapStateToProps = state => ({ images: state.images });

export default connect(mapStateToProps)(PhotoGrid);