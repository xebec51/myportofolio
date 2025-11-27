"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 800, // Durasi animasi (ms)
            once: true,    // Animasi hanya terjadi sekali (tidak berulang saat scroll naik)
            easing: 'ease-out-cubic', // Gaya animasi lebih halus
            offset: 50,    // Jarak trigger animasi dari bawah layar
        });
    }, []);

    return null;
}