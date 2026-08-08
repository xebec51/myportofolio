// src/app/profile/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const profileTitle = "Profil Muh. Rinaldi Ruslan";
const profileDescription =
    "Profil lengkap Muh. Rinaldi Ruslan: pendidikan, pengalaman, organisasi, penghargaan, dan keahlian full stack development serta machine learning.";

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
    },
    twitter: {
        card: "summary_large_image",
        title: profileTitle,
        description: profileDescription,
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
        role: "Program Mentor, Mata Kuliah Penguatan Kompetensi (MKPK)",
        company: "Direktorat Kemahasiswaan, Universitas Hasanuddin",
        year: "2025 - Sekarang",
        description: "Diangkat melalui SK Rektor sebagai mentor utama Program Studi Sistem Informasi, membimbing 283 mahasiswa dari tiga angkatan (2023, 2024, & 2025) dalam mengonversi kegiatan non-akademik menjadi SKS.",
        type: "SK Rektor"
    },
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

// Data Organisasi & Kegiatan Kemahasiswaan (dikurasi dari CV, bagian terbaik saja)
const organizations = [
    {
        role: "Student Agent of Change - Bullying-Free Zone",
        org: "Fakultas MIPA, Universitas Hasanuddin",
        year: "2025 - Sekarang",
        description: "Berkolaborasi dengan pimpinan fakultas dan mahasiswa merancang program kampus yang aman dan inklusif, serta menjadi advokat utama nilai anti-bullying di lingkungan kampus."
    },
    {
        role: "Asisten Laboratorium Web Programming & OOP",
        org: "Fakultas MIPA, Universitas Hasanuddin",
        year: "2025",
        description: "Membimbing mahasiswa memahami materi pemrograman yang kompleks dan memberikan feedback konstruktif untuk menyelesaikan proyek praktikum."
    },
    {
        role: "Koordinator Penerima Beasiswa BSI",
        org: "Universitas Hasanuddin",
        year: "2024 - Sekarang",
        description: "Menjadi koordinator dan pusat komunikasi utama bagi seluruh penerima Beasiswa BSI, serta menyelenggarakan kegiatan pengembangan internal anggota."
    },
    {
        role: "Ketua Ikatan Pelajar Tahfizhul Qur'an",
        org: "MA TQ Al-Imam Ashim Makassar",
        year: "2021 - 2022",
        description: "Memimpin organisasi pelajar secara penuh, mengarahkan seluruh program kerja, dan menjadi perwakilan utama pelajar di berbagai forum."
    }
];

// Data Penghargaan & Pencapaian (dikurasi dari CV, bagian terbaik saja)
const achievements = [
    {
        title: "Juara 2 MTQMN - Kategori Hifzhil 30 Juz",
        org: "Universitas Lambung Mangkurat, sebagai Delegasi Universitas Hasanuddin",
        year: "2025"
    },
    {
        title: "Juara 1 Musabaqah Hifdzil Qur'an Nasional - Kategori 30 Juz",
        org: "Sekolah Tinggi Ilmu Islam dan Bahasa Arab (STIBA)",
        year: "2025"
    },
    {
        title: "Juara 1 PTQ RRI Makassar - Kategori Tahfidz",
        org: "Regional Sulawesi Selatan",
        year: "2024"
    },
    {
        title: "Juara 1 MTQPN - Kategori Hifzhil Qur'an 20 Juz",
        org: "Universitas Negeri Jakarta",
        year: "2022"
    }
];

// Ringkasan keahlian (kategori dari CV)
const skillHighlights = [
    {
        label: "Keahlian Teknis",
        items: ["Java", "Python", "JavaScript", "SQL", "Front-End & Back-End Development", "Machine Learning", "Data Visualization", "Android Studio", "Figma"],
    },
    {
        label: "Keahlian Interpersonal",
        items: ["Leadership & Mentoring", "Project & Event Management", "Public Speaking", "Teamwork & Collaboration", "Time Management"],
    },
    {
        label: "Bahasa",
        items: ["Indonesia (Native)", "Inggris (Intermediate)", "Arab (Intermediate)", "Jepang (Beginner)"],
    },
];

export default function ProfilePage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="container mx-auto px-6">

                    {/* Header Profil */}
                    <div className="flex flex-col items-center text-center mb-16" data-aos="fade-down">
                        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mb-6">
                            <Image
                                src="/profile.jpg"
                                alt="Muh. Rinaldi Ruslan"
                                fill
                                sizes="144px"
                                className="object-cover"
                            />
                        </div>
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Profil Muh. Rinaldi Ruslan</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Perjalanan akademis dan pengalaman profesional Muh. Rinaldi Ruslan sebagai Full Stack Developer dan Machine Learning Engineer dari Makassar, Indonesia.
                        </p>
                    </div>

                    {/* Ringkasan Keahlian */}
                    <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-red-600 pb-2 w-fit">
                            <span className="mr-3 text-3xl">🧩</span> Ringkasan Keahlian
                        </h2>
                        <div className="grid sm:grid-cols-3 gap-6">
                            {skillHighlights.map((group) => (
                                <div key={group.label} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                                    <h3 className="text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-4">{group.label}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <span key={item} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Kolom Kiri: Pendidikan */}
                        <div data-aos="fade-right">
                            <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-red-600 pb-2 w-fit">
                                <span className="mr-3 text-3xl">🎓</span> Riwayat Pendidikan
                            </h2>
                            <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-8 relative">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative group">
                                        {/* Dot Timeline */}
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-red-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                            <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 px-2 py-1 rounded-full mb-2 inline-block">
                                                {edu.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{edu.degree}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Kolom Kanan: Pengalaman */}
                        <div data-aos="fade-left">
                            <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-red-600 pb-2 w-fit">
                                <span className="mr-3 text-3xl">💼</span> Pengalaman Kerja
                            </h2>
                            <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-8 relative">
                                {experience.map((exp, index) => (
                                    <div key={index} className="relative group">
                                        {/* Dot Timeline */}
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-gray-900 dark:border-gray-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                                    {exp.year}
                                                </span>
                                                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                                                    {exp.type}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-16">

                        {/* Kolom Kiri: Organisasi & Kegiatan Kemahasiswaan */}
                        <div data-aos="fade-right">
                            <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-red-600 pb-2 w-fit">
                                <span className="mr-3 text-3xl">🤝</span> Organisasi & Kegiatan
                            </h2>
                            <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-8 relative">
                                {organizations.map((item, index) => (
                                    <div key={index} className="relative group">
                                        {/* Dot Timeline */}
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-gray-900 dark:border-gray-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full mb-2 inline-block">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                                            <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{item.org}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Kolom Kanan: Penghargaan & Pencapaian */}
                        <div data-aos="fade-left">
                            <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b-2 border-red-600 pb-2 w-fit">
                                <span className="mr-3 text-3xl">🏆</span> Penghargaan & Pencapaian
                            </h2>
                            <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-700 ml-3 pl-8 relative">
                                {achievements.map((item, index) => (
                                    <div key={index} className="relative group">
                                        {/* Dot Timeline */}
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-amber-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>

                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                                            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2 py-1 rounded-full mb-2 inline-block">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.org}</p>
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
