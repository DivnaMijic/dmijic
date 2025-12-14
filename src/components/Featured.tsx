import React from "react";
import featuredWorks from "../data/featuredWorks";

const Featured: React.FC = () => {
  return (
    <section
      id="featured"
      className="snap-start flex w-[100svw] h-auto min-h-[100svh] justify-center items-start py-16 sm:py-20 md:py-24 box-border"
    >
      <div
        id="featured-section-container"
        className="z-10 flex flex-col justify-center items-center w-full px-4 sm:px-8"
      >
        <div id="featured-content-container" className="w-full max-w-7xl">
          <h2
            className="
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
              font-sunday font-semibold 
              mb-6 sm:mb-10 md:mb-14 
              text-black
          "
          >
            FEATURED WORKS & MENTIONS
          </h2>

          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              gap-8 sm:gap-10 md:gap-12 
              w-full
          "
          >
            {featuredWorks.map((work, idx) => (
              <div key={idx} className="flex flex-col text-left w-full">
                <img
                  src={work.img}
                  alt={work.title}
                  className="
                    w-full 
                    h-40 sm:h-48 md:h-56 lg:h-64 
                    object-cover 
                    mb-3 sm:mb-4
                  "
                />

                <h3
                  className="
                    text-lg sm:text-xl md:text-2xl 
                    font-semibold 
                    mb-1 sm:mb-2
                "
                >
                  {work.title}
                </h3>

                <p
                  className="
                    text-xs sm:text-sm md:text-base 
                    text-gray-700 
                    mb-4 sm:mb-5 lg:mb-6
                    leading-snug md:leading-normal
                "
                >
                  {work.desc}
                </p>

                <a href={work.link}>
                  <button
                    className="
                      cursor-clicking hover:cursor-clicking 
                      relative border bg-transparent rounded-none 
                      border-black text-black 
                      px-4 py-2 sm:px-5 sm:py-3 
                      text-xs sm:text-sm md:text-base
                      hover:-translate-x-1 hover:-translate-y-1 
                      hover:shadow-[4px_4px_0_0_#EAA3F4] 
                      hover:bg-black hover:text-white 
                      hover:border-black 
                      transition-all duration-300 group
                  "
                  >
                    <span className="relative z-10">read more</span>
                    <span className="absolute inset-0 overflow-hidden">
                      <span
                        className="
                          absolute inset-0 
                          bg-gradient-to-r 
                          from-transparent via-white/30 to-transparent 
                          -translate-x-full 
                          group-hover:translate-x-full 
                          transition-transform duration-700 
                          ease-in-out skew-x-12
                        "
                      ></span>
                    </span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
