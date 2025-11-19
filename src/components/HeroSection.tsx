"use client"; // Wajib ada karena kita menggunakan useState/useEffect untuk animasi

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
    // --- LOGIKA TYPEWRITER EFFECT ---
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = ["Software Developer", "Machine Learning Engineer"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting 
                ? fullText.substring(0, text.length - 1) 
                : fullText.substring(0, text.length + 1)
            );

            // Kecepatan mengetik
            setTypingSpeed(isDeleting ? 50 : 150);

            // Jika selesai mengetik
            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Tunggu 2 detik sebelum menghapus
            } 
            // Jika selesai menghapus
            else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, phrases]);
    // -------------------------------

    return (
        <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                    
                    {/* === KOLOM KIRI: KONTEN TEKS === */}
                    <div className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                        
                        {/* Greeting */}
                        <h2 className="text-gray-900 text-3xl lg:text-5xl font-extrabold mb-3 tracking-tight">
                            Hi, I’m <span className="text-red-600">Rinaldi Ruslan</span>
                        </h2>
                        
                        {/* Animated Role (Typewriter) */}
                        <div className="h-8 lg:h-10 mb-6 flex items-center">
                            <span className="text-xl lg:text-3xl font-semibold text-gray-700">
                                I am a <span className="text-gray-900 border-b-2 border-red-600">{text}</span>
                                <span className="animate-pulse text-red-600">|</span>
                            </span>
                        </div>

                        {/* Description (Ukuran font diperkecil sedikit agar lebih rapi) */}
                        <p className="text-gray-600 text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
                            Membangun aplikasi web modern yang responsif dan mengembangkan model Machine Learning cerdas. Menggabungkan desain antarmuka yang bersih dengan logika pemrograman yang kuat.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">Follow me:</span>
                            <div className="flex gap-2">
                                <SocialButton href="https://github.com/xebec51" iconPath="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                <SocialButton href="https://www.linkedin.com/in/muh-rinaldi-ruslan" iconPath="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                <SocialButton href="https://instagram.com/rinaldiruslan" iconPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-12">
                            <Link href="#projects" className="flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-gray-900 rounded-lg hover:bg-red-600 transition duration-300 shadow-lg">
                                Lihat Proyek
                            </Link>
                            <Link href="/Curriculum_Vitae_Muh.Rinaldi_Ruslan.pdf" target="_blank" className="flex items-center justify-center px-6 py-3 text-sm font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 transition duration-300">
                                Unduh CV
                            </Link>
                        </div>

                        {/* Quick Stats (Ukuran Compact) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
                            <StatBox label="Experience" value="2+ Years" />
                            <StatBox label="Tech Stack" value="JS & Python" />
                            <StatBox label="Projects" value="4+ Completed" />
                            <StatBox label="GPA" value="3.89 / 4.00" />
                        </div>

                    </div>

                    {/* === KOLOM KANAN: GAMBAR PROFIL & ORBIT (Ukuran Disesuaikan) === */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
                        
                        {/* Container Relatif - Ukuran dikurangi agar tidak terlalu besar */}
                        <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
                            
                            {/* Orbit Ring (Tipis) */}
                            <div className="absolute inset-0 rounded-full border border-gray-200 animate-spin-slow"></div>

                            {/* Foto Profil Utama */}
                            <div className="relative w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                                <Image 
                                    src="/profile.jpg" 
                                    alt="Muh. Rinaldi Ruslan" 
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Tech Icons (Satellites) */}
                            <FloatingIcon icon="⚡" position="top-0 left-10 lg:left-10" delay="0s" />
                            <FloatingIcon icon="🐍" position="bottom-10 right-0 lg:right-0" delay="1s" />
                            <FloatingIcon icon="⚛️" position="top-10 right-0 lg:right-4" delay="2s" />
                            <FloatingIcon icon="🧠" position="bottom-0 left-4 lg:left-12" delay="3s" />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- SUB COMPONENTS UNTUK KERAPIAN ---

const SocialButton = ({ href, iconPath }: { href: string, iconPath: string }) => (
    <Link href={href} target="_blank" className="p-2 bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 rounded-lg text-gray-600 transition duration-300">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={iconPath}/></svg>
    </Link>
);

const StatBox = ({ label, value }: { label: string, value: string }) => (
    <div className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-center hover:shadow-md transition duration-300">
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">{label}</p>
        <p className="font-bold text-gray-900 text-sm lg:text-base">{value}</p>
    </div>
);

const FloatingIcon = ({ icon, position, delay }: { icon: string, position: string, delay: string }) => (
    <div 
        className={`absolute ${position} w-10 h-10 lg:w-14 lg:h-14 bg-white border border-gray-100 p-2 rounded-full shadow-lg flex items-center justify-center z-20 animate-bounce`}
        style={{ animationDelay: delay }}
    >
        <span className="text-lg lg:text-2xl">{icon}</span>
    </div>
);