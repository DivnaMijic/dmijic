import React from "react";

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-screen h-screen flex text-black"
    >
      <div id="sideNavSpace" className="h-screen w-[12vw]"></div>
      <div
        id="education-section-container"
        className="w-[88vw] z-10 flex flex-col justify-center items-center"
      >
        <div id="education-content-container" className="w-[75vw]">
          <h2 className="text-5xl font-playfair font-bold mb-16 text-left justify-left text-black z-10">
            EDUCATION
          </h2>
          <div
            id="education-grid"
            className="grid grid-cols-[auto_1fr_auto_1fr] gap-x-12 gap-y-12 text-black w-[75vw]"
          >
            {/* Row 1 */}
            <div className="text-left font-semibold">2024-2025</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                Rochester Institute of Technology
              </h3>
              <h4 className="text-md italic">Rochester, NY, USA</h4>
              <p className="text-sm mt-2 leading-relaxed">
                USA's top 5 highly regarded Golisano College of Computing and
                Information Sciences. Bachelor of Science in IT, Web, and Mobile
                Computing, Cum Laude.
              </p>
            </div>

            <div className="text-left font-semibold">2023</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">RIT Croatia</h3>
              <h4 className="text-md italic">Zagreb, Croatia</h4>
              <p className="text-sm mt-2 leading-relaxed">
                Work in an international environment, responsible for delegating
                tasks to designers and creation of promotional materials such as
                posters, tote bags, social media posts, and banners.
              </p>
            </div>

            {/* Row 2 */}
            <div className="text-left font-semibold">???</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                Private Art College-Preparatory High School with Public Rights
              </h3>
              <h4 className="text-md italic">Zagreb, Croatia</h4>
              <p className="text-sm mt-2 leading-relaxed">
                Multiple subjects taught in English, alongside additional art
                classes, performing and film arts, radio and writing.
              </p>
            </div>

            <div className="text-left font-semibold">2019–2020</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                Family-owned Businesses, Freelance Web & E-commerce Support
              </h3>
              <h4 className="text-md italic">Zagreb, Croatia</h4>
              <p className="text-sm mt-2 leading-relaxed">
                Assisting with content, layout, and SEO updates while fully
                redesigning an e-commerce site, including product listings, UX,
                checkout flow, and mobile responsiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
