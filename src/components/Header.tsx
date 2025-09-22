"use client";

import logoImgBlack from "../assets/logoblack.png";
import logoImgWhite from "../assets/logowhite.png";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import ThemeSwitcher from "../app/themeSwitcher";

export default function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!mounted) return null;

  return (
    <header className="z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0">
      <div className="w-full max-w-4xl mx-auto flex h-16 items-center justify-between px-4">
        <div className="w-[56px] h-[56px]">
          <Link href="/">
            <Image
              src={theme === "dark" ? logoImgBlack : logoImgWhite}
              alt="logo-image"
              width={56}
              height={56}
            />
          </Link>
        </div>

        {/* Hamburger for small screens */}
        <div className="md:hidden" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[var(--text-color)] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-16 right-4 bg-[var(--background-color)] shadow-md rounded-lg p-4 min-w-[120px]">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="#techstack"
                  className="hover:text-primary transition-colors"
                >
                  Tech Stack
                </Link>
                <Link
                  href="#footer"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
          <ThemeSwitcher />
        </div>

        {/* Regular navbar */}
        <nav className="hidden md:flex items-center space-x-6 font-semibold">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#techstack"
            className="hover:text-primary transition-colors"
          >
            Tech Stack
          </Link>
          <Link href="#footer" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}
