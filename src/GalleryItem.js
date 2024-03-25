// GalleryItem.js
import React,{createContext,useContext} from 'react';
import PropTypes from 'prop-types';
import "./gallery.css";
import Button from 'react-bootstrap/Button';
import { FaCartShopping } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { CartContext } from './App';
import {useRef} from 'react';
import { useState } from 'react';






const GalleryItem = ({ artwork }) => {

  const ref = useRef(null);
  
  const [version, setVersion] = useState([]);
  
  const handleInput = () => {
    console.log(ref.current.value);
    console.log(version);
    setVersion([...version, ref.current.value]);
  };



  const addToCart=useContext(CartContext);
  return (
    <div className="gallery-item">

      <div className="image-container">
        <img src={artwork.imageSrc} alt="Gallery Item" />
      </div>

      <div className="image-details">
        <div>
          <span className="image-title"><b>Title: </b> {artwork.title}</span><br/>
          <span className="image-artist"><b>Artist: </b> {artwork.artist}</span><br/>
          <span className="image-description"><b>Description: </b>{artwork.description}</span><br/>
          <span className="image-price"><b>Price: </b>{artwork.price}$</span>
        </div>
        <div className='image-icon'>
          <FaCartShopping className="cart-icon" size={30} onClick={()=>addToCart(artwork)} style={{marginRight:"15px",cursor:"pointer"}}/>
          <FaComments className="comment-icon" size={30} style={{cursor:"pointer"}}/>
        </div>
      </div>
      <textarea
        ref={ref}
        placeholder={"Enter your comment"}
        id="message"
        name="message"
      />
      <br />
      <button onClick = {handleInput}>
        Submit
      </button>
      <ul>{version.map(com => <li>{com}</li>)}</ul>
      
    </div>
    
  );
};



GalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  description1: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
};

export default GalleryItem;
