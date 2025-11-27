import Header from "../components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import React from "react";
import TechStack from "@/components/TechStack";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
