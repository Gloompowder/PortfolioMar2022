import * as React from "react";
import { Link } from "react-router-dom";
import { BiCode, BiPalette, BiBrain, BiMenu, BiPhone } from "react-icons/bi";



function Nav(props) {

    const isMobile = () => {
        return props.width >= 760 ?         <nav className = "Nav">
        <Link className= "nav-home" to="/">William Lin</Link>
        <ul className = "nav-quad">
            <ul className = "nav-trio">
            <Link to="/about-me"> <BiBrain /> About Me</Link>
            <Link to="/coding"> <BiCode /> Coding</Link>
            <Link to="/design"> <BiPalette /> Design</Link>
            </ul>
            <Link className ="contact-link" to="/contact"> <BiPhone height= "1rem" width = "auto"/>Contact</Link>
        </ul>
    </nav>:         
    <nav className = "mobileNav">
        <Link className= "mobile-nav-home" to="/">William Lin</Link>
        <ul>
            <a>
                <BiMenu />Menu
            </a>
        </ul>
    </nav>
    }
    return (
        isMobile()
    );

}

export default Nav;


