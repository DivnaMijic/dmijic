import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ExperienceItem from "../elements/ExperienceItem";
import EducationItem from "../elements/EducationItem";
import LeadershipItem from "../elements/LeadershipItem";
import leadershipData from "../data/leadershipData";
import experienceData from "../data/experienceData";
import educationData from "../data/educationData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="snap-start w-[100svw] h-[100svh] cursor-browsingWhite box-border"
    >
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={30}
        style={{ height: "full", width: "full" }}
      >
        <SwiperSlide
          style={{
            background: "#92CCD3",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{
              height: "full",
              width: "90svw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <div className="w-[60vw] flex flex-col justify-start items-start overflow-y-auto max-h-[100svh] py-20 scrollbar-none ">
              <div className="sticky top-0 z-20">
                <h2 className="text-7xl font-sunday font-semibold mb-16 text-left text-white">
                  EXPERIENCE
                </h2>
              </div>
              <div className=" overflow-y-auto scrollbar-none">
                {experienceData.map((item, index) => (
                  <ExperienceItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            background: "#EFC0DD",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{
              height: "full",
              width: "90svw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <div className="w-[60vw] flex flex-col justify-start items-start overflow-y-auto max-h-[100svh] py-20 scrollbar-none ">
              <div className="sticky top-0 z-20">
                <h2 className="text-7xl font-sunday font-semibold mb-16 text-left text-white">
                  LEADERSHIP & IMPACT
                </h2>
              </div>
              <div className=" overflow-y-auto scrollbar-none">
                {leadershipData.map((item, index) => (
                  <LeadershipItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            background: "#9B92D3",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            color: "white",
          }}
        >
          <div
            style={{
              height: "full",
              width: "90svw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <div className="w-[60vw] flex flex-col justify-start items-start overflow-y-auto max-h-[100svh] py-20 scrollbar-none ">
              <div className="sticky top-0 z-20">
                <h2 className="text-7xl font-sunday font-semibold mb-16 text-left text-white">
                  EDUCATION
                </h2>
              </div>
              <div className=" overflow-y-auto scrollbar-none">
                {educationData.map((item, index) => (
                  <EducationItem key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Experience;
