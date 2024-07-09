import React, { useState } from "react";
import { AlbumProvider } from "./component/AlbumContext";
import "./App.css";
import Home from "./page/Home";

const App: React.FC = () => {
  return (
    <AlbumProvider>
      <Home />
    </AlbumProvider>
  );
};

export default App;



{/* <span>{formatTime(contextData.progress)}</span>
      <input
        type="range"
        min={0}
        max={contextData.duration}
        // step={2}
        value={contextData.progress}
        onChange={(e) => contextData.progress}
      />
      <span>{formatTime(audioRef.current && audioRef.current.duration)}</span> */}


// const formatTime = (time: any) => {
//   const minutes = Math.floor(time / 60);
//   const seconds = Math.floor(time % 60)
//     .toString()
//     .padStart(2, "0");
//   return `${minutes}:${seconds}`;
// };