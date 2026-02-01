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


class P35Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell INFO 5345",
      title: "The Clock of Pi",
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

            <iframe width="100%" height="550" src="https://www.youtube.com/embed/ZMM2v4Hwoms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" An interactive clock prototype exploring alternative timekeeping through embedded control and physical actuation. "</h2>
            </div>

            

            <div className="gap_h"></div>
            <img src="/weiching-chen/P35/p1.png" width="32%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P35/p2.png" width="32%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P35/p3.png" width="32%"/>
            <div className="gap_h"></div>
            
            <img src="/weiching-chen/P35/p4.png" width="100%"/>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P35/p5.png" width="100%"/>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P35/p6.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P35/p7.png" width="49%"/>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/w20010703/Interactive-Lab-Hub/tree/Fall2025/Lab%202">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#InteractivePrototyping #EmbeddedSystems #HumanObjectInteraction #RaspberryPi4 #AdafruitMiniPiTFT</p>
              <h4>Personal Contribution</h4>
              <p>Developed Raspberry Pi–based control logic, integrated MiniPiTFT display and button input, implemented stepper motor actuation for timed physical interaction, and contributed to concept design and prototyping.</p>
              <h4>Skills</h4>
              <p>Raspberry Pi 4, Python, Embedded Systems, Stepper Motors, GPIO, Interactive Prototyping, Hardware–Software Integration</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P35Page;
