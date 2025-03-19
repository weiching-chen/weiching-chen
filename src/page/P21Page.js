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


class P21Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2024 Fall",
      award: "Cornell DESIGN 6297",
      title: "Assembler",
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

            <img src="/weiching-chen/P21/main.webp" width="49%"/>
            <div className="gap_w"></div>
            <img src="/weiching-chen/P21/main.webp" width="49%"/>
            <div className="gap_h"></div>

            <iframe width="100%" height="315" src="https://www.youtube.com/embed/OtOLgdqRj5g?si=uUyVakL3X68SaZ_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/gMnX3ff4Txw?si=zfQMeUt8pd7nFu_P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/_EM4eQpG3xk?si=anv1xfbQbsI9QGN-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Wao4Fn-bRFI?si=BAuXbHx_jzLtOEqF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Bt2euWjCEk8?si=NvyiXzUPCgMMeWut" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/0tftipJ75g8?si=mo0FWY0k0zN_0-sE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/GN-UAFukOeE?si=PWFLbpb-QS50ug2-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/AiY9uwwEaX8?si=dONFSASRBSG823Sq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/PoWWNqLmgs4?si=FmqgheHH5FHE56nB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/nQGSlt94QJE?si=1NeB5qlBTa5Mxw_y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/7fl2DUQ_7ps?si=uPbQRW7il708jM_P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/0GffrRY8jDg?si=lDkjwIo1da8Ai1UQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P21/main.pdf">[PPT]</a><a href="https://github.com/w20010703/Assembler.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#GrasshopperPlugin #Food4Rhino</p>
              <h4>Personal Contribution</h4>
              <p>Plugin Development</p>
              <h4>Skills</h4>
              <p>Python, Grasshopper, C#</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P21Page;
