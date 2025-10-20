import React, { useState, useEffect } from "react";

const navSections = [
  { id: "about", label: "about" },
  {
    id: "experience",
    label: "experience",
    children: [
      { id: "professional", label: "professional" },
      { id: "education", label: "education" },
      { id: "leadership", label: "leadership" },
    ],
  },
  { id: "works", label: "works" },
  {
    id: "truly",
    label: "biography",
    children: [{ id: "biography", label: "detailed bio" }],
  },
  { id: "contact", label: "contact" },
];

const allSections = [
  "about",
  "experience",
  "education",
  "leadership",
  "works",
  "truly",
  "biography",
  "contact",
  "awards",
  "featured",
];

const sectionToNav: Record<string, string> = {
  about: "about",
  experience: "experience",
  professional: "experience",
  education: "experience",
  leadership: "experience",
  works: "works",
  truly: "truly",
  biography: "truly",
  contact: "contact",
};

const sectionColors: Record<
  string,
  { line: string; text: string; rest: string }
> = {
  about: { line: "#EAA3F4", text: "#EAA3F4", rest: "#000000" },
  experience: { line: "#A0BEF4", text: "#A0BEF4", rest: "#000000" },
  education: { line: "#A0BEF4", text: "#A0BEF4", rest: "#000000" },
  professional: { line: "#A0BEF4", text: "#A0BEF4", rest: "#000000" },
  leadership: { line: "#FFFFFF", text: "#FFFFFF", rest: "#000000" },
  works: { line: "#B9ADED", text: "#B9ADED", rest: "#000000" },
  truly: { line: "#000000", text: "#000000", rest: "#000000" },
  biography: { line: "#FFFFFF", text: "#FFFFFF", rest: "#000000" },
  contact: { line: "#ECD586", text: "#ECD586", rest: "#000000" },
};

const SideNav: React.FC = () => {
  const [activeParent, setActiveParent] = useState<string>("about");
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Update active section
      for (const id of allSections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          const parent = sectionToNav[id] ?? id;
          if (id === "experience") {
            setActiveParent("experience");
            setActiveSub("professional");
          } else {
            setActiveParent(parent);
            setActiveSub(id !== parent ? id : null);
          }
          break;
        }
      }

      // Determine nav visibility
      const aboutEl = document.getElementById("about");
      const aboutTrigger = aboutEl
        ? aboutEl.offsetTop - window.innerHeight / 2
        : 0;

      const awardsEl = document.getElementById("awards");
      const featuredEl = document.getElementById("featured");
      const trulyEl = document.getElementById("truly");

      let hideNav = false;

      if (awardsEl && trulyEl) {
        const awardsTop = awardsEl.offsetTop;
        const trulyTop = trulyEl.offsetTop;

        // Hide nav only strictly within Awards range, not overlapping Truly
        if (
          window.scrollY + window.innerHeight / 2 >= awardsTop &&
          window.scrollY + window.innerHeight / 2 < trulyTop
        ) {
          hideNav = true;
        }
      }

      if (featuredEl) {
        const top = featuredEl.offsetTop;
        const bottom = top + featuredEl.offsetHeight;
        if (
          window.scrollY + window.innerHeight / 2 >= top &&
          window.scrollY <= bottom
        ) {
          hideNav = true;
        }
      }

      setShowNav(
        !hideNav && (window.scrollY >= aboutTrigger || activeParent === "truly")
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = navSections.findIndex((s) => s.id === activeParent);
  const parentIndexSafe = activeIndex >= 0 ? activeIndex : 0;

  const inEducation = activeSub === "education";
  const inProfessional =
    activeSub === "professional" ||
    (activeParent === "experience" && activeSub === "professional");
  const inLeadership = activeSub === "leadership";
  const inProfOrLead = inProfessional || inLeadership;
  const inTrulyOrBio = activeParent === "truly" || activeSub === "biography";

  // LINE COLOR RULES
  const lineColor = inTrulyOrBio
    ? "#FFFFFF"
    : inProfOrLead
    ? "#FFFFFF"
    : inEducation
    ? "#A0BEF4"
    : sectionColors[activeParent]?.line ?? "#000";

  return (
    <nav
      className={`fixed top-0 left-0 h-screen flex flex-col items-start justify-center font-sunday text-left z-50 w-[14vw] px-2 transition-transform duration-700 ${
        showNav ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="cursor-clicking hover:cursor-clicking relative left-2 flex flex-col items-start gap-4">
        {/* Vertical line */}
        <div
          className="absolute transform -translate-x-1/2 h-full w-px transition-colors duration-300"
          style={{ backgroundColor: lineColor }}
        >
          <div
            className="w-1 transition-all duration-300"
            style={{
              height: `${((parentIndexSafe + 1) / navSections.length) * 100}%`,
              backgroundColor: lineColor,
            }}
          />
        </div>

        {navSections.map((section) => {
          const isActiveParent = activeParent === section.id;

          let parentLinkColor = "#000000";

          if (inTrulyOrBio) parentLinkColor = "#FFFFFF";
          else if (inProfOrLead) parentLinkColor = "#FFFFFF";
          else if (inEducation)
            parentLinkColor =
              section.id === "experience" ? "#A0BEF4" : "#000000";
          else
            parentLinkColor = isActiveParent
              ? sectionColors[section.id]?.text ?? "#000"
              : sectionColors[section.id]?.rest ?? "#000";

          const parentClass = isActiveParent
            ? "scale-110 text-2xl font-bold px-6 transition-transform duration-300 ease-in-out"
            : "text-base transition-transform duration-300 ease-in-out";

          return (
            <div
              key={section.id}
              className="transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col"
            >
              <a
                href={`#${section.id}`}
                onClick={() => {
                  if (section.id === "experience") {
                    setActiveParent("experience");
                    setActiveSub("professional");
                  } else {
                    setActiveParent(section.id);
                    setActiveSub(null);
                  }
                }}
                className={`relative z-10 py-3 px-4 ${parentClass} cursor-clicking`}
                style={{ color: parentLinkColor }}
              >
                {section.label}
              </a>

              {section.children && (
                <div className="ml-6 flex flex-col gap-2">
                  {section.children.map((child) => {
                    const isActiveSub = activeSub === child.id;
                    let childColor = "#000000";

                    if (inTrulyOrBio) childColor = "#FFFFFF";
                    else if (child.id === "biography" && isActiveSub)
                      childColor = "#000000";
                    else if (inProfOrLead) childColor = "#FFFFFF";
                    else if (inEducation)
                      childColor = isActiveSub ? "#A0BEF4" : "#000000";
                    else
                      childColor = isActiveSub
                        ? sectionColors[child.id]?.text ?? "#000"
                        : sectionColors[section.id]?.rest ?? "#000";

                    const childClass = isActiveSub
                      ? "font-bold scale-105 transition-transform duration-300 ease-in-out"
                      : "opacity-70 transition-transform duration-300 ease-in-out";

                    return (
                      <a
                        key={child.id}
                        href={`#${
                          child.id === "professional" ? "experience" : child.id
                        }`}
                        onClick={() => {
                          setActiveParent(section.id);
                          setActiveSub(child.id);
                        }}
                        className={`text-sm ${childClass} cursor-clicking transition-transform duration-300 ease-in-out hover:scale-105`}
                        style={{ color: childColor }}
                      >
                        {child.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNav;
