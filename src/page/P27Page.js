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


class P27Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell XRC Lab",
      title: "VR Teleoperation for PhantomX Arm (ROS 2 & MoveIt 2)",
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

            <iframe width="100%" height="550" src="https://www.youtube.com/embed/wi1cEePKsj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" How can ROS 2 and MoveIt 2 be integrated with Unity to enable VR/AR-based spatial interaction for PhantomX robotic manipulation? "</h2>
            </div>

            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P27/poster.pdf">[Poster]</a><a href="https://github.com/w20010703/Phantomx-react-arm-moveit.git">[GitHub]</a><a href="https://github.com/w20010703/Phantomx-unity.git">[GitHub (Unity)]</a></p>
              <h4>Project Type</h4>
              <p>#ROS2 #MoveIt2 #RoboticManipulation #VRAR #Unity #HumanRobotInteraction</p>
              <h4>Personal Contribution</h4>
              <p>Independently developed a complete ROS 2 control package for the PhantomX robotic arm from scratch due to the absence of existing ROS 2 repositories, including hardware interfaces, ros2_control integration, MoveIt 2 configuration, and a Unity–ROS2 VR/AR interaction pipeline</p>
              <h4>Skills</h4>
              <p>ROS 2, MoveIt 2, ros2_control, Unity, C#, Python, C++</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P27Page;
