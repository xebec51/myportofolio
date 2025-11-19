import React from 'react';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
                    Tentang Saya
                </h2>

                <div className="flex flex-col md:flex-row gap-12">
                    
                    {/* Kolom Kiri: Ringkasan Diri */}
                    <div className="md:w-7/12">
                        <h3 className="text-3xl font-bold text-red-600 mb-6">
                            Code. Data. Innovation.
                        </h3>
                        
                        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                            Saya adalah mahasiswa Sistem Informasi di Universitas Hasanuddin dengan passion mendalam di dunia rekayasa perangkat lunak dan kecerdasan buatan. Saya tidak hanya menulis kode, tetapi membangun solusi yang efisien.
                        </p>
                        
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Keahlian saya mencakup pembangunan aplikasi web modern (**Full-Stack Development**) dan analisis data prediktif (**Machine Learning**). Dengan latar belakang matematika yang kuat dan sertifikasi teknis tingkat Expert, saya siap mengubah data mentah menjadi wawasan dan ide menjadi aplikasi fungsional.
                        </p>
                    </div>

                    {/* Kolom Kanan: Highlight Pencapaian Teknis */}
                    <div className="md:w-5/12 bg-gray-50 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Kualifikasi Teknis
                        </h3>
                        
                        <div className="space-y-6">
                            {/* Poin 1: Web Dev */}
                            <div className="flex items-start space-x-4">
                                <span className="text-red-600 text-3xl mt-1">💻</span>
                                <div>
                                    <p className="text-2xl font-extrabold text-gray-900">Expert</p>
                                    <p className="text-gray-600 font-medium">Web Development</p>
                                    <p className="text-sm text-gray-500">Certified Front-End Web Developer Expert (Dicoding)</p>
                                </div>
                            </div>
                            
                            {/* Poin 2: Machine Learning */}
                            <div className="flex items-start space-x-4">
                                <span className="text-red-600 text-3xl mt-1">🤖</span>
                                <div>
                                    <p className="text-2xl font-extrabold text-gray-900">Machine Learning</p>
                                    <p className="text-gray-600 font-medium">Data Science</p>
                                    <p className="text-sm text-gray-500">Tersertifikasi dalam Machine Learning & Data Visualization</p>
                                </div>
                            </div>
                            
                            {/* Poin 3: Academic */}
                            <div className="flex items-start space-x-4">
                                <span className="text-red-600 text-3xl mt-1">🎓</span>
                                <div>
                                    <p className="text-2xl font-extrabold text-gray-900">3.89 GPA</p>
                                    <p className="text-gray-600 font-medium">Sistem Informasi</p>
                                    <p className="text-sm text-gray-500">Universitas Hasanuddin (Information System S1)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}