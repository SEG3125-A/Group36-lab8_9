import $ from 'jquery';
import "./music.css";
import "./variables.css"
import { Link } from 'react-scroll';
import ReactAudioPlayer from 'react-audio-player';
import React,{useState,useEffect} from 'react';


const Music=()=> {

  let allSongs=[
    {
      title:"2MS",
      artist:"Unknown",
      src:"audios/2MS.mp3"
    },
    {
      title:"Big",
      artist:"Ace Hood",
      src:"audios/Ace Hood - Big Fish (AUDIO).mp3"
    },
    {
      title:"Wrote you a letter",
      artist:"Alex Jean",
      src:"audios/Alex Jean - Wrote You A Letter.mp3"
    },
    {
      title:"2MS",
      artist:"Blanco",
      src:"audios/2MS.mp3"
    },

    {
      title:"Find my way",
      artist:"DaBaby",
      src:"audios/DaBaby - Find My Way (Audio).mp3"
    },
    {
      title:"Shake sumn",
      artist:"DaBaby",
      src:"audios/DaBaby - SHAKE SUMN [Official Audio].mp3"
    },
    {
      title:"Dj Luccy",
      artist:"Sage The Gemini",
      src:"audios/DJ Lucci feat Sage The Gemini - Butter.mp3"
    },
  ]

  const [currentSongIndex,setSongIndex]=useState(0);
  //effect happen when state change
  useEffect(()=>{
    $(".music-title").text(allSongs[currentSongIndex].title);
    $(".music-author").text(allSongs[currentSongIndex].artist);
    $(".audio-player").attr("src",allSongs[currentSongIndex].src);
  },[currentSongIndex]);

  //change the song to the next or the previous one
  const changeSong=(choice)=>{

    let newIndex;
    let maxIndex=allSongs.length-1;
    if(choice=="previous"){
      newIndex= (currentSongIndex-1 < 0) ? maxIndex: currentSongIndex-1 ;

    }else{
      newIndex= (currentSongIndex+1 > maxIndex) ? 0: currentSongIndex+1 ;
    }
    setSongIndex(newIndex);

  }


    return (
      <section className="music">
        <div className="intro">
          <h2>Music</h2>
          <p>Let the music guide you through an unforgettable journey</p>
        </div>
        <div className="music-box">
          <div className="music-logo">
            <img src="images/jumbotron.jpg"></img>
          </div>
          <div className="music-controller">
            <div className="music-details">
              <i class="bi bi-arrow-left-circle-fill" onClick={()=>changeSong("previous")}></i>
              <div>
                <span className="music-title"></span>
                <br/>
                <span className="music-author"></span>
              </div>
              <i class="bi bi-arrow-right-circle-fill" onClick={()=>changeSong("next")}></i>
            </div>
            <ReactAudioPlayer className="audio-player" src="" autoPlay controls/>
            
          </div>
        </div>
      </section>
    );
}
  
export default Music;
  