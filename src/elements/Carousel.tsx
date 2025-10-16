import React, { useEffect, useRef } from "react";

interface CarouselProps {
  images: string[];
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  height?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  current,
  setCurrent,
  height = "full",
}) => {
  const autoIntervalRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);
  const currentRef = useRef(current); // 👈 track latest index

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  const handleManualClick = (direction: "left" | "right") => {
    if (direction === "left") prevSlide();
    else nextSlide();

    // Pause auto-scroll for 8s
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    if (autoIntervalRef.current) clearInterval(autoIntervalRef.current);

    pauseTimeoutRef.current = window.setTimeout(() => {
      startAutoScroll(); // resume auto-scroll after 8s
    }, 8000);
  };

  const startAutoScroll = () => {
    if (autoIntervalRef.current) clearInterval(autoIntervalRef.current);

    autoIntervalRef.current = window.setInterval(() => {
      // Use latest value from ref, not stale closure
      setCurrent((currentRef.current + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoIntervalRef.current) clearInterval(autoIntervalRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [images.length]);

  return (
    <div className="relative w-[75vw] h-auto flex justify-center mt-16">
      {/* Left arrow */}
      <div className="absolute inset-y-0 left-0 w-1/6 z-30 flex items-center justify-start pl-4">
        <img
          src="media/icons/arrow-left.png"
          alt="Prev"
          className="hover:cursor-clicking w-8 h-8 cursor-pointer"
          onClick={() => handleManualClick("left")}
        />
      </div>

      {/* Right arrow */}
      <div className="absolute inset-y-0 right-0 w-1/6 z-30 flex items-center justify-end pr-4">
        <img
          src="media/icons/arrow-right.png"
          alt="Next"
          className="hover:cursor-clicking w-8 h-8 cursor-pointer"
          onClick={() => handleManualClick("right")}
        />
      </div>

      {/* Slides */}
      <div className="overflow-hidden w-full" style={{ height }}>
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className=" h-full w-auto flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
