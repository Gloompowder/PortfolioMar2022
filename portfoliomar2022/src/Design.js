import * as React from "react";
import SecondNav from "./SecondNav";
import doodle from "./images/potfolio-doodle.png"

function Design(props) {
    return (
        <div className="Design">
                  <SecondNav search="design"/>
            Design Page Under Construction <a href="https://willlin1996.wixsite.com/portfolio" alt="wix link" target = "_blank" fontSize= '4rem' rel="noreferrer">
                Design Portfolio
            </a>
            <img className='doodle' src = {doodle} alt= "desk"/>

        </div>
    );
  }
  
  export default Design;