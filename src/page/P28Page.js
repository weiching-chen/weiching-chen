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


class P28Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 July - 2025 October",
      award: "nexuni",
      title: "Go2 Legged Patrol Robot",
      team: "[Team Project by a 5-Person Team]",
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
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/SnTrjdBXviM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Building and deploying a legged patrol robot for real-world commercial environments, designed for reliable autonomous operation in active public spaces. "</h2>
            </div>

            <div className="gap_h"></div>
            

            <iframe width="49%" height="400" src="https://www.youtube.com/embed/LuWJAer4XM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="23.5%" height="400" src="https://www.youtube.com/embed/OxFd7po-HO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="23.5%" height="400" src="https://www.youtube.com/embed/dbNF3SFSx9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>
            <iframe width="74.5%" height="400" src="https://www.youtube.com/embed/UlGNBKwIZs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="23.5%" height="400" src="https://www.youtube.com/embed/DokKhf-HNnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://www.instagram.com/reel/DSeXNAGjSxF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">[Video]</a><a href="https://github.com/w20010703/React_Ros2_Go2_demo.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#Robotics #AutonomousSystems #LeggedRobots #FieldDeployment #HumanRobotInteraction #SecurityRobotics</p>
              <h4>Personal Contribution</h4>
              <p>Developed and integrated the patrol robot system on the Unitree Go2 platform for real-world commercial deployment; implemented autonomous navigation, perception, and patrol behaviors suited for outdoor and semi-structured environments; supported on-site deployment and operation in shopping malls in Singapore; and ensured system robustness and safety through real-world testing and iteration in public spaces.</p>
              <h4>Skills</h4>
              <p>Legged Robotics (Unitree Go2), Autonomous Navigation, ROS 2, SLAM, Computer Vision, Rviz2, Web UI Development (React.js)</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P28Page;
