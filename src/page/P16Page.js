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


class P16Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Spring",
      award: "Cornell DESIGN 6398",
      title: "Time Blossom",
      team: "[Team Project by a 1-Person Team]",
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

            <img src="/weiching-chen/P16/hero1.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P16/hero1.png" width="49%"/>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we incorporate colored lights into a common household decoration to visually represent a Google Calendar? "</h2>
            </div>

            <div className="gap_h"></div>

            <img src="/weiching-chen/P16/detail.png" width="100%"/>

            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P16/proj1.pdf">[PPT]</a><a href="https://github.com/w20010703/TimeBlossom.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Smart Home Decoration #Google Calendar Integration #IoT Design</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Wood Work Woodworking, Software Engineering, Full-Stack Connection</p>
              <h4>Skills</h4>
              <p>Arduino Micro, Python, Google Cloud API</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P16Page;
