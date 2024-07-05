import React, { useContext, useRef, useState, useEffect } from "react";
import { AlbumContext } from "../../component/AlbumContext";
import Slider from "@mui/material/Slider";
const MusicPlayer = () => {
  const contextData = useContext(AlbumContext);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [sec, setSec] = useState(0);
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
        <h1>{contextData.album[contextData.select].songName}</h1>
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
      <input
        type="range"
        min={0}
        max={contextData.progressBar}
        onChange={() => {
          contextData.progressBar(audioRef);
        }}
      />
      <h1>0:{contextData.progress}</h1>
      {/* <button onClick={() => contextData.progressBar(audioRef)}>Next</button> */}
      {/* <Slider ></Slider> */}

      <div></div>
    </div>
  );
};

export default MusicPlayer;
