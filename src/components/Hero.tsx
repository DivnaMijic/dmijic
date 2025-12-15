import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-[100svh] w-[100svw] cursor-browsingWhite flex flex-col items-center justify-center box-border bg-hero-pattern bg-cover bg-center relative bg-[url(/media/images/photography/photo3.webp)]"
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <ul className="flex gap-8 py-4 pr-8 justify-end text-white font-playfair z-10 absolute top-0 left-0 w-full">
        {["about", "works", "experience", "biography", "contact"].map(
          (item) => {
            const targetId =
              item === "BIOGRAPHY" ? "truly" : item.toLowerCase();

            return (
              <li key={item}>
                <a
                  href={`#${targetId}`}
                  className="cursor-clicking hover:cursor-clicking
            relative font-semibold text-white text-lg
            after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:w-0 after:h-[2px] after:bg-[#FFFF] 
            after:transition-all after:duration-300 
            hover:after:w-full hover:text-white
          "
                >
                  {item}
                </a>
              </li>
            );
          }
        )}
      </ul>

      <div className="flex flex-col items-center justify-center z-10 text-center px-4">
        <h1 className="text-[13rem] pb-0 font-sunday text-white drop-shadow-lg">
          DIVNA MIJIC
        </h1>

        <h2 className="text-xl font-dmserif italic mb-8 text-white drop-shadow-md">
          developer, photographer, programmer & dreamer
        </h2>

        <a href="#about">
          <button
            className="cursor-clicking hover:cursor-clicking relative border rounded-none border-white bg-transparent text-white px-6 py-3 font-semibold 
             hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] 
             hover:bg-white hover:text-black hover:border-white 
             transition-all duration-300 group"
          >
            <span className="relative z-10">I'M HOOKED!!!</span>
            <span className="absolute inset-0 overflow-hidden">
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300/40 to-transparent 
                     -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
              ></span>
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
