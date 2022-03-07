import * as React from "react";
import SecondNav from "./SecondNav";
import BrainGain from "./images/BrainGain.png";
import PlanetHack from "./images/PlanetHack.png";
import GuessWho from "./images/GuessWho.png";
import CodingCard from "./CodingCard";

function Coding(props) {
    const codingProjects=[
        {"hack-the-planet": {
            description:"An inter planatery mission to reach for the stars as humanity's last hope to sustain itself. This project was completed within 48hrs as apart of MLH's Space Theme. Please read the instructions carefully once in the game.",
            frontend:["Javascript", "React"],
            backend:["Ruby", "Ruby on Rails"],
            database:"SQL",
            devops:"Heroku",
            image:PlanetHack,
            demo:"https://www.youtube.com/watch?v=GCOHgwZtoK8",
            website:"https://planet-hack.herokuapp.com/"
        }},
        {"BrainGain":{
            description:"A fun, interactive way for users to study and memorize. Saving their time and resources on paper for flashcards as well as auto randomizes for easy reuse.",
            frontend:["Javascript","React"],
            backend:["Ruby","Ruby on Rails"],
            database:"PostgreSQL",
            devops:"",
            image:BrainGain,
            demo:"https://youtu.be/CP9cpjrCVSA"
        }},
        {"GuessWho":{
            description:"A multiplayer computer-based version of the popular game, Guess Who. You can even add your own characters and keep score!",
            frontend:["React", "Javascript"],
            backend:["Ruby","Ruby on Rails"],
            database:"PostgreSQL",
            devops:"",
            image:GuessWho,
            demo:"https://youtu.be/hEf_WQFApS4"
        }}
    ]

    return (
        <div className="Coding">
                  <SecondNav search="coding"/>
            You're on the Coding Page
            You may also look at my <a href="https://www.github.com/gloompowder" alt="wix link" target = "_blank" rel="noreferrer">
                Github!
            </a>
            <h5>
                Be aware, some of the projects may have depreciated. You may still watch the demo videos
            </h5>
            {codingProjects.map((project)=>{
                return(<CodingCard key = {codingProjects.indexOf(project)} id = {codingProjects.indexOf(project)} project = {project}/>) 
            })}
        </div>
    );
  }
  
  export default Coding;