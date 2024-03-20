import logo from './logo.svg';
import React,{useState,createContext} from 'react';
import './App.css';
import Header from './Header';
import Music from './Music';
import Gallery from './Gallery';
import Creation from './Creation';
import Cart from './Cart';

export const CartContext= createContext();
const App=()=> {

  //create a button in each GalleryItem to add the paint to the userCart 
  const [userCart, setUserCart] = useState([
    {
      "imageSrc": "images/pic1.jpg",
      "title": "Cookie Monster Wave",
      "artist": "Johnathan Brown",
      "description": "This is a re-make of 'The Great Wave'",
      "price": 1075
    }
  ]);

  const addToCart = (data) => {
    setUserCart([...userCart, data]);
    console.log(userCart);
  }

  //this is problematic
  const getUserCart = () => {
    return userCart;
  }

  return (
    <div className="App">
      <Header/>
      <Music/>
      <CartContext.Provider value={addToCart}>
        <Gallery addToCart={addToCart}/>
      </CartContext.Provider>
      <Creation/>
      <Cart getUserCart={getUserCart}/>
      
    </div>
  );
}

export default App;
