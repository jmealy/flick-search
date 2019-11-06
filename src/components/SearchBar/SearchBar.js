import React, { useRef } from 'react';
// import flickrApi from '../../services/flickrApiService';
import './SearchBar.css';

const SearchBar = onMessageSubmit => {
  const inputEl = useRef(null);

  const onTextSubmit = event => {
    if(!inputEl || !inputEl.current) return;

    event.preventDefault();
    const inputText = inputEl.current.value;

    onMessageSubmit(inputText);

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

export default SearchBar;