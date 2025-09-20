import { ReactElement } from "react";
import { Code, Wrench, Database, Globe } from "lucide-react";

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
    title: "Frontend",
    icon: Globe,
    items: [
      { name: "React", icon: Code },
      { name: "Next.js", icon: Code },
      { name: "TypeScript", icon: Code },
      { name: "Tailwind CSS", icon: Code },
    ],
  },
  {
    title: "Backend & Infra",
    icon: Database,
    items: [
      { name: "Firebase", icon: Wrench },
      { name: "Firestore", icon: Wrench },
      { name: "Cloudinary", icon: Wrench },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    items: [
      { name: "Git & GitHub", icon: Wrench },
      { name: "Vercel", icon: Wrench },
      { name: "Zoho Mail (DNS)", icon: Wrench },
    ],
  },
];
