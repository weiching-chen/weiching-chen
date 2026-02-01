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


class P38Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell INFO 5345",
      title: "Observant Systems",
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
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/IUZp3Lja2aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" What if observation itself were poetic—where a machine watches the world and remembers it not as fact, but as feeling? "</h2>
            </div>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P38/p1.png" width="32%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P38/p2.png" width="32%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P38/p3.png" width="32%"/>
            <div className="gap_h"></div>

            <img src="/weiching-chen/P38/p4.png" width="100%"/>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P38/p5.png" width="100%"/>

            <div className="gap_h"></div>
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/DH3E05BBvWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <img src="/weiching-chen/P38/p6.png" width="100%"/>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P38/p7.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P38/p8.png" width="49%"/>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/w20010703/Interactive-Lab-Hub/tree/Fall2025/Lab%205">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#ObservantSystems #EmbeddedAI #MachineVision #StyleTransfer #RaspberryPi4 #InteractiveArt #EdgeAI</p>
              <h4>Personal Contribution</h4>
              <p>Implemented a real-time embedded vision system on Raspberry Pi, integrating TensorFlow Lite style-transfer models with live camera input, PiTFT display output, physical button controls for style navigation, and on-device video recording; optimized preprocessing, inference flow, and display rendering for low-latency execution on constrained hardware.</p>
              <h4>Skills</h4>
              <p>Python, Raspberry Pi 4, TensorFlow Lite, Computer Vision, Style Transfer, Embedded AI, OpenCV, Edge Deployment, SPI Displays (MiniPiTFT), GPIO/Button Input, Performance Optimization, Real-Time Systems</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P38Page;
