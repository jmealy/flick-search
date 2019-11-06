import React from 'react';
import { connect } from 'react-redux';
import flickrApi from '../../services/flickrApiService';

const PhotoGrid = (props) => {

  if (!props.images) return null;


  return (
    <div>
      <ul>
        { props.images.map(photo => (<li>{photo}</li>)) }
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({ images: state.images });

export default connect(mapStateToProps)(PhotoGrid);