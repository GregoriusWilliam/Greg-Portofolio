import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import clanguage from "./assets/techstack/clanguage.png";
import react from "./assets/techstack/react.png";
import java from "./assets/techstack/java.png";
import csharp from "./assets/techstack/csharp.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import figma from "./assets/techstack/figma.png";

import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";

import profile from "./assets/profile.jpg"; // You can add your photo here

export const personalDetails = {
  name: "Gregorius William Koswari",
  tagline: "Crafting clean and functional web experiences.",
  img: profile, 
  about: `Computer Science student at Binus University with a focus on full-stack web development. I am passionate about building clean, functional, and scalable applications that provide a great user experience.`,
};

export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/gregoriuswilliam",
  github: "https://github.com/gregoriuswilliam",
  instagram : "https://www.instagram.com/gwk3003/",
};

export const workDetails = [
  {
    Position: "Web Developer Intern",
    Company: "Onero Solution",
    Location: "Indonesia",
    Type: "Internship",
    Duration: "Februari 2026 – 2027",
    Description: "Developing web applications using PHP, Quasar, and Node.js. I work on both the front-end and back-end, building APIs and UI components.",
  },
];

export const eduDetails = [
  {
    Position: "Undergraduate in Computer Science",
    University: "Bina Nusantara University",
    Location: "Indonesia",
    Duration: "2023 - Present",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  vscode: vscode,
  clanguage: clanguage,
  git: git,
  java: java,
  csharp: csharp,
  github: github,
  figma: figma,
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  quasar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-original.svg",
};


export const projectDetails = [
  {
    title: "PapuAdventure Travel Website",
    image: projectImage1,
    description: `A travel website to promote tourism in Papua, built with HTML, CSS, and JavaScript.`,
    techstack: "HTML, CSS, JavaScript",
    previewLink: "https://papuadventure-sepia.vercel.app",
    githubLink: "https://github.com/GregoriusWilliam/papuadventure-main",
  },
  {
    title: "Alflix Streaming Platform",
    image: projectImage2,
    description: `A movie streaming platform built with the MERN stack (MongoDB, Express, React, Node.js).`,
    techstack: "React.js, Tailwind CSS",
    previewLink: "https://github.com/gregoriuswilliam/alflix",
    githubLink: "https://github.com/gregoriuswilliam/alflix",
  },
  {
    title: "Ecommerce website",
    image: projectImage3,
    description: `An e-commerce platform built with Express.js and Quasar, focusing on product management and user flow.`,
    techstack: "Express.js, Quasar, Node.js",
    previewLink: "https://github.com/GregoriusWilliam/Ecommerce-Express",
    githubLink: "https://github.com/GregoriusWilliam/Ecommerce-Express",
  },
];


