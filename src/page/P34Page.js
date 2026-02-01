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


class P34Page extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: "2025 Fall",
      award: "Cornell TECH 5900",
      title: "Lumière",
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
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/RPLXjfXGhpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
            <div className="gap_h"></div>

            <div className="design_goal">
              <h2>" An AI-powered wardrobe assistant that reframes outfit selection as a personalized, sustainable, and low-friction daily interaction rather than a shopping-driven decision. "</h2>
            </div>

            <div className="gap_h"></div>


            <div className="more_detail">
              <h4>More Details</h4>
              <p>Learn more about the project: <a href="/weiching-chen/P34/ppt.pdf">[PPT]</a><a href="https://github.com/w20010703/Lumiere.git">[GitHub]</a></p>
              <h4>Project Type</h4>
              <p>#InteractionDesign #HumanCenteredDesign #AIProductDesign #UXResearch #ComputerVision #SustainableFashion</p>
              <h4>Personal Contribution</h4>
              <p>Led product concept development and experience design; implemented an image-based wardrobe analysis pipeline that detects and classifies clothing items from user-uploaded photos; designed logic to compare detected items with desired outfits and identify missing pieces; integrated the Rakuten API to retrieve purchasable wardrobe data and recommendations; and supported model training using curated Kaggle fashion datasets to enable accurate item recognition and categorization.</p>
              <h4>Skills</h4>
              <p>UX & Interaction Design (Figma), Computer Vision (Image Classification), AI Model Training, Dataset Curation (Kaggle), API Integration (Rakuten)</p>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
      
}

export default P34Page;
