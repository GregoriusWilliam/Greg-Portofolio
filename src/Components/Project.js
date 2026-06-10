import React from "react";
import githubIcon from "../assets/ui/github.svg";
import linkIcon from "../assets/ui/link.svg";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <article className="group mt-10 pixel-border bg-bancho-wood overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 duration-300 flex flex-col">
      {/* Sushi Plate Image Container */}
      <div className="relative h-56 bg-white/10 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_60%,_black_150%)] opacity-30"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover pixel-border-white shadow-lg group-hover:scale-105 transition-transform duration-500" 
          loading="lazy" 
        />
      </div>

      <div className="p-5 flex flex-col flex-grow border-t-4 border-black">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-title text-dave-sun uppercase tracking-tighter leading-none">
            {title}
          </h1>
        </div>
        
        <p className="font-pixel text-xl text-bancho-rice leading-tight mb-6 flex-grow opacity-90">
          {description}
        </p>
        
        <div className="bg-black/40 p-3 pixel-border mb-6">
          <h3 className="font-pixel text-lg text-dave-coral uppercase tracking-widest">
            Ingredients:
          </h3>
          <p className="font-pixel text-xl text-white">
            {techstack}
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex gap-4 mt-auto">
          {/* <a
            href={previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 flex items-center justify-center gap-2 bg-dave-teal text-white font-title py-2 px-4 pixel-border hover:bg-teal-700 active:translate-y-1 transition-all text-sm"
          >
            <img src={linkIcon} alt="" className="w-4 h-4 invert" />
            LIVE
          </a> */}
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full flex items-center justify-center gap-2 bg-bancho-red text-white font-title py-3 px-6 pixel-border hover:bg-red-700 active:translate-y-1 transition-all text-sm"
          >
            <img src={githubIcon} alt="" className="w-4 h-4 invert" />
            CODE
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
