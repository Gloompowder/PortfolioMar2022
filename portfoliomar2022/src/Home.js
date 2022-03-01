import * as React from "react";
import { Link } from "react-router-dom";
import Pdf from "./William Lin Resume.pdf";

function Home(props) {
    return (
        <div className="Home">
 <a href={Pdf} target="_blank" rel="noreferrer">Download Pdf</a>
        </div>
    );
  }
  
  export default Home;