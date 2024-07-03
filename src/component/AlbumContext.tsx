import React, { createContext, useState, ReactNode } from "react";
import i1 from "../Asset/Images/1.jpg";
import i2 from "../Asset/Images/p2.jpeg";
import s1 from "../Asset/Music/TheWeeknd.mp3";
import s2 from "../Asset/Music/ap.mp3";

const AlbumContext = createContext<any>(undefined);

interface AlbumProviderProps {
  children: ReactNode;
}

const AlbumProvider: React.FC<AlbumProviderProps> = ({ children }) => {
  const [select, setSelect] = useState<number>(0);
  const album = [
    {
      songName: "The Weekend",
      path: s1,
      image: i1,
    },
    {
      songName: "Agar ho tum",
      path: s2,
      image: i2,
    },
    {
      songName: "Agar ho tum",
      path: s1,
      image: i1,
    },
    {
      songName: "Agar ho tum",
      path: s2,
      image: i2,
    },
  ];

  const handlePre = (selectIndex: number) => {
    setSelect(select - 1);
    if (!select) {
      setSelect(album.length - 1);
    }
    console.log("1", album.length);
  };

  const handleNext = (selectIndex: number) => {
    setSelect(select + 1);
    if (select == album.length - 1) {
      setSelect(0);
      console.log("2", select);
    }
  };
  const contextValue = {
    album,
    setSelect,
    select,
    handlePre,
    handleNext,
  };

  return (
    <AlbumContext.Provider value={contextValue}>
      {children}
    </AlbumContext.Provider>
  );
};

export { AlbumContext, AlbumProvider };
