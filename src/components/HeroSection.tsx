// src/components/HeroSection.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
    // --- LOGIKA TYPEWRITER EFFECT ---
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = useMemo(() => ["Full Stack Developer", "Machine Learning Engineer"], []);

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

    // --- VARIAN ANIMASI ---
    
    // Container: Mengatur agar anak-anaknya muncul berurutan (Stagger)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    // Elemen: Muncul dari bawah ke atas
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    // Elemen: Muncul dari atas ke bawah (Judul)
    const fadeDownVariants: Variants = {
        hidden: { opacity: 0, y: -30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    
                    {/* === KOLOM KIRI: KONTEN TEKS === */}
                    <motion.div 
                        className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        
                        {/* Greeting */}
                        <motion.h1 
                            variants={fadeDownVariants}
                            className="text-gray-900 dark:text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 tracking-tight leading-tight"
                        >
                            Hi, I&apos;m <span className="text-red-600">Naldi</span> 
                            <motion.span 
                                className="inline-block ml-3 origin-[70%_70%]"
                                animate={{ rotate: [0, 14, -8, 14, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                            >
                                👋
                            </motion.span>
                        </motion.h1>
                        
                        {/* Animated Role */}
                        <motion.div 
                            variants={fadeDownVariants}
                            className="h-10 lg:h-12 mb-6 flex items-center justify-center lg:justify-start w-full"
                        >
                            <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                                I&apos;m a <span className="text-gray-900 dark:text-white border-b-2 border-red-600">{text}</span>
                                <span className="animate-pulse text-red-600">|</span>
                            </span>
                        </motion.div>

                        <motion.p 
                            variants={fadeUpVariants}
                            className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-8 max-w-xl leading-relaxed px-4 lg:px-0"
                        >
                            I&apos;m Muh. Rinaldi Ruslan, a Full Stack Developer and Machine Learning Engineer from Makassar, Indonesia, crafting robust web applications and intelligent ML models that turn complex problems into scalable solutions.
                        </motion.p>

                        {/* Social Links */}
                        <motion.div 
                            variants={fadeUpVariants}
                            className="flex flex-col sm:flex-row items-center gap-3 mb-10"
                        >
                            <span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Follow me:</span>
                            <div className="flex gap-3">
                                <SocialButton label="GitHub" href="https://github.com/xebec51" iconPath="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                <SocialButton label="LinkedIn" href="https://www.linkedin.com/in/rinaldiruslan/" iconPath="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                <SocialButton label="Instagram" href="https://instagram.com/rinaldiruslan" iconPath="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                <SocialButton label="TikTok" href="https://tiktok.com/@rinaldiruslan" iconPath="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
                                <SocialButton label="Facebook" href="https://www.facebook.com/rinaldi.naldi.5220" iconPath="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div 
                            variants={fadeUpVariants}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-10"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="#projects" className="w-full flex items-center justify-center px-8 py-3.5 text-sm font-bold text-white bg-gray-900 dark:bg-red-600 rounded-lg hover:bg-red-600 dark:hover:bg-red-500 transition-colors duration-300 shadow-lg">
                                    Lihat Proyek
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/Curriculum_Vitae_Muh.Rinaldi_Ruslan.pdf" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-8 py-3.5 text-sm font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-red-600 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-300 shadow-sm">
                                    Unduh CV
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Quick Stats Section */}
                        <motion.div variants={fadeUpVariants} className="w-full max-w-2xl">
                             <h2 className="flex items-center gap-2 text-sm sm:text-base font-semibold mb-5 text-gray-800 dark:text-gray-200 justify-center lg:justify-start">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                Quick Stats
                            </h2>

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
                                    iconPath="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                                />
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* === KOLOM KANAN: GAMBAR PROFIL & ORBIT === */}
                    <div className="w-full flex justify-center lg:justify-end relative order-1 lg:order-2 -mt-6 lg:-mt-14">
                        
                        {/* Container Relatif (Orbit Area) */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] flex items-center justify-center"
                        >
                            
                            {/* Floating Profile Image */}
                            <motion.div 
                                animate={{ y: [0, -12, 0] }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                                className="relative w-60 h-60 sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl z-10 cursor-pointer"
                            >
                                <Image
                                    src="/profile.jpg"
                                    alt="Muh. Rinaldi Ruslan (Naldi), Full Stack Developer dan Machine Learning Engineer"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 340px"
                                    priority
                                />
                            </motion.div>

                            {/* Floating Tech Icons (Satellites) */}
                            <TechIcon 
                                position="top-2 left-2 sm:top-4 sm:left-4 lg:top-8 lg:left-0" delay={0}
                                color="text-yellow-500" label="JavaScript"
                                iconPath="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                            />
                            <TechIcon 
                                position="top-4 right-2 sm:top-6 sm:right-4 lg:top-8 lg:-right-4" delay={1.5}
                                color="text-blue-500" label="Python"
                                iconPath="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
                            />
                            <TechIcon 
                                position="bottom-10 right-0 sm:bottom-12 sm:right-2 lg:bottom-12 lg:-right-8" delay={0.8}
                                color="text-cyan-400" label="React"
                                iconPath="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                            />
                            <TechIcon 
                                position="bottom-2 left-2 sm:bottom-4 sm:left-4 lg:bottom-8 lg:left-0" delay={2.2}
                                color="text-orange-500" label="TensorFlow"
                                iconPath="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"
                            />

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- SUB COMPONENTS ---

const SocialButton = ({ label, href, iconPath }: { label: string, href: string, iconPath: string }) => (
    <motion.a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`Kunjungi ${label} Muh. Rinaldi Ruslan`}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="p-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-200 dark:hover:border-red-500/40 hover:text-red-600 dark:hover:text-red-500 rounded-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 shadow-sm hover:shadow-md cursor-pointer inline-flex items-center justify-center"
    >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={iconPath}/></svg>
    </motion.a>
);

const StatPill = ({ label, value, iconPath }: { label: string, value: string, iconPath: string }) => (
    <motion.div 
        whileHover={{ scale: 1.05, backgroundColor: "#dc2626" }} // Hover: Background jadi Red-600 (lebih terang dari Red-700)
        className="flex items-center bg-red-700 p-3 pr-4 rounded-3xl shadow-lg w-auto cursor-default transition-colors duration-300"
    >
        <div className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
            </svg>
        </div>
        <div className="text-left leading-none ml-2 whitespace-nowrap">
            <p className="font-bold text-white text-[7px] sm:text-xs mb-0.5">{value}</p>
            <p className="text-[7px] sm:text-[8px] text-red-100 font-medium">{label}</p>
        </div>
    </motion.div>
);

// TechIcon dengan Animasi Float Halus
const TechIcon = ({ 
    position, 
    delay, 
    color, 
    label, 
    iconPath,
}: { 
    position: string, 
    delay: number, 
    color: string, 
    label: string, 
    iconPath: string,
}) => (
    <div 
        className={`tech-icon-float absolute ${position} z-20`}
        style={{ animationDelay: `${delay}s` }}
    >
        <div
            role="img"
            aria-label={label}
            tabIndex={0}
            className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ease-out hover:scale-110 focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
        >
            <svg aria-hidden="true" className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-9 lg:h-9 ${color}`} viewBox="0 0 24 24" fill="currentColor">
                <path d={iconPath} />
            </svg>

            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition-opacity duration-300 pointer-events-none group-hover:opacity-100 group-focus-visible:opacity-100">
                {label}
            </span>
        </div>
    </div>
);
