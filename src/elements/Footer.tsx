import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen bg-black text-white py-6 flex flex-col items-center justify-center border-t border-white/10">
      <div className="flex space-x-6 mb-3">
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
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-colors text-sm font-medium"
        >
          divnamijic.com
        </a>
      </div>

      <p className="text-xs text-gray-400">
        Created by <span className="font-semibold text-white">Divna Mijić</span>{" "}
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
