import React from 'react';
import './App.css';

import Carousel from './components/Carousel';
function App() {
  // Define an array of image URLs
  const images = [
    'images/dog1.jpeg',
    'images/dog2.jpeg',
    'images/dog3.jpeg',
    'images/dog4.jpeg',
  ];

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
