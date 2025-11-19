import Image from 'next/image';

export default function HeroSection() {
    return (
        // Padding top besar untuk menghindari header
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gray-50">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                
                {/* Teks Konten */}
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <p className="text-red-600 font-semibold text-lg uppercase mb-2">Halo, saya Muh. Rinaldi Ruslan</p>
                    
                    {/* Menggunakan peran ganda dari CV */}
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
                        <span className="block">Front-End Developer</span> 
                        <span className="text-red-600 block"> & Dedicated Mentor</span>
                    </h1>
                    
                    {/* Ringkasan Kuat dari CV */}
                    <p className="text-gray-600 text-xl mb-8 max-w-lg mx-auto md:mx-0">
                        Seorang mentor berdedikasi dengan rekam jejak terbukti dalam **Project Management, Mentoring, dan Teaching**
                        [cite_start]untuk lebih dari 400 siswa[cite: 14]. Berpengalaman dalam **Web Development** dan siap menciptakan solusi inovatif.
                    </p>
                    
                    {/* Tombol Aksi */}
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link href="#projects" className="px-8 py-3 text-lg font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 transition duration-300 shadow-xl">
                            Lihat Proyek Saya
                        </Link>
                        <Link href="#contact" className="px-8 py-3 text-lg font-semibold text-gray-900 border-2 border-gray-900 rounded-xl hover:bg-gray-200 transition duration-300">
                            Unduh CV
                        </Link>
                    </div>
                </div>

                {/* Foto Profil (Placeholder) */}
                <div className="md:w-1/3 flex justify-center">
                    {/* Ganti dengan Image actual Anda. Gunakan next/image untuk optimasi. */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-red-600 shadow-2xl">
                        {/* Jika Anda memiliki file gambar bernama 'profile.jpg' di folder 'public' */}
                        <Image 
                            src="/profile.jpg" 
                            alt="Foto Profil Muh. Rinaldi Ruslan" 
                            layout="fill" 
                            objectFit="cover" 
                            className="grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}