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
                    <id>id:{item.id}</id>
                  </div>
                  {order && <FaTrashAlt onClick={()=>removeFromCart(item.id)} />}
                </div>
          </div>
        </>
    );
}

export default CartItem;