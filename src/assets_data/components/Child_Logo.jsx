import React from "react";
import logo from "../logo/Logo-brainflix.svg";

export function Logo() {
    console.log('Logo has rendered') 


    return (
        <div className="nav__logo">
        <a href="/"><img src={logo} alt="BrainFlix logo"></img></a>
    </div>
    );
    }



export default Logo;