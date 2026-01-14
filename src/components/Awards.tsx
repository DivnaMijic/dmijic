import React from "react";
import awardsBg from "/media/images/holo-bg.webp"; // adjust path if needed
import leafIcon from "/media/icons/leaf.svg";

const Awards: React.FC = () => {
  return (
    <section
      id="awards"
      className="relative w-[100svw] h-[100svh] flex flex-col items-center justify-center overflow-hidden "
      style={{
        backgroundImage: `url(${awardsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // for parallax effect
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="w-full bg-white/80 z-20 flex flex-col text-center justify-center px-8 py-4">
        <h2 className="text-7xl font-sunday font-semibold mb-4 text-center text-black">
          AWARDS & ACCOLADES
        </h2>
        <h3 className="text-2xl mb-4 text-center text-black">
          Honorary beneficiary of
        </h3>

        {/* Awards container */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-3 w-full">
          {[
            {
              title: "DEAN'S LIST",
              description: "Multi-time Outstanding Scholar Awardee",
            },
            {
              title: "ERASMUS GRANT",
              description: "Recipient of Women in STEM Erasmus grant",
            },
            {
              title: "LIDRANO 2019",
              description: "Best Radio Show Awardee",
            },
            {
              title: "RECOGNITIONS",
              description:
                "Student Life Excellence Award Nominee, Mentor, Volunteer et al.",
            },
          ].map((award, idx) => (
            <div
              key={idx}
              className="relative flex flex-row items-center bg-white/0 p-4 w-full md:w-1/2 lg:w-[23vw]"
            >
              {/* Left leaf */}
              <img
                src={leafIcon}
                alt="leaf"
                className="h-[14vh] mr-2 transform -scale-x-100"
              />

              {/* Text */}
              <div className="flex flex-col text-center">
                <h3 className="text-2xl font-sunday font-semibold text-black">
                  {award.title}
                </h3>
                <p className="text-lg font-josefin italic text-gray-800">
                  {award.description}
                </p>
              </div>

              {/* Right leaf */}
              <img src={leafIcon} alt="leaf" className="h-[14svh] ml-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
