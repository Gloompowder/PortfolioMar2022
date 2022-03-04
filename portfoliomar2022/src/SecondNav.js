import * as React from "react";

function SecondNav(props) {
    return (
        <div className="SecondNav">
            This is the second nav! It can function as a search bar.
            <div className = "searchbar">
            <form >
        <label htmlFor="header-search">
            <span className="visually-hidden">Search {props.search} projects</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder={props.search + " projects"}
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
            </div>
        </div>
    );
  }
  
  export default SecondNav;