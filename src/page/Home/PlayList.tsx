import React, { useContext, useState } from "react";
import { AlbumContext } from "../../component/AlbumContext";
import { idText } from "typescript";

const PlayList = () => {
  const contextData = useContext(AlbumContext);
  const [search, setSearch] = useState("");

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };
  const filtered = contextData.album.filter((item: any) =>
    item.songName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="album-container">
      <h1 className="music-list-title">Music List</h1>
      <input type="text" name="" id="" onChange={handleSearch} />
      <div className="album">
        {filtered.map((item: any, index: any) => (
          <div
            key={index}
            className={`album-item ${
              contextData.select === index ? "selected" : ""
            }`}
            onClick={() => contextData.setSelect(index)}
          >
            <img src={item.image} alt="music image" className="album-image" />
            <h3>{item.songName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayList;
