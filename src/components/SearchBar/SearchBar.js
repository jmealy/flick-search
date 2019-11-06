import React, { useRef } from 'react';
import addImages from '../../state/actions/addImages';
import { connect } from 'react-redux';
import flickrApi from '../../services/flickrApiService';
import './SearchBar.css';

const SearchBar = props => {
  const inputEl = useRef(null);

  const onTextSubmit = async (event) => {
    if(!inputEl || !inputEl.current) return;

    event.preventDefault();
    const inputText = inputEl.current.value;

    const images = await flickrApi.getImageUrls();

    props.addImages(images);
    
    // Clear the input field manually since default was prevented.
    if (inputText.length > 0) {
      inputEl.current.value = '';
    }
  };

  return (
    <form className="formContainer" onSubmit={onTextSubmit}>
      <input className="textInput" ref={inputEl} type="text"></input>
      <input className="submitButton" type="submit" value="Submit" />
    </form>
  );
}
 
export default connect(null, { addImages })(SearchBar);