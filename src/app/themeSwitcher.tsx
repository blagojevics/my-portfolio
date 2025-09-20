"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-[var(--background-color)] text-[var(--text-color)] rounded-md hover:bg-indigo-700 transition "
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default ThemeSwitcher;
