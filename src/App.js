import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Music from './Music';
import Gallery from './Gallery';
import Creation from './Creation';
import Cart from './Cart';

const App=()=> {
  return (
    <div className="App">
      <Header/>
      <Music/>
      <Gallery/>
      <Creation/>
      <Cart/>
      
    </div>
  );
}

export default App;
