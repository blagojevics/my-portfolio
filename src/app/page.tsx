import Header from "../components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import React from "react";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
