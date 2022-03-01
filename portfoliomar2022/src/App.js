import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from "./Nav";
import SecondNav from './SecondNav';
import FourohFour from "./NotFound";
import Coding from "./Coding.js";
import Design from "./Design.js";
import AboutMe from "./AboutMe.js";
import Contact from "./Contact";
import Home from "./Home";


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight;
      const newWidth = window.innerWidth;
      setHeight(newHeight);
      setWidth(newWidth);
      console.log("updating height and width"); 
    };
    const addingWindowLogger =() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions) 
    };
    addingWindowLogger();
  },[])
  return (
<div className = "App">
      <Nav height = {height} width = {width}/>
      <SecondNav height = {height} width = {width}/>
      <Routes>
        <Route path = "/" element = {<Home  height = {height} width = {width}/>}/>

      </Routes>
    </div>
  );
}

export default App;
