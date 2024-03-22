import React, { useState,useRef } from 'react';
import allPiecesOfArt from "./gallery.json";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';
import "./cart.css";
import "./variables.css";
import CartItem from "./CartItem";
import { Link } from 'react-scroll';
import { Breadcrumb } from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const MyVerticallyCenteredModal=(props)=> {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Order confirmed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thanks for shopping with us</h4>
        <p>
          Your order is on it's way! Feel free to add your comments when it will be delivered
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const Cart=({getUserCart,removeFromCart})=> {
  const [modalShow, setModalShow] = useState(false);

  //store all possible error
  const [error,setError]=useState({
    fullName:true,
    email:true,
    phone:true,
    nameOnCard:true,
    cardNumber:true,
    expiryDate:true,
    cvc:true,
    submit:true,
  });

  //load the shopping cart
  let userCart=getUserCart();

  //update the activated section to be rendered
  const [activeSection,setActiveSection]=useState("cart");

  const[formData,setFormData]=useState({
    fullName:"",
    email:"",
    phone:"",
    cardNumber:"",
    nameOnCard:"",
    cvc:"",
    expiryDate:"",
  });


  //hold references from some elements
  const formRef=useRef(null);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const cardNumberRef = useRef(null);
  const nameOnCardRef = useRef(null);
  const cvcRef = useRef(null);
  const expiryDateRef = useRef(null);

  //handle where to scroll the screen depending on the option chosen
  const scrollToSection=(section)=>{
    $(`.${section}`)[0].scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  }

  //change the background color and the color of the breadcrumb item which is clicked
  //getColor[0] is for the background of the breadcumb item and getColor[1] is for the color of the cart
  const getColor=(section)=>{
    return section===activeSection ? ["#333638","white"]:["#ebebebfe","#333638"];
  }

  //event when the input field changes
  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setError((prevData)=>({
      ...prevData,
      [name]:checkInputValidity(name,value),
    }));
  };

  // check the validity of the input with a specific name and value based on a certain pattern
  const checkInputValidity = (name, value) => {
    switch (name) {
      case "phone":
        console.log("phone");
        if (!value.trim().match(/^(\d{3}[-\s]?\d{3}[-\s]?\d{4})$/) || value === "") {
          return true;
        }
        return false;
      case "email":
        if (!value.trim().match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
          return true;
        }
        return false;
      case "cardNumber":
        if (!value.trim().match(/^(\d{4}[ ]?\d{4}[ ]?\d{4}[ ]?\d{4})$/)) {
          return true;
        }
        return false;
      case "cvc":
        if (!value.trim().match(/^(\d{3})$/)) {
          return true;
        }
        return false;
      case "fullName":
        if (value.trim() === "") {
          return true;
        }
        return false;
      case "nameOnCard":
        if (value.trim() === "") {
          return true;
        }
        return false;
      case "expiryDate":
        if (value.trim() === "") {
          return true;
        }
        return false;
      default:
        return false;
    }
  };


  //check if there is no error in the field and store all form's data
  const handleSubmit=(e)=>{
    // Check if any field in error state is true except "submit"
    if(Object.entries(error).some(([key, value]) => key !== "submit" && value)){
      //set the error submission to true
      setError((prevData)=>({
        ...prevData,
        submit:true,
      }));
    }else{
      //set the error submission to false
      setError((prevData)=>({
        ...prevData,
        submit:false,
      }));

      //save data in variables
      setFormData({
        fullName: fullNameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        cardNumber: cardNumberRef.current.value,
        nameOnCard: nameOnCardRef.current.value,
        cvc: cvcRef.current.value,
        expiryDate: expiryDateRef.current.value,
      });
      
      console.log(formData.fullName);
      scrollToSection("finalOrder")
    }
  }
  

  //reset the whole form
  const resetForm = () => {
    //reset the inputs
    formRef.current.reset();
    setError({
      fullName: true,
      email: true,
      phone: true,
      nameOnCard: true,
      cardNumber: true,
      expiryDate: true,
      cvc: true,
      submit: true,
    });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      cardNumber: "",
      nameOnCard: "",
      cvc: "",
      expiryDate: "",
    });
  };
  
    return (
      <>
        <section className="cart">
          <div className="intro">
            <h2>Cart</h2>
          </div>
          
          <Breadcrumb >
            <Breadcrumb.Item onClick={()=>scrollToSection("cart")} style={{backgroundColor:getColor("cart")[0]}} ><FaCartShopping color={getColor("cart")[1]} /></Breadcrumb.Item>
              <div style={{width:"80px", border:"1px solid #ebebebfe"}}></div>
              <Breadcrumb.Item onClick={()=>scrollToSection("payment")} style={{backgroundColor:getColor("payment")[0]}}><MdPayment color={getColor("payment")[1]}/></Breadcrumb.Item>
              <div style={{width:"80px", border:"1px solid #ebebebfe"}}></div>
              <Breadcrumb.Item onClick={()=>scrollToSection("finalOrder")} style={{backgroundColor:getColor("finalOrder")[0]}}  ><GiConfirmed color={getColor("finalOrder")[1]} /></Breadcrumb.Item>
          </Breadcrumb>
          
          <div className="container checkout">
            
            <div className={`shopping-cart ${activeSection === "cart"? "active":"inactive"} `}>
              <h2>My items</h2>

              {userCart.length>0 &&  userCart.map((item,index)=>(
                <CartItem item={item} order={true}/>
              ))}
              <Button variant="dark" type="button" className="btn mt-4" onClick={()=>{scrollToSection("payment")}}>
                  Add payment
              </Button>
            </div>
            
            
            <div className={`payment ${activeSection === "payment"? "active":"inactive"} `}>
              <h2>Payment</h2>


              <Form ref={formRef}>
              <Form.Group className="mb-3" controlId="formBasicFullname">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control type="text" ref={fullNameRef} name="fullName" onChange={handleInputChange} placeholder="Enter full name" />
                  { error.fullName &&<Form.Text style={{color:"red"}}>
                    ! Empty fields
                  </Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" ref={emailRef} name="email" onChange={handleInputChange} placeholder="email@email.com" />
                  {error.email && <Form.Text style={{color:"red"}}>
                    ! Wrong email format
                  </Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="number"  ref={phoneRef} name="phone" onChange={handleInputChange} placeholder="--- --- ----" />
                  {error.phone &&
                    <Form.Text style={{color:"red"}}>
                      ! Phone number format be 10 digits (XXX XXX XXXX)
                    </Form.Text>}
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicNameOnCard">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control type="text" ref={nameOnCardRef} name="nameOnCard" onChange={handleInputChange} placeholder="Enter name on card" />
                  { error.nameOnCard &&<Form.Text style={{color:"red"}}>
                    ! Empty field
                  </Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCardNumber">
                  <Form.Label>Card number</Form.Label>
                  <Form.Control type="number" ref={cardNumberRef} name="cardNumber" onChange={handleInputChange} placeholder="---- ---- ---- ----" />
                  {error.cardNumber && <Form.Text style={{color:"red"}}>
                    ! Card number should be 16 digits (XXXX XXXX XXXX XXXX)
                  </Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Expiry date</Form.Label>
                  <Form.Control type="month" ref={expiryDateRef} name="expiryDate" onChange={handleInputChange}  />
                  { error.expiryDate &&<Form.Text style={{color:"red"}}>
                    ! Empty field
                  </Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCvc">
                  <Form.Label>CVC</Form.Label>
                  <Form.Control type="number" ref={cvcRef} name="cvc" onChange={handleInputChange} placeholder="Enter the 3-dgits CVC" />
                  { error.cvc &&<Form.Text style={{color:"red"}}>
                    ! CVC should be 3 digits (XXX)
                  </Form.Text>}
                </Form.Group>

                <Button variant="dark" className="btn mt-4" type="button" name="submit" onClick={handleSubmit}>
                  Review and finish
                </Button>
                { error.submit &&<Form.Text style={{color:"red"}}>
                    ! Error, Check all inputs
                  </Form.Text>}
              </Form>

            </div>


            <div className={`finalOrder ${activeSection === "finalOrder"? "active":"inactive"} `}>
              <h2>Finish order</h2>

              {userCart.length>0 && userCart.map((item)=>(
                <CartItem item={item} order={false}/>
              ))}
              
              <span>Full Name: {formData.fullName}</span><br/>
              <span>Emaill address: {formData.email}</span><br/>
              <span>PhoneNumber: {formData.phone}</span><br/>
              <span>Card number {formData.cardNumber}</span><br/>

              {/*<!-- Button trigger modal -->*/}
              <Button variant="dark" className="btn mt-4" type="button" onClick={() => {setModalShow(true);resetForm();}}>
                  Place Order
              </Button>

              <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
              />

            </div>
            
          </div>
        </section>
      </>
    );
}
  
export default Cart;
  