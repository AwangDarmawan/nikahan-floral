import { FaHeart } from "react-icons/fa";
import Bunga from "./Bunga"

function Kata() {
  return (
    <>
         <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6 py-40   sm:px-6
        md:px-8 ">
              {/* Background Top Floral */}
              <Bunga/>

              
      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Initial */}
         <div
       
        className="
        relative
        flex
       justify-center
       items-center
       h-[60px]
       md:h-[220px]
       gap-4
       "
       >
  <span data-aos="fade-down-right"
    className="  bottom-10 xs:bottom-0
      font-allura
      text-[110px]
      md:text-[180px]
      
      text-[#3E5C93]
      relative
      z-10
      
    "
  >
    A
  </span>
  

  <span data-aos="fade-up-right"
    className="
      font-allura
      text-[110px]
      md:text-[180px]
      text-[#3E5C93]
      -ml-6
      md:-ml-10
    "
  >
    N
  </span>
  </div>

  
        <div className="max-w-3xl mx-auto px-6 text-center">
  <p  data-aos="zoom-in-up"
    className="
      text-sm
      md:text-base
      leading-8
      text-gray-700
      font-serif
      italic
    "
  >
    “Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
    pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
    merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
    sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
    kebesaran Allah bagi kaum yang berpikir.”
  </p>

  <p className="mt-4 text-sm md:text-base font-semibold text-[#3E5C93] font-serif">
    QS. Ar-Rum: 21
  </p>
  {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-6" data-aos="fade-up-right">
            <div className="h-[1px] w-20 md:w-28 bg-[#3E5C93]" />
            <FaHeart className="text-[#3E5C93]"  data-aos="zoom-in-down" />
            <div className="h-[1px] w-20 md:w-28  bg-[#3E5C93]" data-aos="fade-down-left" />
          </div>

  <p data-aos="zoom-in-down"
    className="
      mt-10
      text-sm
      md:text-base
      leading-8
      text-gray-700
      font-serif
    "
  >
    Bismillahirrahmanirrahim. Ya Allah, dengan segala kesucian hati, kami
    memohon ridha-Mu untuk menuju sunnah Rasul-Mu, membentuk keluarga yang
    sakinah, mawaddah, warahmah.
  </p>

  <p data-aos="zoom-in-down"
    className="
      mt-4
      text-sm
      md:text-base
      leading-8
      text-gray-700
      font-serif
    "
  >
    Dengan memohon rahmat dan ridha Allah SWT, kami mengundang
    Bapak/Ibu/Saudara/i untuk hadir serta memberikan doa restu pada acara
    pernikahan putra-putri kami.
  </p>
</div>

  </div>
  
  </section>
    </>
  )
}

export default Kata
