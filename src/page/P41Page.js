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


class P41Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Spring",
      award: "Cornell DESIGN 6197",
      title: "Prusa MK4 3D Printer GCode Generator",
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

            <img src="/weiching-chen/P41/p1.png" width="100%"/>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How to generate basic G-code toolpaths for practicing motion path control on a Prusa MK4 3D printer? "</h2>
            </div>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P41/p2.png" width="32%"/>
            <div className="gap_w"></div>
            <iframe width="32%" src="https://www.youtube.com/embed/GosMae3kLOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P41/p3.jpg" width="32%"/>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/w20010703/Prusa_gcode_grasshopper.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#DigitalFabrication #Gcode #3DPrinting #MotionPathControl #Grasshopper</p>
              <h4>Personal Contribution</h4>
              <p>Created simple Grasshopper definitions to generate G-code toolpaths for the Prusa MK4 and tested basic motion path control through printing experiments.</p>
              <h4>Skills</h4>
              <p>Grasshopper, G-code Basics, 3D Printing (Prusa), Python</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P41Page;
