"use client";

import techStackData from "@/data/techStackData";

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-12 md:py-16 bg-[var(--background-color)] transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[var(--text-color)] mb-8 md:mb-12">
          My{" "}
          <span className="text-[var(--gradient-color)] inline-block">
            Tech Stack
          </span>
        </h2>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {techStackData.map((category, i) => (
            <div
              key={i}
              className="bg-[var(--card-background-color)] 
                         p-4 md:p-8 rounded-xl shadow-md hover:shadow-lg 
                         transition-shadow duration-300 border border-[var(--card-background-color)] 
                         w-full max-w-[270px] mx-auto md:max-w-none"
            >
              {/* Category title */}
              <div className="flex items-center mb-4 md:mb-6">
                <category.icon className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-[var(--gradient-color)] mr-3 md:mr-4" />
                <h3 className="text-lg md:text-xl font-bold text-[var(--text-color)]">
                  {category.title}
                </h3>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {category.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center justify-center text-xs text-center 
             bg-[var(--item-background-color)] 
             p-3 sm:p-2 md:p-3 
             rounded-lg shadow-md hover:shadow-lg 
             transition-shadow duration-300
             mx-auto h-full w-full max-w-[100px] md:max-w-none"
                    style={{ transition: "background-color 0.3s ease" }}
                    onMouseEnter={(e) => {
                      if (window.innerWidth >= 768) {
                        const icon = e.currentTarget.querySelector("svg");
                        if (icon) icon.style.color = item.hoverColor;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (window.innerWidth >= 768) {
                        const icon = e.currentTarget.querySelector("svg");
                        if (icon) icon.style.color = "var(--text-color)";
                      }
                    }}
                  >
                    <item.icon
                      className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] mb-1 md:mb-2 transition-colors duration-300"
                      style={{
                        color:
                          typeof window !== "undefined" &&
                          window.innerWidth < 500
                            ? item.hoverColor // always brand color on phones
                            : "var(--text-color)",
                      }}
                    />
                    <span className="text-[11px] sm:text-xs md:text-sm font-medium text-[var(--text-color)]">
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
