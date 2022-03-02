import * as React from "react";
import { useParams } from "react-router-dom";

function NotFound() {
    let params = useParams();
    return (
        <div className="NotFound">
            Sorry, We couldnt find: {Object.values(params)}
        </div>
    );
  }
  
  export default NotFound;