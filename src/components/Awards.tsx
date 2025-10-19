import React from "react";
import leafIcon from "/media/icons/leaf.svg";
import awardsVideo from "/media/videos/awards-video.mp4"; // adjust path if needed

const Awards: React.FC = () => {
  return (
    <section
      id="awards"
      className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src={awardsVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div
        id="awards-content-container"
        className="w-screen h-[30vh] bg-white/60 z-20 flex flex-col text-center justify-center px-8"
      >
        <h2 className="text-7xl font-sunday font-semibold mb-4 text-center text-black">
          AWARDS & ACCOLADES
        </h2>
        <h3 className="text-2xl   mb-4 text-center text-black">
          Honorary beneficiary of{" "}
        </h3>

        {/* Awards container */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 w-full">
          {[
            {
              title: "DEAN'S LIST",
              description: "Multi-time Outstanding Scholar Awardee",
            },
            {
              title: "ERASMUS GRANT RECIPIENT",
              description: "Women in STEM",
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
              className="relative flex flex-row items-center bg-white/0 p-4 w-full md:w-1/2 lg:w-[20vw]"
            >
              {/* Left leaf */}
              <img
                src={leafIcon}
                alt="leaf"
                className=" h-20 mr-2 transform -scale-x-100"
              />

              {/* Text */}
              <div className="flex flex-col text-center">
                <h3 className="text-xl font-sunday font-semibold text-black ">
                  {award.title}
                </h3>
                <p className="text-md font-josefin italic text-gray-800">
                  {award.description}
                </p>
              </div>

              {/* Right leaf */}
              <img src={leafIcon} alt="leaf" className=" h-20 ml-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
