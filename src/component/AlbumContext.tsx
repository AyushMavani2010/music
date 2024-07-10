import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import MusicPlayer from "../page/Home/MusicPlayer";
import i1 from "../Asset/Images/1.jpg";
import i2 from "../Asset/Images/p2.jpeg";
import i3 from "../Asset/Images/p3.jpeg";
import i4 from "../Asset/Images/p4.jpeg";
import i5 from "../Asset/Images/bebebapu.jpeg";
import i6 from "../Asset/Images/p6.jpeg";
import i7 from "../Asset/Images/p7.jpeg";
import i8 from "../Asset/Images/p8.jpeg";
import i9 from "../Asset/Images/p9.jpg";

import s1 from "../Asset/Music/TheWeeknd.mp3";
import s2 from "../Asset/Music/ap.mp3";
import s3 from "../Asset/Music/DilSeDilTak.mp3";
import s4 from "../Asset/Music/paisa hai to.mp3";
import s5 from "../Asset/Music/BebeBapu.mp3";
import s6 from "../Asset/Music/BAby.mp3";
import s7 from "../Asset/Music/i7.mp3";
import s8 from "../Asset/Music/295.mp3";
import s9 from "../Asset/Music/LEVELS.mp3";

const AlbumContext = createContext<any>(undefined);
interface AlbumProviderProps {
  children: ReactNode;
}

const AlbumProvider: React.FC<AlbumProviderProps> = ({ children }) => {
  const [select, setSelect] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
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
      songName: "Dil Se Dil Tak",
      path: s3,
      image: i3,
    },
    {
      songName: "Paisa Hai TO",
      path: s4,
      image: i4,
    },
    {
      songName: "Bebe Bapu",
      path: s5,
      image: i5,
    },
    {
      songName: "Baby",
      path: s6,
      image: i6,
    },
    {
      songName: "Die For You",
      path: s7,
      image: i7,
    },
    {
      songName: "295",
      path: s8,
      image: i8,
    },
    {
      songName: "LEVELS",
      path: s9,
      image: i9,
    },
  ];

  const handlePre = (selectIndex: number) => {
    setSelect(select - 1);
    if (!select) {
      setSelect(album.length - 1);
    }
  };

  const handleNext = (selectIndex: number) => {
    setSelect(select + 1);
    if (select == album.length - 1) {
      setSelect(0);
    }
  };

  const playPause = (audioRef: any) => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };
  const downLoad = (audioRef: any) => {
    const link = document.createElement("a");
    link.href = audioRef.current!.src;
    link.download = "audio.mp3"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contextValue = {
    album,
    setSelect,
    select,
    handlePre,
    handleNext,
    playPause,
    isPlaying,
    downLoad,
  };

  return (
    <AlbumContext.Provider value={contextValue}>
      {children}
    </AlbumContext.Provider>
  );
};

export { AlbumContext, AlbumProvider };
