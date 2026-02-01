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


class P30Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Spring",
      award: "Cornell DESIGN 6298",
      title: "Optimizing the Robotic Sled Dog’s Locomotion Using Reinforcement Learning",
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

            <img src="/weiching-chen/P30/main.gif" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P30/main.gif" width="49%"/>
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Trained and evaluated reinforcement learning locomotion policies for Unitree Go2 in Isaac Gym/Isaac Sim, refining rewards for stable forward motion and testing performance with a simulated sled attachment. "</h2>
            </div>
            
            <div className="gap_h"></div>
            <iframe width="49%" height="550" src="https://www.youtube.com/embed/M50jUDIvoBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="550" src="https://www.youtube.com/embed/gZRQRADVAGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/yPzzicv4B88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>
            <iframe width="49%" height="550" src="https://www.youtube.com/embed/_RSsgAzLcV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="550" src="https://www.youtube.com/embed/TwYH6sq4FgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P30/ppt.pdf">[PPT]</a><a href="https://github.com/w20010703/Robot-Dog/tree/main">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#ReinforcementLearning #LeggedRobotics #Locomotion #RobotControl #Simulation #IsaacSim #Python</p>
              <h4>Personal Contribution</h4>
              <p>Built upon existing legged-robot reinforcement learning frameworks for Unitree Go2; experimented with reward shaping for stable forward locomotion; set up terrain variation in Isaac Gym/Isaac Sim; trained and analyzed policy behavior, including preliminary testing with a simulated sled attachment.</p>
              <h4>Skills</h4>
              <p>Reinforcement Learning, Legged Locomotion, Reward Design, Isaac Gym, Isaac Sim, Control Policy Training, PyTorch, Simulation Debugging</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P30Page;
