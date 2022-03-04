import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from "./Nav";
import NotFound from "./NotFound";
import Coding from "./Coding.js";
import Design from "./Design.js";
import AboutMe from "./AboutMe.js";
import Contact from "./Contact";
import Home from "./Home";


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [screen, setScreen] = useState('home');
  const [light, setLight] = useState('light');

  const codingRender = () =>{    
    setScreen('coding')
  }

  const homeRender = () =>{
    setScreen('home')
  }

  const designRender =() => {
    setScreen('design')
  }

  const contactRender = () => {
    setScreen('contact')
  }

  const notFoundRender = () => {
    setScreen('notfound')
  }

  const aboutmeRender = () => {
    setScreen('aboutme')
  }
  const renders = {codingRender, homeRender, designRender, contactRender, notFoundRender, aboutmeRender}
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
      <Nav height = {height} width = {width} renders = {renders} screen = {screen}/>
      <Routes>
        <Route path = "/" element = {<Home  height = {height} width = {width}/>}/>
        <Route path="/coding" element={<Coding />} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
