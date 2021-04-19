import React from "react";
import "./css/app.css";
import NavBar from "./assets_data/components/NavBar";
import Video from "./assets_data/components/Video";
import VideoDetails from "./assets_data/components/VideoDetails";
import VideoList from "./assets_data/components/VideoList";
import "./assets_data/components/NavBar";
import "./assets_data/components/Video";
import "./assets_data/components/VideoDetails";
import "./assets_data/components/VideoList";

import videoDetailsData from "./assets_data/json/video-details.json";
import videosData from "./assets_data/json/videos.json";

class App extends React.Component {
  state = {
    currentVideoID: "1af0jruup5gu",
    currentVideoIndex: 0,
    videos: videosData,
    videoDetails: videoDetailsData,
  };
  setCurrentVideo = (id) => {
    const foundIndex = this.state.videos.findIndex((video) => video.id === id);
    this.setState({
      currentVideoID: id,
      currentVideoIndex: foundIndex,
    });
  };
  render() {
    return (
      <main>
        <NavBar />
        <div className="video-player__container">
          <Video
            posterImage={
              this.state.videoDetails[this.state.currentVideoIndex].image
            }
          />
        </div>
        <section className="flex-columns">
          <div className="flex-columns__left">
            <VideoDetails
              videoData={this.state.videoDetails[this.state.currentVideoIndex]}
            />
          </div>
          <div className="flex-columns__right">
            <VideoList
              videos={this.state.videos}
              currentVideoID={this.state.currentVideoID}
              setCurrentVideo={this.setCurrentVideo}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
