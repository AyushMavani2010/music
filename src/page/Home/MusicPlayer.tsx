import React, { useContext, useRef, useState, useEffect } from "react";
import { AlbumContext } from "../../component/AlbumContext";
import Slider from "@mui/material/Slider";
import { time } from "console";
const MusicPlayer = () => {
  const contextData = useContext(AlbumContext);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [updateTime, setUpdateTime] = useState(0);
  const [duration, setDuration] = useState(0);
  console.log(audioRef);
  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  const time = () => {
    if (audioRef.current) {
      setUpdateTime(audioRef.current.currentTime);
    }
  };
  console.log(duration);
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
          onTimeUpdate={time}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        />
      </div>
      <button onClick={() => contextData.playPause(audioRef)}>Play</button>
      <button onClick={() => contextData.handlePre()}>Pre</button>
      <button onClick={() => contextData.handleNext()}>Next</button>
      <span>{formatTime(updateTime)}</span>
      <input
        type="range"
        min={0}
        max={duration || 1}
        // step={2}

        onChange={(e) => contextData.progress}
      />
      <span>{formatTime(duration)}</span>

      {/* <button onClick={() => contextData.progressBar(audioRef)}>Next</button> */}
      {/* <Slider ></Slider> */}

      <div></div>
    </div>
  );
};

export default MusicPlayer;
