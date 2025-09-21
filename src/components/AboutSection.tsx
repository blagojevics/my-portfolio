"use client";

import { FaMapMarkerAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-10 bg-[var(--background-color)] transition-colors duration-300 m-auto flex "
    >
      <div className="container mx-auto px-6 sm:px-10 pb-3">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Section: Name and Profession */}
          <div className="flex flex-col ">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--text-color)] mb-4 flex gap-3 flex-col items-left sm:my-0 mx-auto">
              Hi, I'm <br />
              <span className="text-[var(--gradient-color)]">Stefan</span>{" "}
              <span className="text-[var(--gradient-color)]">Blagojević</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[var(--text-color)] mb-6 flex flex-col items-left sm:my-0 mx-auto">
              Frontend Developer
              <h3 className="text-lg font-semibold text-[var(--text-color)] mb-6 flex gap-1 ">
                <FaMapMarkerAlt
                  className="text-2xl "
                  style={{
                    background:
                      "linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                />
                Belgrade, Serbia
              </h3>
            </h2>
          </div>

          {/* Right Section: About Me */}
          <div
            className="flex flex-col justify-start"
            style={{ maxWidth: "100%" }}
          >
            <p className="text-base  sm:text-lg text-[var(--text-color)] mb-6 leading-relaxed   md:max-w-[500px] lg:max-w-[600px] md:text-center">
              My journey into web development started with a practical desire:
              to build applications that I could use with my friends. This hobby
              grew into a deep interest in crafting seamless digital
              experiences, leading me to teach myself modern technologies like
              React and Next.js. I am excited to apply my self-driven and
              detail-oriented approach to a professional development role.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media screen and (min-width: 280px) and (max-width: 500px) {
          #about p {
            max-width: 250px;
            margin: 0 auto;
            text-align: justify;
          }
        }
      `}</style>
    </section>
  );
}
