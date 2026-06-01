import { FaEnvelopeOpen } from "react-icons/fa";
import bwah from "../assets/Img/bwah.png"
import btas from "../assets/Img/batas.png"
import { useNavigate } from "react-router-dom";


function Coverundangan() {
   const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6">
      {/* Background Top Floral */}
      <div className="absolute top-0 left-0 w-full">
        <img
          src={btas}
          alt="floral"
              className="w-full
      object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={bwah}
          alt="floral"
              className=" w-full
      object-cover"
        />
      </div>

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
      
      text-black
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
      text-black
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

        <h1  data-aos="fade-down" className="mt-2 text-3xl md:text-9xl text-slate-800 font-bold font-allura lg:text-6xl " >
          Alpi & Ndah
        </h1>
        

        <div className="mt-10">
          <p className="text-gray-700 text-base font-semibold">
            Kepada, Yth :
          </p>

          <h3 className="text-2xl md:text-4xl font-semibold mt-2">
            Awang
          </h3>
        </div>
       
        <button  onClick={() => navigate("/undangan")} data-aos="fade-up"
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
