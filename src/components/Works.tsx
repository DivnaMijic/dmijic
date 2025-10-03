import React, { useState } from "react";
import Modal from "../elements/Modal";
import { projects } from "../data/project";
import CarouselSection from "../elements/CarouselSection";
import { carouselSections } from "../data/carouselSections";

const Works: React.FC = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    Array(carouselSections.length).fill(0)
  );

  const setCurrent = (index: number, value: number) => {
    setCurrentIndexes((prev: number[]) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    tech?: string[];
    src?: string;
  } | null>(null);

  return (
    <section id="works" className="flex h-auto py-10 pb-30 w-screen">
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
              <button className="relative border bg-transparent rounded-none border-black text-black px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#EAA3F4] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group">
                <span className="relative z-10">take a peek!</span>
                <span className="absolute inset-0 overflow-hidden">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
             -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
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
                className="relative w-full mb-4 cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-[1.03] hover:brightness-75 shadow-md"
                onClick={() =>
                  setModalContent({
                    title: project.title,
                    description: project.description,
                    tech: project.tech,
                    src: project.src,
                  })
                }
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Other videos section */}
          <div className="flex justify-center items-start gap-4 w-full">
            <video
              className="h-[70vh] w-auto shadow-lg"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="public/media/videos/aha.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              className="h-[70vh] w-auto shadow-lg"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="public/media/videos/aiff-ecu.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <video
              className="h-[70vh] w-auto shadow-lg"
              loop
              muted
              playsInline
              autoPlay
            >
              <source
                src="public/media/videos/sit-sip-connect.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* ///// */}

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
          {/* ///// */}

          {modalContent && (
            <Modal
              isOpen={!!modalContent}
              onClose={() => setModalContent(null)}
              image={modalContent.src}
              title={modalContent.title}
            >
              {/* children rendered inside Modal's right column */}
              <div className="flex flex-col gap-4">
                <p className="text-sm">{modalContent.description}</p>

                {modalContent.tech && (
                  <ul className="list-disc list-inside space-y-1">
                    {modalContent.tech.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                )}

                {/* optional button */}
                {/* <a href="#" className="inline-block mt-4 px-4 py-2 border">See on GitHub</a> */}
              </div>
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
