export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-[var(--background-color)] transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-[var(--text-color)] mb-6">
                Hi, I'm{" "}
                <span className="text-indigo-600">Stefan Blagojević</span>
              </h1>
              <h2 className="text-2xl font-semibold text-[var(--text-color)] mb-6">
                Frontend Developer
              </h2>
              <p className="text-lg text-[var(--text-color)] mb-6 leading-relaxed">
                My journey into web development started with a practical desire:
                to build applications that I could use with my friends. This
                hobby grew into a deep interest in crafting seamless digital
                experiences, leading me to teach myself modern technologies like
                React and Next.js. I am excited to apply my self-driven and
                detail-oriented approach to a professional development role.
              </p>
              <p className="text-lg text-[var(--text-color)] leading-relaxed">
                text
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative bg-[var(--background-color)] border border-[var(--text-color)] rounded-lg p-6 shadow-md">
                <blockquote className="text-[var(--text-color)] italic text-lg">
                  "Code is not just a tool; it's a canvas for creativity and
                  innovation."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
