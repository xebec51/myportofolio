// src/components/Header.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navigationLinks = [
    { 
        name: 'Beranda', 
        href: '#home', 
        path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
    },
    { 
        name: 'Tentang', 
        href: '#about', 
        path: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
    },
    { 
        name: 'Keahlian', 
        href: '#skills', 
        path: "M13 10V3L4 14h7v7l9-11h-7z" 
    },
    {
        name: 'Sertifikasi',
        href: '#certifications',
        path: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    },
    { 
        name: 'Proyek', 
        href: '#projects', 
        path: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Logic untuk mendeteksi scroll dan update active section
    useEffect(() => {
        const handleScroll = () => {
            // 1. Update status background header
            setIsScrolled(window.scrollY > 20);

            // 2. Logic Scroll Spy (Deteksi Section Aktif)
            const scrollPosition = window.scrollY + 150; // Offset agar highlight berubah sebelum mencapai top persis

            for (const link of navigationLinks) {
                const sectionId = link.href.substring(1);
                const element = document.getElementById(sectionId);
                
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sectionId);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Panggil sekali saat mount untuk set state awal
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper untuk smooth scroll manual (opsional, jika CSS scroll-behavior: smooth tidak cukup)
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);
        setIsMobileMenuOpen(false);
        
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                isScrolled 
                    ? 'bg-white/80 backdrop-blur-md backdrop-saturate-150 border-gray-200/50 shadow-sm py-3' 
                    : 'bg-transparent border-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                {/* === LOGO === */}
                <Link href="/" className="flex items-center gap-2 group relative z-50">
                    <div className="w-9 h-9 bg-gray-900 text-white rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 shadow-md group-hover:shadow-red-500/30">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-gray-900">
                        Naldi<span className="text-red-600">.</span>
                    </span>
                </Link>

                {/* === NAVIGASI DESKTOP === */}
                <nav className="hidden md:flex items-center gap-1 bg-white/50 px-2 py-1.5 rounded-full border border-gray-100/50 backdrop-blur-sm shadow-sm">
                    {navigationLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={(e) => handleNavClick(e, link.href.substring(1))}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-2 ${
                                    isActive ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                                }`}
                            >
                                {/* Active Background Pill Animation */}
                                {isActive && (
                                    <motion.span
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-red-50 rounded-full -z-10 border border-red-100"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                
                                {/* Icon (Visible on active or hover) */}
                                <span className={`relative z-10 flex items-center gap-2`}>
                                    {isActive && (
                                        <motion.svg 
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="w-4 h-4" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.path} />
                                        </motion.svg>
                                    )}
                                    {link.name}
                                </span>
                            </a>
                        );
                    })}
                </nav>

                {/* === TOMBOL KONTAK & HAMBURGER === */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Link 
                            href="#contact" 
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-full hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <span>Hubungi Saya</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-red-600 focus:outline-none p-2 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            ) : (
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* === MENU MOBILE (DROPDOWN) === */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="p-4 flex flex-col space-y-2">
                    {navigationLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a 
                                key={link.name} 
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href.substring(1))}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                                    isActive 
                                        ? 'bg-red-50 text-red-600 shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <svg className={`w-5 h-5 ${isActive ? 'text-red-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.path} />
                                </svg>
                                {link.name}
                                {isActive && (
                                    <span className="ml-auto w-2 h-2 bg-red-600 rounded-full"></span>
                                )}
                            </a>
                        );
                    })}
                    <div className="pt-2 border-t border-gray-100 mt-2">
                        <a 
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 text-sm font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 active:scale-95 transition-all shadow-lg shadow-red-600/20"
                        >
                            Hubungi Saya
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}