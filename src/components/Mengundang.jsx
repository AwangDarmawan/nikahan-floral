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
          md:text-2xl
          font-bold
          font-serif
          text-[#3E5C93]
          mb-5
          text-center
          
        "
      >
        {title}
      </h3>

      <div
        className="
          text-sm
          md:text-base
          text-gray-700
          leading-relaxed
        "
      >
        {deskripsi}
      </div>
    </div>
  );
}