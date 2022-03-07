import * as React from "react";

function Modal(props) {
    const modal = props.modal;
    return (
    <div id="myModal" className="modal" >
    <div className="modal-content">
    <span className="close" onClick={()=>props.spanToggle}>&times;</span>
    <p>Some text in the Modal..</p>
    </div>
</div>
    );
  }
  
  export default Modal;