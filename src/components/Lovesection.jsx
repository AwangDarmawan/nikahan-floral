import Bunga from "./Bunga";
import { Lovestorry } from "./Lovestorry";

export default function Lovesection() {
  return (
    

    <section
  className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-white
    via-[#FFFDF8]
    to-white
    px-4
    sm:px-6
    lg:px-8
    py-24
    md:py-32
    pb-52
  "
>
  <Bunga/>
  <div className="text-center mb-20">


  <h2
    data-aos="zoom-in"
    className="
      text-4xl
      sm:text-5xl
      lg:text-6xl
      font-serif
      font-bold
      text-[#3E5C93]
    "
  >
    Love Story
  </h2>

  
  <div className="relative mt-16">
  {/* Timeline line */}
  <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-[#0744eb] via-[#3E5C93] to-[#101ff3]" />

  <div className="space-y-16 md:space-y-20">
    {Lovestorry.map((story, index) => (
      <div
        key={story.id}
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        className={`
          relative
          flex
          flex-col
          lg:flex-row
          items-center
          gap-8
          ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
        `}
      >
        {/* Timeline Dot */}
        <div
          className="
            hidden
            lg:flex
            absolute
            left-1/2
            -translate-x-1/2
            w-6
            h-6
            rounded-full
            
            bg-[#3E5C93]
            shadow-xl
            z-20
          "
        />

        {/* Card */}
        <div
          className="
            w-full
            lg:w-[48%]
          
            backdrop-blur-md
            
            overflow-hidden
            transition
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_20px_50px_rgba(0,0,0,.18)]
          "
        >
          <img
            src={story.image}
            alt={story.title}
            className="
              w-full
              h-[230px]
              sm:h-[260px]
              md:h-[320px]
              object-cover
              transition
              duration-700
              hover:scale-110
            "
          />

          <div className="p-6 md:p-8">
            <span
              className="
                inline-block
                px-4
                py-1
                rounded-full
                bg-[#3E5C93]/10
                text-[#3E5C93]
                text-xl
                font-serif 
                italic
                font-semibold
              "
            >
              Episode {story.id}
            </span>

            <h3
              className="
                mt-4
                text-4xl
                md:text-3xl
                font-bold
                text-[#3E5C93]
                font-serif
              "
            >
              {story.title}
            </h3>

            <p
              className="
                mt-2
                text-[#3E5C93]
                font-bold
                tracking-widest
              "
            >
              {story.date}
            </p>

            <p
              className="
                mt-5
                leading-8
                text-[#3E5C93]
                text-lg
                md:text-lg
               
                italic
                font-semibold
              "
            >
              {story.description}
            </p>
          </div>
        </div>

        {/* Empty column desktop */}
        <div className="hidden lg:block lg:w-[48%]" />
      </div>
    ))}
  </div>
</div>
</div>
</section>
  );
}