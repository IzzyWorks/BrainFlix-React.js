import React from "react";
import plusIcon from "../Icons/Icon-upload.svg";

export function Btn() {
    console.log("Btn loaded")

    return (
        <div className="nav__upload--block">
            <button className="nav__btn" type="submit">
                <img className="nav__btn--icon" src={plusIcon} />UPLOAD
            </button>
        </div>
    );
    }



export default Btn;