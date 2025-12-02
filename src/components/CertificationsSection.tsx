// src/components/CertificationsSection.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications, Certificate } from '../data/certifications';

export default function CertificationsSection() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
    
    // Tetap 6 agar rapi (2 baris di desktop @3-col, 3 baris di mobile @2-col)
    const INITIAL_COUNT = 6; 
    
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const isAllVisible = visibleCount >= certifications.length;

    const handleToggleView = () => {
        if (isAllVisible) {
            setVisibleCount(INITIAL_COUNT);
            const section = document.getElementById('certifications');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
            setVisibleCount(certifications.length);
        }
    };

    const displayedCerts = certifications.slice(0, visibleCount);

    return (
        <section id="certifications" className="py-20 md:py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
                    >
                        Licenses & Certifications
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
                    >
                        Validating technical expertise through professional accreditations.
                    </motion.p>
                </div>

                {/* GRID GALLERY */}
                <motion.div 
                    layout
                    // UPDATE GRID:
                    // grid-cols-2 (Mobile)
                    // md:grid-cols-3 (Tablet/Desktop)
                    // gap-3 (Mobile) agar tidak sempit, gap-6/8 di layar besar
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 lg:gap-8"
                >
                    <AnimatePresence>
                        {displayedCerts.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                layoutId={`card-${cert.id}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                onClick={() => setSelectedCert(cert)}
                                className="group cursor-pointer bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-4/3 bg-gray-100 overflow-hidden w-full">
                                    <Image
                                        src={cert.image} 
                                        alt={cert.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        // Update sizes untuk performa gambar yang lebih baik di 2 kolom mobile
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    />
                                    {/* Overlay Icon (Hidden on mobile to keep clean, visible on hover desktop) */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <motion.span 
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white/90 p-2 md:p-3 rounded-full text-gray-900 shadow-lg backdrop-blur-sm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Minimal Info */}
                                <div className="p-3 md:p-5 flex flex-col grow">
                                    <h3 className="font-bold text-gray-900 text-xs md:text-sm line-clamp-2 leading-snug group-hover:text-red-600 transition-colors mb-2">
                                        {cert.title}
                                    </h3>
                                    <div className="mt-auto flex flex-col md:flex-row md:items-center justify-between text-[10px] md:text-xs text-gray-500 font-medium">
                                        <span className="line-clamp-1">{cert.issuer}</span>
                                        <span className="hidden md:inline-block bg-gray-100 px-2 py-1 rounded-md text-gray-600">{cert.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* SHOW MORE BUTTON */}
                {certifications.length > INITIAL_COUNT && (
                    <div className="mt-10 md:mt-12 text-center">
                        <motion.button
                            onClick={handleToggleView}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full font-semibold hover:border-red-600 hover:text-red-600 transition-all duration-300 shadow-sm hover:shadow-md text-sm md:text-base"
                        >
                            {isAllVisible ? (
                                <>
                                    <span>Show Less</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                                </>
                            ) : (
                                <>
                                    <span>View All Certificates ({certifications.length})</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </>
                            )}
                        </motion.button>
                    </div>
                )}
            </div>

            {/* MODAL / LIGHTBOX (Tetap Sama) */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9999 flex items-center justify-center p-4"
                    >
                        <motion.div
                            layoutId={`card-${selectedCert.id}`}
                            onClick={(e) => e.stopPropagation()} 
                            className="bg-white rounded-2xl md:rounded-3xl overflow-hidden max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl relative"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        >
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-3 right-3 md:top-4 md:right-4 z-20 p-2 bg-black/50 text-white rounded-full backdrop-blur-md transition-colors hover:bg-black/70"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>

                            <div className="relative grow bg-gray-100 flex items-center justify-center p-4 md:p-8 overflow-hidden">
                                <div className="relative w-full h-full min-h-[250px] md:min-h-[500px]">
                                     <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain drop-shadow-xl"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="p-5 md:p-8 bg-white border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                                <div className="text-center md:text-left w-full md:w-auto">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 line-clamp-1 md:line-clamp-none">
                                        {selectedCert.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-500">
                                        {selectedCert.issuer} • {selectedCert.date}
                                    </p>
                                </div>
                                
                                <a 
                                    href={selectedCert.credentialLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full md:w-auto gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-600/30 text-sm md:text-base"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                                    See Credential
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}