import React from "react";
import MusicPlayer from "./MusicPlayer";
import PlayList from "./PlayList";

const Home = () => {
  return (
    <div className="container">
      <div className="playlist">
        <PlayList />
      </div>
      <div className="player">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Home;
