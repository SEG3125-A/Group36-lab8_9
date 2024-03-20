import $ from 'jquery';
import React,{useState} from 'react';
import "./creation.css";
import "./variables.css";
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Creation=()=> {


  const [artwork,setArtwork]=useState({
    imageSrc:"",
    title:"",
    artist:"",
    description:"",
    price:"",
    imageFile:null,
  });

  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setArtwork(prevState=>({
      ...prevState,
      [name]:value,
    }));
  }
  const handleFileChange=(e)=>{
    const file=e.target.files[0];
    setArtwork(prevState=>({
      ...prevState,
      imageFile:file,
      imageSrc:file.name,
    }));
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();

    
    try{
        //upload the image file
      let formData=new FormData();
      formData.append("imageFile",artwork.imageFile);

      const response = fetch("api/data", {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(response.ok){
        console.log("artwork added successfully");

      }else{
        console.error("Failed to add artWork")
      }
    }catch(error){
      console.error('Error:', error);
    }

  }

    return (
      <>
        <section className="creation">
          <div className="">
              <h2>Create</h2>
              <p>Share with others</p>
          </div>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose an image</Form.Label>
              <Form.Control type="file" size="sm" name="imageFile" value={artwork.imageFile} onChange={handleFileChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Art name</Form.Label>
              <Form.Control type="text" placeholder="Enter the art's name" name="title" value={artwork.title} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Artist</Form.Label>
              <Form.Control type="text" placeholder="Enter the name of the creator" name="artist" value={artwork.artist} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description" value={artwork.description} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="Enter the price" name="price" value={artwork.price} onChange={handleInputChange} />
            </Form.Group>
            <Button variant="dark" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
          </Form>
        </section>
      </>
    );
}
  
export default Creation;
  