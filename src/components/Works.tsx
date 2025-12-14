import React from "react";

const Works: React.FC = () => {
  return (
    <section
      id="works"
      className="snap-start cursor-browsingPink flex w-[100svw] h-[100svh] bg-pink items-center justify-center px-4 md:px-0 box-border"
    >
      <div
        id="works-content-container"
        className="w-full md:w-[90svw] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center md:text-left"
      >
        {/* Left content */}
        <div className="flex flex-col md:max-w-[30vw] justify-center">
          <h2 className="text-4xl md:text-7xl font-sunday font-semibold mb-4 text-black z-10">
            Made by me!
          </h2>
          <p className="text-xl md:text-3xl font-suranna">
            Honored to exhibit my works, passion projects & more
          </p>
        </div>

        {/* Vertical line */}
        <div className="hidden md:block h-[50vh] border-l-[1px] border-black" />

        {/* Right content */}
        <div className="flex flex-col md:flex-col p-4 w-full md:w-[35vw] text-justify gap-4">
          <p className="text-base md:text-m">
            Here, you'll find some of the projects I've worked on during my
            years of higher education, as well as personal passion projects and
            non-academic materials.
          </p>
          <p className="text-base md:text-m">
            Pretty neat, right? Click on any image, arrow or toggle to see or
            learn more about each work.
          </p>
          <a href="#gallery">
            <button className="cursor-clicking hover:cursor-clicking relative border bg-transparent rounded-none border-black text-black px-4 md:px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#B9ADED] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group">
              <span className="relative z-10">take a peek!</span>
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;
