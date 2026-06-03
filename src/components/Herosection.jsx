import Countdown from "../components/Countdown";
import pasangan from "../assets/Img/potowedding.png";
import Bunga from "./Bunga";

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
           <Bunga/>

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
          text-[#3E5C93]
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
         Minggu, 05 Juli 2026
        </p>

        {/* Countdown */}
        <div className="mt-8">
          <Countdown />
        </div>
      </div>
    </section>
  );
}