import Akadsection from "../components/Akadsection";
import HeroSection from "../components/Herosection";
import Kata from "../components/Kata";
import Pasangan from "../components/Pasangan";
import Gallerysection from "../components/Galerrysection";
import Lovesection from "../components/Lovesection";
import Giftsection from "../components/Giftsection";
import Message from "../components/Message";
import Mengundangsection from "../components/Mengundangsection";
import  { useEffect, useRef } from "react";
import musik from "../assets/CINTA.mp3"


export default function Home() {
  
  const audioRef = useRef(null);

useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current?.play().catch(() => {});
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
      "🎵"
    } else {
      audioRef.current.pause();
      "❌"
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
    bg-[#3E5C93]
    text-white
    shadow-lg
  "
>
  🎵
</button>
     {/* musik */}
     <audio ref={audioRef} loop>
  <source src={musik} type="audio/mp3" />
   </audio>

  
    </>
  )
}
