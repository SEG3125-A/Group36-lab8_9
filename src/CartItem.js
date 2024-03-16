import "./cart.css";
import "./variables.css";
import {FaTrashAlt} from "react-icons/fa";

const CartItem=({image,name,author,price,order})=>{
    return(
        <>
          <div className='cart-item py-1'>
                <div className='cart-item-img'> <img src={image} alt=""/></div>
                <div className='cart-item-info'>
                  <div className='cart-item-details'>
                    <p>Name: {name}</p>
                    <p>Author: {author}</p>
                    <p>Price {price}</p>
                  </div>
                  {order && <FaTrashAlt />}
                </div>
          </div>
        </>
    );
}

export default CartItem;