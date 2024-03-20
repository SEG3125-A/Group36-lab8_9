import "./header.css";
import "./variables.css"
import { Link } from 'react-scroll';

const Jumbotron=()=> {
  return (
    <>
        <div className="mt-4 p-5 bg-primary text-white rounded jumbotron">
          <h1>Artivisio</h1>
          <p>Explore the beauty captured by talented photographers from around the world.</p>
        </div>
    </>
  );
}

export default Jumbotron;
