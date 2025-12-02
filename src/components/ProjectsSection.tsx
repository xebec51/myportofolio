import Link from 'next/link';
import React from 'react';

// === DATA PROJECT ASLI ===
const projects = [
    {
        title: "EatoSphere: Global Restaurant Catalog",
        description: "A Progressive Web App (PWA) designed for exploring global restaurant catalogs. Built with a focus on offline-first performance and responsive UI.",
        techStack: ["Front-End Dev", "JavaScript", "Webpack", "PWA", "API REST"],
        githubLink: "https://github.com/xebec51/EatoSphere-GlobalRestaurantsCatalog.git",
        liveDemoLink: "#" // Tambahkan link demo jika ada
    },
    {
        title: "GestureLearn: Real-time Hand Gesture Recognition",
        description: "A Python-based Machine Learning (ML) model for real-time hand gesture detection and interpretation. Demonstrating expertise in Data & AI.",
        techStack: ["Python", "Machine Learning", "OpenCV", "Data Science"],
        githubLink: "https://github.com/xebec51/GestureLearn.git",
        liveDemoLink: "#"
    },
    {
        title: "KanHas: Kanban Board Management",
        description: "A Kanban-style task management application for team and individual efficiency, implementing Back-End Service concepts and modern Front-End frameworks.",
        techStack: ["React/Next.js", "Back-End Dev", "Node.js/Express", "MongoDB"],
        githubLink: "https://github.com/xebec51/KanHas.git",
        liveDemoLink: "#"
    },
    {
        title: "Inventory Management System (Java)",
        description: "A basic asset management system project built using Java and SQL database, demonstrating understanding of OOP and traditional Back-End development.",
        techStack: ["Java", "OOP", "SQL", "GUI"],
        githubLink: "https://github.com/xebec51", // Ini placeholder jika belum ada repo spesifik
        liveDemoLink: "#"
    }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <div 
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100 p-6 flex flex-col h-full"
        data-aos="fade-up"
        data-aos-delay={index * 150} // Animasi muncul berurutan (Staggered)
    >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
        
        {/* Deskripsi */}
        <p className="text-gray-600 mb-4 grow">{project.description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
                    {tech}
                </span>
            ))}
        </div>
        
        {/* Tombol Aksi */}
        <div className="flex space-x-3">
            <Link 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-red-600 transition duration-300"
            >
                View Code (GitHub)
            </Link>
            {project.liveDemoLink !== "#" ? (
                <Link 
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm font-semibold text-gray-900 border-2 border-gray-300 rounded-lg hover:bg-gray-200 transition duration-300"
                >
                    Demo
                </Link>
            ) : (
                <button 
                    disabled 
                    className="flex-1 text-center px-4 py-2 text-sm font-semibold text-gray-400 border-2 border-gray-200 rounded-lg cursor-not-allowed"
                >
                    Demo (N/A)
                </button>
            )}
        </div>
    </div>
);


export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                
                <h2 
                    className="text-4xl font-extrabold text-gray-900 text-center mb-4"
                    data-aos="fade-down"
                >
                    Featured Projects
                </h2>
                <p 
                    className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    A selection of my best work showcasing full-stack development and data science capabilities.
                </p>

                {/* Grid Proyek */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
                
                {/* CTA Tambahan */}
                <div 
                    className="text-center mt-16"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <Link 
                        href="https://github.com/xebec51?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 text-lg font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition duration-300 shadow-lg"
                    >
                        View All Repositories
                    </Link>
                </div>

            </div>
        </section>
    );
}