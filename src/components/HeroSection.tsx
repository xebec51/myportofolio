"use client";

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

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); 
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, phrases]);

    return (
        <section id="home" className="relative pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
                    
                    {/* === KOLOM KIRI: KONTEN TEKS === */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
                        
                        {/* Greeting */}
                        <h1 
                            className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 tracking-tight leading-tight"
                            data-aos="fade-down"
                            data-aos-delay="100"
                        >
                            Hi, I&apos;m <span className="text-red-600">Naldi</span> 
                            <span className="inline-block animate-wave origin-[70%_70%] ml-2">👋</span>
                        </h1>
                        
                        {/* Animated Role */}
                        <div 
                            className="h-10 lg:h-12 mb-6 flex items-center justify-center lg:justify-start w-full"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700">
                                I&apos;m a <span className="text-gray-900 border-b-2 border-red-600">{text}</span>
                                <span className="animate-pulse text-red-600">|</span>
                            </span>
                        </div>

                        <p 
                            className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 max-w-xl leading-relaxed px-4 lg:px-0"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            Membangun aplikasi web modern yang responsif dan mengembangkan model Machine Learning cerdas untuk solusi bisnis yang inovatif.
                        </p>

                        {/* Social Links */}
                        <div 
                            className="flex flex-col sm:flex-row items-center gap-3 mb-8"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <span className="text-gray-500 font-medium text-xs sm:text-sm uppercase tracking-wider">Follow me:</span>
                            <div className="flex gap-2">
                                <SocialButton href="https://github.com/xebec51" iconPath="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                <SocialButton href="https://www.linkedin.com/in/muh-rinaldi-ruslan" iconPath="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                <SocialButton href="https://instagram.com/rinaldiruslan" iconPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div 
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-10"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <Link 
                                href="#projects" 
                                className="flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-gray-900 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Lihat Proyek
                            </Link>
                            <Link 
                                href="/Curriculum_Vitae_Muh.Rinaldi_Ruslan.pdf" 
                                target="_blank" 
                                className="flex items-center justify-center px-8 py-3.5 text-sm font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Unduh CV
                            </Link>
                        </div>

                        {/* Quick Stats Section */}
                        <div className="w-full max-w-2xl" data-aos="fade-up" data-aos-delay="600">
                             <h3 className="flex items-center gap-2 text-sm sm:text-base font-semibold mb-5 text-gray-800 justify-center lg:justify-start">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                Quick Stats
                            </h3>

                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
                                <StatPill 
                                    label="Experience" 
                                    value="2+ Years" 
                                    iconPath="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                />
                                <StatPill 
                                    label="Tech Stack" 
                                    value="5+ Tech" 
                                    iconPath="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                                />
                                <StatPill 
                                    label="Projects" 
                                    value="4+ Done" 
                                    iconPath="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                                />
                                <StatPill 
                                    label="Certification" 
                                    value="30+" 
                                    iconPath="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                                />
                            </div>
                        </div>

                    </div>

                    {/* === KOLOM KANAN: GAMBAR PROFIL & ORBIT === */}
                    <div className="w-full flex justify-center lg:justify-end relative order-1 lg:order-2 -mt-6 lg:-mt-14" data-aos="zoom-in" data-aos-delay="200">
                        
                        {/* Container Relatif (Orbit Area) */}
                        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
                            
                            {/* Floating Profile Image */}
                            <div className="relative w-60 h-60 sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl cursor-pointer">
                                <Image 
                                    src="/profile.jpg" 
                                    alt="Naldi - Software Developer & ML Engineer" 
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Tech Icons (Satellites) */}
                            <TechIcon 
                                position="top-2 left-2 sm:top-4 sm:left-4 lg:top-8 lg:left-0" delay="0s"
                                color="text-yellow-500" label="JavaScript"
                                iconPath="M3 3h18v18H3V3zm13.645 14.354h1.497V8.883l-3.02 1.79v1.338l1.523-.88v6.223zm-3.975 0h1.497v-3.29l-1.497.01v3.28zm-1.692-5.197l-1.1.645v1.353l1.1-.63v-1.368zm-1.1-1.857l3.02-1.79v-1.34l-3.02 1.793v1.337z"
                            />
                            <TechIcon 
                                position="top-4 right-2 sm:top-6 sm:right-4 lg:top-8 lg:-right-4" delay="1.5s"
                                color="text-blue-500" label="Python"
                                iconPath="M14.25.75l-.986.514c-2.667 1.392-1.743 4.294-1.743 4.294H8.937s-3.703.262-3.703 3.981v.633h3.73v.795H2.26S.36 9.736.36 13.93c0 4.238 3.582 4.134 3.582 4.134h2.875s.328-3.678 3.953-3.678h4.262s3.105-.408 3.105-3.433V8.395c0-3.219-3.887-7.645-3.887-7.645zm-5.704 2.87c.57 0 1.036.466 1.036 1.036 0 .57-.466 1.036-1.036 1.036-.57 0-1.036-.466-1.036-1.036 0-.57.466-1.036 1.036-1.036zm8.653 11.854l.986-.515c2.667-1.392 1.743-4.294 1.743-4.294h2.584s3.703-.262 3.703-3.981v-.633h-3.73v-.795h6.704s1.9.956 1.9 5.15c0 4.238-3.582 4.134-3.582 4.134h-2.875s-.328 3.678-3.953 3.678h-4.262s-3.105.408-3.105 3.433v2.558c0 3.219 3.887 7.645 3.887 7.645zm5.704-2.87c-.57 0-1.036-.466-1.036-1.036 0-.57.466-1.036 1.036-1.036.57 0 1.036.466 1.036 1.036 0 .57-.466 1.036-1.036 1.036z"
                            />
                            <TechIcon 
                                position="bottom-10 right-0 sm:bottom-12 sm:right-2 lg:bottom-12 lg:-right-8" delay="0.8s"
                                color="text-cyan-400" label="React"
                                iconPath="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9.07 1.49c.17-.45.32-.91.44-1.37-.12-.46-.27-.92-.44-1.37l-.15-.39c-.13.39-.28.78-.45 1.17.17.39.32.78.45 1.17l.15.39m-9.95 0c-.17.45-.32.91-.44 1.37.12.46.27.92.44 1.37l.15.39c.13-.39.28-.78.45-1.17-.17-.39-.32-.78-.45-1.17l-.15-.39M16.63 20c.63-.38 2.01.2 3.6 1.7-.52.59-1.03 1.23-1.51 1.9-.82.08-1.63.2-2.4.36-.51-2.14-.32-3.61.31-3.96"
                            />
                            <TechIcon 
                                position="bottom-2 left-2 sm:bottom-4 sm:left-4 lg:bottom-8 lg:left-0" delay="2.2s"
                                color="text-red-600" label="Machine Learning" strokeIcon={true}
                                iconPath="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />

                        </div>
                    </div>

                </div>
            </div>

            {/* CSS Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    10%, 30% { transform: rotate(14deg); }
                    20%, 40% { transform: rotate(-8deg); }
                    50% { transform: rotate(14deg); }
                    60% { transform: rotate(0deg); }
                }
                .animate-wave {
                    animation: wave 2.5s ease-in-out infinite;
                }
                .hover\:shadow-3xl:hover {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </section>
    );
}

// --- SUB COMPONENTS ---

const SocialButton = ({ href, iconPath }: { href: string, iconPath: string }) => (
    <Link 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-2.5 bg-white border border-gray-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 rounded-lg text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
    >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={iconPath}/></svg>
    </Link>
);

// StatPill
const StatPill = ({ label, value, iconPath }: { label: string, value: string, iconPath: string }) => (
    <div className="flex items-center bg-red-700 p-3 pr-4 rounded-3xl shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-xl w-auto" data-aos="zoom-in" data-aos-delay="200">
        <div className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
            </svg>
        </div>
        <div className="text-left leading-none ml-2 whitespace-nowrap">
            <p className="font-bold text-white text-[7px] sm:text-xs mb-0.5">{value}</p>
            <p className="text-[7px] sm:text-[8px] text-red-100 font-medium">{label}</p>
        </div>
    </div>
);

// TechIcon
const TechIcon = ({ 
    position, 
    delay, 
    color, 
    label, 
    iconPath, 
    strokeIcon = false 
}: { 
    position: string, 
    delay: string, 
    color: string, 
    label: string, 
    iconPath: string, 
    strokeIcon?: boolean 
}) => (
    <div 
        className={`absolute ${position} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center z-20 animate-float group cursor-pointer`} 
        style={{ 
            animationDelay: delay,
            animationName: 'float',
            animationDuration: '3s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite'
        }}
    >
        {strokeIcon ? (
            <svg className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={iconPath} />
            </svg>
        ) : (
            <svg className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 ${color}`} viewBox="0 0 24 24" fill="currentColor">
                <path d={iconPath} />
            </svg>
        )}
        
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
            {label}
        </span>
    </div>
);