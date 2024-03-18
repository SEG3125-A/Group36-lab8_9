// GalleryItem.js
import React from 'react';
import PropTypes from 'prop-types';
import "./gallery.css";
import Button from 'react-bootstrap/Button';

const GalleryItem = ({ artwork }) => {
  return (
    <div className="gallery-item">
      <div className="image-container">
        <img src={artwork.imageSrc} alt="Gallery Item" />
      </div>
      <div className="image-details">
        <span className="image-title"><b>Title: </b> {artwork.title}</span><br/>
        <span className="image-artist"><b>Artist: </b> {artwork.artist}</span><br/>
        <span className="image-description"><b>Description: </b>{artwork.description}</span><br/>
        <span className="image-price"><b>Price: </b>{artwork.price}$</span>
        
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
