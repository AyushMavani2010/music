import React, { useContext, useRef, useState, ChangeEvent } from "react";
import { AlbumContext } from "../../component/AlbumContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepBackward,
  faStepForward,
  faDownload,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

const MusicPlayer = () => {
  const contextData = useContext(AlbumContext);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [updateTime, setUpdateTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [liveTime, setLiveTime] = useState(0);

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

  const updateSlider = (event: ChangeEvent<HTMLInputElement>) => {
    const liveTime = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = liveTime;
      setLiveTime(liveTime);
    }
  };

  const volume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  return (
    <div className="music-player-container">
      <div className="player-img">
        <img
          src={contextData.album[contextData.select].image}
          alt="music name"
          className="player-image"
        />
      </div>
      <h1 className="song-title">
        {contextData.album[contextData.select].songName}
      </h1>
      <audio
        ref={audioRef}
        src={contextData.album[contextData.select].path}
        onTimeUpdate={time}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
      />
      <div className="player-controls">
        <button onClick={() => contextData.handlePre()}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button onClick={() => contextData.playPause(audioRef)}>
          <FontAwesomeIcon icon={contextData.isPlaying ? faPause : faPlay} />
        </button>
        <button onClick={() => contextData.handleNext()}>
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>
      <div className="time-display">
        <span>{formatTime(updateTime)}</span>
        <div className="progress-container">
          <input
            type="range"
            min={0}
            max={duration || 1}
            value={updateTime}
            onChange={updateSlider}
          />
        </div>
        <span>{formatTime(duration)}</span>
      </div>
      <div className="volume-container">
        <input type="range" min={0} max={1} step={0.01} onChange={volume} />
        <FontAwesomeIcon icon={faVolumeUp} />
        <div className="download-controls">
          <button onClick={() => contextData.downLoad(audioRef)}>
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
