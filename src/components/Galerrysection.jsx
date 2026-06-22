import Bunga from "./Bunga";
import { Gallery } from "./Galerry";

export default function Gallerysection() {
  return (
    <section
      className="
        relative
        bg-[#3E5C93]
        py-16
        px-4
        md:px-8
      "
    >
      <Bunga/>
      {/* Title */}
      <div className="text-center mb-10">
        <h2
          data-aos="fade-down-right"
          className="
         mt-2  text-4xl
         sm:text-6xl
         md:text-6xl text-white font-bold lg:text-6xl  font-serif
           "

        >
          Gallery
        </h2>
      </div>

      {/* Grid Gallery */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-2
          md:gap-4
        "
      >
        {Gallery.map((image, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="
              overflow-hidden
              bg-white
              shadow-lg
              aspect-[3/4]
              rounded-2xl
            "
          >
            <img
              src={image}
              alt={`gallery-${index}`}
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-500
                hover:scale-110
                
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}