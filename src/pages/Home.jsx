import Akadsection from "../components/Akadsection";
import HeroSection from "../components/Herosection";
import Kata from "../components/Kata";
import Pasangan from "../components/pasangan";
import Gallerysection from "../components/Galerrysection";
import Lovesection from "../components/Lovesection";
import Giftsection from "../components/Giftsection";
import Message from "../components/Message";
import Mengundangsection from "../components/Mengundangsection";



export default function Home() {
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
    </>
  )
}
