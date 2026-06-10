import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-w-4xl pt-24 pb-20 px-4">
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-2 w-16 bg-dave-sun pixel-border"></div>
          <h1 className="text-3xl md:text-5xl font-title text-dave-sun uppercase tracking-widest drop-shadow-md">
            About Me
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 bg-black/40 p-6 md:p-8 pixel-border">
          {personalDetails.img && (
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden pixel-border border-dave-sun shadow-2xl">
              <img 
                src={personalDetails.img} 
                alt={personalDetails.name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="flex-grow">
            <p className="font-pixel text-2xl md:text-3xl text-white leading-tight text-center md:text-left">
              {personalDetails.about}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="h-2 w-16 bg-dave-sun pixel-border"></div>
          <h1 className="text-3xl md:text-5xl font-title text-dave-sun uppercase tracking-widest drop-shadow-md">
            Education
          </h1>
        </div>
        <div className="ml-4">
          {React.Children.toArray(
            eduDetails.map(({ Position, University, Location, Duration }) => (
              <Work
                position={Position}
                company={University}
                location={Location}
                duration={Duration}
                type="ACADEMIC"
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default About;
