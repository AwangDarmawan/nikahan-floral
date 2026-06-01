import { FaGift, FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";
import { Gift } from "./Gift";
import bwah from "../assets/Img/bwah.png"
import btas from "../assets/Img/batas.png"

export default function Giftsection() {
  const handleCopy = (rekening) => {
    navigator.clipboard.writeText(rekening);

    toast.success("Nomor rekening berhasil disalin");
  };

  return (
      <section className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6">
           {/* Background Top Floral */}
           <div className="absolute top-0 left-0 w-full">
             <img
               src={btas} 
               alt="floral"
               className=" w-full md:h-40
      lg:h-30
      xl:h-50
      object-cover"
             />
           </div>
     
           <div className="absolute bottom-0 left-0 w-full">
             <img
               src={bwah}
               alt="floral"
                   className=" w-full md:h-40
      lg:h-30
      xl:h-50
      object-cover"
             />
           </div>

      <div
        className="
          max-w-4xl
          mx-auto
          bg-white/90
          rounded-2xl
          shadow-xl
          p-6
          md:p-10
        "
      >
        {/* Header */}
        <div className="text-center">
          <FaGift
            className="
              mx-auto
              text-[#37558D]
              text-4xl
              md:text-5xl
            "
          />

          <h2
            className="
              mt-4
              font-serif
              text-5xl
              md:text-6xl
              text-[#37558D]
              font-bold
            "
          >
            Gift
          </h2>

          <p
            className="
              mt-4
              text-sm
              md:text-base
              text-gray-600
              max-w-xl
              mx-auto
            "
          >
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika memberi adalah ungkapan tanda kasih, Anda dapat
            memberikan hadiah melalui rekening berikut.
          </p>
        </div>

        {/* List Rekening */}
        <div className="mt-12 space-y-12">
          {Gift.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="
                flex
                flex-col
                items-center
                text-center
              "
            >
              <img
                src={item.bank}
                alt="bank"
                className="
                  h-12
    sm:h-14
    md:h-16
    lg:h-20
    w-auto
    object-contain
                "
              />

              <h3
                className="
                  mt-4
                  text-xl
                  md:text-2xl
                  font-semibold
                  text-slate-800
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  md:text-base
                  tracking-wider
                  text-gray-600
                "
              >
                {item.number}
              </p>

              <button
                onClick={() => handleCopy(item.number)}
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-full
                  bg-[#37558D]
                  text-white
                  text-sm
                  md:text-base
                  hover:bg-[#2f4d82]
                  transition
                "
              >
                <FaCopy />
                Salin Rekening
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}