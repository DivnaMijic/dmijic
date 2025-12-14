import React from "react";
import bioBg from "/media/images/biography-photo.webp";

const Biography: React.FC = () => {
  return (
    <section
      id="biography"
      className="cursor-browsingPink flex w-[100svw] h-[100svh] bg-white-100 items-center justify-end px-4 md:px-0 box-border"
      style={{ backgroundImage: `url(${bioBg})` }}
      data-scroll-section
    >
      <div
        id="biography-content-container"
        className="w-full md:w-[90svw] flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 text-center md:text-left px-2 sm:px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-left  font-bold text-white text-left mb-4">
          BIOGRAPHY
        </h1>
        <h2 className="text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4 text-white">
          part a few read
        </h2>
        <p
          className="text-white w-full sm:w-[85%] md:w-[75%] 
          text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl
          text-justify mb-2 sm:mb-3 md:mb-4
          leading-snug sm:leading-normal md:leading-relaxed"
        >
          Born in a small Croatian town with big dreams and even bigger guts (or
          so I like to tell myself as I strive to be that way) — and an
          insatiable yearning for experience. Years of grit, perseverance, and
          countless challenges helped shape who I am: not perfect, but always
          doing my best. I've always had a knack for both creativity and
          problem-solving, from childhood to today. Endlessly hungry for other
          people's stories, I gobble them up and shine in moments of genuine
          connection. If you can't find me working, I'm probably out on an
          adventure, attending an event, or lending my time to philanthropy.
        </p>
        <p
          className="text-white w-full sm:w-[85%] md:w-[75%] 
          text-[12px] sm:text-sm md:text-base lg:text-lg xl:text-xl
          text-justify mb-2 sm:mb-3 md:mb-4
          leading-snug sm:leading-normal md:leading-relaxed"
        >
          I believe there's no way to “win the game of life” because there's no
          summit — the goal is to play, and to play together. My proudest
          accomplishments aren't on my résumé, so I'll put them here: I've
          spoken up while trembling, pushed through anxiety that made me sick,
          stood my ground when I was told to let things go, and gotten up after
          fainting from fear. Through it all, I've learned that I'm far more
          afraid of betraying my values and dreams than of failing or being
          overlooked. Though this is just the beginning, I'm excited for the
          many mountains — both metaphorical and literal — that I still have yet
          to climb.
        </p>
        <p className="text-white w-full sm:w-[85%] md:w-[75%] text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-justify mb-2 sm:mb-3 md:mb-4 leading-snug sm:leading-snug md:leading-relaxed">
          I can't wait to hear the stories you have to tell.
        </p>
        <a href="#contact" data-scroll data-scroll-speed="1">
          <button
            className="relative border rounded-none border-white bg-transparent text-white px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 font-semibold 
             hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0_0_#000] 
             hover:bg-white hover:text-black hover:border-white 
             transition-all duration-300 group cursor-clicking"
          >
            <span className="relative z-10" data-scroll data-scroll-speed="1">
              Felt a connection? Contact me!
            </span>
            <span className="absolute inset-0 overflow-hidden">
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent 
                     -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
              ></span>
            </span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Biography;
