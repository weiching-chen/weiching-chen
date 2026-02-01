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


class P37Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell INFO 5345",
      title: "Ph-UI!!!",
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

            <img src="/weiching-chen/P37/p7.png" width="100%"/>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" A “be-the-snake” controller that converts bending gestures into real-time game input. "</h2>
            </div>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P37/p1.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P37/p2.png" width="49%"/>
            <div className="gap_h"></div>

            <img src="/weiching-chen/P37/p3.png" width="100%"/>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P37/p4.png" width="100%"/>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P37/p5.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P37/p6.png" width="49%"/>
            <div className="gap_h"></div>

            <img src="/weiching-chen/P37/p8.png" width="100%"/>
            
            <div className="gap_h"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/9HQaPcGT6h8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/qnWo3dm69Zw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/w20010703/Interactive-Lab-Hub/tree/Fall2025/Lab%204">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#PhysicalComputing #InteractiveSystems #EmbeddedSystems #IMU #HumanComputerInteraction</p>
              <h4>Personal Contribution</h4>
              <p>Built and integrated the hardware sensing system on Raspberry Pi (Qwiic joystick + IMU), implemented the input-to-game mapping and control logic, and contributed to iterative prototyping of the segmented “spine” mechanism and enclosure.</p>
              <h4>Skills</h4>
              <p>Raspberry Pi 4, Python, IMU Sensors, Joystick Input, I2C/Qwiic, Hardware–Software Integration, Prototyping with Cardboard/Fabric</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P37Page;
