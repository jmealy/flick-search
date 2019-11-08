import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
// import flickrApi from '../../services/flickrApiService';
import './PhotoGrid.css'

const PhotoGrid = (props) => {
  const pageSize = 10;
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
          props.images.slice(0, pageNum * pageSize).map(photo => (
            <img src={photo} />
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