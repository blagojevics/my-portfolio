"use client";

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
  const handleClick = (url: string | undefined) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("No URL provided for project:", project.title);
    }
  };

  return (
    <div className="bg-[var(--card-background-color)] rounded-xl border border-[var(--item-background-color)] overflow-hidden shadow hover:shadow-md transition flex flex-col">
      {/* Image wrapper - No changes needed here */}
      <div
        onClick={() => handleClick(project.liveUrl || project.githubUrl)}
        className="relative group cursor-pointer aspect-video"
      >
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div
          className="
            absolute bottom-3 left-3 flex gap-2
            opacity-0 transform translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300 ease-out
          "
        >
          {project.liveUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClick(project.liveUrl);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium bg-[var(--item-background-color)] text-[var(--text-color)] hover:bg-[var(--gradient-color)] hover:text-[var(--primary-foreground)] transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick(project.githubUrl);
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium bg-[var(--item-background-color)] text-[var(--text-color)] hover:bg-[var(--gradient-color)] hover:text-[var(--primary-foreground)] transition"
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </button>
        </div>
      </div>

      {/* Content */}
      {/* CHANGE: Reduced padding for mobile, original padding for small screens and up */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Title */}
        {/* CHANGE: Smaller text for mobile, original size for small screens and up */}
        <h3 className="text-base sm:text-lg font-semibold text-[var(--text-color)] mb-2 cursor-default">
          {project.title}
        </h3>

        {/* Description */}
        {/* CHANGE: Smaller text for mobile, original size for small screens and up */}
        <p className="text-sm sm:text-base text-[var(--text-color)] mb-4 cursor-default">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-[var(--item-background-color)] text-[var(--text-color)] text-xs font-medium px-2 py-1 rounded hover:bg-[var(--gradient-color)] hover:text-[var(--primary-foreground)] transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
