import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-w-5xl pt-10 mb-20 px-4">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-8 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {React.Children.toArray(
            projectDetails.map((project) => (
              <Project
                title={project.title}
                image={project.image}
                description={project.description}
                techstack={project.techstack}
                previewLink={project.previewLink}
                githubLink={project.githubLink}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;