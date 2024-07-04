import React, { useContext, useRef, useState, useEffect } from "react";
import { AlbumContext } from "../../component/AlbumContext";
const MusicPlayer = () => {
  const contextData = useContext(AlbumContext);
  const audioRef = useRef<HTMLAudioElement>(null);

  console.log(audioRef);

  return (
    <div className="music-player-container">
      <div className="playerimg">
        <img
          src={contextData.album[contextData.select].image}
          alt="music name"
          style={{ width: "175px" }}
        />
      </div>
      <div>
        <audio
          ref={audioRef}
          src={contextData.album[contextData.select].path}
        />
      </div>
      <button onClick={() => contextData.playPause(audioRef)}>Play</button>
      <button onClick={() => contextData.handlePre()}>Pre</button>
      <button onClick={() => contextData.handleNext()}>Next</button>
      {/* <input type="range" min={0} max={MAX} /> */}
    </div>
  );
};

export default MusicPlayer;
