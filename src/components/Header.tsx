import AboutSection from "./AboutSection";

export default function Header() {
  return (
    <header className=" top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="sticky container mx-auto flex h-16 items-center justify-between px-4">
        <div>
          <h2 className="font-bold">Stefan Blagojević</h2>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
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
        </nav>
      </div>
      <AboutSection />
    </header>
  );
}
