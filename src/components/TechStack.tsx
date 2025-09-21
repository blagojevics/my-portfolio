"use client";
import techStackData from "@/data/techStackData";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-16 bg-[var(--background-color)] transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-[var(--text-color)] mb-12">
          My{" "}
          <span
            className="text-[var(--gradient-color)]"
            style={{ display: "inline-block" }}
          >
            Tech Stack
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techStackData.map((category, i) => (
            <div
              key={i}
              className="bg-[var(--card-background-color)] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-[var(--card-background-color)]"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-[20px] h-[20px] text-[var(--gradient-color)] mr-4" />
                <h3 className="text-xl font-bold text-[var(--text-color)]">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center text-center bg-[var(--item-background-color)] p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    style={{
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const icon = e.currentTarget.querySelector("svg");
                      if (icon) icon.style.color = item.hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      const icon = e.currentTarget.querySelector("svg");
                      if (icon) icon.style.color = "var(--text-color)";
                    }}
                  >
                    <item.icon
                      className="w-[35px] h-[35px] text-[var(--gradient-color)] mb-2 transition-colors duration-300"
                      style={{ color: "var(--text-color)" }}
                    />
                    <span className="text-base font-medium text-[var(--text-color)]">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
