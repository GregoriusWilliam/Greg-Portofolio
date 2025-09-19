import React, { useState } from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    clanguage,
    tailwind,
    java,
    csharp,
    vscode,
    git,
    github,
    figma,
  } = techStackDetails;

  
  const [activeTab, setActiveTab] = useState("skills");

  const skills = [
    { icon: clanguage, title: "C" },
    { icon: java, title: "Java" },
    { icon: csharp, title: "C#" },
    { icon: html, title: "HTML5" },
    { icon: css, title: "CSS3" },
    { icon: js, title: "JavaScript" },
    { icon: react, title: "React" },
    { icon: tailwind, title: "Tailwind CSS" },
  ];

  const tools = [
    { icon: vscode, title: "VS Code" },
    { icon: git, title: "Git" },
    { icon: github, title: "Github" },
    { icon: figma, title: "Figma" },
  ];

  return (
    <main className="container mx-auto max-w-6xl pt-10 pb-20">
    
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading">
          Skills & Tools
        </h1>

       
        <div className="flex justify-center gap-4 mt-6">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === "skills"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === "tools"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveTab("tools")}
          >
            Tools
          </button>
        </div>
      </section>

  
      <section className="mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {(activeTab === "skills" ? skills : tools).map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-white text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Technologies;
