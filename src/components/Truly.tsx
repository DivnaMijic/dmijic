import React from "react";
import trulyBg from "/media/images/truly-photo.webp";

const Truly: React.FC = () => {
  return (
    <section
      id="truly"
      className="cursor-browsingPink flex w-[100svw] h-[100svh] bg-white-100 items-center justify-end px-4 md:px-0 box-border"
      style={{ backgroundImage: `url(${trulyBg})` }}
      data-scroll-section
    >
      <div
        id="truly-content-container"
        className="w-full md:w-[90svw] flex flex-col items-center gap-2 sm:gap-3 md:gap-4 md:text-left px-2 sm:px-4"
      >
        <div className="w-[55%] justify-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-left  font-bold text-white text-left mb-4"
            data-scroll
            data-scroll-speed="1"
          >
            DIVNA, TRULY
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-justify mb-8">
            Always been the outlier who felt the urge to right every wrong since
            age three. Happy, driven people can be a handful — and tend to piss
            off those at war with themselves, where joy becomes an act of
            radical rebellion. Sticking to the belief that “feeling too deeply”
            isn't a flaw helped me connect, stay in tune with myself, and live
            more richly — messier, but truer. Paired with my insufferable hunger
            for adventure and change, you can bet it has led me through some of
            the ugliest, most brutal — but also magnificent and transformative —
            times of my life… yet.
          </p>
          <a href="#biography" data-scroll data-scroll-speed="1">
            <button
              className="relative border rounded-none border-white bg-transparent text-white px-4 py-2 sm:px-6 sm:py-3 font-semibold 
                       hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] 
                       hover:bg-white hover:text-black hover:border-white 
                       transition-all duration-300 group cursor-clicking"
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
    </section>
  );
};

export default Truly;
