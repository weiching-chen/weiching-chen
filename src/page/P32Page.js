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


class P32Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell INFO 5345",
      title: "MIXI 2.0",
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

            <img src="/weiching-chen/P32/main.png" width="100%"/>
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" What if emotion could be mixed into a drink? "</h2>
            </div>

            <div className="gap_h"></div>
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/hI-nyOW3aA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P32/p1.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P32/p2.png" width="49%"/>
            <div className="gap_h"></div>
            


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/w20010703/Interactive-Lab-Hub/tree/Fall2025/Final%20Project">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#InteractiveSystems #HumanComputerInteraction #AffectiveComputing #AIInterfaces #PhysicalComputing #IoT #CreativeRobotics</p>
              <h4>Personal Contribution</h4>
              <p>Designed and built the Raspberry Pi + Arduino system where spoken input (mic) is transcribed and classified by OpenAI into an emotion/recipe; implemented the UI/control loop on the Pi; and programmed Arduino pump control using time-based dispensing plus calibration to achieve consistent pour ratios.</p>
              <h4>Skills</h4>
              <p>Raspberry Pi 4, Arduino, Python, Embedded Systems, OpenAI APIs</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P32Page;
