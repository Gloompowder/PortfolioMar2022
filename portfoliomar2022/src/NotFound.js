import * as React from "react";
import { useParams } from "react-router-dom";

function NotFound() {
    let params = useParams();
    const randomizeQuote = () => {
        let x = Math.floor(Math.random()*4)+1
        return x === 3 ?<h1>It's not us, it's you.</h1>: x === 2 ? <h1>Maybe you should google that.</h1>: x === 1 ? <h1>I think you're lost.</h1> : null;
    }
    return (
        <div className="NotFound">
            <h1>What's {Object.values(params)}?</h1>
            <div className="notfounddiv">
                {randomizeQuote()}
            </div>
        </div>
    );
  }
  
  export default NotFound;