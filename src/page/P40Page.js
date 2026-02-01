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


class P40Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Spring",
      award: "Cornell Design Tech Open Studio Selected Work",
      title: "Lovely Leverly Magical Manual Machine",
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

            <div className="gap_h"></div>
            <img src="/weiching-chen/P40/p1.png" width="32%"/>
            <div className="gap_w"></div>
            <iframe width="32%" src="https://www.youtube.com/embed/oLOl-JPtBQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P40/p2.png" width="32%"/>
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" An interactive manual espresso machine combining embedded sensing, haptic feedback, and LLM-based analysis to support human–AI collaborative brewing. "</h2>
            </div>

            


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/dleithinger/SmartLeverCoffee.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#ESP32 #OpenAIDevelopment #EmbeddedSystems #Haptics #HumanAIInteraction #InteractiveSystems</p>
              <h4>Personal Contribution</h4>
              <p>Integrated sensors and custom electronics into a manual espresso machine, implemented haptic feedback, and connected real-time brewing data to a large language model with visual feedback.</p>
              <h4>Skills</h4>
              <p>ESP32, Python, LLM, Haptics, Embedded Systems, BooKoo Sensor</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P40Page;
