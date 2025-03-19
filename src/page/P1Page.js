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


class P1Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2024 Fall",
      award: "Cornell DESIGN 6157",
      title: "Resilient Tensegrity Robot: Inspired by Spider Webs and Melons",
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

            <iframe width="100%" height="550" src="https://www.youtube.com/embed/41ZSKge1-As?si=ocPMQRj-4q03l6jQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we design a web tensegrity structure that is both resilient and capable of moving in an unknown environment, such as space? "</h2>
            </div>

            <div className="gap_h"></div>
            
            <iframe width="49%" height="800" src="https://youtube.com/embed/IkHI9EKL14o?si=DCGROeW5yyKDmH0y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="800" src="https://youtube.com/embed/Q3iZUfIgCU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="gap_h"></div>

            <iframe width="100%" height="600" src="https://www.youtube.com/embed/Fc3JNfCCV2A?si=T2vPG0l4pqxDxqcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="gap_h"></div>

            <img src="/weiching-chen/P1/6.jpg" width="32%" />
            <div className="gap_w"></div>
            <img src="/weiching-chen/P1/8.jpg" width="32%" />
            <div className="gap_w"></div>
            <img src="/weiching-chen/P1/7.jpg" width="32%" />

            <div className="gap_h"></div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P1/poster.png">[Poster]</a><a href="/weiching-chen/P1/small_poster.png">[Design Matrix]</a></p>
              <h4>Project Type</h4>
              <p>#Tensegrity Design #Structural Innovation #BioInspired Robots #Resilient Structures #Space Robotics</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Robotic Control, Physical Model Fabrication, Digital Model and Physical Simulation</p>
              <h4>Skills</h4>
              <p>Python, ESP32, Rhino, Grasshopper, Karamba3D, MATLAB, 3D Printing (Prusa), Adobe Illustrator</p>
            </div>

            
          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P1Page;
