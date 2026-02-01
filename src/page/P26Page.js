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


class P26Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Spring",
      award: "Cornell DESIGN 6197",
      title: "The Stratum Morphological Model",
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

            <iframe width="100%" height="550" src="https://www.youtube.com/embed/TipyD5AKGxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" A robotic fabrication workflow using ABB IRB 6700 and IRB 120, combining Kangaroo simulation with HoloLens 2–guided assembly through Fologram. "</h2>
            </div>

            

            <div className="gap_h"></div>
            <img src="/weiching-chen/P26/p1.jpg" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P26/p2.jpg" width="49%"/>
            <div className="gap_h"></div>
            
            <img src="/weiching-chen/P26/p3.jpg" width="100%"/>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P26/p4.jpg" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P26/p5.jpg" width="49%"/>
            <div className="gap_h"></div>
            
            <iframe width="49%" height="300px" src="https://www.youtube.com/embed/3Z7ohwki2WY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="300px" src="https://www.youtube.com/embed/-YWNBCiC8kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P26/ppt.pdf">[PPT]</a><a href="https://github.com/w20010703/Timber_ABB_Fologram.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#RoboticFabrication #ComputationalDesign #IndustrialRobotics #HumanRobotCollaboration #MixedReality #ABBRobotics</p>
              <h4>Personal Contribution</h4>
              <p>Developed a computational fabrication pipeline integrating Kangaroo-based structural simulation with ABB IRB 6700 robotic wood cutting and ABB IRB 120–based assembly, implemented Grasshopper–Python workflows for robotic toolpath generation, and enabled real-time HoloLens 2–guided human–robot assembly through Fologram.</p>
              <h4>Skills</h4>
              <p>ABB IRB 6700, ABB IRB 120, Robotic Fabrication, Grasshopper, Python, Kangaroo Physics, Fologram, HoloLens 2</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P26Page;
