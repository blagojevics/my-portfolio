"use client";

import AboutSection from "./AboutSection";
import logoImgBlack from "../assets/logoblack.png";
import logoImgWhite from "../assets/logowhite.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeSwitcher from "../app/themeSwitcher";

export default function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until theme is loaded
  }

  return (
    <>
      {/* Theme Switcher outside the header */}
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      <header className="z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="w-[80px] h-[80px]">
            <a href="/">
              <Image
                src={theme === "dark" ? logoImgBlack : logoImgWhite}
                alt="logo-image"
                width={80}
                height={80}
              />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6 font-semibold">
            <a
              href="#about"
              className="text-sm hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#techstack"
              className="text-sm hover:text-primary transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#footer"
              className="text-sm hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
