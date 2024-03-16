// GalleryItem.js
import React from 'react';
import PropTypes from 'prop-types';
import "./gallery.css"

const GalleryItem = ({ imageSrc1, imageSrc2, description, artist, title }) => {
  return (
    <div className="gallery-item">
      <div className="image-container">
        <img src={imageSrc1} alt="Gallery Item" />
      </div>
      <div className="image-details">
        <span className="image-title"><b>Title: </b> {title}</span><br/>
        <span className="image-artist"><b>Artist: </b> {artist}</span><br/>
        <span className="image-description"><b>Description: </b>{description}</span>
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
