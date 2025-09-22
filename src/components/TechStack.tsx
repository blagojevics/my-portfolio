"use client";
import techStackData, {
  TechStackCategory,
  TechStackItem,
} from "@/data/techStackData";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useState } from "react";

// Atomic icon+label component, per card
function TechStackIcon({
  item,
  isMobile,
}: {
  item: TechStackItem;
  isMobile: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const iconColor = isMobile
    ? item.hoverColor
    : hovered
    ? item.hoverColor
    : "var(--text-color)";

  return (
    <div
      className="flex flex-col items-center justify-center text-xs text-center 
        bg-[var(--item-background-color)] 
        p-3 sm:p-2 md:p-3 
        rounded-lg shadow-md hover:shadow-lg 
        transition-shadow duration-300
        w-full"
      onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
    >
      <item.icon
        className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] mb-1 md:mb-2 transition-colors duration-300"
        style={{ color: iconColor }}
      />
      <span className="text-[11px] sm:text-xs md:text-sm font-medium text-[var(--text-color)]">
        {item.name}
      </span>
    </div>
  );
}

const TechStack = () => {
  const width = useWindowWidth();
  const isMobile = width !== null && width < 500;

  return (
    <section
      id="techstack"
      className="w-full max-w-4xl mx-auto py-12 md:py-16 px-2 sm:px-6 bg-[var(--background-color)] transition-colors duration-300"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[var(--text-color)] mb-8 md:mb-12">
        My{" "}
        <span className="text-[var(--gradient-color)] inline-block">
          Tech Stack
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {techStackData.map((category: TechStackCategory, i) => (
          <div
            key={i}
            className="bg-[var(--card-background-color)] 
              p-4 md:p-8 rounded-xl shadow-md hover:shadow-lg 
              transition-shadow duration-300 border border-[var(--card-background-color)]
              w-full h-full flex flex-col"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <category.icon className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] text-[var(--gradient-color)] mr-3 md:mr-4" />
              <h3 className="text-lg md:text-xl font-bold text-[var(--text-color)]">
                {category.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {category.items.map((item, j) => (
                <TechStackIcon key={j} item={item} isMobile={isMobile} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
