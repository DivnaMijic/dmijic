import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden"
    >
      <ul className="flex gap-32 justify-center py-8 text-white font-playfair z-10 absolute top-0 left-0 w-full">
        <li>
          <a
            href="#about"
            className="
    relative font-semibold text-white text-lg
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:w-0 after:h-[2px] after:bg-[#FFFF] 
    after:transition-all after:duration-300 
    hover:after:w-full hover:text-white
  "
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="
    relative font-semibold text-white text-lg
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:w-0 after:h-[2px] after:bg-[#FFFF] 
    after:transition-all after:duration-300 
    hover:after:w-full hover:text-white
  "
          >
            EXPERIENCE
          </a>
        </li>
        <li>
          <a
            href="#works"
            className="
    relative font-semibold text-white text-lg
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:w-0 after:h-[2px] after:bg-[#FFFF] 
    after:transition-all after:duration-300 
    hover:after:w-full hover:text-white
  "
          >
            WORKS
          </a>
        </li>
        <li>
          <a
            href="#truly"
            className="
    relative font-semibold text-white text-lg
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:w-0 after:h-[2px] after:bg-[#FFFF] 
    after:transition-all after:duration-300 
    hover:after:w-full hover:text-white
  "
          >
            BIOGRAPHY
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="
    relative font-semibold text-white text-lg
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:w-0 after:h-[2px] after:bg-[#FFFF] 
    after:transition-all after:duration-300 
    hover:after:w-full hover:text-white
  "
          >
            CONTACT
          </a>
        </li>
      </ul>

      <video
        className="absolute inset-0 w-full h-full -z-10"
        autoPlay
        loop
        muted
        playsInline
        style={{
          transform: `translateY(${scrollY * 0.3}px) scale(1.2)`,
          objectFit: "cover", // preserve aspect ratio, fill section
          objectPosition: "center", // center it so you don't just see bottom half
        }}
      >
        <source src="public/media/videos/hero-bg.mp4" type="video/mp4" />
        <source src="public/media/videos/hero-bg.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      <div className="flex flex-col items-center justify-center z-10 text-center px-4">
        <h1 className="text-[13rem] pb-0 font-sunday text-white drop-shadow-lg">
          THIS IS DIVNA
        </h1>

        <h2 className="text-xl font-dmserif italic mb-8 text-gray-200 drop-shadow-md z-10">
          photographer, programmer & dreamer
        </h2>
        <a href="#about">
          <button
            className="relative border rounded-none border-white bg-transparent text-white px-6 py-3 font-semibold 
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
