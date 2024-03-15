import $ from 'jquery';
import "./cart.css";
import "./variables.css";
import CartItem from "./CartItem";
import { Link } from 'react-scroll';
import { Breadcrumb } from 'react-bootstrap';
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
              <h2>My items</h2>
              <CartItem image={"images/jumbotron.jpg"} name={"tony"} author={"james"} price={"25$"}/>
              <CartItem image={"images/jumbotron.jpg"} name={"tony"} author={"james"} price={"25$"}/>
              <CartItem image={"images/jumbotron.jpg"} name={"tony"} author={"james"} price={"25$"}/>
              <CartItem image={"images/jumbotron.jpg"} name={"tony"} author={"james"} price={"25$"}/> 
            </div>
            <div className="payment">
              <h2>Payment</h2>
            </div>
            <div className="final-order">
              <h2>Finish order</h2>
              

            </div>
            
          </div>
        </section>
      </>
    );
}
  
export default Cart;
  