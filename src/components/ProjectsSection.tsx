"use client";
import ProjectCard from "./ProjectCard";
import projectsData from "@/data/projectsData";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export default function ProjectsSection() {
  const width = useWindowWidth();
  const isMobile = width !== null && width < 768;
  const itemsPerSlide = isMobile ? 1 : 2;
  const totalSlides = projectsData.length - itemsPerSlide + 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section id="projects" className="py-0 m-auto">
      <div className="container my-auto px-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[var(--text-color)]">
              Featured Projects
            </h2>
            <p className="mx-auto text-base sm:text-lg text-[var(--text-color)] mb-0 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg text-justify md:text-center">
              Here are some of my recent projects that showcase my skills in web
              development, design, and problem-solving. Each project represents
              a unique challenge and learning experience.
            </p>
          </div>

          {isMobile ? (
            <div className="grid grid-cols-1 gap-6">
              {projectsData.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <>
              <div className="relative">
                <div className="overflow-hidden max-w-4xl mx-auto">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${
                        (100 / itemsPerSlide) * currentIndex
                      }%)`,
                    }}
                  >
                    {projectsData.map((project, index) => (
                      <div
                        key={project.title}
                        className={`flex-shrink-0 px-2 ${
                          isMobile ? "w-full" : "w-1/2"
                        }`}
                      >
                        <ProjectCard project={project} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevProject}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[var(--card-background-color)] text-[var(--text-color)] p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[var(--card-background-color)] text-[var(--text-color)] p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  aria-label="Next project"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex
                          ? "bg-[var(--gradient-color)]"
                          : "bg-[var(--item-background-color)]"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
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
