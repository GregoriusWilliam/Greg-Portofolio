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
        bg-transparent
      `}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <a href="#home" className="text-2xl font-bold text-white">
          Gregorius Portfolio
        </a>

        <button
          onClick={toggleClass}
          className="cursor-pointer md:hidden relative z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="stroke-white"
            width="30"
            height="25"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625M1.4375 6.3125H14.5625"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <nav
          className={`${
            !isOpen ? "hidden" : "block"
          } absolute top-14 left-0 w-full bg-transparent md:bg-transparent md:static md:w-auto md:flex md:justify-between transition-all duration-300`}
        >
          <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10 text-center">
            <li className="py-2 md:py-0">
              <a href="#home" onClick={toggleClass}>Home</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#about" onClick={toggleClass}>About</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#technologies" onClick={toggleClass}>Skills</a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#projects" onClick={toggleClass}>Projects</a>
            </li>
          </ul>

          <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
            <li>
              <a href={instagram} target="_blank" rel="noreferrer noopener">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-7 h-7 hover:scale-110 transition-transform duration-300"
                />
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer noopener">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-7 h-7 hover:scale-110 transition-transform duration-300"
                />
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noreferrer noopener">
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="w-7 h-7 hover:scale-110 transition-transform duration-300"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
