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


class P23Page extends Component {

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

            <iframe width="100%" height="400" src="https://www.youtube.com/embed/Nno6nnffuMw?si=ldC5sR5uC6UVYelM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://www.npmjs.com/package/nexuni-react-web-tool">[npm]</a><a href="https://github.com/nexuni/nexuni-react-web-tool.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#npmLibrary #WebDevelopment</p>
              <h4>Personal Contribution</h4>
              <p>Web Design, Web Development</p>
              <h4>Skills</h4>
              <p>React.js</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P23Page;
