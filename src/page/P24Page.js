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


class P23Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Spring",
      award: "Cornell DESIGN 6398",
      title: "Pokemon Battle Haptics",
      team: "[Team Project by a 2-Person Team]",
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

            <iframe width="100%" height="550" src="https://www.youtube.com/embed/RNOXbDXDWOg?si=nyHyw6wbk-LT7ynG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" What if we could feel a pokemon battle in real life? "</h2>
            </div>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P24/main.jpg" width="100%"/>
            <div className="gap_h"></div>

            <img src="/weiching-chen/P24/p1.jpg" width="23.5%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P24/p2.jpg" width="23.5%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P24/p3.jpg" width="23.5%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P24/p4.jpg" width="23.5%"/>

            <div className="gap_h"></div>

            <img src="/weiching-chen/P24/p11.jpg" width="100%"/>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P24/p22.jpg" width="100%"/>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P24/p33.jpg" width="100%"/>
            <div className="gap_h"></div>
            <img src="/weiching-chen/P24/p44.jpg" width="100%"/>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P24/ppt.pdf">[PPT]</a><a href="https://github.com/w20010703/Pokemon_Go_arduino.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#ESP32 #OpenAIDevelopment</p>
              <h4>Personal Contribution</h4>
              <p>Software Development, Hardware Development</p>
              <h4>Skills</h4>
              <p>ESP32, Python</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P23Page;
