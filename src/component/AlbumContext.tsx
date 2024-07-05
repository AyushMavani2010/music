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
import s1 from "../Asset/Music/TheWeeknd.mp3";
import s2 from "../Asset/Music/ap.mp3";
import s3 from "../Asset/Music/DilSeDilTak.mp3";
import s4 from "../Asset/Music/paisa hai to.mp3";

const AlbumContext = createContext<any>(undefined);
interface AlbumProviderProps {
  children: ReactNode;
}

const AlbumProvider: React.FC<AlbumProviderProps> = ({ children }) => {
  const [select, setSelect] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
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
  const progressBar = (audioRef: any) => {
    const sec = Math.floor(audioRef.current.duration);
    setProgress(sec);
  };
  console.log(progress);
  // const sec = (audioRef: any) => {
  //   setProgress(Math.floor(audioRef.current.duration));
  //   console.log(progress);
  // };

  const contextValue = {
    album,
    setSelect,  
    select,
    handlePre,
    handleNext,
    progress,
    playPause,
    progressBar,
  };
  
  return (
    <AlbumContext.Provider value={contextValue}>
      {children}
    </AlbumContext.Provider>
  );
};

export { AlbumContext, AlbumProvider };
