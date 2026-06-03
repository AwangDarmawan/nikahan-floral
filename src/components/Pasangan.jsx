import Endah from "../assets/Img/Endahs.png";
import PasanganCard from "./PasanganCard";
import Alpi from "../assets/Img/Alpir.png";
import Bunga from "./Bunga";
export default function Pasangan() {
  return (
    <section
      className="
      relative
      py-20
      px-6
      bg-white
      overflow-hidden
      pt-40
      pb-40
      "
    >
      <Bunga/>
     <div
  data-aos="fade-up"
  className="max-w-2xl mx-auto text-center"
>
  
  <h2
    data-aos="fade-up-right"
    data-aos-anchor-placement="top-bottom"
            className="
            text-center
           text-[#3E5C93] 
            font-bold
            text-4xl
            md:text-5xl
            mb-14
            font-serif"
  >
    Couple
  </h2>
</div>

      {/* Mempelai */}
      <div
       
        className="mt-14"
      >
        <PasanganCard
          image={Alpi}
          name="Alpi Rahman (alpi)"
          parent="Putra ke-5 dari bapak H. agus samsuri (alm) dan ibu ii mulyati "
        />
      </div>

      {/* Simbol */}
      <div
        data-aos="fade-up"
        className="mt-10 text-center"
      >
        <h3
          className="
          font-allura
          text-6xl
          text-slate-800
          "
        >
          &
        </h3>

          {/* Mempelai */}
                    <div
                    
                      className="mt-14"
                    >
                      <PasanganCard
                        image={Endah}
                        name="Siti Sa'adah (Ndah)"
                        parent="Putri ke 3 dari  Bapak Asep Sulaeman & Ibu Ecin Kuraesin "
                      />
                    </div>
      </div>
    </section>
  );
}