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

const forceWhiteSections = ["experience", "truly", "biography", "awards"];
const THICK_LINE_HEIGHT = 20;

const SideNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineTop, setLineTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      if (windowWidth < 1024) {
        setVisible(false);
        return;
      }

      // --- NAV VISIBILITY LOGIC ---
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

      // --- ACTIVE SECTION LOGIC ---
      const midPoint = window.scrollY + windowHeight * 0.4;
      let foundActive = false;

      const sectionsToCheck = [
        ...navSections,
        { id: "biography" },
        { id: "awards" },
      ];
      for (const section of sectionsToCheck) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (midPoint >= top && midPoint < bottom) {
          setActiveSection(section.id);
          foundActive = true;
          break;
        }
      }

      // --- GALLERY CHECK (not in nav) ---
      const galleryEl = document.getElementById("gallery");
      if (galleryEl) {
        const galleryRect = galleryEl.getBoundingClientRect();
        const seventyPercent = windowHeight * 0.7;

        const topVisible =
          galleryRect.top < windowHeight - seventyPercent &&
          galleryRect.bottom > seventyPercent;

        if (topVisible) {
          setActiveSection("__gallery__");
          foundActive = true;
        }
      }

      if (!foundActive) {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // --- THICK LINE POSITION ---
  useEffect(() => {
    if (!containerRef.current) return;

    // If gallery, force thick line to Works
    const activeIndex =
      activeSection === "__gallery__"
        ? navSections.findIndex((s) => s.id === "works")
        : navSections.findIndex((s) => s.id === activeSection);

    const buttonElements = containerRef.current.querySelectorAll("button");

    if (activeIndex !== -1 && buttonElements[activeIndex]) {
      const activeButton = buttonElements[activeIndex] as HTMLElement;
      const offsetTop =
        activeButton.offsetTop +
        activeButton.offsetHeight / 2 -
        THICK_LINE_HEIGHT / 2;
      setLineTop(offsetTop);
    }
  }, [activeSection]);

  // --- COLOR LOGIC ---
  const getHeaderColor = (sectionId: string, isActive: boolean) => {
    if (activeSection === "__gallery__") {
      // Gallery looks like Works
      return isActive || sectionId === "works"
        ? activeColors["works"]
        : "#000000";
    }
    if (forceWhiteSections.includes(activeSection)) return "#FFFFFF";
    if (isActive) return activeColors[sectionId];
    return "#000000";
  };

  const thickLineColor =
    activeSection === "__gallery__"
      ? activeColors["works"]
      : activeColors[activeSection];

  // Thin line stays black even in gallery
  const thinLineColor = forceWhiteSections.includes(activeSection)
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
