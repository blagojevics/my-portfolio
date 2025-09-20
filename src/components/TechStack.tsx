"use client";

import { FaCode, FaTools, FaPaintBrush } from "react-icons/fa";
import {
  SiGit,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiCloudinary,
  SiGithub,
  SiNpm,
  SiJira,
  SiTrello,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

const techStackData = [
  {
    title: "Languages",
    icon: FaCode,
    items: [
      { name: "JavaScript", icon: SiJavascript, hoverColor: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, hoverColor: "#3178c6" },
      { name: "React", icon: SiReact, hoverColor: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, hoverColor: "#000000" },
      { name: "HTML5", icon: SiHtml5, hoverColor: "#e34f26" },
      { name: "CSS3", icon: SiCss3, hoverColor: "#1572b6" },
    ],
  },
  {
    title: "Software Tools",
    icon: FaTools,
    items: [
      { name: "Firebase", icon: SiFirebase, hoverColor: "#ffcb2b" },
      { name: "Cloudinary", icon: SiCloudinary, hoverColor: "#3448c5" },
      { name: "Git/GitHub", icon: SiGithub, hoverColor: "#181717" },
      { name: "npm", icon: SiNpm, hoverColor: "#cb3837" },
    ],
  },
  {
    title: "Design & Workflow",
    icon: FaPaintBrush,
    items: [
      { name: "Figma", icon: SiFigma, hoverColor: "#a259ff" },
      { name: "Photoshop", icon: SiAdobephotoshop, hoverColor: "#31a8ff" },
      { name: "Jira", icon: SiJira, hoverColor: "#0052cc" },
      { name: "Trello", icon: SiTrello, hoverColor: "#0079bf" },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-16 bg-[var(--background-color)] transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[var(--text-color)] mb-12">
          My{" "}
          <span
            className="text-[var(--gradient-color)]"
            style={{ display: "inline-block" }}
          >
            Tech Stack
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStackData.map((category, i) => (
            <div
              key={i}
              className="bg-[var(--card-background-color)] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[var(--card-background-color)]"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-[30px] h-[30px] text-[var(--gradient-color)] mr-4" />
                <h3 className="text-xl font-bold text-[var(--text-color)]">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center text-center bg-[var(--item-background-color)] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    style={{
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const icon = e.currentTarget.querySelector("svg");
                      if (icon) icon.style.color = item.hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      const icon = e.currentTarget.querySelector("svg");
                      if (icon) icon.style.color = "var(--text-color)";
                    }}
                  >
                    <item.icon
                      className="w-[50px] h-[50px] text-[var(--gradient-color)] mb-2 transition-colors duration-300"
                      style={{ color: "var(--text-color)" }}
                    />
                    <span className="text-base font-medium text-[var(--text-color)]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
