import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setShow(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-screen z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between justify-center items-center px-20 py-3 bg-white/60 backdrop-blur-sm bg-yellow-100">
        <ul className="flex gap-6">
          <li>
            <a href="#home">
              <img
                src="/media/icons/logo.svg"
                alt="Logo"
                className="h-10 hover:-translate-x-1 hover:-translate-y-1 duration-300 hover:scale-105 justify-left"
              />
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline hover:text-[#A0BEF4] text-black font-semibold"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:underline hover:text-[#EAA3F4] text-black font-semibold"
            >
              experience
            </a>
          </li>
          <li>
            <a
              href="#works"
              className="hover:underline hover:text-[#ECD586] text-black font-semibold"
            >
              works
            </a>
          </li>
          <li>
            <a
              href="#truly"
              className="hover:underline hover:text-[#B9ADED] text-black font-semibold"
            >
              biography
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline hover:text-[#ECD586] text-black font-semibold"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
