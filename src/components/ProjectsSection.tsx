import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projectsData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-0">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[var(--text-color)]">
              Featured Projects
            </h2>
            <p className="text-[var(--text-color)] max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web
              development, design, and problem-solving. Each project represents
              a unique challenge and learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
