import * as React from "react";
import { Link } from "react-router-dom";

function Nav(props) {

  return (
    <nav className = "Nav">
        <Link to="/">William</Link>
        <ul>
            <ul>
            <Link to="/about-me">About Me</Link>
            <Link to="/coding">Coding</Link>
            <Link to="/design">Design</Link>
            </ul>
            <Link to="/contact">Contact</Link>
        </ul>
    </nav>
  );
}

export default Nav;
