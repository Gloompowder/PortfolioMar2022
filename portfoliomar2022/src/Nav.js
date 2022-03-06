import * as React from "react";
import { Link } from "react-router-dom";
import { BiCode, BiPalette, BiBrain, BiMenu, BiPhone } from "react-icons/bi";



function Nav(props) {
    const isMobile = () => {
        return props.width >= 760 ?         <nav className = "Nav">
        <Link className= "nav-home" to="/">William Lin</Link>
        <ul className = "nav-quad">
            <ul className = "nav-trio">
            <Link className = "about-me" to="/about-me" > <BiBrain /> About Me</Link>
            <Link className = "coding" to="/coding" > <BiCode /> Coding</Link>
            <Link className = "design" to="/design" > <BiPalette /> Design</Link>
            </ul>
            <Link className ="contact" to="/contact" > <BiPhone />Contact</Link>
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


