import $ from 'jquery';
import "./music.css";
import "./variables.css"
import { Link } from 'react-scroll';
import ReactAudioPlayer from 'react-audio-player';


const Music=()=> {
    return (
      <section className="music">
        <div className="music-intro">
          <h2>Music</h2>
          <p>Let the music guide you through an unforgettable journey</p>
        </div>
        <div className="music-box">
          <div className="music-logo">
            <img src=""></img>
          </div>
          <div className="music-controller">
            <div className="music-details">
              <i class="bi bi-arrow-left-circle-fill"></i>
                <spam className="music-title">Title</spam>
                <i class="bi bi-arrow-right-circle-fill"></i>
                <br/>
                <spam className="music-author">Author</spam>
            </div>
            <ReactAudioPlayer src="my_audio_file.ogg" autoPlay controls/>
            
          </div>
        </div>
      </section>
    );
}
  
export default Music;
  