import React from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-[var(--background-color)] rounded-xl border border-[var(--text-color)] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.image}
          alt={`Screenshot of the ${project.title} project`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-[var(--text-color)]">
          {project.title}
        </h3>
        <p className="text-[var(--text-color)] mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-[var(--background-color)] text-[var(--text-color)] text-sm font-medium px-3 py-1 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-auto pt-4 border-t border-[var(--text-color)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <button className="w-full inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors border border-[var(--text-color)] bg-[var(--background-color)] hover:bg-indigo-600 hover:text-white h-12 py-2 px-4">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </button>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors border border-[var(--text-color)] bg-[var(--background-color)] hover:bg-indigo-600 hover:text-white h-12 py-2 px-4">
              <Github className="w-5 h-5 mr-2" />
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
