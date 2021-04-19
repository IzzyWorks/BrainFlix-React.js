import React from "react";

export function Search() {
    console.log("Search loaded")

    return (
        <div className="nav__search--block">
            <input type="text" name="search" className="nav__search" placeholder="Search"></input>
                <svg aria-hidden="true" className="nav__search--icon" width="20" height="20" viewBox="0 0 20 20">
                    <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path>
                </svg>
        </div>
    );
    }



export default Search;