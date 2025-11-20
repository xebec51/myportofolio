"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

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
        name: 'Proyek', 
        href: '#projects', 
        path: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Efek untuk mendeteksi scroll agar header punya shadow saat digulir
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                {/* === LOGO === */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900">
                        Naldi<span className="text-red-600">.</span>
                    </span>
                </Link>

                {/* === NAVIGASI DESKTOP === */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navigationLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-200 group"
                        >
                            {/* Icon Kecil */}
                            <svg className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.path} />
                            </svg>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* === TOMBOL KONTAK (DESKTOP) === */}
                <div className="hidden md:block">
                    <Link 
                        href="#contact" 
                        className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-full hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <span>Hubungi Saya</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                </div>

                {/* === TOMBOL MENU MOBILE (HAMBURGER) === */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 hover:text-red-600 focus:outline-none p-2"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* === MENU MOBILE (DROPDOWN) === */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col space-y-4 animate-fade-in-down">
                    {navigationLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 font-medium transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.path} /></svg>
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-2 border-t border-gray-100">
                        <Link 
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full px-4 py-3 mt-2 text-sm font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Hubungi Saya
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}