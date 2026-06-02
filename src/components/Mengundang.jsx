export default function Mengundang({ title, deskripsi }) {
  return (
    <div
      className="
         bg-[#3E5C93] 
        rounded-2xl
        shadow-lg
        p-6
        md:p-8
        border
        border-gray-100
        h-full
        text-white
      "
    >
      <h3
        className="
          text-xl
          md:text-3xl
          font-bold
          
          text-white
          mb-5
          text-center
          font-serif
        "
      >
        {title}
      </h3>

      <div
        className="
          text-sm
          md:text-base
         text-white

          leading-relaxed
        "
      >
        {deskripsi}
      </div>
    </div>
  );
}