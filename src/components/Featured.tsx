import React from "react";
import divnaParisImg from "/media/images/featured/divna-paris.jpeg";
import ecuTeamImg from "/media/images/featured/ecu-team.png";
import collegeDayImg from "/media/images/featured/college-day.jpg";

const Featured: React.FC = () => {
  const works = [
    {
      img: divnaParisImg,
      title: "Erasmus Traineeship in Paris",
      desc: "Divna, a Web and Mobile Computing student shares her Erasmus Traineeship experience as a Graphic Designer in Paris.",
      link: "#experience",
    },
    {
      img: ecuTeamImg,
      title: "Meet the 2024 ÉCU Team",
      desc: "Meet the 2024 ÉCU team, celebrating and showcasing independent films while offering internships for cinema and film enthusiasts.",
      link: "#experience",
    },
    {
      img: collegeDayImg,
      title: "RIT Croatia College Day",
      desc: "RIT Croatia's College Day highlights the contributions of over 40 student volunteers and clubs that made the event a success.",
      link: "#experience",
    },
  ];

  return (
    <section
      id="featured"
      className="flex w-screen h-screen justify-center items-center py-24 bg-white"
    >
      <div
        id="featured-section-container"
        className=" z-10 flex flex-col justify-center items-center"
      >
        <div id="featured-content-container" className="text-left  ">
          <h2 className="text-7xl font-sunday font-semibold mb-16 text-left justify-left text-black z-10">
            FEATURED WORKS & MENTIONS{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 max-w-7xl text-left ">
            {works.map((work, idx) => (
              <div key={idx} className="flex flex-col items-left text-left">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-64 object-cover mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{work.title}</h3>
                <p className="text-sm text-left  text-gray-700 mb-6">
                  {work.desc}
                </p>
                <a href={work.link}>
                  <button className="cursor-clicking hover:cursor-clicking relative border bg-transparent rounded-none border-black text-black px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#EAA3F4] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group">
                    <span className="relative z-10">read more</span>
                    <span className="absolute inset-0 overflow-hidden">
                      <span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                     -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
                      ></span>
                    </span>
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
