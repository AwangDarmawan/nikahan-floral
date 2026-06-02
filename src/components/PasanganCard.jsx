export default function PasanganCard({
  image,
  name,
  parent,
}) {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      text-center
      max-w-sm
      mx-auto
      "
    >
      {/* Foto */}
      <div
        className="
        w-[220px]
        h-[320px]
        sm:w-[260px]
        sm:h-[360px]
        md:w-[300px]
        md:h-[420px]
        overflow-hidden
        rounded-t-[120px]
        rounded-b-[40px]
        border
        border-gray-200
        bg-white
        shadow-lg
        "
      >
        <img
          src={image}
          alt={name}
          className="
          w-full
          h-full
          object-cover
          "
        />
      </div>

      {/* Nama */}
      <h2
       data-aos="fade-up-right"
        className="
        mt-8
        font-allura
        text-4xl
        md:text-6xl
        text-slate-800
        "

      >
        {name}
      </h2>

      {/* Orang tua */}
      <p
       data-aos="fade-up-left"
        className="
        mt-4
        px-4
        text-sm
        md:text-lg
        font-montserrat
        text-gray-700
        "
      >
        {parent}
      </p>
    </div>
  );
}