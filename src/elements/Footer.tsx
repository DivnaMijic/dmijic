import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen bg-black text-white py-8 flex flex-col items-center justify-center border-t border-white/10 space-y-6">
      {/* Content section */}

      <ul className="flex gap-8 text-sm text-gray-300">
        {["About", "Experience", "Works", "Biography", "Contact"].map(
          (item) => {
            const targetId =
              item === "Biography" ? "truly" : item.toLowerCase();

            return (
              <li key={item}>
                <a
                  href={`#${targetId}`}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            );
          }
        )}
      </ul>

      {/* Social links */}
      <div className="flex space-x-6">
        <a
          href="https://github.com/DivnaMijic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/d-mijic/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="mailto:divna.mijic@gmail.com"
          className="hover:text-gray-300 transition-colors"
        >
          <Mail size={22} />
        </a>
        <a
          href="https://divnamijic.github.io/dmijic/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors text-sm font-medium"
        >
          dmijic
        </a>
      </div>

      {/* Footer credit */}
      <p className="text-xs text-gray-400">
        Created by <span className="font-semibold text-white">Divna Mijić</span>{" "}
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
