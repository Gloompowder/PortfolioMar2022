import * as React from "react";

function CodingCard(props) {
    const key = Object.keys(props.project);
    const description = Object.values(props.project)[0].description
    const frontend = Object.values(props.project)[0].frontend
    const backend = Object.values(props.project)[0].backend

    console.log(backend)
    return (
        <div className={props.id}>
            <h1>
                {Object.keys(props.project)}
            </h1>
            <p>
                {description}
            </p>

        </div>
    );
  }
  
  export default CodingCard;