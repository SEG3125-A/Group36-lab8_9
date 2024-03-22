import React,{useContext} from "react";
import "./cart.css";
import "./variables.css";
import {FaTrashAlt} from "react-icons/fa";
import { RemoveItemContext } from "./App";

const CartItem=({item,order})=>{
  const removeFromCart=useContext(RemoveItemContext)
    return(
        <>
          <div className='cart-item py-1'>
                <div className='cart-item-img'> <img src={item.imageSrc} alt=""/></div>
                <div className='cart-item-info'>
                  <div className='cart-item-details'>
                    <p>Name: {item.title}</p>
                    <p>Author: {item.artist}</p>
                    <p>Price: {item.price}$</p>
                  </div>
                  {order && <FaTrashAlt className="trash-icon" onClick={()=>removeFromCart(item.id)} style={{cursor:"pointer"}} />}
                </div>
          </div>
        </>
    );
}

export default CartItem;