import * as React from "react";

function CodingCard(props) {
    const projectname= Object.keys(props.project);
    const value = Object.values(props.project)[0]
    const description = value.description
    const frontend = value.frontend
    const backend = value.backend
    const database = value.database
    const devops = value.devops
    const image = value.image

    return (
        <div className="projectdiv">
            <h1 className = "project">
                {projectname}
            </h1>
            <img src={image} alt= {projectname} className = "projectimage"/>
            <p className = "description">
                {description}
            </p>
            <h4>
                frontend
            </h4>
            {frontend.map((stack)=>{
                return(<div>{stack}</div>)
            })}
            <h4>
                backend
            </h4>
                        {backend.map((stack)=>{
                return(<div>{stack}</div>)
            })}
            <h4>
                database
            </h4>
            <p className = "database">
                {database}
            </p>
            {devops?
            <span>
                 <h4>
                devops
            </h4>
            <p className = "devops">
                {devops}
            </p>
            </span>:null}
        </div>
    );
  }
  
  export default CodingCard;