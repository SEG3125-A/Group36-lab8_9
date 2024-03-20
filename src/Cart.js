import React, { useState } from 'react';
import allPiecesOfArt from "./gallery.json";
import Button from 'react-bootstrap/Button';
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
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const Cart=({getUserCart,removeFromCart})=> {
  const [modalShow, setModalShow] = React.useState(false);

  let userCart=getUserCart();
  const [activeSection,setActiveSection]=useState("cart");
  const[formData,setFormData]=useState({
    fullName:"",
    emailAddress:"",
    phoneNumber:"",
    cardNumber:"",
    nameOnCard:"",
    cvc:"",
    expiryDate:"",

  });
  let {fullName,emailAddress,phoneNumber,cardNumber,nameOnCard,cvc,expiryDate}=formData;

  const scrollToSection=(section)=>{
    $(`.${section}`)[0].scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  }

  const handleSubmit=(e)=>{
    //e.preventDefault();

    setFormData({
      ...formData,
      fullName:$("#fullName").val(),
      emailAddress:$("#emailAddress").val(),
      phoneNumber:$("#phoneNumber").val(),
      cardNumber:$("#cardNumber").val(),
    });
    console.log(fullName+" "+emailAddress);
  }
  
    return (
      <>
        <section className="cart">
          <div className="intro">
            <h2>Cart</h2>
          </div>
          
          <Breadcrumb >
              <Breadcrumb.Item onClick={()=>scrollToSection("cart")} ><FaCartShopping /></Breadcrumb.Item>
              <div style={{width:"80px", border:"1px solid #ebebebfe", margin:""}}></div>
              <Breadcrumb.Item onClick={()=>scrollToSection("payment")} ><MdPayment /></Breadcrumb.Item>
              <div style={{width:"80px", border:"1px solid #ebebebfe"}}></div>
              <Breadcrumb.Item onClick={()=>scrollToSection("finalOrder")}  ><GiConfirmed /></Breadcrumb.Item>
          </Breadcrumb>
          
          <div className="container checkout">
            
            <div className={`shopping-cart ${activeSection === "cart"? "active":"inactive"} `}>
              <h2>My items</h2>

              {userCart.length>0 &&  userCart.map((item,index)=>(
                <CartItem item={item} order={true}/>
              ))}
              <Button variant="primary" className="btn mt-4" style={{backgroundColor:"#ebebebfe"}} onClick={()=>{scrollToSection("payment")}}>
                  Add payment
              </Button>
            </div>
            
            
            <div className={`payment ${activeSection === "payment"? "active":"inactive"} `}>
              <h2>Payment</h2>
              <form>
                  <div className="form-group">
                    <label for="inputFullName">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter ful name"/>
                  </div>
                  
                  <div className="form-group">
                    <label for="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                  <div className="form-group">
                    <label for="phoneNumber">Phone number</label>
                    <input type="number" className="form-control" id="phoneNumber" placeholder="Phone number" pattern="[0-9]{10}" maxLength="10"/>
                  </div>
                  
                  
                  <div className="form-group">
                    <label for="nameOnCard">Name on Card</label>
                    <input type="text" className="form-control" id="nameOnCard" placeholder="Name on card"/>
                  </div>

                  <div className="form-group">
                    <label for="cardNumber">Card number</label>
                    <input type="text" className="form-control" id="cardNumber" placeholder="Enter Card Number" pattern="[0-9]{10}" maxLength="16"/>
                  </div>

                  <div className="form-group">
                    <label for="expiryDate">Expiry date</label>
                    <input type="month" className="form-control" id="expiryDate" placeholder="MM/YY"/>
                  </div>

                  <div className="form-group">
                    <label for="cvc">CVC</label>
                    <input type="number" className="form-control" id="cvc" placeholder="Enter CVC" pattern="[0-9]{3}" maxLength="3"/>
                  </div>



                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <Button variant="primary" className="btn mt-4" onClick={() => {scrollToSection("finalOrder");handleSubmit()}}>
                  Review and finish
                  </Button>
              </form>
            </div>


            <div className={`finalOrder ${activeSection === "finalOrder"? "active":"inactive"} `}>
              <h2>Finish order</h2>

              {userCart.length>0 && userCart.map((item)=>(
                <CartItem item={item} order={false}/>
              ))}
              
              <span>Full Name: {formData.fullName}</span><br/>
              <span>Emaill address: {formData.emailAddress}</span><br/>
              <span>PhoneNumber: {formData.phoneNumber}</span><br/>
              <span>Card number {formData.cardNumber}</span><br/>

              {/*<!-- Button trigger modal -->*/}
              <Button variant="primary" onClick={() => setModalShow(true)}>
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
  