import React from "react";
import trulyBg from "/media/images/truly-photo.png";

const Truly: React.FC = () => {
  return (
    <section
      id="truly"
      className="relative cursor-browsingWhite flex h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${trulyBg})` }}
    >
      <div className="absolute inset-0 bg-black/30 z-10"></div>{" "}
      <div id="sideNavSpace" className="h-screen w-[12vw] "></div>
      <div
        id="truly-section-container"
        className="h-screen w-[56vw] z-20 flex flex-row justify-center items-center "
      >
        <div id="truly-content-container" className="flex">
          <div
            id="truly-content-text"
            className="flex flex-col w-[40vw] justify-center text-center items-start"
          >
            <h2 className="text-5xl text-white font-playfair font-bold mb-4">
              DIVNA, TRULY
            </h2>
            <p
              id="truly-text"
              className="text-justify text-white mb-8 w-[33vw]"
            >
              Always been the outlier who felt the urge to right every wrong
              since age three. Happy, driven people can be a handful — and tend
              to piss off those at war with themselves, where joy becomes an act
              of radical rebellion. Sticking to the belief that “feeling too
              deeply” isn't a flaw helped me connect, stay in tune with myself,
              and live more richly — messier, but truer. Paired with my
              insufferable hunger for adventure and change, you can bet it has
              led me through some of the ugliest, most brutal — but also
              magnificent and transformative — times of my life… yet.
            </p>
            <a href="#biography">
              <button
                className="cursor-clicking hover:cursor-clicking relative border rounded-none border-white bg-transparent text-white px-6 py-3 font-semibold 
             hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] 
             hover:bg-white hover:text-black hover:border-white 
             transition-all duration-300 group"
              >
                <span className="relative z-10">read my bio</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent 
                     -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
                  ></span>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Truly;
