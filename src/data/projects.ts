export interface Project {
  id: number;
  slug: string;
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
    slug: "sibisee-real-time-sibi-translator",
    title: "SiBiSee: Real-time SIBI Translator",
    shortDescription: "AI-powered application to detect and translate Indonesian Sign Language (SIBI) using YOLOv5.",
    description: "An innovative AI application designed to bridge communication gaps for the deaf community. SiBiSee utilizes a custom-trained YOLOv5 model to detect and translate Indonesian Sign Language (SIBI) gestures into text in real-time. Deployed via Streamlit for accessible and interactive usage.",
    image: "/assets/sibisee.png", 
    techStack: ["Python", "YOLOv5", "Streamlit", "PyTorch", "Computer Vision"],
    githubLink: "https://github.com/xebec51/SiBiSee",
    liveDemoLink: "https://sibisee.streamlit.app"
  },
  {
    id: 2,
    slug: "eatosphere-global-restaurant-catalog",
    title: "EatoSphere: Global Restaurant Catalog",
    shortDescription: "A Progressive Web App (PWA) for exploring global restaurants with offline capabilities.",
    description: "An immersive Progressive Web App (PWA) designed for exploring a vast catalog of global restaurants. Built with a focus on mobile-first performance, offline accessibility, and a seamless user experience using modern web technologies.",
    image: "/assets/EatoSphere.png", 
    techStack: ["JavaScript", "PWA", "Webpack", "Service Workers", "Rest API"],
    githubLink: "https://github.com/xebec51/EatoSphere-GlobalRestaurantsCatalog.git",
    liveDemoLink: "https://eatosphere.netlify.app/" 
  },
  {
    id: 3,
    slug: "gesturelearn-ai-hand-recognition",
    title: "GestureLearn: AI Hand Recognition",
    shortDescription: "Real-time hand gesture detection and interpretation system using Computer Vision.",
    description: "An advanced Machine Learning model capable of detecting and interpreting hand gestures in real-time. This project leverages Computer Vision techniques to enable intuitive human-computer interaction without physical contact.",
    image: "/assets/GesLee.png", 
    techStack: ["Python", "TensorFlow", "OpenCV", "Computer Vision"],
    githubLink: "https://github.com/xebec51/GestureLearn.git",
    liveDemoLink: "#"
  },
  {
    id: 4,
    slug: "kanhas-smart-canteen-app",
    title: "KanHas: Smart Canteen App", 
    shortDescription: "A mobile canteen ordering system with role-based access and offline persistence.", 
    description: "A comprehensive Flutter mobile application for digitizing university canteen orders. Features include multi-role access (Admin/Student), complex state management with Provider, and local data persistence using Shared Preferences. It allows users to browse menus, manage carts, and view order history in real-time.",
    image: "/assets/kanhas.png", 
    techStack: ["Flutter", "Dart", "Provider", "Shared Preferences", "MVVM Architecture"], 
    githubLink: "https://github.com/xebec51/KanHas.git",
    liveDemoLink: "#" 
  },
  {
    id: 5,
    slug: "heart-disease-prediction-mlops",
    title: "Heart Disease Prediction System (End-to-End MLOps)",
    shortDescription: "Arsitektur ekosistem MLOps berskala produksi dengan pemrosesan otomatis, CI/CD kontainer, dan monitoring.",
    description: "Arsitektur ekosistem MLOps berskala produksi bersertifikat Advanced (Bintang 5) dari Dicoding. Proyek ini dipecah menjadi 4 repositori terpisah guna merepresentasikan siklus kerja microservices: otomatisasi pipeline data (GitHub Actions), pelacakan eksperimen cloud (MLflow & DagsHub), Continuous Integration kontainer (Docker Hub), serta observabilitas layanan model dengan 12 metrik canggih dan 3 layer alerting (Prometheus & Grafana).",
    image: "/assets/heart_disease_mlops_mockup.png", 
    techStack: ["Python", "Scikit-Learn", "MLflow", "DagsHub", "GitHub Actions", "Docker", "Prometheus", "Grafana"],
    githubLink: "https://github.com/xebec51/Eksperimen_SML_Rinaldi",
    liveDemoLink: "https://github.com/xebec51/heart-disease-monitoring-rinaldi" 
  },
  {
    id: 6,
    slug: "machine-learning-clustering-classification",
    title: "Machine Learning: Clustering & Classification",
    shortDescription: "A machine learning project featuring data clustering and classification models using Decision Tree, Random Forest, and PCA.",
    description: "A comprehensive machine learning project for Dicoding's final submission. It features data clustering and classification models using algorithms like Decision Tree, Random Forest, and PCA.",
    image: "/assets/dicoding-ml.png", 
    techStack: ["Python", "Jupyter Notebook", "Scikit-Learn", "Pandas", "Machine Learning"],
    githubLink: "https://github.com/xebec51/dicoding-ml-project-clustering-classification",
    liveDemoLink: "#"
  }
];
