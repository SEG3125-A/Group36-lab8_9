import $ from 'jquery';
import "./header.css";
import "./variables.css"
import logo from "./logo.svg"
import { Link } from 'react-scroll';

const Header=()=> {
  return (
    <>
    <section className='header'>

      {/* That is the nav bar */}
      <nav className="navbar navbar-expand-sm  navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="Avatar Logo" style={{width:'40px'}} class="rounded-pill"/> 
          </a>
        </div>
        <div className="container-fluid menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="music" spy={true} smooth={true} offset={0} duration={500} delay={0}>
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
              <a className="nav-link active">Cart</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* That is the nav bar */}
      <div className="mt-4 p-5 bg-primary text-white rounded jumbotron">
        <h1>Artivisio</h1>
        <p>Explore the beauty captured by talented photographers from around the world.</p>
      </div>
    </section>
    </>
  );
}

export default Header;
