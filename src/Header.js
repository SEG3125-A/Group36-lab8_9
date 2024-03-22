import $ from 'jquery';
import "./header.css";
import "./variables.css"
import logo from "./favicon.ico";
import { Link } from 'react-scroll';

const Header=({itemInCart})=> {
  return (
    <>
      <section className='header'>

        {/* That is the nav bar */}
        <nav className="navbar navbar-expand-sm  navbar-light">
          <div className="container-fluid logo">
            <a className="navbar-brand" href="#">
            <img src={logo} alt="Avatar Logo" style={{width:'50px'}} class=""/> 
            </a>
          </div>
          <div className="container-fluid menu">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link  to="music" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                <a className="nav-link active">Music</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="gallery" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                <a className="nav-link active">Gallery</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="creation" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                <a className="nav-link active" >Creation</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="cart" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                <a className="nav-link active">Cart (<span>{itemInCart})</span></a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
  
      </section>
    </>
  );
}

export default Header;
