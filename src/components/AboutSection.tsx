"use client";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-4xl mx-auto 2xl:px-0 py-10  sm:px-6 flex flex-col bg-[var(--background-color)] transition-colors duration-300"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left: Name & Profession */}
        <div className="flex flex-col gap-2 text-base sm:text-lg text-[var(--text-color)] mb-0 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0 text-justify ">
          <h1 className="ml-2 text-4xl sm:text-5xl font-extrabold text-[var(--text-color)] mb-1 flex flex-col gap-1">
            Hi, I&apos;m
            <span className="text-[var(--gradient-color)]">Stefan</span>
            <span className="text-[var(--gradient-color)]">Blagojević</span>
          </h1>
          <h2 className="ml-2 text-[1.2rem] sm:text-2xl font-semibold text-[var(--text-color)] mb-2">
            Frontend Developer
          </h2>
          <h3 className=" ml-2 text-lg font-semibold text-[var(--text-color)] flex gap-1 items-center">
            <FaMapMarkerAlt
              className="text-2xl"
              style={{
                background:
                  "linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
            Belgrade, Serbia
          </h3>
        </div>

        {/* Right: About Text */}
        <div className="flex flex-col justify-start">
          <p className="text-base sm:text-lg text-[var(--text-color)] mb-0 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0 text-justify">
            My journey into web development started with a practical desire: to
            build applications that I could use with my friends. This hobby grew
            into a deep interest in crafting seamless digital experiences,
            leading me to teach myself modern technologies like React and
            Next.js. I am excited to apply my self-driven and detail-oriented
            approach to a professional development role.
          </p>
        </div>
      </div>
    </section>
  );
}
