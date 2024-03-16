import React from 'react';
import "./gallery.css";
import GalleryItem from './GalleryItem'; // Import GalleryItem component

const Gallery = () => {
  const allPiecesOfArt = [
    {
      imageSrc1: 'images/pic1.jpg',
      imageSrc2: 'path/to/placeholder2.jpg',
      title:  "Cookie Monster Wave",
      artist: "Johnathan Brown",
      description: "This is a re-make of 'The Great Wav'",
    },
    {
      imageSrc1: 'images/pic2.jpg',
      imageSrc2: 'path/to/placeholder2.jpg',
      title:  "The soldier",
      artist: "JSamantha Irving",
      description: "Depiction of a soldier in World War 1"
    },
    {
      imageSrc1: 'images/pic3.jpg',
      imageSrc2: 'path/to/placeholder2.jpg',
      title:  "The Park",
      artist: "Kent mith",
      description: "A visitor to Gatineau Park"
    },
    // Add more gallery items as needed
  ];

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
            imageSrc1={item.imageSrc1} // Pass imageSrc1 to GalleryItem
            imageSrc2={item.imageSrc2} // Pass imageSrc2 to GalleryItem
            description={item.description}
            artist={item.artist}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
