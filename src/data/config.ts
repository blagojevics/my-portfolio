export type Project = {
  technologies: any;
  title: string;
  description: string;
  image: string; // URL to the screenshot
  tags: string[];
  liveUrl?: string; // Optional live URL
  githubUrl: string; // GitHub URL is required
};
