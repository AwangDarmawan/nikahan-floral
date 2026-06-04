import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative mt-8 my-16 mx-10 ">
      {/* Animated Border */}
    <div
  className="
     absolute
    -inset-[2px]
    rounded-xl
    bg-gradient-to-r
    from-white
    via-[#37558D]
    to-white
    bg-[length:300%_300%]
    animate-border
    
  "
/>

      {/* Content */}
      <div
        className="
          relative
          text-center
          py-6
          px-5
          text-[#37558D]
          rounded-xl
          bg-white
        "
      >
         <h1 data-aos="fade-up-right" className="text-sm font-serif font-semibold">
          Made By
        </h1>
        <h1 data-aos="fade-down-left" className="text-sm font-serif font-semibold">
          Awang Darmawan
        </h1>

        <a
        data-aos="flip-left"
          href="https://wa.me/6283125307355"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1 hover:text-green-400 transition font-serif font-semibold"
        >
          <FaWhatsapp className="text-2xl my-1 " />
          +6283125307355
        </a>

        <a
        data-aos="flip-left"
          href="https://instagram.com/awng_drmwn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1 hover:text-pink-400 transition font-serif font-semibold"
        >
          <FaInstagram className="text-2xl my-1" />
          @awng_drmwn
        </a>
      </div>
    </div>
  );
}

export default Footer;