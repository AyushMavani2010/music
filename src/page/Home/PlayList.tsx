import React, { useContext } from "react";
import { AlbumContext } from "../../component/AlbumContext";

const PlayList = () => {
  const contextData = useContext(AlbumContext);

  return (
    <div className="album-container">
      <h1 style={{ paddingLeft: "100px" }}>Music List</h1>
      <div className="album">
        {contextData.album.map((item: any, index: any) => (
          <div
            key={index}
            className="album1"
            onClick={() => contextData.setSelect(index)}
          >
            <img
              src={item.image}
              alt="music image"
              width={"120px"}
              height={"120px"}
            />
            <h3>{item.songName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayList;
