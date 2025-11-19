import Link from 'next/link';
import React from 'react';

// Data Kontak dari CV
const contactInfo = {
    email: "rinaldi.ruslan51@gmail.com", //
    linkedin: "Muh. Rinaldi Ruslan", //
    instagram: "@rinaldiruslan", //
    whatsapp: "+6289623080501" // Dari CV (+62) 8962 3080 501
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
            <p className="text-sm font-light">{isPrimary ? contactInfo.email : (label.includes('LinkedIn') ? contactInfo.linkedin : contactInfo.instagram)}</p>
        </div>
    </Link>
);


export default function ContactSection() {
    // Membuat link WhatsApp yang langsung berisi pesan sambutan
    const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}?text=Halo%20Rinaldi%2C%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.`;
    
    // Link email dengan subjek
    const mailtoLink = `mailto:${contactInfo.email}?subject=Diskusi%20Terkait%20Portofolio%20Anda`;

    return (
        <section id="contact" className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Tertarik Berkolaborasi?
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Saya selalu terbuka untuk proyek baru di bidang pengembangan web dan Data Science, serta peluang mentoring. Mari kita berdiskusi.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    
                    {/* Kotak Email (Primary CTA) */}
                    <SocialLink 
                        icon="📧" 
                        label="Email Saya" 
                        href={mailtoLink}
                        isPrimary={true}
                    />
                    
                    {/* Kotak WhatsApp (Secondary CTA) */}
                    <SocialLink 
                        icon="💬" 
                        label="WhatsApp" 
                        href={whatsappLink}
                    />

                    {/* Kotak LinkedIn */}
                    <SocialLink 
                        icon="🔗" 
                        label="LinkedIn Profile" 
                        href={`https://www.linkedin.com/in/${contactInfo.linkedin.replace(/ /g, '-')}`}
                    />

                    {/* Kotak Instagram (Opsional) */}
                    {/* <SocialLink 
                        icon="📸" 
                        label="Instagram" 
                        href={`https://www.instagram.com/${contactInfo.instagram.replace('@', '')}`}
                    /> */}
                </div>
                
                {/* Opsi Unduh CV */}
                <div className="mt-12">
                    <p className="text-gray-700 text-lg mb-4">Atau, Anda bisa langsung mengunduh CV saya:</p>
                    <Link 
                        href="/Curriculum_Vitae_Muh.Rinaldi_Ruslan.pdf" // Ganti dengan nama file CV final Anda
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition duration-300"
                    >
                        ⬇️ Unduh Curriculum Vitae
                    </Link>
                    <p className="text-sm text-gray-500 mt-2">Pastikan file CV Anda diletakkan di folder `public`.</p>
                </div>
            </div>
        </section>
    );
}