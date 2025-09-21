/* TypeScript types for the portfolio project */

// Type for individual project data
export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
};

// Type for tech stack data
export type TechStack = {
  name: string;
  icon: string; // Path to the icon image
  description?: string; // Optional description for the tech
};

// Type for button configuration
export type ButtonConfig = {
  label: string;
  action: () => void;
  style?: string; // Optional Tailwind CSS classes for styling
};

// Type for theme configuration
export type ThemeConfig = {
  name: string;
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
  };
};

// Type for about section data
export type AboutSection = {
  name: string;
  profession: string;
  bio: string;
};

// Type for footer links
export type FooterLink = {
  label: string;
  url: string;
  icon?: string; // Optional icon for the link
};
