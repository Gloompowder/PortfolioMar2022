import * as React from "react";
import Pdf from "./William Lin Resume.pdf";
// import Photo from './profilepic.png'
import Textline from "./Textline";

function Home(props) {
    return (
        <div className="Home">
            You're on the Home Page
            <div className= "id-border">
            <h1>This is your Profile Picture</h1>
            <h1>Hello, My Name is William</h1>
			<p>I'm a</p> <Textline />
</div>
<a href={Pdf} target="_blank" rel="noreferrer">Resume </a>
<a href="https://www.linkedin.com/in/williamlincodeanddesign/" target="blank">LinkedIn</a>
            </div>
    );
  }
  
  export default Home;