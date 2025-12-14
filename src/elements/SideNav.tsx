import React, { useState, useEffect, useRef } from "react";

const navSections = [
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "experience", label: "Experience" },
  { id: "truly", label: "Biography" },
  { id: "contact", label: "Contact" },
];

const activeColors: Record<string, string> = {
  about: "#EAA3F4",
  works: "#B9ADED",
  experience: "#FFFFFF",
  truly: "#FFFFFF",
  contact: "#ECD586",
};

const forceWhiteSections = ["experience", "truly"];
const THICK_LINE_HEIGHT = 20;

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Check About visibility (50%)
      const aboutEl = document.getElementById("about");
      const contactEl = document.getElementById("contact");

      if (aboutEl && contactEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        const contactRect = contactEl.getBoundingClientRect();

        const aboutVisible =
          aboutRect.top + aboutRect.height * 0.5 < windowHeight;
        const contactHidden = contactRect.top + contactRect.height * 0.5 < 0;

        setVisible(aboutVisible && !contactHidden);
      }

      // Update active section
      const midPoint = window.scrollY + windowHeight * 0.4;
      for (const section of navSections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (midPoint >= top && midPoint < bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Hide nav entirely if screen is too small
      if (windowWidth < 1024) {
        // adjust 1024px as needed
        setVisible(false);
        return;
      }

      // Check About visibility (50%)
      const aboutEl = document.getElementById("about");
      const contactEl = document.getElementById("contact");

      if (aboutEl && contactEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        const contactRect = contactEl.getBoundingClientRect();

        const aboutVisible =
          aboutRect.top + aboutRect.height * 0.5 < windowHeight;
        const contactHidden = contactRect.top + contactRect.height * 0.5 < 0;

        setVisible(aboutVisible && !contactHidden);
      }

      // Update active section
      const midPoint = window.scrollY + windowHeight * 0.4;
      for (const section of navSections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (midPoint >= top && midPoint < bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // update on resize
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Update thick line position
  useEffect(() => {
    if (!containerRef.current) return;

    const activeIndex = navSections.findIndex((s) => s.id === activeSection);
    if (activeIndex === -1) return;

    const buttonElements = containerRef.current.querySelectorAll("button");
    const activeButton = buttonElements[activeIndex] as HTMLElement;

    if (activeButton) {
      const offsetTop =
        activeButton.offsetTop +
        activeButton.offsetHeight / 2 -
        THICK_LINE_HEIGHT / 2;
      setLineTop(offsetTop);
    }
  }, [activeSection]);

  const getHeaderColor = (sectionId: string, isActive: boolean) => {
    if (forceWhiteSections.includes(activeSection)) return "#FFFFFF";
    if (isActive) return activeColors[sectionId];
    return "#000000";
  };

  const thickLineColor = activeColors[activeSection];
  const thinLineColor = forceWhiteSections.includes(activeSection)
    ? "#FFFFFF"
    : activeSection === "experience"
    ? "#FFFFFF"
    : "#000000";

  return (
    <nav
      className={`fixed left-0 top-0 h-screen w-[14vw] flex flex-col justify-center items-start px-6 z-50 transform transition-transform duration-500 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div ref={containerRef} className="relative flex flex-col gap-4">
        {/* Thin vertical line */}
        <div
          className="absolute left-2 -translate-x-1/2 w-[2px] h-full transition-colors duration-300"
          style={{ backgroundColor: thinLineColor }}
        />

        {/* Thick sliding line */}
        <div
          className="absolute left-2 -translate-x-1/2 w-[4px] h-[20px] rounded-none transition-all duration-300"
          style={{
            top: `${lineTop}px`,
            backgroundColor: thickLineColor,
          }}
        />

        {/* Nav buttons */}
        {navSections.map((section) => {
          const isActive = section.id === activeSection;
          return (
            <button
              key={section.id}
              onClick={() =>
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="relative py-2 px-4 pl-4 bg-transparent text-left border-none font-sunday transition-transform duration-300"
              style={{
                color: getHeaderColor(section.id, isActive),
                fontWeight: isActive ? 800 : 400,
                transform: `scale(${isActive ? 1.08 : 1})`,
              }}
              onMouseEnter={(e) => {
                (
                  e.currentTarget as HTMLButtonElement
                ).style.transform = `scale(${isActive ? 1.12 : 1.05})`;
              }}
              onMouseLeave={(e) => {
                (
                  e.currentTarget as HTMLButtonElement
                ).style.transform = `scale(${isActive ? 1.08 : 1})`;
              }}
            >
              {section.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNav;
