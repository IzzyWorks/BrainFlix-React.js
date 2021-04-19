import React from "react";
import Search from "./Comp_Search";
import Btn from "./Comp_Btn";
import Avatar from "./Comp_Avatar";
import "./Comp_Search";
import "./Comp_Btn";
import "./Comp_Avatar";

export function Nav() {
    console.log('Nav has rendered') 


    return (
        <div className="nav__functions">
         <div className="nav__search--block">
             <Search />
        </div>
        <div className="nav__upload--block">
         <Btn  />
         <Avatar />
         </div>
         </div>
    )
}
        


export default Nav;