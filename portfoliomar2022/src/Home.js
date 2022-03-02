import * as React from "react";
import Pdf from "./William Lin Resume.pdf";
// import Photo from './profilepic.png'



function Home(props) {
    return (
        <div className="Home">
            You're on the Home Page
            {/* <Photo /> */}
 <a href={Pdf} target="_blank" rel="noreferrer">Resume </a>
 <a href="https://www.linkedin.com/in/williamlincodeanddesign/" target="blank">LinkedIn</a>
        </div>
    );
  }
  
  export default Home;