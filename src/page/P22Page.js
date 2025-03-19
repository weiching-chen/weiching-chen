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


class P22Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2022 July - 2023 June",
      award: "nexuni",
      title: "Famcy",
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

            <iframe width="100%" height="400" src="https://www.youtube.com/embed/SET_vlfzTcY?si=b7yYX-vVA8bctCTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <iframe width="49%" height="315" src="https://www.youtube.com/embed/k3q7nZGAZf4?si=Np70oZXi4HsNrKyB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/4r7E-4YHzGg?si=beV76HLhYoVSXYnB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <iframe width="49%" height="315" src="https://www.youtube.com/embed/Ej99MN4hk6Q?si=qW3Z9ZEtcUaF3PV-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/hrXAt5twA5Y?si=sR09ZO87KqgWGnRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <iframe width="49%" height="315" src="https://www.youtube.com/embed/r5W7PheEoms?si=hIYUNtJhyruHBxKq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/FRs9odUe1-g?si=nWrHfUgr20SlYCHy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <iframe width="49%" height="315" src="https://www.youtube.com/embed/QBt7fmt4x4U?si=aiizpo6yHC7kzX1S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/BGIHGxJPqnE?si=2OG57czEzMo8yMwF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <iframe width="49%" height="315" src="https://www.youtube.com/embed/oBewT-XPdpM?si=LOpDVyIbkA4bb4jR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/uDUexhIE2jI?si=XlRL9VrpdaurvRsC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <iframe width="49%" height="315" src="https://www.youtube.com/embed/tmas1CQdCFY?si=EYpgFsyy_uCnda3m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/DfoSlZzgDY0?si=GmEFH4I5hHjuksQ1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <iframe width="49%" height="315" src="https://www.youtube.com/embed/sAGGYSRophk?si=w5YQ1KPKaCQz5ERL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/gctva4bZn0o?si=Z5wi5EtrwpM8gypP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>

            <iframe width="49%" height="315" src="https://www.youtube.com/embed/cfbS-P5gcmU?si=aNUehDaZg0aWPe26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_w"></div>
            <iframe width="49%" height="315" src="https://www.youtube.com/embed/-Buf7EoecPQ?si=kZ_vVWUtGnTXHz7H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="https://github.com/nexuni/Famcy.git">[GitHub]</a><a href="https://github.com/nexuni/FamcyVideoStream.git">[GitHub]</a><a href="https://github.com/nexuni/FamcyTools.git">[GitHub]</a><a href="https://github.com/nexuni/FamcyDocker.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#PythonLibrary #WebDevelopment</p>
              <h4>Personal Contribution</h4>
              <p>Web Design, Web Development</p>
              <h4>Skills</h4>
              <p>Python, Flask</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P22Page;
