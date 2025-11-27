"use client";

import { useEffect, useState } from 'react';

export default function Preloader() {
    const [show, setShow] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Waktu tampil preloader (2 detik)
        const timerFade = setTimeout(() => {
            setFade(true);
        }, 2000);

        // Hapus dari DOM setelah transisi selesai (2.5 detik total)
        const timerHide = setTimeout(() => {
            setShow(false);
        }, 2500);

        return () => {
            clearTimeout(timerFade);
            clearTimeout(timerHide);
        };
    }, []);

    if (!show) return null;

    return (
        <div 
            className={`fixed inset-0 z-9999 flex items-center justify-center bg-gray-900 transition-opacity duration-500 ease-out ${fade ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="flex flex-col items-center justify-center">
                
                {/* Logo / Spinner Container */}
                <div className="relative w-24 h-24 mb-6">
                    {/* Lingkaran Luar (Diam) */}
                    <div className="absolute inset-0 border-4 border-red-600/20 rounded-full"></div>
                    
                    {/* Lingkaran Dalam (Berputar) */}
                    <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent animate-spin"></div>
                    
                    {/* Ikon Tengah (Opsional - Bisa inisial) */}
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl animate-pulse">
                        R
                    </div>
                </div>

                {/* Teks Loading */}
                <h1 className="text-2xl font-bold text-white tracking-[0.2em] animate-pulse">
                    NALDI<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-gray-400 text-xs mt-2 tracking-wider uppercase">
                    Loading Portfolio
                </p>
            </div>
        </div>
    );
}