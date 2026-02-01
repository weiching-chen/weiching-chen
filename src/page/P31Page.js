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


class P31Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell DESIGN 8131",
      title: "Walkie",
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

            
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/5B7YVqa-TO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" What if relationships could be felt, touched, and gently tended—rather than demanded—through interaction? "</h2>
            </div>

            <div className="gap_h"></div>
            <img src="/weiching-chen/P31/main.png" width="50%"/>
            <img src="/weiching-chen/P31/p2.png" width="50%"/>
            <div className="gap_h"></div>

            <img src="/weiching-chen/P31/p1.png" width="100%"/>
            
            <div className="gap_h"></div>
            <img src="/weiching-chen/P31/p3.jpeg" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P31/p4.jpeg" width="49%"/>

            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P31/main.pdf">[PPT]</a><a href="https://github.com/w20010703/Walkie.git">[GitHub]</a><a href="https://github.com/w20010703/DT-8131.git">[GitHub]</a><a href="https://www.vibio.com.tw/DT-8131/">[Website]</a></p>
              <h4>Project Type</h4>
              <p>#InteractionDesign #HumanCenteredDesign #SocialComputing #SpeculativeDesign #DigitalPhysicalInteraction #UXResearch</p>
              <h4>Personal Contribution</h4>
              <p>Conducted concept ideation and design research; designed and prototyped a digital–physical system that encourages in-person connection; implemented a status-driven eye animation display to communicate interaction states; and iterated the experience based on user behavior and social anxiety considerations.</p>
              <h4>Skills</h4>
              <p>Embedded Systems, Raspberry Pi 4, Bluetooth, Servo Motor, Electromagnet Systems, Physical Interaction Design</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P31Page;
