import React from "react";
import TechCategories from "./TechCategories";

const Techstack: React.FC = () => {
  return (
    <section id="techstack" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          My{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Tech Stack
          </span>
        </h2>
        <TechCategories />
      </div>
    </section>
  );
};

export default Techstack;
