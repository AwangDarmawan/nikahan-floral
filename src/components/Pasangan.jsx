import Endah from "../assets/Img/Endahs.png";
import PasanganCard from "./PasanganCard";
import Alpi from "../assets/Img/Alpir.png";
export default function Pasangan() {
  return (
    <section
      className="
      relative
      py-20
      px-6
      bg-white
      overflow-hidden
      "
    >
     <div
  data-aos="fade-up"
  className="max-w-2xl mx-auto text-center"
>
  <h2
    data-aos="fade-down-right"
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
        data-aos="zoom-in"
        className="mt-14"
      >
        <PasanganCard
          image={Alpi}
          name="Alpi Rahman"
          parent="Putri dari  Bapak   & Ibu  "
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
                      data-aos="zoom-in"
                      className="mt-14"
                    >
                      <PasanganCard
                        image={Endah}
                        name="Siti Sa'adah"
                        parent="Putri dari  Bapak Asep Sulaeman & Ibu Ecin "
                      />
                    </div>
      </div>
    </section>
  );
}