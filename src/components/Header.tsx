import AboutSection from "./AboutSection";
import logoImg from "../assets/logoblack.png";
import Image from "next/image";
import { log } from "console";

export default function Header() {
  return (
    <header className="z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0">
      <div className=" container mx-auto flex h-16 items-center justify-between px-4    ">
        <div className="w-[80px] h-[80px] ">
          <a href="/">
            <Image src={logoImg} alt="logo-image" width={80} height={80} />
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6 font-semibold ">
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
  );
}
