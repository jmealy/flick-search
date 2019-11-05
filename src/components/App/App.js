import React from 'react';
import PhotoGrid from '../PhotoGrid/PhotoGrid';
import SearchBar from '../SearchBar/SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="mainHeader">Flickr Search</h1>
        <h4 className="subHeader">Display images from Flickr based on a search term</h4>
      </div>
      <SearchBar onMessageSubmit={()=>{}}/>
      <PhotoGrid/>
    </div>
  );
}

export default App;
