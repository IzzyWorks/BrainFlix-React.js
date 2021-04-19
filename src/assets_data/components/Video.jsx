import React from "react";

function Video(props) {
  return <video className="video-player" controls poster={props.posterImage}></video>;
}


export default Video;