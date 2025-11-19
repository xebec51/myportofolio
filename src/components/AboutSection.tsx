import React from 'react';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                
                {/* Judul Bagian */}
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
                    Tentang Saya
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    
                    {/* Kolom Kiri: Ringkasan Diri */}
                    <div className="md:w-7/12">
                        <h3 className="text-3xl font-bold text-red-600 mb-6">
                            Membangun Karakter, Mengembangkan Solusi
                        </h3>
                        
                        {/* Paragraf pertama (ringkasan umum) */}
                        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                            Saya adalah seorang mahasiswa Sistem Informasi S1 dari Universitas Hasanuddin dengan IPK tinggi (3.89), yang memiliki komitmen kuat dalam pengembangan diri dan komunitas. Visi saya adalah menjembatani keterampilan teknis dengan kepemimpinan yang berorientasi pada manusia.
                        </p>
                        
                        {/* Paragraf kedua (fokus teknis & mentoring) */}
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Dengan fokus utama pada **Front-End Web Development** dan studi **Data Science**, saya siap menciptakan solusi inovatif dan efisien. Di sisi lain, saya juga menjabat sebagai **Program Mentor** di Direktorat Kemahasiswaan Unhas dan memiliki pengalaman memimpin proyek untuk lebih dari 400 siswa. Kombinasi ini menjadikan saya individu yang siap berkontribusi pada aspek teknis maupun pengembangan tim.
                        </p>
                    </div>

                    {/* Kolom Kanan: Poin Angka Penting (Achievement Highlights) */}
                    <div className="md:w-5/12 bg-gray-50 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Highlight Pencapaian
                        </h3>
                        
                        <div className="space-y-6">
                            {/* Poin 1: Mentoring */}
                            <div className="flex items-start space-x-4">
                                <span className="text-red-600 text-3xl mt-1">👨‍🏫</span>
                                <div>
                                    <p className="text-3xl font-extrabold text-gray-900">283+</p>
                                    <p className="text-gray-600 font-medium">Mahasiswa</p>
                                    <p className="text-sm text-gray-500">Dibimbing sebagai Program Mentor Sistem Informasi Unhas (3 Angkatan)</p>
                                </div>
                            </div>
                            
                            {/* Poin 2: Hard Skill / Sertifikasi */}
                            <div className="flex items-start space-x-4">
                                <span className="text-red-600 text-3xl mt-1">💻</span>
                                <div>
                                    <p className="text-3xl font-extrabold text-gray-900">Expert</p>
                                    <p className="text-gray-600 font-medium">Front-End Web Development</p>
                                    <p className="text-sm text-gray-500">Tersertifikasi sebagai Front-End Web Developer Expert oleh Dicoding</p>
                                </div>
                            </div>
                            
                            {/* Poin 3: Leadership/Project Management (Poin Baru) */}
                            <div className="flex items-start space-x-4">
                                <span className="text-red-600 text-3xl mt-1">✨</span>
                                <div>
                                    <p className="text-3xl font-extrabold text-gray-900">400+</p>
                                    <p className="text-gray-600 font-medium">Pengembangan Mahasiswa</p>
                                    <p className="text-sm text-gray-500">Berpengalaman dalam project management dan memimpin inisiatif untuk 400+ siswa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}