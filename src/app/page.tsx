import Header from "../components/Header";
import ProjectsSection from "../components/projects/ProjectsSection";
import Techstack from "../components/techstack/Techstack";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <ProjectsSection />
      <Techstack />
    </div>
  );
}
