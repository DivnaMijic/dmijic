import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="flex h-screen w-screen">
      <div id="sideNavSpace" className="h-screen w-[9vw] "></div>

      <div
        id="about-section-container"
        className="h-screen w-[88vw] flex flex-row justify-center items-center"
      >
        <div id="about-content-container" className="flex ">
          <div
            id="about-content-text"
            className="flex flex-col w-[45vw] justify-center items-start"
          >
            <h2 className="text-5xl font-playfair   font-bold mb-4">ABOUT</h2>
            <p
              id="about-text"
              className="text-left text-gray-700 mb-8 w-[40vw]"
            >
              My work is guided by values I live by: show up fully, never fake
              the feeling, lead with care, and leave every place better than I
              found it. This isn't just a portfolio. It's a love letter to
              everything I believe in.
            </p>
            <a href="#experience">
              <button className="relative border bg-transparent rounded-none border-black text-black px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#EAA3F4] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group">
                <span className="relative z-10">my experience & impact</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
             -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
                  ></span>
                </span>
              </button>
            </a>
          </div>
          <img
            src="public/media/images/about-me.png"
            alt="me"
            className="h-[60vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
