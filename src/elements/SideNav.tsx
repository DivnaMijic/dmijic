import React, { useState, useEffect } from "react";

/**
 * SideNav behavior:
 * - professional & leadership: parent + active sub blue+bold, everything else WHITE, lines WHITE
 * - education: parent + education blue+bold, lines BLUE, everything else BLACK
 * - detailed-bio (biography) when active => sublink turns BLACK
 */

// Sidebar structure (unique child IDs)
const navSections = [
  { id: "about", label: "about" },
  {
    id: "experience",
    label: "experience",
    children: [
      { id: "professional", label: "professional" }, // unique id
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

// All scroll-sensitive sections (these must match ids in your page)
const allSections = [
  "about",
  "experience", // the main experience section (we treat this as 'professional' when active)
  "education",
  "leadership",
  "works",
  "truly",
  "biography",
  "contact",
];

// Map real section -> nav parent
const sectionToNav: Record<string, string> = {
  about: "about",
  experience: "experience",
  professional: "experience", // optional — we treat experience as professional when needed
  education: "experience",
  leadership: "experience",
  works: "works",
  truly: "truly",
  biography: "truly",
  contact: "contact",
};

// Default colors per logical section (used as fallback)
const sectionColors: Record<
  string,
  { line: string; text: string; rest: string }
> = {
  about: { line: "#EAA3F4", text: "#EAA3F4", rest: "#000000" },
  experience: { line: "#A0BEF4", text: "#A0BEF4", rest: "#000000" }, // blue
  education: { line: "#A0BEF4", text: "#A0BEF4", rest: "#000000" },
  professional: { line: "#A0BEF4", text: "#A0BEF4", rest: "#000000" },
  leadership: { line: "#FFFFFF", text: "#FFFFFF", rest: "#000000" },
  works: { line: "#B9ADED", text: "#B9ADED", rest: "#000000" },
  truly: { line: "#000000", text: "#000000", rest: "#000000" },
  biography: { line: "#FFFFFF", text: "#FFFFFF", rest: "#000000" }, // full-bio used to be white text
  contact: { line: "#000000", text: "#000000", rest: "#000000" },
};

const SideNav: React.FC = () => {
  const [activeParent, setActiveParent] = useState<string>("about");
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // find first matching visible section
      for (const id of allSections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          // Map the section to the nav parent
          const parent = sectionToNav[id] ?? id;
          // Special handling: treat scrolled-to #experience as the "professional" sub active
          if (id === "experience") {
            setActiveParent("experience");
            setActiveSub("professional"); // highlight professional when inside experience
          } else {
            setActiveParent(parent);
            setActiveSub(id !== parent ? id : null);
          }
          break; // stop after first match
        }
      }

      // Show/hide nav based on reaching "about" trigger point
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        const trigger = aboutEl.offsetTop - window.innerHeight / 2;
        setShowNav(window.scrollY >= trigger);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // initialize immediately in case user lands mid-page
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = navSections.findIndex((s) => s.id === activeParent);
  const parentIndexSafe = activeIndex >= 0 ? activeIndex : 0;

  // flags for behavior
  const inEducation = activeSub === "education";
  const inProfessional =
    activeSub === "professional" ||
    (activeParent === "experience" && activeSub === "professional");
  const inLeadership = activeSub === "leadership";
  const inProfOrLead = inProfessional || inLeadership;

  // line color rules:
  // - professional/leadership => lines WHITE
  // - education => lines BLUE
  // - otherwise follow parent section color
  const lineColor = inProfOrLead
    ? "#FFFFFF"
    : inEducation
    ? "#A0BEF4"
    : sectionColors[activeParent]?.line ?? "#000";

  return (
    <nav
      className={`fixed top-0 left-0 h-screen flex flex-col items-start justify-center text-left z-50 w-[14vw] px-2 transition-transform duration-700 ${
        showNav ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="relative left-2 flex flex-col items-start gap-4">
        {/* Vertical / progress line */}
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
          // determine parent link color:
          // - if in prof/lead: parent "experience" is blue, everything else white
          // - if in education: parent "experience" is blue, everything else black
          // - otherwise use sectionColors
          let parentLinkColor = sectionColors[section.id]?.rest ?? "#000000";
          if (inProfOrLead) {
            parentLinkColor =
              section.id === "experience" ? "#FFFFFF" : "#FFFFFF";
          } else if (inEducation) {
            parentLinkColor =
              section.id === "experience" ? "#A0BEF4" : "#000000";
          } else {
            parentLinkColor = isActiveParent
              ? sectionColors[section.id]?.text ?? "#000"
              : sectionColors[section.id]?.rest ?? "#000";
          }

          // class for parent (bold/2xl for active)
          const parentClass = isActiveParent
            ? "scale-110 text-2xl font-bold px-6"
            : "text-base";

          return (
            <div key={section.id} className="flex flex-col">
              {/* Parent link: clicking experience should also mark professional as active */}
              <a
                href={`#${section.id}`}
                onClick={() => {
                  // if clicking parent experience, we want both parent + professional highlighted
                  if (section.id === "experience") {
                    // allow default navigation to #experience, but also mark professional
                    // set state quickly so UI updates instantly
                    setActiveParent("experience");
                    setActiveSub("professional");
                    // do not prevent default so browser still scrolls to #experience
                  } else {
                    // clear any sub selection when clicking other parents
                    setActiveParent(section.id);
                    setActiveSub(null);
                  }
                }}
                className={`relative z-10 transition-all duration-300 py-3 px-4 ${parentClass}`}
                style={{ color: parentLinkColor }}
              >
                {section.label}
              </a>

              {/* Sub-links */}
              {section.children && (
                <div className="ml-6 flex flex-col gap-2">
                  {section.children.map((child) => {
                    const isActiveSub = activeSub === child.id;

                    // child color rules:
                    // - biography (detailed bio) when active => black (special-case)
                    // - if in professional/leadership: active child (professional/leadership) => blue, others => white
                    // - if in education: active child => blue, others => black
                    // - otherwise use default mapping
                    let childColor =
                      sectionColors[section.id]?.rest ?? "#000000";

                    if (child.id === "biography" && isActiveSub) {
                      childColor = "#000000";
                    } else if (inProfOrLead) {
                      childColor = isActiveSub ? "#FFFFFF" : "#FFFFFF";
                    } else if (inEducation) {
                      childColor = isActiveSub ? "#A0BEF4" : "#000000";
                    } else {
                      childColor = isActiveSub
                        ? sectionColors[child.id]?.text ?? "#000"
                        : sectionColors[section.id]?.rest ?? "#000";
                    }

                    // make professional/leadership bold when active (and in the prof/lead special state)
                    const childClass = isActiveSub
                      ? "font-bold scale-105"
                      : "opacity-70";

                    // Clicking a sublink:
                    // - if the child points to the same #experience section (professional), ensure it highlights
                    // - otherwise, allow default navigation
                    return (
                      <a
                        key={child.id}
                        href={`#${
                          child.id === "professional" ? "experience" : child.id
                        }`} // professional scrolls to #experience
                        onClick={() => {
                          setActiveParent(section.id);
                          setActiveSub(child.id);
                        }}
                        className={`transition-all duration-300 text-sm ${childClass}`}
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
