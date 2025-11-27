import React from 'react';

const certifications = [
    {
        name: "Menjadi Front-End Web Developer Expert",
        issuer: "Dicoding Indonesia",
        year: "2025",
        desc: "Sertifikasi tingkat lanjut yang menguji keahlian dalam membangun web modern, PWA, dan testing."
    },
    {
        name: "Introduction to Big Data",
        issuer: "UC San Diego (Coursera)",
        year: "2025",
        desc: "Memahami konsep Big Data, Hadoop, dan pemrosesan data skala besar."
    },
    {
        name: "Belajar Machine Learning untuk Pemula",
        issuer: "Dicoding Indonesia",
        year: "2025",
        desc: "Mempelajari algoritma Supervised dan Unsupervised Learning serta penerapan model ML."
    },
    {
        name: "Cloud Practitioner Essentials",
        issuer: "AWS (Amazon Web Services)",
        year: "2024",
        desc: "Dasar-dasar komputasi awan AWS, keamanan, arsitektur, dan model penetapan harga."
    },
    {
        name: "Belajar Dasar Data Science",
        issuer: "Dicoding Indonesia",
        year: "2024",
        desc: "Teknik analisis data, visualisasi, dan pembersihan data menggunakan Python."
    },
    {
        name: "Java Fundamentals",
        issuer: "Talent Scouting Academy",
        year: "2024",
        desc: "Pemrograman berorientasi objek (OOP) dan struktur data menggunakan Java."
    }
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 
                        className="text-4xl font-extrabold text-gray-900 mb-4"
                        data-aos="fade-down"
                    >
                        Sertifikasi & Lisensi
                    </h2>
                    <p 
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Validasi kompetensi teknis melalui standar industri di bidang Web Development dan Data Science.
                    </p>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                            data-aos="zoom-in-up" // Efek zoom in dari bawah
                            data-aos-delay={index * 100} // Delay bertingkat agar muncul satu per satu
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                </div>
                                <span className="px-3 py-1 text-xs font-bold text-gray-500 bg-gray-100 rounded-full border border-gray-200">
                                    {cert.year}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors">
                                {cert.name}
                            </h3>
                            
                            <p className="text-sm font-medium text-red-600 mb-4">
                                {cert.issuer}
                            </p>
                            
                            <p className="text-sm text-gray-500 leading-relaxed mt-auto">
                                {cert.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}