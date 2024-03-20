import logo from './logo.svg';
import React,{useState,createContext} from 'react';
import './App.css';
import Header from './Header';
import Music from './Music';
import Gallery from './Gallery';
import Creation from './Creation';
import Cart from './Cart';

export const CartContext= createContext();
export const RemoveItemContext= createContext();
const App=()=> {
  const [id,setId]=useState(1);

  //create a button in each GalleryItem to add the paint to the userCart 
  const [userCart, setUserCart] = useState([
    {
      "imageSrc": "images/pic1.jpg",
      "title": "Cookie Monster Wave",
      "artist": "Johnathan Brown",
      "description": "This is a re-make of 'The Great Wave'",
      "price": 1075,
      "id":id
    }
  ]);

  //add a new artwork to the cart
  const addToCart = (data) => {
    setId(id+1);
    const modifiedData={...data,"id":id}
    setUserCart(prevUserCart=>[...prevUserCart, modifiedData]);
    console.log(userCart);
  }

  //return the cart array
  const getUserCart = () => {
    return userCart;
  }

  //remoce an artwork from the cart
  const removeFromCart=(id)=>{
    setUserCart(userCart.filter((item)=>item.id!=id));
  }

  return (
    <div className="App">
      <Header/>
      <Music/>
      <CartContext.Provider value={addToCart}>
        <Gallery />
      </CartContext.Provider>
      <Creation/>
      <RemoveItemContext.Provider value={removeFromCart}>
        <Cart getUserCart={getUserCart} removeFromCart={removeFromCart}/>
      </RemoveItemContext.Provider>
      
    </div>
  );
}

export default App;
