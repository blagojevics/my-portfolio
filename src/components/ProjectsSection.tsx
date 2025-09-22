"use client";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projectsData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-0 m-auto">
      <div className="container my-auto px-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            {" "}
            {/* Slightly less margin on mobile */}
            <h2 className="text-3xl font-bold mb-4 text-[var(--text-color)]">
              Featured Projects
            </h2>
            <p className="text-[var(--text-color)] max-w-2xl mx-auto text-justify">
              Here are some of my recent projects that showcase my skills in web
              development, design, and problem-solving. Each project represents
              a unique challenge and learning experience.
            </p>
          </div>

          {/* CHANGE: Reduced gap for mobile, original gap for medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (min-width: 280px) and (max-width: 500px) {
          #about p {
            max-width: 250px;
            margin: 0 auto;
            text-align: justify;
          }
        }
      `}</style>
    </section>
  );
}
