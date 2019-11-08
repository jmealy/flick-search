import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
// import flickrApi from '../../services/flickrApiService';
import './PhotoGrid.css'

const PhotoGrid = (props) => {
  const pageSize = 10;
  // const pageNum = 0;
  const [pageNum, setPageNum] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(0);


  if (!props.images) return null;

  const loadMore = () => {
    setPageNum(pageNum + 1);
  }

  const onImageLoad = () => {
    // setImagesLoaded(count => count + 1);
    const newCount = imagesLoaded + 1;
    setImagesLoaded(newCount);

    if (newCount === pageNum * pageSize) {

    }
  }

  return (
    <div className="photoGrid">
      <div className="photos">
        {
          // imagesLoaded === pageNum * pageSize ? (
          true ? (
            props.images.slice(0, pageNum * pageSize).map(photo => (
              <img onLoad={onImageLoad} src={photo} />
            ))
          ) : null
        }
        {
          false ? (
            <p> Loading...</p>
          ) : null
        }
      </div>
      {
        props.images.length > 0 ?
          <button className="loadMoreButton" onClick={loadMore}>Load More</button>
          // <input className="loadMoreButton" type="submit" value="Submit" />
          : null
      }
    </div >
  );
}

const mapStateToProps = state => ({ images: state.images });

export default connect(mapStateToProps)(PhotoGrid);