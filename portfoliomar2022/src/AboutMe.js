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
import Heroku from './images/heroku-4.svg';



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
                <p>You may check out my </p><a href="https://www.github.com/Gloompowder" target="_blank" rel="noreferrer">Github</a>
                <a href="https://willlin1996.wixsite.com/portfolio" alt="wix link" target = "_blank" rel="noreferrer">
                this!
            </a>
                <div className = "svg-div">
                    <img src={Html} alt = "HTML"/>
                    <img src={Css} alt = "Css"/>
                    <img src={Javascript} alt = "Javascript"/>
                    <img src={ReactSVG} alt = "ReactSVG"/>
                    <img src={Postgresql} alt = "Postgresql"/>
                    <img src={Heroku} alt = "Heroku"/>
                    <img src={Python} alt = "Python"/>
                    <img src={Java} alt = "Java"/>
                    <img src={Ruby} alt = "Ruby"/>
                    <img src={Rails} alt = "Rails"/>
                    <img src={Adobe} alt = "Adobe"/>
                    <img src={Illustrator} alt = "Illustrator"/>
                    <img src={Photoshop} alt = "Photoshop"/>
                    <img src={Github} alt = "Github"/>
                    <img src={Animate} alt = "Animate"/>
                </div>
        </div>
    );
  }
  
  export default AboutMe;