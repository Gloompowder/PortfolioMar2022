import * as React from "react";
import { Link } from "react-router-dom";
import { BiCode, BiPalette, BiBrain, BiMenu, BiPhone } from "react-icons/bi";

function Modal(props) {
    const modal = props.modal;
    return (
    <div id="myModal" className="modal" >
    <div className="modal-content">
    <span className="close" onClick={()=>props.spanToggle}>&times;</span>
    <Link className= "modal-home" to="/">William Lin</Link>
        <ul className = "modal-quad">
            <ul className = "modal-trio">
            <Link className = "modal-about-me" to="/about-me" > <BiBrain /> About Me</Link>
            <Link className = "modal-coding" to="/coding" > <BiCode /> Coding</Link>
            <Link className = "modal-design" to="/design" > <BiPalette /> Design</Link>
            </ul>
            <Link className ="modal-contact" to="/contact" > <BiPhone />Contact</Link>
        </ul>
    </div>
</div>
    );
  }
  
  export default Modal;