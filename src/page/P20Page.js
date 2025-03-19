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


class P20Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2020 May",
      award: "nexuni",
      title: "Doday Online Order Website",
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

            <img src="/weiching-chen/P20/o1.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P20/o4.png" width="49%"/>

            <div className="gap_h"></div>

            <img src="/weiching-chen/P20/o2.png" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P20/o3.png" width="49%"/>

            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://order.doday.com.tw">[Website]</a><a href="https://github.mit.edu/gadgethi/proj-005-react_online_order.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#WebDesign #WebDevelopment</p>
              <h4>Personal Contribution</h4>
              <p>Creative Conceptualization, Web Design, Web Development</p>
              <h4>Skills</h4>
              <p>React.js, Python, SQL, pgAdmin, Adobe Illustrator</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P20Page;
