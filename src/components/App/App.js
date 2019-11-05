import React from 'react';
import PhotoGrid from '../PhotoGrid/PhotoGrid';
import SearchBar from '../SearchBar/SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="mainHeader">DownGit</h1>
        <h4 className="subHeader">Create GitHub Resource Download Link</h4>
      </div>
      <SearchBar onMessageSubmit={()=>{}}/>
      <PhotoGrid/>
    </div>
  );
}

export default App;
