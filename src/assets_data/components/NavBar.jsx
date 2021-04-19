import React from "react";
import Logo from "./Child_Logo";
import Nav from "./Child_Nav";
import "./Child_Logo";
import "./Child_Nav";

function NavBar() {
  console.log("NavBar loaded")
  
    return (
      <nav className="nav__container">
        <div className="nav">
            <Logo />
            <Nav />
        </div>
      </nav>
    );
    }





export default NavBar;