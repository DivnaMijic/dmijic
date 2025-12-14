import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselItemProps {
  id: string;
  title: string;
  buttonText?: string;
  buttonLink?: string;
  tech?: string[];
  description: string;
  images: string[];
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  tech,
  description,
  images,
  buttonText,
  buttonLink,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 50 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 w-full max-w-[90vw] mb-12 items-center"
    >
      <div className="flex flex-col md:flex-row w-[90%] justify-between items-start md:items-center gap-4 mt-8 ">
        {/* Left: Title + Button */}
        <div className="flex flex-col justify-center items-start flex-shrink-0 w-full md:max-w-[35%]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold break-words">
            {title}
          </h2>
          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 border border-black px-4 py-2 sm:px-6 sm:py-2 hover:bg-black hover:text-white transition-all duration-300"
            >
              {buttonText}
            </a>
          )}
        </div>

        {/* Middle: Tech */}
        {tech && (
          <div className="flex flex-col justify-center items-center flex-shrink-0 border-l gap-y-2 border-r border-black px-2 sm:px-4 mt-4 md:mt-0">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="bg-black/5 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm inline-block"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Right: Description */}
        <div className="w-full md:max-w-[60%] px-6 sm:px-8 mt-4 md:mt-0 text-sm sm:text-base text-justify">
          <p>{description}</p>
        </div>
      </div>

      <div className="flex mt-0 w-full justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full max-w-full sm:max-w-[90vw] md:max-w-[80vw]"
          id="works-slider"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={src}
                  alt={`${title} - ${idx + 1}`}
                  className="w-full sm:w-[95%] md:w-full h-auto object-contain rounded-none shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default CarouselItem;
