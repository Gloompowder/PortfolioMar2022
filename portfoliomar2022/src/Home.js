import * as React from "react";
import Pdf from "./William Lin Resume.pdf";
import profilepic from "./images/profilepic.png";
import Textline from "./Textline";

function Home(props) {
    return (
        <div className="Home">
			Welcome to my Portfolio
            <div className= "id-border">
            <img src = {profilepic} alt= "William Lin Profile Picture" height= "auto" width = "35%vw"/>
            <h1>Hello, My Name is William</h1>
			<p>I'm a</p> <Textline />
</div>
<a href={Pdf} target="_blank" rel="noreferrer">Resume </a>
<a href="https://www.linkedin.com/in/williamlincodeanddesign/" target="blank">LinkedIn</a>
            </div>
    );
  }
  
  export default Home;