// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SiBiSee: Real-time SIBI Translator",
    shortDescription: "AI-powered application to detect and translate Indonesian Sign Language (SIBI) using YOLOv5.",
    description: "An innovative AI application designed to bridge communication gaps for the deaf community. SiBiSee utilizes a custom-trained YOLOv5 model to detect and translate Indonesian Sign Language (SIBI) gestures into text in real-time. Deployed via Streamlit for accessible and interactive usage.",
    image: "/assets/sibisee.png", // Pastikan file logo 'sibisee.png' sudah ada di folder public/assets
    techStack: ["Python", "YOLOv5", "Streamlit", "PyTorch", "Computer Vision"],
    githubLink: "https://github.com/xebec51/SiBiSee",
    liveDemoLink: "https://sibisee.streamlit.app"
  },
  {
    id: 2,
    title: "EatoSphere: Global Restaurant Catalog",
    shortDescription: "A Progressive Web App (PWA) for exploring global restaurants with offline capabilities.",
    description: "An immersive Progressive Web App (PWA) designed for exploring a vast catalog of global restaurants. Built with a focus on mobile-first performance, offline accessibility, and a seamless user experience using modern web technologies.",
    image: "/projects/project.jpg", // Ganti dengan mock-up desain EatoSphere
    techStack: ["JavaScript", "PWA", "Webpack", "Service Workers", "Rest API"],
    githubLink: "https://github.com/xebec51/EatoSphere-GlobalRestaurantsCatalog.git",
    liveDemoLink: "#" 
  },
  {
    id: 3,
    title: "GestureLearn: AI Hand Recognition",
    shortDescription: "Real-time hand gesture detection and interpretation system using Computer Vision.",
    description: "An advanced Machine Learning model capable of detecting and interpreting hand gestures in real-time. This project leverages Computer Vision techniques to enable intuitive human-computer interaction without physical contact.",
    image: "/assets/GesLee.png", // Ganti dengan mock-up desain GestureLearn
    techStack: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
    githubLink: "https://github.com/xebec51/GestureLearn.git",
    liveDemoLink: "#"
  },
  {
    id: 4,
    title: "KanHas: Kanban Board System",
    shortDescription: "A collaborative task management application for agile teams.",
    description: "A comprehensive Kanban-style task management application designed to boost team productivity. Features include drag-and-drop task organization, real-time updates, and an intuitive dashboard for agile project management.",
    image: "/projects/project.jpg", // Ganti dengan mock-up desain KanHas
    techStack: ["Next.js", "React", "MongoDB", "Node.js", "Tailwind CSS"],
    githubLink: "https://github.com/xebec51/KanHas.git",
    liveDemoLink: "#"
  },
  {
    id: 5,
    title: "Inventory Management System",
    shortDescription: "Java-based application for efficient asset and stock tracking.",
    description: "A robust desktop application for managing enterprise assets and inventory. Built with Java and SQL, it provides reliable data tracking, reporting features, and a user-friendly graphical interface for administrative tasks.",
    image: "/projects/project.jpg", // Ganti dengan mock-up desain Inventory
    techStack: ["Java", "MySQL", "OOP", "Swing/JavaFX"],
    githubLink: "https://github.com/xebec51",
    liveDemoLink: "#"
  }
];