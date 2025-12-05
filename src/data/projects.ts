// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string; // Deskripsi singkat untuk tampilan kartu
  image: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "EatoSphere: Global Restaurant Catalog",
    shortDescription: "A Progressive Web App (PWA) for exploring global restaurants with offline capabilities.",
    description: "An immersive Progressive Web App (PWA) designed for exploring a vast catalog of global restaurants. Built with a focus on mobile-first performance, offline accessibility, and a seamless user experience using modern web technologies.",
    image: "/projects/project.jpg", // Ganti dengan path gambar mock-up Anda nanti
    techStack: ["JavaScript", "PWA", "Webpack", "Service Workers", "Rest API"],
    githubLink: "https://github.com/xebec51/EatoSphere-GlobalRestaurantsCatalog.git",
    liveDemoLink: "#" 
  },
  {
    id: 2,
    title: "GestureLearn: AI Hand Recognition",
    shortDescription: "Real-time hand gesture detection and interpretation system using Computer Vision.",
    description: "An advanced Machine Learning model capable of detecting and interpreting hand gestures in real-time. This project leverages Computer Vision techniques to enable intuitive human-computer interaction without physical contact.",
    image: "/projects/project.jpg",
    techStack: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
    githubLink: "https://github.com/xebec51/GestureLearn.git",
    liveDemoLink: "#"
  },
  {
    id: 3,
    title: "KanHas: Kanban Board System",
    shortDescription: "A collaborative task management application for agile teams.",
    description: "A comprehensive Kanban-style task management application designed to boost team productivity. Features include drag-and-drop task organization, real-time updates, and an intuitive dashboard for agile project management.",
    image: "/projects/project.jpg",
    techStack: ["Next.js", "React", "MongoDB", "Node.js", "Tailwind CSS"],
    githubLink: "https://github.com/xebec51/KanHas.git",
    liveDemoLink: "#"
  },
  {
    id: 4,
    title: "Inventory Management System",
    shortDescription: "Java-based application for efficient asset and stock tracking.",
    description: "A robust desktop application for managing enterprise assets and inventory. Built with Java and SQL, it provides reliable data tracking, reporting features, and a user-friendly graphical interface for administrative tasks.",
    image: "/projects/project.jpg",
    techStack: ["Java", "MySQL", "OOP", "Swing/JavaFX"],
    githubLink: "https://github.com/xebec51",
    liveDemoLink: "#"
  }
];