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


class P11Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2019 Summer",
      award: "Google Science Fair 2019 Finalist  (Top 20)",
      title: "Smart Necklace",
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

            <iframe width="100%" height="550" src="https://www.youtube.com/embed/_SDu8WaNgfc?si=ynm15rZL4NixiL9t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How might we design a smart necklace that enhances health by monitoring hydration levels, providing a stylish alternative to traditional smart water bottles for tracking water intake? "</h2>
            </div>

            <div className="gap_h"></div>

            <iframe width="42%" height="315" src="https://www.youtube.com/embed/kGDXHznYPWo?si=bovM9CgR7HqOLXfJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="gap_w"></div>
            <div className="gap_w"></div>

            <iframe width="54%" height="315" src="https://www.youtube.com/embed/OPLX5owCAJE?si=sfaPYqk8_upUI9GC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="gap_h"></div>

            <img src="/weiching-chen/P11/_p11_pic.jpg" width="100%" />

          
            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://docs.google.com/presentation/d/1FmLTAJ5TMB0qiKdy2n2fswOoE-WocK5iQPqc6sQT_m4/edit?usp=sharing">[PPT]</a><a href="https://github.com/w20010703/smartnecklace.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Wearable Innovation #CNN Machine Learning #Piezoelectric Sensors</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Product Design, Software Development, Hardware Engineering, Product Implementation, and Testing</p>
              <h4>Skills</h4>
              <p>Python, TensorFlow, OpenCV, Piezoelectric Sensor, STM32</p>
            </div>


          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P11Page;
