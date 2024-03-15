import React from 'react';
import "./gallery.css";
import GalleryItem from './GalleryItem'; // Import GalleryItem component

const Gallery = () => {
  const galleryData = [
    {
      imageSrc1: 'public/images/pic1.jpg',
      imageSrc2: 'path/to/placeholder2.jpg',
      description1: (
        <p>
          <strong> Artist: </strong>Johnathan Brown<br />
          <strong> Title: </strong> <em>"Cookie Monster Wave"</em> <br />
          <strong> Price: </strong> $13.99 <br />
          <strong> Description: </strong> This is a re-make of "The Great Wave"
        </p>
      ),
      description2: (
        <p>
          <strong> Artist: </strong>Samantha Irving<br />
          <strong> Title: </strong> <em>"The Soldier"</em> <br />
          <strong> Price: </strong> $23.95 <br />
          <strong> Description: </strong> Depiction of a soldier in World War 1
        </p>
      ),
      description3: (
        <p>
          <strong> Artist: </strong>Kent Smith<br />
          <strong> Title: </strong> <em>"The Park"</em> <br />
          <strong> Price: </strong> $11.95 <br />
          <strong> Description: </strong>A visitor to Gatineau Park
        </p>
      ),
    },
    // Add more gallery items as needed
  ];

  return (
    <section className="gallery">
      <div className="gallery-container">
        {galleryData.map((item, index) => (
          <GalleryItem
            key={index}
            imageSrc1={item.imageSrc1} // Pass imageSrc1 to GalleryItem
            imageSrc2={item.imageSrc2} // Pass imageSrc2 to GalleryItem
            description1={item.description1}
            description2={item.description2}
            description3={item.description3}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
