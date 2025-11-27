"use client";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 bg-[var(--background-color)] transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center text-[var(--text-color)] mb-8">
        Professional Work Experience
      </h2>

      <div className="max-w-xl mx-auto bg-[var(--card-background-color)] bg-opacity-50 rounded-xl border border-[var(--item-background-color)] p-6 shadow hover:shadow-md transition">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-color)]">
              Mobile App Developer
            </h3>
            <p className="text-base sm:text-lg text-[var(--text-color)] opacity-80 mt-1">
              Contract
            </p>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-color)] opacity-70 mt-2 sm:mt-0">
            Oct 2025 - Dec 2025
          </p>
        </div>

        <ul className="space-y-3 text-base text-[var(--text-color)] list-disc list-inside text-justify">
          <li>
            The Project: Engineered a high-security system from scratch using
            React Native and Expo.
          </li>
          <li>
            Complex UI: Delivered 12+ screens with camera-based QR scanning and
            dynamic policy rendering.
          </li>
          <li>
            Offline-First Architecture: Built a custom sync engine with local
            RSA cryptography for zero-connectivity environments.
          </li>
          <li>
            Managed the entire mobile lifecycle, from strict TypeScript
            architecture to asset pipelines.
          </li>
        </ul>
      </div>
    </section>
  );
}
