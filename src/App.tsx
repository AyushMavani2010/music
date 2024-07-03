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
