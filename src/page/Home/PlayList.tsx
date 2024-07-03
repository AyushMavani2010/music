import React, { useContext } from "react";
import { AlbumContext } from "../../component/AlbumContext";

const PlayList = () => {
  const contextData = useContext(AlbumContext);

  return (
    <div className="album-container">
      <h1 style={{ justifyContent: "center" }}>Music List</h1>
      <div className="album">
        {contextData.album.map((item: any, index: any) => (
          <div onClick={() => contextData.setSelect(index)}>
            <img
              src={item.image}
              alt="music image"
              width={"100px"}
              height={"100px"}
            />
            <p>
              {item.songName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayList;
