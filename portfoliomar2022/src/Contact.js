import * as React from "react";
import { BsFillEnvelopeFill, BsFillBriefcaseFill, BsFilePersonFill } from 'react-icons/bs'
import Pdf from "./William Lin Resume.pdf";



function Contact(props) {
    return (
        <div className="Contact">
            Want to utilize my coding or design skills?
            Let's discuss potential collaborations and opportunities.
            <a href={Pdf} target="_blank" rel="noreferrer">Resume <BsFilePersonFill/></a>
            <a href="https://www.linkedin.com/in/williamlincodeanddesign/" target="blank" rel="noreferrer">LinkedIn<BsFillBriefcaseFill/></a>
            <a href="mailto:willlin1996@gmail.com?subject=Let's Connect!">Contact<BsFillEnvelopeFill/></a> 
        </div>
    );
  }
  
  export default Contact;