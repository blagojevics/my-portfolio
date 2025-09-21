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
      className="p-2 bg-transparent rounded-md transition-transform hover:scale-110"
    >
      {theme === "light" ? (
        <BsMoon className="text-yellow-500 w-7 h-7 hover:text-yellow-400 transition-colors" />
      ) : (
        <BsSun className="text-orange-500 w-7 h-7 hover:text-orange-400 transition-colors" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
