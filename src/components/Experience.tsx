import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-screen h-screen flex ">
      <div id="sideNavSpace" className="h-screen w-[12vw] bg-yellow-100"></div>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src="/media/videos/website-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div
        id="experience-section-container"
        className="w-[88vw] z-10 flex flex-col justify-center items-center"
      >
        <div id="experience-content-container" className="w-[75vw]">
          <h2 className="text-5xl font-playfair font-bold mb-16 text-left justify-left text-white z-10">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div
            id="experience-grid"
            className="grid grid-cols-[auto_1fr_auto_1fr] gap-x-12 gap-y-12 text-white w-[75vw]"
          >
            <div className="text-left font-semibold font-dmserif">2024</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                SPREAD Agency, Junior Web Developer
              </h3>
              <h4 className="text-md italic">Zagreb, Croatia</h4>
              <p className="text-sm mt-2 leading-relaxed">
                Developing websites and performing security checks. Provided
                consistent client communication to offer the best services and
                solutions for graphic design, website databases, graphics, and
                visuals.
              </p>
            </div>

            <div className="text-left font-semibold">2023</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                The European Independent Film Festival: ÉCU Paris, Head of
                Graphic Design Department
              </h3>
              <h4 className="text-md italic">Paris, France</h4>
              <p className="text-sm mt-2 leading-relaxed">
                Work in an international environment, responsible for delegating
                tasks to designers and creation of promotional materials such as
                posters, tote bags, social media posts, and banners.
              </p>
            </div>

            {/* Row 2 */}
            <div className="text-left font-semibold">2022-2024</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                RIT Croatia, Professor's Assistant
              </h3>
              <h4 className="text-md italic">RIT Croatia</h4>
              <p className="text-sm mt-2 leading-relaxed">
                Assisting in the Digital Survey I course, aiding students during
                lectures on new media design, teaching how to use Adobe
                Illustrator and Photoshop. Providing weekly tutoring hours for
                freshmen outside of lectures.
              </p>
            </div>

            <div className="text-left font-semibold">2019-2020</div>
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

export default Experience;
