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
    image: "/assets/EatoSphere.png", // Ganti dengan mock-up desain EatoSphere
    techStack: ["JavaScript", "PWA", "Webpack", "Service Workers", "Rest API"],
    githubLink: "https://github.com/xebec51/EatoSphere-GlobalRestaurantsCatalog.git",
    liveDemoLink: "https://eatosphere.netlify.app/" 
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
    title: "KanHas: Smart Canteen App", // Judul diperbarui
    shortDescription: "A mobile canteen ordering system with role-based access and offline persistence.", // Deskripsi singkat akurat
    description: "A comprehensive Flutter mobile application for digitizing university canteen orders. Features include multi-role access (Admin/Student), complex state management with Provider, and local data persistence using Shared Preferences. It allows users to browse menus, manage carts, and view order history in real-time.",
    image: "/assets/kanhas.png", // Ganti nama file ini nanti hasil generate AI
    techStack: ["Flutter", "Dart", "Provider", "Shared Preferences", "MVVM Architecture"], // Tech stack diperbaiki
    githubLink: "https://github.com/xebec51/KanHas.git",
    liveDemoLink: "#" // Kosongkan jika belum ada APK demo live
  }
];