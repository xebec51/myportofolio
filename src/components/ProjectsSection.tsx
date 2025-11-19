import Link from 'next/link';
import React from 'react';

// === DATA PROJECT ASLI ===
const projects = [
    {
        title: "EatoSphere: Global Restaurant Catalog",
        description: "Aplikasi web progresif (PWA) untuk menjelajahi katalog restoran global. Menggunakan arsitektur Front-End murni yang berfokus pada kecepatan dan performa offline.",
        techStack: ["Front-End Dev", "JavaScript", "Webpack", "PWA", "API REST"],
        githubLink: "https://github.com/xebec51/EatoSphere-GlobalRestaurantsCatalog.git",
        liveDemoLink: "#" // Tambahkan link demo jika ada
    },
    {
        title: "GestureLearn: Real-time Hand Gesture Recognition",
        description: "Model Machine Learning (ML) berbasis Python untuk mendeteksi dan menginterpretasi gerakan tangan secara langsung. Proyek ini menunjukkan keahlian di bidang Data & AI.",
        techStack: ["Python", "Machine Learning", "OpenCV", "Data Science"],
        githubLink: "https://github.com/xebec51/GestureLearn.git",
        liveDemoLink: "#"
    },
    {
        title: "KanHas: Kanban Board Management",
        description: "Aplikasi manajemen tugas bergaya Kanban untuk efisiensi tim dan individu, menerapkan konsep Back-End Service dan modern Front-End framework.",
        techStack: ["React/Next.js", "Back-End Dev", "Node.js/Express", "MongoDB"],
        githubLink: "https://github.com/xebec51/KanHas.git",
        liveDemoLink: "#"
    },
    {
        title: "Sistem Manajemen Inventaris (Java)",
        description: "Proyek sistem manajemen aset dasar yang dibangun menggunakan Java dan database SQL, menunjukkan pemahaman dalam OOP dan Back-End tradisional.",
        techStack: ["Java", "OOP", "SQL", "GUI"],
        githubLink: "https://github.com/xebec51", // Ini placeholder jika belum ada repo spesifik
        liveDemoLink: "#"
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100 p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
        
        {/* Deskripsi */}
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.techStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
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
                Lihat Kode (GitHub)
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
                
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
                    Proyek Pilihan 
                </h2>
                <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                    Kumpulan proyek terbaik yang menunjukkan keahlian Front-End, Data Science, dan Back-End Anda.
                </p>

                {/* Grid Proyek */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                
                {/* CTA Tambahan */}
                <div className="text-center mt-16">
                    <Link 
                        href="https://github.com/xebec51?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 text-lg font-semibold text-white bg-red-600 rounded-xl hover:bg-red-700 transition duration-300 shadow-lg"
                    >
                        Lihat Semua Repositori Saya
                    </Link>
                </div>

            </div>
        </section>
    );
}