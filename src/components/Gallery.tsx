import React, { useState } from "react";
import { projects } from "../data/project";
import carouselData from "../data/carouselData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CarouselItem from "../elements/CarouselItem";

const Gallery: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="snap-start cursor-browsingPink flex w-[100svw] bg-white  items-center justify-end box-border"
    >
      <div
        id="works-section-container"
        className=" w-[90svw] flex flex-col justify-center items-center "
      >
        <div id="portfolio">
          {/* Project images section */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 w-full mb-16 px-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="relative w-full mb-4 overflow-hidden cursor-clicking hover:scale-105 transition-transform duration-300 ease-in-out transform"
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
        </div>
        {carouselData.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
