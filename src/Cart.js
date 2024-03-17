import React, { useState } from 'react';
import allPiecesOfArt from "./gallery.json";
import $ from 'jquery';
import "./cart.css";
import "./variables.css";
import CartItem from "./CartItem";
import { Link } from 'react-scroll';
import { Breadcrumb } from 'react-bootstrap';
import { FaCartShopping } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

const Cart=()=> {
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

              {allPiecesOfArt.map((item,index)=>(
                <CartItem image={item.imageSrc} name={item.title} author={item.artist} price={item.price} order={true}/>
              ))}

              <button type="button" className="btn mt-4" style={{backgroundColor:"#ebebebfe"}} onClick={()=>{scrollToSection("payment")}}>Add payment</button>
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
                  <button type="button" className="btn mt-4" onClick={()=>{scrollToSection("finalOrder");handleSubmit()}} >Review and finish</button>
              </form>
            </div>


            <div className={`finalOrder ${activeSection === "finalOrder"? "active":"inactive"} `}>
              <h2>Finish order</h2>

              {allPiecesOfArt.map((item,index)=>(
                <CartItem image={item.imageSrc1} name={item.title} author={item.artist} price={item.price} order={false}/>
              ))}
              
              <span>Full Name: {formData.fullName}</span><br/>
              <span>Emaill address: {formData.emailAddress}</span><br/>
              <span>PhoneNumber: {formData.phoneNumber}</span><br/>
              <span>Card number {formData.cardNumber}</span><br/>

              <button type="button" className="btn mt-4">Place order</button>
              {/*<!-- Button trigger modal -->*/}

            </div>
            
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
              </button>

              {/*<!-- Modal -->*/}
              <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      {/* Modal body content goes here */}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

            
          </div>
        </section>
      </>
    );
}
  
export default Cart;
  