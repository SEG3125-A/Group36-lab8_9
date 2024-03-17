import React from 'react';
import "./gallery.css";
import GalleryItem from './GalleryItem'; // Import GalleryItem component
import allPiecesOfArt from './gallery.json';


const Gallery = () => {
  return (
    <section className="gallery">
      <div className="intro">
        <h2>Gallery</h2>
        <p>Explore the beauty</p>
      </div>
      <div className="gallery-container">
        {allPiecesOfArt.map((item, index) => (
          <GalleryItem
            key={index}
            imageSrc={item.imageSrc} // Pass imageSrc1 to GalleryItem
            description={item.description}
            artist={item.artist}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
