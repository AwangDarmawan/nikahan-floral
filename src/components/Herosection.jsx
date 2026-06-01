import Countdown from "../components/Countdown";
import pasangan from "../assets/Img/potowedding.png";
import bwah from "../assets/Img/bwah.png"
import btas from "../assets/Img/batas.png"

export default function HeroSection() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-white
      flex
      items-center
      justify-center
      px-4
      "
    >
       {/* Background Top Floral */}
           <div className="absolute top-0 left-0 w-full">
             <img
               src={btas}
               alt="floral"
               className="w-full
      h-24
      sm:h-32
      md:h-40
      lg:h-52
      xl:h-64
      object-cover"
             />
           </div>
     
           <div className="absolute bottom-0 left-0 w-full">
             <img
               src={bwah}
               alt="floral"
               className="w-full
      md:h-40
      lg:h-30
      xl:h-50
      object-cover"
             />
           </div>

      <div
        className="
        relative
        z-10
        max-w-md
        w-full
        text-center
        "
      >
        {/* Foto */}
        <div
          className="
          mx-auto
          w-64
          h-80
          md:w-72
          md:h-96
          overflow-hidden
          rounded-t-[120px]
          rounded-b-[40px]
          border
          border-gray-200
          bg-white
          shadow-xl
          "
        >
          <img
            src={pasangan}
            alt="pasangan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nama */}
        <h1   data-aos="fade-down-right"
          className="
          mt-8
          font-allura
          text-5xl
          md:text-6xl
          text-slate-700
          font-bold"
        >
          Alpi & Ndah
        </h1>

        {/* Tanggal */}
        <p
          className="
          mt-2
          text-sm
          md:text-base
          text-gray-500
          font-montserrat
          font-semibold
          "
        >
          05 Juli 2026
        </p>

        {/* Countdown */}
        <div className="mt-8">
          <Countdown />
        </div>
      </div>
    </section>
  );
}