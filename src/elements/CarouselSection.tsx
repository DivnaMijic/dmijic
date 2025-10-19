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
  return (
    <div className="flex flex-col w-[88vw]  justify-center items-center">
      <div className="w-[75vw] items-center h-[10vw] p-4 flex mt-8">
        {/* left Content */}
        <div
          id="left-content"
          className="w-[25vw] pr-6 flex flex-col justify-center items-center h-[10vh]"
        >
          <h2 className="text-3xl text-left font-bold w-[20vw]">{title}</h2>
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
          className="flex justify-center items-center h-[12vh] border-r border-l border-black"
        >
          {tech && (
            <div className="flex flex-col justify-center items-center w-max h-full px-4">
              <div className="flex flex-col justify-center gap-2">
                {tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 rounded-full px-3 py-1 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right content */}
        <div className="flex h-[10vh] text-justify items-center justify-center px-8 text-base">
          <p>{description}</p>
        </div>
      </div>
      {/* Carousel always visible */}
      <div className=" flex justify-center items-center">
        <Carousel images={images} current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
};

export default CarouselSection;
