import * as React from "react";
import profilepic from "./images/profilepic.png";
import Rails from './images/rails.svg';
import Ruby from './images/ruby.svg';
import Postgresql from './images/postgresql.svg';
import Javascript from './images/javascript-1.svg';
import Python from './images/python-5.svg';
import ReactSVG from './images/react-2.svg';
import Html from './images/html-1.svg';
import Css from './images/css-3.svg';
import Adobe from './images/adobe-creative-cloud-cc.svg';
import Github from './images/github-icon-1.svg';
import Illustrator from './images/adobe-illustrator-cc-2019.svg';
import Java from './images/java-4.svg';
import Animate from './images/adobe-animate.svg';
import Photoshop from './images/photoshop-cc-7.svg';



function AboutMe(props) {
    return (
        <div className="AboutMe">
            <h2>
                Hello, My name is William Lin
            </h2>
            <img src = {profilepic} alt= "William Lin Profile" height= "auto" width = "25%vw"/>
            <p>
            I am a FullStack Develoepr located in New York City. I am an avid learner and I focus my projects whether graphic or technologically based
            around effective, compelling design.
            a software engineer experienced in Ruby on Rails, React, and Javascript based programming with a background in Computer Information Systems.
            I am a full stack developer with experience in the following:
            </p>
                You may check out my <a href="https://www.github.com/Gloompowder" target="_blank" rel="noreferrer">Github</a>
                <a href="https://willlin1996.wixsite.com/portfolio" alt="wix link" target = "_blank" rel="noreferrer">
                this!
            </a>
            <Ruby/>
                <Rails/>
                <Illustrator/>
                <React/>
                <Css/>
                <Html />
                <Ruby />
                <Rails />
                <Python />
                <Java />
                <Animate />
                <Photoshop />
                <Javascript />
                <Postgresql />
                <ReactSVG />
                <Github />
                <Adobe />
        </div>
    );
  }
  
  export default AboutMe;