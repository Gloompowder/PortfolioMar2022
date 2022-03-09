import * as React from "react";
import { Link } from "react-router-dom";
import { BiCode, BiPalette, BiBrain, BiPhone } from "react-icons/bi";

function Modal(props) {
    const modalShow = props.modalShow;
    return (
    <div id="myModal" className="modal">
    <div className="modal-content">
    <span className="close" onClick={props.modalToggle}>&times;</span>
    <Link className= "modal-home" to="/" onClick={props.modalToggle}>William Lin</Link>
        <ul className = "modal-quad">
            <ul className = "modal-trio">
            <Link className = "modal-about-me" to="/about-me" onClick={props.modalToggle}> <BiBrain /> About Me</Link>
            <Link className = "modal-coding" to="/coding" onClick={props.modalToggle}> <BiCode /> Coding</Link>
            <Link className = "modal-design" to="/design" onClick={props.modalToggle}> <BiPalette /> Design</Link>
            </ul>
            <Link className ="modal-contact" to="/contact" onClick={props.modalToggle}> <BiPhone />Contact</Link>
        </ul>
    </div>
</div>
    );
  }
  
  export default Modal;