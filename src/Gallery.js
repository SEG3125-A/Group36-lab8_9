import React from 'react';
import "./gallery.css";
import GalleryItem from './GalleryItem'; // Import GalleryItem component
import allPiecesOfArt from './gallery.json';

//create a button in each GalleryItem to add the paint to the userCart 
export let userCart=[{
  "imageSrc": "images/pic1.jpg",
  "title": "Cookie Monster Wave",
  "artist": "Johnathan Brown",
  "description": "This is a re-make of 'The Great Wave'",
  "price": 1075
},];
const Gallery = () => {
  return (
    <section className="gallery">
      <div className="intro">
        <h2>Gallery</h2>
        <p>Explore the beauty</p>
      </div>
      <div className="gallery-container">
        {allPiecesOfArt.length>0 && allPiecesOfArt.map((item, index) => (
          <GalleryItem
            key={index}
            artwork={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
