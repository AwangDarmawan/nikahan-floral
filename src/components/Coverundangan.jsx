import { FaEnvelopeOpen } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Bunga from "./Bunga";
import { useParams } from "react-router-dom";


function Coverundangan() {
   const navigate = useNavigate();
   const { nama } = useParams();

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6 py-10  pt-10 pb-5  ">
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
        <p className="mt-12 text-sm md:text-base text-gray-700 font-montserrat font-semibold">
          The Wedding Of
        </p>

        <h1  data-aos="fade-down" className="mt-2 text-3xl md:text-9xl text-[#3E5C93] font-bold font-allura lg:text-6xl " >
          Alpi & Ndah
        </h1>
        

        <div className="mt-10">
          <p className="text-gray-700 text-base font-semibold">
            Kepada, Yth :
          </p>

          <h3 data-aos="fade-down-right" className="text-2xl md:text-4xl font-semibold mt-2 text-[#3E5C93] font-serif">
            {nama}
          </h3>
        </div>
       
        {/* <button  onClick={() => navigate("/undangan")} data-aos="fade-up" */}
        <button
          onClick={() => {
        localStorage.setItem("playMusic", "true");
        navigate("/undangan");
         }}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-blue-800
            px-6
            py-3
            text-white
            text-sm
            font-semibold
            hover:bg-blue-900
            transition
            border-2
            shadow-lg
            
          "
        >
          <FaEnvelopeOpen />
          BUKA UNDANGAN
        </button>
      
      </div>
    </section>
    </>
  )
}

export default Coverundangan
