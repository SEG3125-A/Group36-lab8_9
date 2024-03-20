import React, {useState} from 'react';
import "./gallery.css";
import GalleryItem from './GalleryItem'; // Import GalleryItem component
import allPiecesOfArt from './gallery.json';


const Gallery = () => {

  return (
    <>
      <section className="gallery">
      <div className="intro">
        <h2>Gallery</h2>
        <p>Explore the beauty</p>
      </div>
      <div className="gallery-container">
        {allPiecesOfArt.length>0 && allPiecesOfArt.map((item) => (
          <GalleryItem
            key={item.id}
            artwork={item}
          />
        ))}
      </div>
     </section>
    </>
  );
};



export default Gallery;
