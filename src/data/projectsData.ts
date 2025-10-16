type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
};

const projectsData: Project[] = [
  {
    title: "Meowgram - React Native",
    description:
      "A social media application built with React Native and Expo, featuring user authentication, and cross-platform compatibility for iOS and Android.",
    image:
      "https://res.cloudinary.com/deccntaym/image/upload/v1760622784/Screenshot_2025-10-16_155121_bdttuw.png",
    technologies: ["React Native", "Expo", "Firebase", "JavaScript"],
    githubUrl: "https://github.com/blagojevics/meowgram-mobile-app",
  },
  {
    title: "MeowChat: Full-Stack Chat Application",
    description:
      "A comprehensive full-stack real-time chat application with end-to-end encryption, built using Node.js, Express, MongoDB, Socket.IO, React, and Vite. Features secure messaging, Firebase authentication, and Meowgram integration.",
    image:
      "https://res.cloudinary.com/deccntaym/image/upload/v1759668995/meowchatpl_hxarqh.png",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "React",
      "Vite",
      "Firebase",
    ],
    githubUrl: "https://github.com/blagojevics/meowchat",
  },
  {
    title: "Meowgram - Full-Stack Social App",
    description:
      "A full-stack social media application built with React and Firebase, featuring real-time data, image uploads, and an automated CI/CD pipeline and mobile responsivness.",
    image:
      "https://res.cloudinary.com/deccntaym/image/upload/v1758042816/Meowgram_ss1_vreasq.png",
    technologies: ["React", "Firebase", "SCSS", "CI/CD"],
    liveUrl: "https://meowgram.online/",
    githubUrl: "https://github.com/blagojevics/Meowgram-Social-Media-App",
  },
  {
    title: "NutriTracker - Nutrition API App",
    description:
      "A dynamic, responsive web app that consumes the CalorieNinjas REST API to fetch and display nutritional data based on user queries, built with React.",
    image:
      "https://res.cloudinary.com/deccntaym/image/upload/v1758043182/nutritrackerSS_oysqhk.png",
    technologies: ["React", "REST API", "CSS"],
    liveUrl: "https://nutritracker-blagojevics.netlify.app/",
    githubUrl: "https://github.com/blagojevics/NutriTracker",
  },
  {
    title: "Enigma Bolt System - Static Website",
    description:
      "A fully responsive business website demonstrating foundational web development skills with a focus on semantic HTML and  CSS  layouts.",
    image:
      "https://res.cloudinary.com/deccntaym/image/upload/v1758043026/enigmaSSSS_ljzsyq.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://blagojevics.github.io/Enigma-Bolt-System/",
    githubUrl: "https://github.com/blagojevics/Enigma-Bolt-System",
  },
];

export default projectsData;
