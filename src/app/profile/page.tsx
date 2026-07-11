// src/app/profile/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const profileTitle = "Profil Muh. Rinaldi Ruslan";
const profileDescription =
    "Profil lengkap Muh. Rinaldi Ruslan: pendidikan, pengalaman, keahlian full stack development, machine learning, computer vision, dan proyek teknologi.";

export const metadata: Metadata = {
    title: {
        absolute: profileTitle,
    },
    description: profileDescription,
    alternates: {
        canonical: "/profile",
    },
    openGraph: {
        title: profileTitle,
        description: profileDescription,
        url: "/profile",
        siteName: "Naldi Portfolio",
        locale: "id_ID",
        type: "profile",
        images: [
            {
                url: "/profile.jpg",
                width: 736,
                height: 736,
                alt: "Profil Muh. Rinaldi Ruslan",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: profileTitle,
        description: profileDescription,
        images: ["/profile.jpg"],
    },
};

// Data Pendidikan
const education = [
    {
        institution: "Universitas Hasanuddin",
        degree: "S1 Sistem Informasi",
        year: "2021 - Sekarang",
        description: "IPK 3.89. Aktif dalam organisasi kemahasiswaan dan asisten laboratorium pemrograman."
    },
    {
        institution: "PPTQ Al-Imam Ashim Makassar",
        degree: "Pendidikan Pesantren, MTs TQ & MA TQ",
        year: "2016 - 2022",
        description: "Menempuh pendidikan enam tahun di lingkungan pesantren, mencakup jenjang MTs TQ Al-Imam Ashim Makassar dan MA TQ Al-Imam Ashim Makassar."
    }
];

// Data Pengalaman
const experience = [
    {
        role: "Machine Learning Cohort",
        company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        year: "Feb 2024 - Jun 2024",
        description: "Mengembangkan model Machine Learning untuk mendeteksi penyakit tanaman. Lulus dengan predikat Distinction.",
        type: "Studi Independen"
    },
    {
        role: "Front-End Web Developer",
        company: "Freelance / Projects",
        year: "2023 - Sekarang",
        description: "Membangun berbagai aplikasi web responsif menggunakan React, Next.js, dan Tailwind CSS untuk klien dan portofolio pribadi.",
        type: "Freelance"
    }
];

export default function ProfilePage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    
                    {/* Header Profil */}
                    <div className="text-center mb-16" data-aos="fade-down">
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Profil Muh. Rinaldi Ruslan</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Perjalanan akademis dan pengalaman profesional Muh. Rinaldi Ruslan sebagai Full Stack Developer dan Machine Learning Engineer dari Makassar, Indonesia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        
                        {/* Kolom Kiri: Pendidikan */}
                        <div data-aos="fade-right">
                            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-8 border-b-2 border-red-600 pb-2 w-fit">
                                <span className="mr-3 text-3xl">🎓</span> Riwayat Pendidikan
                            </h2>
                            <div className="space-y-8 border-l-2 border-gray-200 ml-3 pl-8 relative">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative group">
                                        {/* Dot Timeline */}
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 bg-white border-4 border-red-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                        
                                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                                            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full mb-2 inline-block">
                                                {edu.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900">{edu.institution}</h3>
                                            <p className="text-gray-700 font-medium mb-2">{edu.degree}</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Kolom Kanan: Pengalaman */}
                        <div data-aos="fade-left">
                            <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-8 border-b-2 border-red-600 pb-2 w-fit">
                                <span className="mr-3 text-3xl">💼</span> Pengalaman Kerja
                            </h2>
                            <div className="space-y-8 border-l-2 border-gray-200 ml-3 pl-8 relative">
                                {experience.map((exp, index) => (
                                    <div key={index} className="relative group">
                                        {/* Dot Timeline */}
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 bg-white border-4 border-gray-900 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                        
                                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                    {exp.year}
                                                </span>
                                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                                    {exp.type}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                            <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                                            <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
