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


class P25Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Spring",
      award: "Cornell DESIGN 6158",
      title: "AIDtensegrity - Tensioned for Relief",
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
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/OeyNCpT3EWU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we design a Spider Web-Inspired Tensegrity Robotic   System that acts as a protective shield for aerial aid delivery ? "</h2>
            </div>

            <div className="gap_h"></div>
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/cUZED-PbbQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            
            <iframe width="23.5%" height="550" src="https://www.youtube.com/embed/iu-75Jf6Rrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="23.5%" height="550" src="https://www.youtube.com/embed/Mp0siwJJ1XQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="23.5%" height="550" src="https://www.youtube.com/embed/BhDrJOOv3ek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="23.5%" height="550" src="https://www.youtube.com/embed/hT05XU3O9h8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P25/p1.png" width="100%"/>
            <div className="gap_h"></div>
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/qXSj5vPkYOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <img src="/weiching-chen/P25/p2.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P25/p3.png" width="49%"/>

            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P30/poster1.pdf">[Poster]</a><a href="/weiching-chen/P30/poster2.pdf">[Poster]</a><a href="/weiching-chen/P25/ppt.pdf">[PPT]</a><a href="https://github.com/w20010703/AIDtensegrity">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Tensegrity #ComputationalDesign #ImpactProtection #AerialDelivery #Grasshopper #Kangaroo #Rhino #Simulation</p>
              <h4>Personal Contribution</h4>
              <p>Built parametric tensegrity geometries and physics-based simulations in Rhino/Grasshopper; scripted Python tools to automate design sweeps and constraint checks (size, payload, drop impact); compared design variants against target requirements; and used HoloLens 2 with Fologram to support spatial visualization and accurate physical fabrication.</p>
              <h4>Skills</h4>
              <p>Rhino, Grasshopper, Kangaroo Physics, Python, Parametric Design, Physics-Based Simulation, Design Optimization, Structural Reasoning, HoloLens 2</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P25Page;
