import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

import WorkCard from '../component/WorkCard'
// import SlideShow from '../components/SlideShow'
// import PicWordWithBtn from '../components/PicWordWithBtn'

// import '../css/main_page.css';
// import { getDataFromServer, dict2urlEncode } from '../http_utils.js'
// import { setCookie, getCookie } from '../cookie_utils.js'


class P36Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell INFO 5345",
      title: "Chatterboxes",
      team: "[Team Project by a 5-Person Team]",
      introduction: "",
      
    }

  }

  render() { 
    return (
      <div className="ppage">
        <div className="title_section">
          <h4 className="date">{this.state.date}</h4>
          <h4 className="award">{this.state.award}</h4>
          <h2 className="title">{this.state.title}</h2>
          <h5 className="team">{this.state.team}</h5>

          <div className="content_holder">

            <iframe width="100%" height="550" src="https://www.youtube.com/embed/lGGVGLdvbkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" A conversational doorbell that turns a routine interaction into a character-driven exchange using offline speech recognition and LLM-based voice responses. "</h2>
            </div>


            <div className="gap_h"></div>
            <img src="/weiching-chen/P36/p1.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P36/p2.png" width="49%"/>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P36/p3.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P36/p4.png" width="49%"/>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/w20010703/Interactive-Lab-Hub/tree/Fall2025/Lab%203">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#SpeechInterface #EmbeddedSystems #PhysicalComputing #RaspberryPi4 #LLM #ConversationalAI #HumanAIInteraction</p>
              <h4>Personal Contribution</h4>
              <p>Implemented the end-to-end voice pipeline (Vosk STT → OpenAI response generation with structured JSON → TTS playback), built GPIO-based interaction (button start/stop + LED state), and engineered real-time audio handling with a “pause mic while speaking” mechanism to prevent self-feedback.</p>
              <h4>Skills</h4>
              <p>Python, Raspberry Pi 4, Vosk (Offline STT), OpenAI API, Text-to-Speech, Audio Streaming, GPIO (Button/LED), Multithreading, Real-Time Interaction Design</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P36Page;
