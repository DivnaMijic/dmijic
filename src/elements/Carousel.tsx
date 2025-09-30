import React from "react";

interface CarouselProps {
  images: string[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  height?: string; // optional, default height
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  current,
  setCurrent,
  height = "full",
}) => {
  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-[75vw] h-auto justify-center flex mt-16 mb-4 bg-green-100">
      {/* Slides */}
      <div className="overflow-hidden w-full" style={{ height }}>
        <div
          className="flex transition-transform duration-700 ease-in-out h-full bg-green-100"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="h-full w-auto flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-16 transform -translate-y-1/2 p-2 bg-transparent z-50"
      >
        <img
          src="/media/icons/arrow-left.png"
          alt="Previous"
          className="w-8 h-8"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-16 transform -translate-y-1/2 p-2 bg-transparent z-50"
      >
        <img
          src="/media/icons/arrow-right.png"
          alt="Next"
          className="w-8 h-8"
        />
      </button>
    </div>
  );
};

export default Carousel;
