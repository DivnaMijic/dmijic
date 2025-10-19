import React from "react";
import bioBg from "/media/images/biography-photo.png";

const Biography: React.FC = () => {
  return (
    <section
      id="biography"
      className="relative cursor-browsingWhite flex h-screen w-screen bg-cover"
      style={{ backgroundImage: `url(${bioBg})` }}
    >
      <div className="absolute inset-0 bg-black/10 z-10"></div>{" "}
      <div id="sideNavSpace" className="h-screen w-[12vw] "></div>
      <div
        id="biography-section-container"
        className="h-screen w-[88vw] z-20 flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl font-playfair font-bold mb-4 text-white">
          BIOGRAPHY
        </h1>
        <h2 className="text-xl mb-8 text-white">part a few read</h2>
        <p
          id="biography-text"
          className="max-w-4xl text-lg leading-relaxed text-white text-justify mb-8"
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
          id="biography-text"
          className="max-w-4xl text-lg leading-relaxed text-white text-justify mb-8"
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
        <p className=" max-w-4xl text-lg leading-relaxed text-white text-justify mb-8">
          I can't wait to hear the stories you have to tell.
        </p>
        <a href="#contact">
          <button
            className="relative border rounded-none border-white bg-transparent text-white px-6 py-3 font-semibold 
             hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] 
             hover:bg-white hover:text-black hover:border-white 
             transition-all duration-300 group cursor-clicking hover:cursor-clicking"
          >
            <span className="relative z-10">
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
