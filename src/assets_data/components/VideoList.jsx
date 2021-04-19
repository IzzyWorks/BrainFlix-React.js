import React from "react";

function VideoList(props) {
  return (
    <div className="playlist__gallery">
    <h2 className="playlist__header">NEXT VIDEO</h2>
    <ul className="playlist__gallery-block">
      {props.videos
        .filter((video) => video.id !== props.currentVideoID)
        .map((video) => (
          <li className="playlist__img-container"
            onClick={() => {
              props.setCurrentVideo(video.id);
            }}
            key={video.id}>
            <img className="playlist__img" src={video.image} alt={video.title} />
            <div>
              <h3 className="playlist__discription">{video.title}</h3>
              <h4 className="playlist__name">{video.channel}</h4>
            </div>
          </li>
        ))}
    </ul>
    </div>
  );
}

export default VideoList;
