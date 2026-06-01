import { Lovestorry } from "./Lovestorry";

export default function Lovesection() {
  return (
    <section className=" py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          data-aos="fade-down"
          className="
            text-center
           text-[#3E5C93] 
            font-bold
            text-4xl
            md:text-5xl
            mb-14
            font-serif
          "
        >
          Our Love Story
        </h2>

        {/* Timeline */}
        <div className="space-y-14">
          {Lovestorry.map((story, index) => (
            <div
              key={story.id}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              className="space-y-4"
            >
              {/* Top Content */}
              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  gap-6
                  items-center
                "
              >
                {/* Image */}
                <div
                  className="
                    w-full
                    md:w-[420px]
                    overflow-hidden
                    rounded-3xl
                    shadow-xl
                    flex-shrink-0
                  "
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="
                      w-full
                      h-[220px]
                      object-cover
                      transition
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>

                {/* Text */}
                <div className="flex-1  text-[#3E5C93] ">
                  <h3
                    className="
                      text-3xl
                      md:text-4xl
                      font-bold
                      leading-tight
                    "
                  >
                    Episode {story.id}: <br />
                    {story.title}
                  </h3>

                  <p className=" text-lg  text-[#3E5C93] mt-1">
                    {story.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className="
                  text-[#3E5C93] 
                  leading-relaxed
                  text-base
                  md:text-lg
                "
              >
                {story.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}