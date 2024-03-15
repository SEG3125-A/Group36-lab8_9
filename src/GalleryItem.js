// GalleryItem.js
import React from 'react';
import PropTypes from 'prop-types';
import "./GalleryItem.css";

const GalleryItem = ({ imageSrc1, imageSrc2, description1, description2, description3 }) => {
  return (
    <div className="gallery-item" class = "grid-container">
      <div className="image-container" class = "grid-item">
        <img src={'images/pic1.jpg'} alt="Gallery Item 1" className="gallery-image" />
        <p className="description">{description1}</p>
      </div>

      <div className="image-container" class = "grid-item">
        <img src={'images/pic2.jpg'} alt="Gallery Item 2" className="gallery-image" />
        <p className="description">{description2}</p>
      </div>

      <div className="image-container" class = "grid-item">
        <img src={'images/pic3.jpg'} alt="Gallery Item 3" className="gallery-image" />
        <p className="description">{description3}</p>
      </div>

    </div>
  );
};

GalleryItem.propTypes = {
  imageSrc1: PropTypes.string.isRequired,
  imageSrc2: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
};

export default GalleryItem;
