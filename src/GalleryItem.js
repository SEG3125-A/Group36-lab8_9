// GalleryItem.js
import React from 'react';
import PropTypes from 'prop-types';
import "./gallery.css";
import Button from 'react-bootstrap/Button';

const GalleryItem = ({ imageSrc, description, artist, title,price }) => {
  return (
    <div className="gallery-item">
      <div className="image-container">
        <img src={imageSrc} alt="Gallery Item" />
      </div>
      <div className="image-details">
        <span className="image-title"><b>Title: </b> {title}</span><br/>
        <span className="image-artist"><b>Artist: </b> {artist}</span><br/>
        <span className="image-description"><b>Description: </b>{description}</span><br/>
        <span className="image-price"><b>Price: </b>{price}$</span>
        
      </div>
      <Button variant="primary">Add to cart</Button>{' '}
    </div>
    
  );
};

GalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
};

export default GalleryItem;
