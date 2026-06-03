import Akadsection from "../components/Akadsection";
import HeroSection from "../components/Herosection";
import Kata from "../components/Kata";
import Pasangan from "../components/Pasangan";
import Gallerysection from "../components/Galerrysection";
import Lovesection from "../components/Lovesection";
import Giftsection from "../components/Giftsection";
import Message from "../components/Message";
import Mengundangsection from "../components/Mengundangsection";
// import  { useEffect, useRef } from "react";
import musik from "../assets/lagu.mp3"
import { useEffect, useRef, useState } from "react";


export default function Home() {

  const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);


useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }
}, []);
  return (
    <>
      <HeroSection/>
      <Kata/>
      <Pasangan/>
     <Akadsection/>
     <Gallerysection/>
     <Lovesection/>
     <Giftsection/>
     <Message/>
     <Mengundangsection/>
  
<button
  onClick={() => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }}
  className="
    fixed
    bottom-5
    right-5
    z-50
    w-12
    h-12
    rounded-full
    bg-white
    border
   border-[#3E5C93] 
    flex
    items-center
    justify-center
     shadow-[0_4px_15px_rgba(62,92,147,0.5)]
  "
>
  {isPlaying ? (
    <span >🎵</span>
  ) : (
    <span className="relative text-xl">
      🎵
      <span className="absolute -top-1 -right-1  ">
        ❌
      </span>
    </span>
     )}
</button>

     {/* musik */}
     <audio ref={audioRef} loop>
  <source src={musik} type="audio/mp3" />
   </audio>

  
    </>
  )
}
