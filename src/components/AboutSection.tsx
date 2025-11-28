import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Kolom Kiri: Foto Profil Asli (Bukan Anime) */}
                    <div 
                        className="md:w-5/12 w-full flex justify-center"
                        data-aos="fade-right" 
                        data-aos-delay="200"
                    >
                        <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl group border-4 border-gray-100">
                            {/* Pastikan file profile1.jpg ada di folder public */}
                            <Image 
                                src="/profile1.jpg" 
                                alt="Muh. Rinaldi Ruslan" 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Halus */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Deskripsi Singkat & Tombol */}
                    <div 
                        className="md:w-7/12 text-center md:text-left"
                        data-aos="fade-left" 
                        data-aos-delay="400"
                    >
                        <h2 className="text-sm font-bold text-red-600 tracking-widest uppercase mb-3">
                            Tentang Saya
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Mengkombinasikan Logika Data dengan Kreativitas Desain.
                        </h3>
                        
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Saya adalah mahasiswa Sistem Informasi yang berfokus pada pengembangan web modern dan kecerdasan buatan. Saya percaya bahwa teknologi terbaik adalah yang tidak hanya canggih, tetapi juga bermanfaat dan mudah digunakan.
                        </p>

                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Di luar koding, saya aktif sebagai mentor dan terus mengeksplorasi tren teknologi terbaru untuk menciptakan solusi digital yang relevan.
                        </p>

                        <Link 
                            href="/profile" 
                            className="inline-flex items-center px-8 py-3 text-base font-bold text-white bg-gray-900 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                        >
                            Lihat Profil Lengkap
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}