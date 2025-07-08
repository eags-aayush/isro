import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-text border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Team Info */}
        <p className="text-lg font-semibold mb-2">Team FloodGuardians</p>
        <p className="text-sm mb-4">Submitted for SmartCity Hackathon 2025 @ ABC Institute of Technology</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 my-4">
          <a
            href="https://github.com/eags-aayus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/imagiwaeve"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="text-xs text-text mt-6">
          &copy; 2025 FloodGuardians. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
