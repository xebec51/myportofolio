import React from 'react';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Judul Bagian dengan Animasi Fade-Down */}
                <h2 
                    className="text-4xl font-extrabold text-gray-900 text-center mb-16"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    Tentang Saya
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    
                    {/* Kolom Kiri: Ringkasan Diri */}
                    <div 
                        className="md:w-7/12"
                        data-aos="fade-right" 
                        data-aos-delay="200"
                    >
                        <h3 className="text-3xl font-bold text-red-600 mb-6">
                            Code. Data. Innovation.
                        </h3>
                        
                        <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                            Saya adalah mahasiswa Sistem Informasi di Universitas Hasanuddin dengan passion mendalam di dunia rekayasa perangkat lunak dan kecerdasan buatan. Saya tidak hanya menulis kode, tetapi membangun solusi yang efisien.
                        </p>
                        
                        <p className="text-gray-700 text-lg leading-relaxed text-justify">
                            Keahlian saya mencakup pembangunan aplikasi web modern (**Full-Stack Development**) dan analisis data prediktif (**Machine Learning**). Dengan latar belakang matematika yang kuat dan sertifikasi teknis tingkat Expert, saya siap mengubah data mentah menjadi wawasan dan ide menjadi aplikasi fungsional.
                        </p>
                    </div>

                    {/* Kolom Kanan: Highlight Pencapaian Teknis */}
                    <div 
                        className="md:w-5/12 w-full bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                        data-aos="fade-left" 
                        data-aos-delay="400"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">
                            Kualifikasi Teknis
                        </h3>
                        
                        <div className="space-y-8">
                            {/* Poin 1: Web Dev */}
                            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="500">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl shrink-0">
                                    💻
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-gray-900">Expert</p>
                                    <p className="text-gray-600 font-medium text-sm uppercase tracking-wide">Web Development</p>
                                    <p className="text-sm text-gray-500 mt-1">Certified Front-End Web Developer Expert (Dicoding)</p>
                                </div>
                            </div>
                            
                            {/* Poin 2: Machine Learning */}
                            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="600">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl shrink-0">
                                    🤖
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-gray-900">Machine Learning</p>
                                    <p className="text-gray-600 font-medium text-sm uppercase tracking-wide">Data Science</p>
                                    <p className="text-sm text-gray-500 mt-1">Tersertifikasi dalam Machine Learning & Data Visualization</p>
                                </div>
                            </div>
                            
                            {/* Poin 3: Academic */}
                            <div className="flex items-start space-x-4" data-aos="fade-up" data-aos-delay="700">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-2xl shrink-0">
                                    🎓
                                </div>
                                <div>
                                    <p className="text-xl font-extrabold text-gray-900">3.89 GPA</p>
                                    <p className="text-gray-600 font-medium text-sm uppercase tracking-wide">Sistem Informasi</p>
                                    <p className="text-sm text-gray-500 mt-1">Universitas Hasanuddin (Information System S1)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}