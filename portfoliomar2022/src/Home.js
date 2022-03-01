import * as React from "react";
import { Link } from "react-router-dom";
import Pdf from "../public/William Lin Resume.pdf";

function Home(props) {
    return (
        <div className="Home">
 <a href={require('../public/William Lin Resume.pdf')} target="_blank">Download Pdf</a>
        </div>
    );
  }
  
  export default Home;