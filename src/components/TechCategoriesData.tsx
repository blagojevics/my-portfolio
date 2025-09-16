import { CodeIcon, DatabaseIcon, WorkflowIcon } from "lucide-react";
import { TechCategory } from "../../.next/types/types";

const techCategoriesData: TechCategory[] = [
  {
    title: "Languages & Frameworks",
    technologies: [
      { name: "JavaScript (ES6+)", icon: CodeIcon },
      { name: "TypeScript", icon: CodeIcon },
      { name: "Next.js", icon: CodeIcon },
      { name: "React", icon: CodeIcon },
      { name: "HTML5", icon: CodeIcon },
      { name: "CSS3", icon: CodeIcon },
      { name: "SCSS", icon: CodeIcon },
      { name: "Tailwind CSS", icon: CodeIcon },
    ],
  },
  {
    title: "Databases & Tools",
    technologies: [
      { name: "Firebase Auth", icon: DatabaseIcon },
      { name: "Firestore", icon: DatabaseIcon },
      { name: "Firebase Hosting", icon: DatabaseIcon },
      { name: "Firebase Rules", icon: DatabaseIcon },
      { name: "Cloudinary", icon: DatabaseIcon },
    ],
  },
  {
    title: "Workflow & DevOps",
    technologies: [
      { name: "Git", icon: WorkflowIcon },
      { name: "GitHub", icon: WorkflowIcon },
      { name: "npm", icon: WorkflowIcon },
      { name: "GitHub Actions", icon: WorkflowIcon },
      { name: "Jira", icon: WorkflowIcon },
      { name: "Trello", icon: WorkflowIcon },
      { name: "DevTools", icon: WorkflowIcon },
    ],
  },
  {
    title: "Design Tools",
    technologies: [
      { name: "Figma", icon: CodeIcon },
      { name: "Photoshop", icon: CodeIcon },
    ],
  },
];

export default techCategoriesData;
