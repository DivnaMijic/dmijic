import React, { useState } from "react";
import { projects } from "../data/project";
import CarouselSection from "../elements/CarouselSection";
import { carouselSections } from "../data/carouselSections";

const Works: React.FC = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    Array(carouselSections.length).fill(0)
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const setCurrent = (index: number, value: number) => {
    setCurrentIndexes((prev: number[]) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  return (
    <section
      id="works"
      className="cursor-browsingPurple flex h-auto py-10 pb-30 w-screen"
    >
      <div id="sideNavSpace" className="h-screen w-[12vw] "></div>
      <div
        id="works-section-container"
        className=" w-[88vw] flex flex-col justify-center items-center "
      >
        <div
          id="works-content-text"
          className="flex flex-row pt-10 pb-40  h-[100vh] justify-center items-center  gap-8"
        >
          {/* Left content */}
          <div className="flex flex-col max-w-[30vw] h-[60vh] justify-center ">
            <h2 className="text-7xl font-sunday font-semibold mb-4 text-left text-black z-10">
              Made by me!
            </h2>
            <p className="text-left text-3xl font-suranna">
              Honored to exhibit my works, passion projects & more
            </p>
          </div>

          {/* Vertical line */}
          <div className="h-[50vh] border-l-[1px] border-black"></div>
          <div className="flex flex-col">
            {/* Right paragraph */}
            <p className="text-m text-justify pl-4 w-[35vw] mb-2">
              Here, you'll find some of the projects I've worked on during my
              years of higher education, as well as personal passion projects
              and non-academic materials.
            </p>{" "}
            <p className="text-m text-justify pl-4 w-[35vw] mb-10">
              Pretty neat, right? Click on any image, arrow or toggle to see or
              learn more about each work.
            </p>
            <a href="#portfolio">
              <button className="cursor-clicking hover:cursor-clicking relative border bg-transparent rounded-none border-black text-black px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#B9ADED] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group">
                <span className="relative z-10">take a peek!</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
             -translate-x-full  group-hover:cursor-clicking group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
                  ></span>
                </span>
              </button>
            </a>
          </div>
        </div>

        <div id="portfolio">
          {/* Project images section */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 w-full mb-16 px-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="relative w-full mb-4 overflow-hidden cursor-clickings hover:scale-105 transition-transform duration-300 ease-in-out transform"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {project.type === "image" ? (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-auto object-cover shadow-md"
                  />
                ) : (
                  <video
                    src={project.src}
                    className="w-full h-auto object-cover shadow-md"
                    loop
                    muted
                    playsInline
                    autoPlay
                  />
                )}

                <div
                  className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-center p-4 text-white transition-opacity duration-300 ${
                    openIndex === i
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <button
                    className="absolute top-2 right-2 text-white bg-transparent text-xl font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenIndex(null);
                    }}
                  >
                    ✕
                  </button>

                  <h3 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-white/20 rounded-full px-3 py-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {carouselSections.map((section, i) => (
            <CarouselSection
              key={section.id}
              images={section.images}
              current={currentIndexes[i]}
              setCurrent={(val) =>
                setCurrent(
                  i,
                  typeof val === "number" ? val : val(currentIndexes[i])
                )
              }
              title={section.title}
              description={section.description}
              tech={section.tech}
              buttonText={section.buttonText}
              buttonLink={section.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
