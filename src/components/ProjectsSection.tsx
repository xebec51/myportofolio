// src/components/ProjectsSection.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projects';

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Batasi jumlah awal tampilan
    const INITIAL_COUNT = 6;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const isAllVisible = visibleCount >= projects.length;

    const handleToggleView = () => {
        if (isAllVisible) {
            setVisibleCount(INITIAL_COUNT);
            const section = document.getElementById('projects');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
            setVisibleCount(projects.length);
        }
    };

    const displayedProjects = projects.slice(0, visibleCount);

    return (
        <section id="projects" className="py-20 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4 tracking-tight"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Showcasing my journey in solving real-world problems with code.
                    </motion.p>
                </div>

                {/* GRID GALLERY */}
                <motion.div 
                    layout
                    // PERBAIKAN DI SINI:
                    // grid-cols-2: Default (Mobile) jadi 2 kolom
                    // md:grid-cols-2: Tablet tetap 2 kolom
                    // lg:grid-cols-3: Desktop 3 kolom
                    // gap-3: Jarak lebih rapat di mobile agar muat
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8"
                >
                    <AnimatePresence>
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layoutId={`project-card-${project.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 hover:border-red-100 flex flex-col h-full transition-all duration-300"
                            >
                                {/* Image Thumbnail (16:9 Aspect Ratio) */}
                                <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    
                                    {/* Overlay Action Icon (Hidden on mobile for cleaner look) */}
                                    <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center">
                                        <motion.span 
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
                                        >
                                            View Details
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Card Content - Padding & Text Size Disesuaikan untuk Mobile */}
                                <div className="p-3 md:p-5 flex flex-col grow">
                                    <div className="flex justify-between items-start mb-2">
                                        {/* Judul lebih kecil di mobile (text-xs/sm) agar muat */}
                                        <h3 className="font-bold text-gray-900 text-xs sm:text-sm md:text-lg leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                                            {project.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Deskripsi disembunyikan di layar SANGAT kecil, muncul di tablet */}
                                    <p className="hidden sm:block text-xs md:text-sm text-gray-500 line-clamp-2 mb-3 md:mb-4">
                                        {project.shortDescription}
                                    </p>

                                    {/* Tech Stack Pills (Ukuran font sangat kecil di mobile) */}
                                    <div className="mt-auto flex flex-wrap gap-1.5 md:gap-2">
                                        {project.techStack.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-50 border border-gray-100 rounded-md text-[10px] md:text-xs font-medium text-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-50 border border-gray-100 rounded-md text-[10px] md:text-xs font-medium text-gray-400">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* SHOW MORE BUTTON */}
                {projects.length > INITIAL_COUNT && (
                    <div className="mt-10 md:mt-12 text-center">
                        <motion.button
                            onClick={handleToggleView}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-300 shadow-sm hover:shadow-md text-xs md:text-sm"
                        >
                            {isAllVisible ? (
                                <>
                                    <span>Show Less</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                </>
                            ) : (
                                <>
                                    <span>View All Projects ({projects.length})</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </>
                            )}
                        </motion.button>
                    </div>
                )}

            </div>

            {/* PROJECT MODAL / LIGHTBOX (Tidak berubah signifikan, hanya penyesuaian padding) */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
                    >
                        
                        <motion.div
                            layoutId={`project-card-${selectedProject.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        >
                            {/* Scrollable Content */}
                            <div className="overflow-y-auto custom-scrollbar flex-grow">
                                {/* Modal Image */}
                                <div className="relative aspect-video w-full bg-gray-100">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-3 right-3 md:top-4 md:right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-colors z-20"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                    </button>
                                </div>

                                {/* Modal Content */}
                                <div className="p-6 md:p-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        {selectedProject.title}
                                    </h3>

                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mb-6 md:mb-8">
                                        <h4 className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-wider mb-3 md:mb-4">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 border border-red-100 rounded-lg text-xs md:text-sm font-medium">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons (Footer) */}
                            <div className="p-5 md:p-6 bg-white border-t border-gray-100 flex flex-col sm:flex-row gap-3 md:gap-4 shrink-0">
                                <Link 
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-[0.98] text-sm md:text-base"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                    Source Code
                                </Link>
                                <Link 
                                    href={selectedProject.liveDemoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 rounded-xl font-bold transition-all active:scale-[0.98] text-sm md:text-base ${
                                        selectedProject.liveDemoLink !== "#" 
                                        ? "border-red-600 text-red-600 hover:bg-red-50" 
                                        : "border-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-50"
                                    }`}
                                    onClick={(e) => selectedProject.liveDemoLink === "#" && e.preventDefault()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                    Live Demo
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}