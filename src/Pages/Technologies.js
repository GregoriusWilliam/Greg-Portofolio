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
    nodejs,
    express,
    postgresql,
    php,
    quasar,
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
    { icon: nodejs, title: "Node.js" },
    { icon: express, title: "Express.js" },
    { icon: postgresql, title: "PostgreSQL" },
    { icon: php, title: "PHP" },
    { icon: quasar, title: "Quasar" },
    { icon: tailwind, title: "Tailwind CSS" },
  ];

  const tools = [
    { icon: vscode, title: "VS Code" },
    { icon: git, title: "Git" },
    { icon: github, title: "Github" },
    { icon: figma, title: "Figma" },
  ];

  return (
    <main className="bg-dave-deep/90 py-10 md:py-20 px-4">
      <section className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-6xl font-title text-dave-sun tracking-widest drop-shadow-lg">
            INVENTORY: SKILLS & TOOLS
          </h1>
          <p className="font-pixel text-lg md:text-2xl text-dave-teal mt-4 uppercase">
            Equip your project with these high-quality ingredients
          </p>
        </div>

        {/* Tab Navigation (Game Style) */}
        <div className="flex justify-center gap-0 mb-8 md:mb-12">
          {["skills", "tools"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 md:px-8 md:py-4 font-title text-sm md:text-xl border-4 border-black transition-all ${
                activeTab === tab
                  ? "bg-dave-sun text-black -translate-y-1 shadow-[0_4px_0_0_rgba(0,0,0,1)]"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {(activeTab === "skills" ? skills : tools).map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/80 p-2 md:p-4 pixel-border hover:scale-110 transition-transform duration-200 group relative"
            >
              <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-dave-coral rounded-full border-2 border-black flex items-center justify-center font-pixel text-white text-[10px] md:text-xs z-10">
                Lv.1
              </div>
              <div className="aspect-square flex items-center justify-center bg-white/5 pixel-border border-white/10 p-2 md:p-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain filter drop-shadow-lg group-hover:rotate-12 transition-transform"
                />
              </div>
              <p className="mt-2 md:mt-4 font-pixel text-sm md:text-xl text-white text-center uppercase tracking-tighter truncate">
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
