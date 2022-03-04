import * as React from "react";
import Pdf from "./William Lin Resume.pdf";
import Textline from "./Textline";
import { BsTwitter, BsShop, BsFilePersonFill, BsGithub, BsMedium } from "react-icons/bs";

function Home(props) {
    return (
        <div className="Home">
            <div className= "id-border">
			<div className="content">
				<h1>Hello, My Name is</h1><h1>William Lin</h1>
				<p>I'm a</p> <Textline /><BsShop />
				<a href={'https:/www.medium.com/gloompowder'} target="_blank" rel="noreferrer"> <BsMedium/></a>
				<a href={'https:/www.twitter.com/gloompowder'} target="_blank" rel="noreferrer"> <BsTwitter/></a>
				<a href={'https:/www.github.com/gloompowder'} target="_blank" rel="noreferrer"> <BsGithub/></a>
				<a href={Pdf} target="_blank" rel="noreferrer">Resume <BsFilePersonFill/></a>
				<a href="https://www.linkedin.com/in/williamlincodeanddesign/" target="blank" rel="noreferrer">LinkedIn</a>
			</div>
			</div>
            </div>
    );
  }
  
  export default Home;