import React from "react";
import githubIcon from "../assets/ui/github.svg";
// import linkIcon from "../assets/ui/link.svg";

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

        <div className="flex justify-center mt-auto">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full flex justify-center items-center gap-3 bg-bancho-red text-white font-title py-3 px-6 pixel-border hover:bg-red-700 active:translate-y-1 transition-all"
          >
            <svg
              className="w-6 h-6 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            VIEW GITHUB
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
