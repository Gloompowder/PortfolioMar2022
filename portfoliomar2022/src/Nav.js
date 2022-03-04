import * as React from "react";
import { Link } from "react-router-dom";
import { BiCode, BiPalette, BiBrain, BiMenu, BiPhone } from "react-icons/bi";



function Nav(props) {
    console.log(props)
    const isMobile = () => {
        return props.width >= 760 ?         <nav className = "Nav">
        <Link className= "nav-home" to="/"onClick={props.renders.homeRender()}>William Lin</Link>
        <ul className = "nav-quad">
            <ul className = "nav-trio">
            <Link className = "about-me" to="/about-me" onClick={props.renders.aboutmeRender()}> <BiBrain /> About Me</Link>
            <Link className = "coding" to="/coding" onClick={props.renders.codingRender()}> <BiCode /> Coding</Link>
            <Link className = "design" to="/design" onClick ={props.renders.designRender()}> <BiPalette /> Design</Link>
            </ul>
            <Link className ="contact" to="/contact" onClick ={props.renders.contactRender()}> <BiPhone />Contact</Link>
        </ul>
    </nav>:         
    <nav className = "mobileNav">
        <Link className= "mobile-nav-home" to="/">William Lin</Link>
        <ul className= "mobile-nav-solo">
            <button className="mobile-nav-menu" >
                <BiMenu />Menu
            </button>
        </ul>
    </nav>
    }
    return (
        isMobile()
    );

}

export default Nav;


