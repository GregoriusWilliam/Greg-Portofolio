import React from "react";

function Work({ position, company, location, type, duration, description }) {
  return (
    <article className="relative pl-8 pb-12 border-l-4 border-black last:pb-0">
      {/* Timeline Dot (Harpoon/Anchor style) */}
      <div className="absolute -left-[14px] top-0 w-6 h-6 bg-dave-coral pixel-border rotate-45"></div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h1 className="text-2xl font-title text-white tracking-tight">
            {position}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-pixel text-2xl text-dave-sun">{company}</span>
            <span className="text-gray-500 font-pixel text-2xl">//</span>
            <span className="font-pixel text-xl text-dave-teal uppercase">{location}</span>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="px-3 py-1 font-pixel text-lg bg-white/10 text-dave-sun pixel-border">
            {type || "FULL_TIME"}
          </span>
          <span className="font-pixel text-xl text-gray-400">
            [{duration}]
          </span>
        </div>
      </div>

      {description && (
        <p className="mt-4 font-pixel text-xl text-white/80 leading-snug max-w-3xl italic">
          > {description}
        </p>
      )}
    </article>
  );
}

export default Work;
