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
    <section id="works" className="flex h-[1000vh] w-screen">
      <div id="sideNavSpace" className="h-screen w-[12vw] "></div>
      <div
        id="works-section-container"
        className=" w-[88vw] flex flex-col justify-center items-center "
      >
        <div
          id="works-content-text"
          className="flex flex-row w-[45vw] justify-center items-start"
        >
          <h3 className="text-xl text-left font-dmserif">
            Honored to exhibit my works, passion projects & more
          </h3>
          <p className="text-m text-justify pl-4 w-[35vw] mb-2">
            Here, you'll find some of the projects I've worked on during my
            years of higher education, as well as personal passion projects and
            non-academic materials.
          </p>
        </div>
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
    </section>
  );
};

export default Works;
