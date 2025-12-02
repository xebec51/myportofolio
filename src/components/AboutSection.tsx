// src/components/AboutSection.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Kolom Kiri: Foto Profil */}
                    <div 
                        className="md:w-5/12 w-full flex justify-center"
                        data-aos="fade-right" 
                        data-aos-delay="200"
                    >
                        <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl group border-4 border-gray-100">
                            <Image 
                                src="/profile1.jpg" 
                                alt="Muh. Rinaldi Ruslan" 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Halus */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Deskripsi Singkat & Tombol */}
                    <div 
                        className="md:w-7/12 text-center md:text-left"
                        data-aos="fade-left" 
                        data-aos-delay="400"
                    >
                        <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">
                            About Me
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                            More Than Just <span className="text-red-600">Code</span>.
                        </h3>
                        
                        {/* Copywriting Bahasa Inggris (Updated) */}
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                            <p>
                                I am an <strong>Information Systems student at Hasanuddin University</strong> with a passion for building impactful digital solutions. 
                                A tech explorer from Indonesia, I combine a flair for problem-solving and storytelling through design to create digital experiences that truly matter. 
                                My goal is to transform complex challenges into elegant, scalable systems that drive real innovation for businesses.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <Link 
                                href="/profile" 
                                className="inline-flex items-center px-8 py-3 text-base font-bold text-white bg-gray-900 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                            >
                                View Full Profile
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}