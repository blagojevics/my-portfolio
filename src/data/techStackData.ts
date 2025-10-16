import { ElementType } from "react";
import { FaCode, FaTools, FaPaintBrush, FaServer } from "react-icons/fa";
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
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiVite,
  SiExpo,
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
    title: "Frontend",
    icon: FaCode,
    items: [
      { name: "JavaScript", icon: SiJavascript, hoverColor: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, hoverColor: "#3178c6" },
      { name: "React", icon: SiReact, hoverColor: "#61dafb" },
      { name: "React Native", icon: SiReact, hoverColor: "#61dafb" },
      { name: "Expo", icon: SiExpo, hoverColor: "#000020" },
      { name: "Next.js", icon: SiNextdotjs, hoverColor: "#000000" },
      { name: "HTML5", icon: SiHtml5, hoverColor: "#e34f26" },
      { name: "CSS3", icon: SiCss3, hoverColor: "#1572b6" },
      { name: "Tailwind", icon: SiTailwindcss, hoverColor: "#a5f3fc" },
      { name: "SASS", icon: SiSass, hoverColor: "#CD6799" },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    items: [
      { name: "Node.js", icon: SiNodedotjs, hoverColor: "#339933" },
      { name: "Express.js", icon: SiExpress, hoverColor: "#000000" },
      { name: "MongoDB", icon: SiMongodb, hoverColor: "#47A248" },
      { name: "Socket.IO", icon: SiSocketdotio, hoverColor: "#010101" },
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
