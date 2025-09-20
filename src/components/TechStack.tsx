import { FaCode, FaDatabase, FaTools, FaPaintBrush } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiCloudinary,
  SiGithub,
  SiNpm,
  SiJira,
  SiTrello,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

const techStackData = [
  {
    title: "Languages",
    icon: FaCode,
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    title: "Databases/Tools",
    icon: FaDatabase,
    items: [
      { name: "Firebase", icon: SiFirebase },
      { name: "Cloudinary", icon: SiCloudinary },
    ],
  },
  {
    title: "Workflow",
    icon: FaTools,
    items: [
      { name: "Git/GitHub", icon: SiGithub },
      { name: "npm", icon: SiNpm },
      { name: "Jira", icon: SiJira },
      { name: "Trello", icon: SiTrello },
    ],
  },
  {
    title: "Design",
    icon: FaPaintBrush,
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Photoshop", icon: SiAdobephotoshop },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-16 bg-[var(--background-color)] transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-[var(--text-color)] mb-12">
          My{" "}
          <span className="text-indigo-600" style={{ display: "inline-block" }}>
            Tech Stack
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackData.map((category, i) => (
            <div
              key={i}
              className="bg-[var(--background-color)] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[var(--text-color)]"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-[30px] h-[30px] text-indigo-600 mr-4" />
                <h3 className="text-2xl font-bold text-[var(--text-color)]">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {category.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center text-center bg-[var(--background-color)] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <item.icon className="w-[50px] h-[50px] text-indigo-600 mb-2" />
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
