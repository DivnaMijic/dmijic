import React from "react";

const Biography: React.FC = () => {
  return (
    <section id="biography" className="flex h-screen w-screen">
      <div id="sideNavSpace" className="h-screen w-[12vw] "></div>

      <div
        id="biography-section-container"
        className="h-screen w-[88vw] flex flex-col justify-center items-center bg-[url('/media/images/biography_photo.jpg')] bg-cover"
      >
        <h1 className="text-5xl font-playfair font-bold mb-4 text-white">
          BIOGRAPHY
        </h1>
        <h2 className="text-xl mb-8 text-white">part a few read</h2>
        <p
          id="biography-text"
          className="max-w-4xl text-lg leading-relaxed text-white text-justify mb-8"
        >
          Born in Samobor and stuff. Also personal stuff Always been the outlier
          who felt the urge to right every wrong since age three. Driven, joyful
          people can be a handful — and tend to piss off those at war with
          themselves. Sticking to the belief that “feeling too deeply” isn't a
          flaw helped me connect, stay in tune with myself, and live more richly
          — messier, but truer. Paired with my insufferable hunger for adventure
          and change, you can bet it has led me through some of the ugliest,
          most brutal — but also magnificent and transformative — times of my
          life.
          <p />
          <p
            id="biography-text"
            className="max-w-4xl text-lg leading-relaxed text-white text-justify mb-8"
          ></p>
          My proudest accomplishments aren't on my résumé, so I'll put them
          here: I've spoken up while trembling, pushed through anxiety that made
          me vomit, stood my ground even when I was told to let things go, and
          gotten up after fainting from fear. Even when the outcome wouldn't
          change, I still screamed — because someone had to. Or at least so they
          know there's one bitch who doesn't go quietly. I still get scared, but
          now I know it means I'm growing, and that I have — or will acquire —
          the tools to overcome whatever challenge comes next. I've always been
          more afraid of betraying my values and dreams than of failing or being
          overlooked.
        </p>
        <a href="#contact">
          <button
            className="relative border rounded-none border-white bg-transparent text-white px-6 py-3 font-semibold 
             hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] 
             hover:bg-white hover:text-black hover:border-white 
             transition-all duration-300 group"
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
