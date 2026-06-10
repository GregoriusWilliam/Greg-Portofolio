import React from "react";
import Work from "../Components/Work";
import { workDetails } from "../Details";

function Experience() {
  return (
    <main className="container mx-auto max-w-4xl pt-24 pb-20 px-4">
      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="h-2 w-16 bg-dave-sun pixel-border"></div>
          <h1 className="text-3xl md:text-5xl font-title text-dave-sun uppercase tracking-widest drop-shadow-md">
            Experience
          </h1>
        </div>
        <div className="ml-4">
          {React.Children.toArray(
            workDetails.map(({ Position, Company, Location, Type, Duration, Description }) => (
              <Work
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
                description={Description}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Experience;
