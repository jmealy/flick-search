import React from 'react';
import { connect } from 'react-redux';
import flickrApi from '../../services/flickrApiService';
import './PhotoGrid.css'

const PhotoGrid = (props) => {

  if (!props.images) return null;

  return (
    <div>
      <section id="photos">
        {props.images.map(photo => (<img src={photo} />))}
      </section>
    </div>
  );
}

const mapStateToProps = state => ({ images: state.images });

export default connect(mapStateToProps)(PhotoGrid);