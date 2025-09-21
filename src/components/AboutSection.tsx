import { FaMap, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-10 bg-[var(--background-color)] transition-colors duration-300"
    >
      <div className="container mx-auto px-10 pb-3">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Section: Name and Profession */}
          <div className="flex flex-col justify-start  ">
            <h1 className="text-5xl font-extrabold text-[var(--text-color)] mb-4 flex gap-3 flex-col">
              Hi, I'm <br />
              <span className="text-[var(--gradient-color)]">Stefan</span>{" "}
              <span className="text-[var(--gradient-color)]">Blagojević</span>
            </h1>
            <h2 className="text-3xl font-semibold text-[var(--text-color)] mb-6">
              Frontend Developer
            </h2>
            <h3 className="text-1.5xl font-semibold text-[var(--text-color)] mb-6 flex  gap-0.5 items-center ">
              <FaMapMarkerAlt
                className="text-2xl text-center"
                style={{
                  background:
                    "linear-gradient(90deg, #4285F4, #34A853, #FBBC05, #EA4335)", // Google maps blue, green, yellow, red
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              />
              Belgrade, Serbia
            </h3>
          </div>

          {/* Right Section: About Me */}
          <div className="flex flex-col justify-start">
            <p className="text-xl text-[var(--text-color)] mb-6 leading-relaxed text-justify">
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
    </section>
  );
}
