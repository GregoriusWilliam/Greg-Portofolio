import React, { useState, useEffect, useCallback } from "react";
import { socialMediaUrl } from "../Details";
import instagramIcon from "../assets/social/instagram.svg";
import githubIcon from "../assets/social/github.svg";
import linkedinIcon from "../assets/social/linkedin.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { linkedin, github, instagram } = socialMediaUrl;

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        bg-black/80 backdrop-blur-md border-b-4 border-dave-sun
      `}
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <a href="#home" className="text-xl md:text-2xl font-title text-dave-sun tracking-tighter">
          GREG PORTOFOLIO
        </a>

        <button
          onClick={toggleClass}
          className="cursor-pointer md:hidden relative z-50 focus:outline-none bg-dave-sun p-1 pixel-border"
          aria-label="Toggle Menu"
        >
          <svg
            className="stroke-black"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625M1.4375 6.3125H14.5625"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <nav
          className={`${
            !isOpen ? "hidden" : "block"
          } absolute top-14 left-0 w-full bg-black/95 md:bg-transparent md:static md:w-auto md:flex md:items-center transition-all duration-300`}
        >
          <ul className="font-title text-white md:flex items-center md:space-x-8 text-center uppercase text-sm">
            <li className="py-4 md:py-0 border-b-4 border-transparent hover:border-dave-sun transition-all">
              <a href="#home" onClick={toggleClass} className="hover:text-dave-sun">Home</a>
            </li>
            <li className="py-4 md:py-0 border-b-4 border-transparent hover:border-dave-sun transition-all">
              <a href="#about" onClick={toggleClass} className="hover:text-dave-sun">Profile</a>
            </li>
            <li className="py-4 md:py-0 border-b-4 border-transparent hover:border-dave-sun transition-all">
              <a href="#experience" onClick={toggleClass} className="hover:text-dave-sun">Experience</a>
            </li>
            <li className="py-4 md:py-0 border-b-4 border-transparent hover:border-dave-sun transition-all">
              <a href="#technologies" onClick={toggleClass} className="hover:text-dave-sun">Skills</a>
            </li>
            <li className="py-4 md:py-0 border-b-4 border-transparent hover:border-dave-sun transition-all">
              <a href="#projects" onClick={toggleClass} className="hover:text-dave-sun">Projects</a>
            </li>
          </ul>

          <div className="flex justify-center items-center py-6 md:py-0 md:ml-10 space-x-4 border-t-2 border-white/10 md:border-t-0">
            <a href={instagram} target="_blank" rel="noreferrer noopener" className="hover:scale-125 transition-transform bg-white/10 p-1 pixel-border">
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5 invert" />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer noopener" className="hover:scale-125 transition-transform bg-white/10 p-1 pixel-border">
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 invert" />
            </a>
            <a href={github} target="_blank" rel="noreferrer noopener" className="hover:scale-125 transition-transform bg-white/10 p-1 pixel-border">
              <img src={githubIcon} alt="GitHub" className="w-5 h-5 invert" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
