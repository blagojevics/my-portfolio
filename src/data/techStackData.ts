import { ElementType } from "react";
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
  SiSass,
  SiTailwindcss,
} from "react-icons/si";

// --- Type definitions ---
export type TechStackItem = {
  name: string;
  icon: ElementType;
  hoverColor: string;
};

export type TechStackCategory = {
  title: string;
  icon: ElementType;
  items: TechStackItem[];
};

// --- Data itself ---
const techStackData: TechStackCategory[] = [
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
      { name: "Tailwind", icon: SiTailwindcss, hoverColor: "#a5f3fc" },
      { name: "SASS", icon: SiSass, hoverColor: "#CD6799" },
    ],
  },
  {
    title: "Software Tools",
    icon: FaTools,
    items: [
      { name: "Firebase", icon: SiFirebase, hoverColor: "#ffcb2b" },
      { name: "Cloudinary", icon: SiCloudinary, hoverColor: "#3448c5" },
      { name: "GitHub", icon: SiGithub, hoverColor: "#181717" },
      { name: "Git", icon: SiGit, hoverColor: "#F1502F" },
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

export default techStackData;
