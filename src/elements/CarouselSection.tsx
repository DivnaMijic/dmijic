import React, { useState } from "react";
import Carousel from "./Carousel";

interface Props {
  images: string[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  description: string;
  tech?: string[];
  buttonText?: string;
  buttonLink?: string;
}

const CarouselSection: React.FC<Props> = ({
  images,
  current,
  setCurrent,
  title,
  description,
  tech,
  buttonText,
  buttonLink,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-[88vw] justify-center items-center ">
      {/* Carousel always visible */}
      <div className=" flex justify-center items-center">
        <Carousel images={images} current={current} setCurrent={setCurrent} />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[75vw] flex items-center font-center py-4 focus:outline-none text-center rounded-none "
      >
        {/* Left: Title */}
        <span className="flex-[2] text-xl font-bold text-center">{title}</span>

        {/* Divider */}
        <span className="mx-4 h-6 border-l border-gray-400"></span>

        {/* Date */}
        <span className="flex-[1] text-lg text-center">21st March 2025</span>

        {/* Divider */}
        <span className="mx-4 h-6 border-l border-gray-400"></span>

        {/* Right: Show/Hide */}
        <span className="flex-[1] text-center text-lg">
          {isOpen ? "hide details -" : "show details +"}
        </span>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="w-[75vw] bg-[#F7F7F7] p-6 mt-2 flex ">
          {/* left Content */}
          <div
            id="left-content"
            className="w-[25vw] pr-6  flex flex-col justify-center items-center h-[20vh]"
          >
            <h2 className="text-3xl mb-4 text-center font-bold w-[20vw]">
              {title}
            </h2>
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" relative border bg-transparent rounded-none border-black text-black px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#EAA3F4] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
              >
                {buttonText}
              </a>
            )}
          </div>

          {/* Middle content */}
          <div
            id="middle-content"
            className="flex justify-center items-center h-[20vh] border-r border-l border-black"
          >
            {tech && (
              <ul className="list-disc px-10 flex flex-col justify-center items-center w-max h-full">
                {tech.map((t, idx) => (
                  <li key={idx} className="text-left w-full">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Right content */}
          <div className="flex h-[20vh] items-center justify-center px-10">
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselSection;
