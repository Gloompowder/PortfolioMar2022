import * as React from "react";
import { BsFillEnvelopeFill } from 'react-icons/bs'

function Contact(props) {
    return (
        <div className="Contact">
            Want to utilize my coding or design skills?
            Let's discuss potential collaborations and opportunities.
            <a href="mailto:willlin1996@gmail.com?subject=Let's Connect!">Email Me<BsFillEnvelopeFill/></a> 
        </div>
    );
  }
  
  export default Contact;