import $ from 'jquery';
import "./cart.css";
import "./variables.css";
import { Link } from 'react-scroll';
import { Breadcrumb } from 'react-bootstrap';
import {BsChevronRight} from 'react-icons/bs';
import {FaTrashAlt} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const Cart=()=> {
    return (
      <>
        <section className="cart">
          <div className="intro">
            <h2>Cart</h2>
          </div>
          
          <Breadcrumb >
              <Breadcrumb.Item ><FaCartShopping /></Breadcrumb.Item>
              <div style={{width:"80px", border:"1px solid #ebebebfe", margin:""}}></div>
              <Breadcrumb.Item ><MdPayment /></Breadcrumb.Item>
              <div style={{width:"80px", border:"1px solid #ebebebfe"}}></div>
              <Breadcrumb.Item ><GiConfirmed /></Breadcrumb.Item>
          </Breadcrumb>
          
          <div className="container checkout">
            <div className="shopping-cart">
              <h1>My items</h1>
              <div className='cart-item py-3'>
                <div className='cart-item-img'> <img src="images/jumbotron.jpg" alt=""/></div>
                <div className='cart-item-info'>
                  <div className='cart-item-details'>
                    <p>Name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </div>
                  <FaTrashAlt />
                  
                </div>
              </div>
              <div className='cart-item py-3'>
                <div className='cart-item-img'> <img src="images/jumbotron.jpg" alt=""/></div>
                <div className='cart-item-info'>
                  <div className='cart-item-details'>
                    <p>Name</p>
                    <p>Author</p>
                    <p>Price</p>
                  </div>
                  <FaTrashAlt />
                  
                </div>
              </div>
            </div>
            <div className="payment">

            </div>
            <div className="final-order">

            </div>
            
          </div>
        </section>
      </>
    );
}
  
export default Cart;
  