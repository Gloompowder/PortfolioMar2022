import * as React from "react";

function ScreenMark(props){
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        {return scrolled > .2 ? <div>
            Scroll up!
        </div> :
        <div>
            Scroll
            </div>}
      }
    return(
        <div className= "autoscroll">
            {myFunction()}
        </div>
    )
}

export default ScreenMark;