"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
    console.log("ThemeSwitcher mounted"); // Debugging
  }, []);

  if (!mounted) {
    console.log("ThemeSwitcher not mounted yet"); // Debugging
    return null; // Avoid rendering on the server
  }

  const toggleTheme = () => {
    console.log("Current theme:", theme); // Debugging
    setTheme(theme === "light" ? "dark" : "light");
    console.log("Theme after toggle:", theme === "light" ? "dark" : "light"); // Debugging
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-[var(--background-color)] text-[var(--text-color)] rounded-md hover:bg-indigo-700 transition"
    >
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeSwitcher;
