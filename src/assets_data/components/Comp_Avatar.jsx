import React from "react";
import AvatarPic from "../images/Mohan-muruge.jpg";

function Avatar() {
    console.log("Avatar loaded")

    return (
        <img className="avatar" src={AvatarPic} alt="avatar photo"/>
    );
    }



export default Avatar;