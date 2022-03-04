import * as React from "react";
import SecondNav from "./SecondNav";
function Coding(props) {
    const codingProjects={
        "hack-the-planet": {
            description:"An inter planatery mission to reach for the stars as humanity's last hope to sustain itself. This project was completed within 48hrs as apart of MLH's Space Theme. Please read the instructions carefully once in the game.",
            frontend:["Javascript", "React"],
            backend:["Ruby", "Ruby on Rails"],
            database:"SQL",
            devops:"Heroku",
            image:"",
            demo:"https://www.youtube.com/watch?v=GCOHgwZtoK8",
            website:"https://planet-hack.herokuapp.com/"
        },
        "BrainGain":{
            description:"A fun, interactive way for users to study and memorize. Saving their time and resources on paper for flashcards as well as auto randomizes for easy reuse.",
            frontend:["Javascript","React"],
            backend:["Ruby","Ruby on Rails"],
            database:"PostgreSQL",
            devops:"",
            image:"",
            demo:"https://youtu.be/CP9cpjrCVSA"
        },
        "GuessWho":{
            description:"",
            frontend:"",
            backend:"",
            database:"",
            devops:"",
            image:"",
            demo:""
        }
    }
    return (
        <div className="Coding">
                  <SecondNav search="coding"/>
            You're on the Coding Page
            You may also look at my <a href="https://www.github.com/gloompowder" alt="wix link" target = "_blank" rel="noreferrer">
                Github!

                Be aware, some of the projects may have depreciated functions. You may still watch the demo videos!
            </a>
        </div>
    );
  }
  
  export default Coding;