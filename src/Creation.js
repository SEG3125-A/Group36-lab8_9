import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './creation.css';
import './variables.css';

const Creation = () => {
  const [artwork, setArtwork] = useState({
    imageSrc: "",
    title: "",
    artist: "",
    description: "",
    price: "",
    imageFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtwork(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setArtwork(prevState => ({
      ...prevState,
      imageFile: file
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('imageFile', artwork.imageFile);
    formData.append('title', artwork.title);
    formData.append('artist', artwork.artist);
    formData.append('description', artwork.description);
    formData.append('price', artwork.price);
  
    // Convert FormData to a regular object for logging
    const formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
  
    // Log the form data before submitting
    console.log('Form Data:', formDataObject);
  
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Handle success
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  }
  

  return (
    <>
      <section className="creation">
        <div className="">
          <h2>Create</h2>
          <p>Share with others</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Choose an image</Form.Label>
            <Form.Control type="file" size="sm" name="imageFile" onChange={handleFileChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Art name</Form.Label>
            <Form.Control type="text" placeholder="Enter the art's name" name="title" value={artwork.title} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Artist</Form.Label>
            <Form.Control type="text" placeholder="Enter the name of the creator" name="artist" value={artwork.artist} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={artwork.description} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter the price" name="price" value={artwork.price} onChange={handleInputChange} />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
}

export default Creation;
