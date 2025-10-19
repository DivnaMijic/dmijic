import React from "react";

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="cursor-browsingBlue relative w-screen h-screen flex text-black"
    >
      <div id="sideNavSpace" className="h-screen w-[12vw]"></div>
      <div
        id="education-section-container"
        className="w-[88vw] z-10 flex flex-col justify-center items-center"
      >
        <div id="education-content-container" className="w-[75vw]">
          <h2 className="text-7xl font-sunday font-semibold mb-16 text-left justify-left text-black z-10">
            EDUCATION
          </h2>
          <div
            id="education-grid"
            className="grid grid-cols-[auto_1fr_auto_1fr] gap-x-12 gap-y-12 text-black w-[75vw]"
          >
            {/* Row 1 */}
            <div className="text-left text-xl font-suranna ext-lg">
              2024 - 2025
            </div>
            <div className="text-left">
              <h3 className="text-xl font-light font-dmserif">
                Rochester Institute of Technology
              </h3>
              <h4 className="font-josefin font-light text-md ">
                Rochester, NY, USA
              </h4>
              <p className="font-josefin font-thin text-xl mt-2 leading-relaxed">
                USA's top 5 highly regarded Golisano College of Computing and
                Information Sciences. Bachelor of Science in IT, Web, and Mobile
                Computing, Cum Laude.
              </p>
            </div>
            {/* Row 2 */}
            <div className="text-left text-xl font-suranna">2018 - 2021</div>
            <div className="text-left">
              <h3 className="text-xl font-dmserif font-semibold">
                Private Art College-Preparatory High School with Rights
              </h3>
              <h4 className="font-josefin font-light text-md ">
                Zagreb, Croatia
              </h4>
              <p className="font-josefin font-thin text-xl mt-2 leading-relaxed">
                Multiple subjects taught in English, alongside additional art
                classes, performing and film arts, radio and writing.
              </p>
            </div>
            <div className="text-left text-xl font-suranna">2021 - 2024</div>
            <div className="text-left">
              <h3 className="text-xl font-dmserif font-semibold">
                RIT Croatia
              </h3>
              <h4 className="font-josefin font-light text-md ">
                Zagreb, Croatia
              </h4>
              <p className="font-josefin font-thin  text-xl mt-2 leading-relaxed">
                Courses held entirely in English, covering a plethora of skills
                including, but not limited to, Java, CSS, HTML, JavaScript,
                MySQL, PHP, TypeScript, SQL, Adobe Photoshop and Illustrator,
                Maya Autodesk, DaVinci Resolve, Lightroom, Audacity, Figma
                (wireframing), and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
