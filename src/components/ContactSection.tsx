import Link from 'next/link';
import React from 'react';

// Data Kontak dari CV
const contactInfo = {
    email: "rinaldi.ruslan51@gmail.com", 
    linkedin: "Muh. Rinaldi Ruslan", 
    whatsapp: "+6289623080501" 
};

const SocialLink = ({ icon, label, href, isPrimary = false }: { icon: string, label: string, href: string, isPrimary?: boolean }) => (
    <Link 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center p-4 rounded-lg transition duration-300 ${
            isPrimary 
            ? 'bg-red-600 text-white hover:bg-red-700 shadow-md' 
            : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'
        }`}
    >
        <span className={`text-2xl mr-4 ${isPrimary ? 'text-white' : 'text-red-600'}`}>{icon}</span>
        <div>
            <p className="font-semibold">{label}</p>
            <p className="text-sm font-light">{isPrimary ? contactInfo.email : contactInfo.linkedin}</p>
        </div>
    </Link>
);


export default function ContactSection() {
    const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}?text=Halo%20Rinaldi%2C%20saya%20tertarik%20dengan%20keahlian%20Dev%20dan%20ML%20Anda.`;
    const mailtoLink = `mailto:${contactInfo.email}?subject=Tawaran%20Kerjasama%20Software%20Dev%20%2F%20Machine%20Learning`;

    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Siap Membangun Solusi Cerdas?
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Saya terbuka untuk kolaborasi dalam pengembangan **Software** dan proyek **Machine Learning**. Mari diskusikan ide Anda.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <SocialLink icon="📧" label="Email Saya" href={mailtoLink} isPrimary={true} />
                    <SocialLink icon="💬" label="WhatsApp" href={whatsappLink} />
                    <SocialLink icon="🔗" label="LinkedIn" href={`https://www.linkedin.com/in/${contactInfo.linkedin.replace(/ /g, '-')}`} />
                </div>
                
                <div className="mt-12">
                    <p className="text-gray-700 text-lg mb-4">Lihat detail lengkap kualifikasi saya:</p>
                    <Link 
                        href="/Curriculum_Vitae_Muh.Rinaldi_Ruslan.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        ⬇️ Unduh CV (PDF)
                    </Link>
                </div>
            </div>
        </section>
    );
}