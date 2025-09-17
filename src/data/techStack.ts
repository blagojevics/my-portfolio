// data/techStack.ts

import {
  FaLaptopCode,
  FaTools,
  FaCloud,
  FaPalette,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaAws,
  FaGoogle,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaFigma,
  FaJira,
  FaTrello,
  FaDocker,
  FaWordpressSimple,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiCloudinary,
  SiGithubactions,
  SiVercel,
  SiNetlify,
  SiPostgresql,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

export interface TechItem {
  name: string;
  icon: React.ElementType;
}

export interface TechCategory {
  title: string;
  icon: React.ElementType;
  items: TechItem[];
}

export const techStackData: TechCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: FaLaptopCode,
    items: [
      { name: "JavaScript (ES6+)", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "SCSS", icon: FaSass },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases & Tools",
    icon: FaTools,
    items: [
      { name: "Firebase ", icon: SiFirebase },
      { name: "Microsoft Azure", icon: SiFirebase },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
  },
  {
    title: "Workflow & DevOps",
    icon: FaGitAlt,
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "npm", icon: FaNpm },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Jira", icon: FaJira },
      { name: "Trello", icon: FaTrello },
      { name: "DevTools", icon: FaTools },
    ],
  },
  {
    title: "Design Tools",
    icon: FaPalette,
    items: [
      { name: "Figma", icon: FaFigma },
      { name: "Photoshop", icon: FaFigma },
    ],
  },
];
