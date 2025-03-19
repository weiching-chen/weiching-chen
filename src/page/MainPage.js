import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link, Navigate } from 'react-router-dom';

import WorkCard from '../component/WorkCard'
// import Footer from '../components/Footer'
// import SlideShow from '../components/SlideShow'
// import PicWordWithBtn from '../components/PicWordWithBtn'

// import '../css/main_page.css';
// import { getDataFromServer, dict2urlEncode } from '../http_utils.js'
// import { setCookie, getCookie } from '../cookie_utils.js'


class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      introduction: ["Hello 👋", "I'm Julia", "Designer, Software Engineer and Entrepreneur"],
      p1: [
      {
        "id":"1",
        "title":"Resilient Tensegrity Robot: Inspired by Spider Webs and Melons",
        "description":"Cornell 24 Fall",
        "imageSrc":"/images/p1_pic.jpg",
        "url":"/P1Page"
      },{
        "id":"2",
        "title":"Timber Tensegrity Chair",
        "description":"Cornell 24 Fall",
        "imageSrc":"/images/p2_pic.JPG",
        "url":"/P2Page"
      }],
      p2: [
      {
        "id":"3",
        "title":"PCube",
        "description":"nexuni - DoDay",
        "imageSrc":"/images/p3_pic.webp",
        "url":"/P3Page"
      },{
        "id":"15",
        "title":"ThinkBit",
        "description":"Cornell AI Hackathon",
        "imageSrc":"/images/p15_pic.jpeg",
        "url":"/P15Page"
      },{
        "id":"8",
        "title":"MIXI",
        "description":"Cornell 24 Fall",
        "imageSrc":"/images/p8_pic.jpg",
        "url":"/P8Page"
      },{
        "id":"5",
        "title":"CrowdEye",
        "description":"LINE FRESH Hackathon (2020) - Sliver Award",
        "imageSrc":"/images/p5_pic.webp",
        "url":"/P5Page"
      },{
        "id":"9",
        "title":"Curling Game",
        "description":"Cornell 24 Fall",
        "imageSrc":"/images/p9_pic.JPG",
        "url":"/P9Page"
      },{
        "id":"24",
        "title":"Pokemon Battle Haptics",
        "description":"Cornell 25 Spring",
        "imageSrc":"/images/p24_pic.jpg",
        "url":"/P24Page"
      },{
        "id":"16",
        "title":"Time Blossom",
        "description":"Cornell 25 Spring",
        "imageSrc":"/images/p16_pic.png",
        "url":"/P16Page"
      },{
        "id":"6",
        "title":"WaterLover",
        "description":"Independent Project",
        "imageSrc":"/images/p6_pic.webp",
        "url":"/P6Page"
      }],
      p3: [
      {
        "id":"10",
        "title":"Revitalizing Urban Life: A Mixed-Use Design Integrating Residential Zones with Piers Park",
        "description":"Harvard GSDD 2023",
        "imageSrc":"/images/p10_pic.png",
        "url":"/P10Page"
      },{
        "id":"14",
        "title":"DoDay Store Design",
        "description":"nexuni - DoDay",
        "imageSrc":"/images/p14_pic.jpg",
        "url":"/P14Page"
      },{
        "id":"7",
        "title":"CarDay",
        "description":"nexuni - CarDay",
        "imageSrc":"/images/p7_pic.webp",
        "url":"/P7Page"
      }],
      p4: [
      {
        "id":"4",
        "title":"SIPAI Website",
        "description":"MX Design",
        "imageSrc":"/images/p4_pic.webp",
        "url":"/P4Page"
      },{
        "id":"17",
        "title":"DoDay Website",
        "description":"nexuni - DoDay",
        "imageSrc":"/images/p19_pic.png",
        "url":"/P17Page"
      },{
        "id":"18",
        "title":"CarDay Website",
        "description":"nexuni - CarDay",
        "imageSrc":"/images/p18_pic.png",
        "url":"/P18Page"
      },{
        "id":"19",
        "title":"nexuni Website",
        "description":"nexuni",
        "imageSrc":"/images/p17_pic.png",
        "url":"/P19Page"
      },{
        "id":"20",
        "title":"Doday Online Order Website",
        "description":"nexuni - DoDay",
        "imageSrc":"/images/p20_pic.png",
        "url":"/P20Page"
      },{
        "id":"13",
        "title":"Gong-pig",
        "description":"NTU 2019 Fall",
        "imageSrc":"/images/p13_pic.png",
        "url":"/P13Page"
      }],
      p5: [
      {
        "id":"11",
        "title":"Smart Necklace",
        "description":"Google Science Fair 2019 Finalist (Top 20)",
        "imageSrc":"/images/p11_pic.jpg",
        "url":"/P11Page"
      },{
        "id":"12",
        "title":"A Wearable Mild Traumatic Injury Warning Device of Daily Activities",
        "description":"Taiwan International Science Fair (2018) - Sliver Award, Canada Worldwide Science Fair (2018) - Gold Award",
        "imageSrc":"/images/p12_pic.gif",
        "url":"/P12Page"
      }],
      p6: [
      {
        "id":"21",
        "title":"Assembler",
        "description":"Cornell 24 Fall",
        "imageSrc":"/images/p21_pic.webp",
        "url":"/P21Page"
      },{
        "id":"22",
        "title":"Famcy",
        "description":"nexuni",
        "imageSrc":"/images/p22_pic.webp",
        "url":"/P22Page"
      },{
        "id":"23",
        "title":"Nexuni React Web Tool",
        "description":"nexuni",
        "imageSrc":"/images/p23_pic.webp",
        "url":"/P23Page"
      }]
      // p5: [
      // {
      //   "id":"1",
      //   "title":"Resilient Tensegrity Robot: Inspired by Spider Webs and Melons",
      //   "description":"Robotics & Structure Design",
      //   "imageSrc":"/images/p1_pic.jpg",
      //   "url":"/P1Page"
      // },{
      //   "id":"2",
      //   "title":"Timber Tensegrity Chair",
      //   "description":"Robotics Fabrication & Design",
      //   "imageSrc":"/images/p2_pic.JPG",
      //   "url":"/P2Page"
      // },{
      //   "id":"3",
      //   "title":"PCube",
      //   "description":"Product Design",
      //   "imageSrc":"/images/p3_pic.webp",
      //   "url":"/P3Page"
      // },{
      //   "id":"15",
      //   "title":"ThinkBit",
      //   "description":"LLO & Product Design",
      //   "imageSrc":"/images/p15_pic.jpeg",
      //   "url":"/P15Page"
      // },{
      //   "id":"8",
      //   "title":"MIXI",
      //   "description":"LLO & Product Design",
      //   "imageSrc":"/images/p8_pic.jpg",
      //   "url":"/P8Page"
      // },{
      //   "id":"9",
      //   "title":"Curling Game",
      //   "description":"1D Game Design",
      //   "imageSrc":"/images/p9_pic.JPG",
      //   "url":"/P9Page"
      // },{
      //   "id":"4",
      //   "title":"SIPAI Website",
      //   "description":"Web Design & Development",
      //   "imageSrc":"/images/p4_pic.webp",
      //   "url":"/P4Page"
      // },{
      //   "id":"5",
      //   "title":"CrowdEye",
      //   "description":"Product Design & Machine Learning",
      //   "imageSrc":"/images/p5_pic.webp",
      //   "url":"/P5Page"
      // },{
      //   "id":"16",
      //   "title":"Time Blossom",
      //   "description":"Wood Work & Interaction",
      //   "imageSrc":"/images/p16_pic.png",
      //   "url":"/P16Page"
      // },{
      //   "id":"6",
      //   "title":"WaterLover",
      //   "description":"Product Design & Development",
      //   "imageSrc":"/images/p6_pic.webp",
      //   "url":"/P6Page"
      // },{
      //   "id":"7",
      //   "title":"CarDay",
      //   "description":"Product Design & Planning",
      //   "imageSrc":"/images/p7_pic.webp",
      //   "url":"/P7Page"
      // },{
      //   "id":"10",
      //   "title":"Revitalizing Urban Life: A Mixed-Use Design Integrating Residential Zones with Piers Park",
      //   "description":"Urban Planning & Design",
      //   "imageSrc":"/images/p10_pic.png",
      //   "url":"/P10Page"
      // },{
      //   "id":"11",
      //   "title":"Smart Necklace",
      //   "description":"ML & MCU",
      //   "imageSrc":"/images/p11_pic.jpg",
      //   "url":"/P11Page"
      // },{
      //   "id":"12",
      //   "title":"A Wearable Mild Traumatic Injury Warning Device of Daily Activities",
      //   "description":"ML & MCU",
      //   "imageSrc":"/images/p12_pic.gif",
      //   "url":"/P12Page"
      // },{
      //   "id":"13",
      //   "title":"Gong-pig",
      //   "description":"Game & Web Development",
      //   "imageSrc":"/images/p13_pic.png",
      //   "url":"/P13Page"
      // },{
      //   "id":"14",
      //   "title":"DoDay Store Design",
      //   "description":"Brand & Interior Design",
      //   "imageSrc":"/images/p14_pic.jpg",
      //   "url":"/P14Page"
      // },{
      //   "id":"17",
      //   "title":"DoDay Website",
      //   "description":"Web Design & Development",
      //   "imageSrc":"/images/p19_pic.png",
      //   "url":"/P17Page"
      // },{
      //   "id":"18",
      //   "title":"CarDay Website",
      //   "description":"Web Design & Development",
      //   "imageSrc":"/images/p18_pic.png",
      //   "url":"/P18Page"
      // },{
      //   "id":"19",
      //   "title":"nexuni Website",
      //   "description":"Web Design & Development",
      //   "imageSrc":"/images/p17_pic.png",
      //   "url":"/P19Page"
      // },{
      //   "id":"20",
      //   "title":"Doday Online Order Website",
      //   "description":"Web Design & Development",
      //   "imageSrc":"/images/p20_pic.png",
      //   "url":"/P20Page"
      // },{
      //   "id":"21",
      //   "title":"Assembler",
      //   "description":"Grasshopper Plugin Development",
      //   "imageSrc":"/images/p21_pic.webp",
      //   "url":"/P21Page"
      // },{
      //   "id":"22",
      //   "title":"Famcy",
      //   "description":"Python Library Development",
      //   "imageSrc":"/images/p22_pic.webp",
      //   "url":"/P22Page"
      // },{
      //   "id":"23",
      //   "title":"Nexuni React Web Tool",
      //   "description":"React Library Development",
      //   "imageSrc":"/images/p23_pic.webp",
      //   "url":"/P23Page"
      // }],

    }



    // this.general_switch_page = this.general_switch_page.bind(this)

  }


  render() { 
    return (
      <>
        <div className="title_section">
          {this.state.introduction.map((title, index) => <h2 key={index} className="main_title">{title}</h2>)}
        </div>
        
        <div className="work_section" id="project">
          <h2 className="work_title">Robotics & Structural Design.</h2>
          <div className="work_card_section">
            {this.state.p1.map((item, index) => <WorkCard _id={item.id} key={index} onClick={() => {return this.general_switch_page(item.url, "")}} title={item.title} description={item.description} imageSrc={item.imageSrc} url={item.url} />)}
          </div>
        </div>

        <div className="work_section" id="project">
          <h2 className="work_title">Product Design & Development.</h2>
          <div className="work_card_section">
            {this.state.p2.map((item, index) => <WorkCard _id={item.id} key={index} onClick={() => {return this.general_switch_page(item.url, "")}} title={item.title} description={item.description} imageSrc={item.imageSrc} url={item.url} />)}
          </div>
        </div>

        <div className="work_section" id="project">
          <h2 className="work_title">Web Design & Development.</h2>
          <div className="work_card_section">
            {this.state.p4.map((item, index) => <WorkCard _id={item.id} key={index} onClick={() => {return this.general_switch_page(item.url, "")}} title={item.title} description={item.description} imageSrc={item.imageSrc} url={item.url} />)}
          </div>
        </div>

        <div className="work_section" id="project">
          <h2 className="work_title">Science Fair Award Project.</h2>
          <div className="work_card_section">
            {this.state.p5.map((item, index) => <WorkCard _id={item.id} key={index} onClick={() => {return this.general_switch_page(item.url, "")}} title={item.title} description={item.description} imageSrc={item.imageSrc} url={item.url} />)}
          </div>
        </div>

        <div className="work_section" id="project">
          <h2 className="work_title">Urban & Interior Design.</h2>
          <div className="work_card_section">
            {this.state.p3.map((item, index) => <WorkCard _id={item.id} key={index} onClick={() => {return this.general_switch_page(item.url, "")}} title={item.title} description={item.description} imageSrc={item.imageSrc} url={item.url} />)}
          </div>
        </div>

        <div className="work_section" id="project">
          <h2 className="work_title">Software & Development Tools.</h2>
          <div className="work_card_section">
            {this.state.p6.map((item, index) => <WorkCard _id={item.id} key={index} onClick={() => {return this.general_switch_page(item.url, "")}} title={item.title} description={item.description} imageSrc={item.imageSrc} url={item.url} />)}
          </div>
        </div>

        {/*<div className="about_section">
          <h2 className="about_title">About.</h2>

          <div className="about_section_content" id="about">
            <div style={{display: "flex", gap: "2%"}} ><img src="/images/julia.jpg" width="20%" /><img src="/images/nexuni.jpg" width="20%" /><img src="/images/cornell.png" width="20%" /></div>

            <p>Hello, I’m Weiching Chen! I am currently pursuing an M.S. in Design Technology at Cornell University, advised by Daniel Leithinger at the AAP Department. My academic background includes a B.S. in Electrical Engineering from National Taiwan University, where my capstone projects and research were centered around AIoT, web connectivity, and robotics.
              <br /><br />
              I am passionate about hands-on work that allows me to bring my innovative ideas to life, tackling real-world challenges. During my undergraduate studies, I co-founded <a href="https://www.nexuni.com" style={{fontWeight: "600"}}>Nexuni Co. Ltd.</a>, with the vision to develop affordable and intelligent automation solutions that enhance business management and improve the quality of life in urban environments.
              <br /><br />
              My time at Cornell has been instrumental in building a solid theoretical foundation in design technology integrated with practical applications in AI and systems. Starting Nexuni gave me invaluable experience in rapid prototyping and leveraging these developments in the automation of food, parking, and semiconductor industries. My current research involves developing smart systems like an interactive coffee machine that not only optimizes user experience but also provides actionable insights through data.
              <br /><br />
              I am committed to using my knowledge and skills to continue impacting the world positively. You can reach me at <a href="mailto:wc683@cornell.edu" style={{fontWeight: "600"}}>wc683@cornell.edu</a> or via <a href="https://www.nexuni.com" style={{fontWeight: "600"}}>LinkedIn</a>.</p>
          </div>
        </div>*/}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <p className="copyright">©2025 - Weiching (Julia) Chen. All rights reserved.</p>
      </>
    )
  }
      
}

export default MainPage;
