import * as React from "react";
import { Link } from "react-router-dom";
import Pdf from "./William Lin Resume.pdf";


function Home(props) {
    return (
        <div className="Home">
            You're on the Home Page
 <a href={Pdf} target="_blank" rel="noreferrer">Resume </a>
 <a href="https://www.linkedin.com/in/williamlincodeanddesign/" target="blank">LinkedIn</a>
        </div>
    );
  }
  
  export default Home;