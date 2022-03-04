import * as React from "react";
import profilepic from "./images/profilepic.png";


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
                You may check out my <a href="https://www.github.com/Gloompowder" target="_blank" rel="noreferrer">Github</a>
            </p>
        </div>
    );
  }
  
  export default AboutMe;