import React, { useContext, useRef, useState } from "react";
import { AlbumContext } from "../../component/AlbumContext";

const MusicPlayer = () => {
  const contextData = useContext(AlbumContext);
  // const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="music-player-container">
      <img
        src={contextData.album[contextData.select].image}
        alt="music name"
        style={{ width: "175px" }}
      />
      <audio src={contextData.album[contextData.select].path} controls />
      <button onClick={() => contextData.handlePre()}>Pre</button>
      <button onClick={() => contextData.handleNext()}>Next</button>
   
    </div>
  );
};

export default MusicPlayer;
