import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";

export default function Akad({
  title,
  date,
  time,
  location,
  mapsLink,
}) {
  return (
    <div
      data-aos="fade-up"
      className="
        relative
        overflow-hidden
        rounded-[60px]
        md:rounded-[80px]
        bg-[#3E5C93]
        text-white
        shadow-2xl
        px-6
        py-12
        md:px-12
        md:py-16
      "
    >
      {/* Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-8 text-7xl">❀</div>
        <div className="absolute top-10 right-8 text-7xl">❀</div>
        <div className="absolute bottom-10 left-8 text-7xl">❀</div>
        <div className="absolute bottom-10 right-8 text-7xl">❀</div>
      </div>

      <div className="relative z-10 text-center">
        <h2
          className="
            font-bold
            text-3xl
            md:text-5xl
            font-serif
          "
        >
          {title}
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-[1px] w-20 md:w-28 bg-white" />
          <FaHeart />
          <div className="h-[1px] w-20 md:w-28 bg-white" />
        </div>

        <p className="font-semibold text-sm md:text-lg font-serif">
          {date}
        </p>

        <p className="mt-3 font-bold text-base md:text-xl font-serif">
          {time}
        </p>

        <p className="mt-4 text-sm md:text-base font-serif">
          Kediaman Mempelai Wanita
        </p>

        <p
          className="
            mt-3
            text-sm
            md:text-base
            max-w-lg
            mx-auto
            leading-relaxed
            font-serif
          "
        >
          {location}
        </p>

        <a
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            mt-8
            border-2
            border-white
            rounded-full
            px-5
            py-2
            hover:bg-white
            hover:text-[#3E5C93]
            transition-all
            font-serif
          "
        >
          <FaMapMarkerAlt />
          Lihat Lokasi
        </a>
      </div>
    </div>
  );
}