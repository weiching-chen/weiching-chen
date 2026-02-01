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


class P29Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell INFO 5356",
      title: "Math Voyage: The Cargo Challenge",
      team: "[Team Project by a 4-Person Team]",
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
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/XAReBe-Xfdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" Designing a collaborative robot-based math game for K–12 students that turns arithmetic learning into a physical, playful, and socially engaging experience. "</h2>
            </div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/w20010703/React_Ros2_Go2_demo.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#ROS2 #InteractionDesign #HumanCenteredDesign #EducationalTechnology #Robotics #PhysicalInteraction #GameDesign #HumanRobotInteraction</p>
              <h4>Personal Contribution</h4>
              <p>Conducted concept ideation and interaction design for an educational robot game; designed the robot’s role as a socially expressive “cargo ship” to support collaboration between players; implemented a finite state machine (FSM) in ROS 2 to control robot behaviors across loading, checking, movement, and feedback states; integrated RFID sensing, physical buttons, LEDs, and sound cues to provide clear, multimodal interaction feedback; and iterated the system through classroom testing to improve engagement, teamwork, and learning clarity.</p>
              <h4>Skills</h4>
              <p>ROS 2, Rviz2, Finite State Machines (FSM), RFID Systems, TurtleBot4, Embedded Systems (Raspberry Pi / Arduino), LED & Sound Feedback Design</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P29Page;
