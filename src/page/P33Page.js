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


class P33Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Spring",
      award: "Cornell DESIGN 6398",
      title: "Flourisa",
      team: "[Team Project by a 3-Person Team]",
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
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/cGC47IaAkgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we design a flower chatting device that allows users to chat with flowers? "</h2>
            </div>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P33/p1.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P33/p2.png" width="49%"/>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P33/p3.png" width="32%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P33/p4.png" width="32%"/>
            <div className='gap_w'></div>
            <img src="/weiching-chen/P33/p5.png" width="32%"/>
            <div className="gap_h"></div>
            


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P33/ppt.pdf">[PPT]</a><a href="https://github.com/w20010703/flower-chatting-device.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#InteractionDesign #DigitalPhysicalInteraction #HumanCenteredDesign #EmbeddedSystems #IoT #SocialComputing</p>
              <h4>Personal Contribution</h4>
              <p>Designed and implemented the embedded interaction system using ESP32; engineered the motorized mechanism that enables the flower to physically open and close in response to interaction states; developed backend communication using a Flask server to connect the physical device with a digital frontend; integrated Discord messaging so that touching the flower triggers a symbolic “I miss you” message sent to another person; and iterated the system to ensure the interaction felt gentle, intentional, and emotionally expressive rather than intrusive.</p>
              <h4>Skills</h4>
              <p>ESP32, Embedded Systems, Motor & Mechanism Design, IoT Communication, Flask, Discord API</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P33Page;
