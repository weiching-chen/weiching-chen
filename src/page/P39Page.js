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


class P39Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell INFO 5345",
      title: "Little Interactions Everywhere",
      team: "[Team Project by a 4-Person Team]",
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

            <img src="/weiching-chen/P39/main.png" width="100%"/>
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" What if we could feel a pokemon battle in real life? "</h2>
            </div>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P39/p1.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P39/p2.png" width="49%"/>
            <div className="gap_h"></div>

            <img src="/weiching-chen/P39/p3.png" width="100%"/>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P39/p4.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P39/p5.png" width="49%"/>
            <div className="gap_h"></div>

            <div className="gap_h"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/pNMjAitujkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/rlM4WHJhlFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/w20010703/Interactive-Lab-Hub/tree/Fall2025/Lab%206">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#DistributedSystems #MQTT #AffectiveComputing #EmbeddedAI #ComputerVision #InteractiveArt #PhysicalComputing #RaspberryPi4</p>
              <h4>Personal Contribution</h4>
              <p>Built the on-device emotion-to-light pipeline: implemented real-time facial emotion detection using OpenCV + FER, mapped dominant emotion classes to WS2812B NeoPixel color states, and engineered smooth LED transitions and low-resolution camera processing for responsive, ambient feedback on Raspberry Pi.</p>
              <h4>Skills</h4>
              <p>Python, Raspberry Pi 4, MQTT, OpenCV, Edge AI, WS2812B LEDs, GPIO</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P39Page;
