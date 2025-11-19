import React from 'react';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
                
                {/* Nama dan Hak Cipta */}
                <p className="text-lg font-bold text-white mb-2">Muh. Rinaldi Ruslan</p>
                <p className="text-sm mb-4">
                    &copy; {currentYear} All rights reserved. Built with Next.js and Tailwind CSS.
                </p>

                {/* Tautan Cepat */}
                <div className="flex justify-center space-x-6 text-sm">
                    <Link href="#home" className="hover:text-red-500 transition-colors">Beranda</Link>
                    <Link href="#projects" className="hover:text-red-500 transition-colors">Proyek</Link>
                    <Link href="https://github.com/xebec51" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">GitHub</Link>
                </div>

            </div>
        </footer>
    );
}