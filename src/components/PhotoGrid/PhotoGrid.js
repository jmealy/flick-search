import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import config from '../../config';
import './PhotoGrid.css'

const PhotoGrid = (props) => {
  const [pageNum, setPageNum] = useState(1);
  useEffect(props => setPageNum(1), [props.images]);

  if (!props.images) return null;

  const loadMore = () => {
    setPageNum(pageNum + 1);
  }

  return (
    <div className="photoGrid">
      <div className="photos">
        {
          props.images.slice(0, pageNum * config.imagesPerPage).map(photo => (
            <img key={photo} src={photo} alt=''/>
          ))
        }
      </div>
      {
        props.images.length > 0 ?
          <button className="loadMoreButton" onClick={loadMore}>Load More</button>
          : null
      }
    </div >
  );
}

const mapStateToProps = state => ({ images: state.images });

export default connect(mapStateToProps)(PhotoGrid);