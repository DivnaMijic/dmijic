import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="cursor-browsingPink flex w-[100svw] h-[100svh] bg-white-100 items-center justify-center px-4 md:px-0 box-border"
    >
      <div
        id="about-content-container"
        className="w-full md:w-[90svw] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 text-center md:text-left"
      >
        {/* Text column */}
        <div className="h-full flex flex-col items-center md:items-start p-4 w-full md:w-[40svw]">
          <h2 className="text-3xl md:text-5xl font-musty font-bold mb-4">
            ABOUT
          </h2>
          <p className="h-full text-gray-700 mb-8 text-base md:text-lg">
            My work is guided by values I live by: show up fully, never fake the
            feeling, lead with care, and leave every place better than I found
            it. This isn't just a portfolio. It's a love letter to everything I
            believe in.
          </p>
          <a href="#works" className="h-full">
            <button className="cursor-clicking hover:cursor-clicking relative border bg-transparent rounded-none border-black text-black px-4 md:px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#EAA3F4] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group">
              <span className="relative z-10">my works</span>
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></span>
              </span>
            </button>
          </a>
        </div>

        {/* Image */}
        <div className="h-full flex justify-center items-center mt-6 md:mt-0 px-4 md:px-0">
          <img
            data-scroll
            data-scroll-speed="1.5"
            src="media/images/about-me.webp"
            alt="me"
            className="h-[50vh] md:h-[60vh] object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
