import React from "react";

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="relative w-screen h-screen flex ">
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
        id="leadership-section-container"
        className="w-[88vw] z-10 flex flex-col justify-center items-center"
      >
        <div id="leadership-content-container" className="w-[75vw]">
          <h2 className="text-5xl font-playfair font-bold mb-16 text-left justify-left text-white z-10">
            LEADERSHIP & IMPACT
          </h2>
          <div
            id="leadership-grid"
            className="grid grid-cols-[auto_1fr_auto_1fr] gap-x-12 gap-y-12 text-white w-[75vw]"
          >
            <div className="text-left font-semibold">2024</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                Software & Vehicle Systems Engineer, Solar Racecar Club: Hot
                Wheelz
              </h3>
              <h4 className="text-md italic">
                Rochester Institute of Technology, USA
              </h4>
              <p className="text-sm mt-2 leading-relaxed">
                Props and Controls Member, Hot Wheelz student engineering team
                at RIT (USA), responsible for designing the car's GUI to display
                BMS data via CANbus using a Raspberry Pi.
              </p>
            </div>

            <div className="text-left font-semibold">2023</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">
                Founder & President, “Helping Paws” Volunteer Club
              </h3>
              <h4 className="text-md italic">Zagreb, Croatia</h4>
              <p className="text-sm mt-2 leading-relaxed">
                Work in an international environment, responsible for delegating
                tasks to designers and creation of promotional materials such as
                posters, tote bags, social media posts, and banners.
              </p>
            </div>

            {/* Row 2 */}
            <div className="text-left font-semibold">2022-2025</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">National & Local Impact</h3>
              <h4 className="text-md italic">Zagreb, Croatia</h4>
              <ul className="list-disc list-inside space-y-2 text-sm mt-2 leading-relaxed">
                <li>
                  Head of the Department of Social Activities in the Council of
                  Students of Polytechnics & Colleges of the Republic of Croatia
                </li>
                <li>
                  Head of the Department of Events & Finances and Communications
                  Department in the RIT Croatia Student Government
                </li>
                <li>
                  Vice-President of the Art Club, Business Exploration Club
                  participant
                </li>
              </ul>
            </div>

            <div className="text-left font-semibold">2022-2024</div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Peer Mentor & Library Aide</h3>
              <h4 className="text-md italic">RIT Croatia, Zagreb</h4>
              <p className="text-sm mt-2 leading-relaxed">
                Providing guidance, support, and advice to freshmen, Erasmus and
                Global Scholar students to help them navigate the challenges of
                college life and make informed academic and personal decisions.
                Also served as a Library Assistant at RIT Croatia, assisting
                with academic support and resource management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
