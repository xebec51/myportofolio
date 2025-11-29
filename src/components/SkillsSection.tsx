// src/components/SkillsSection.tsx
import React from 'react';

// Tipe data untuk Skill
type SkillProps = {
    name: string;
    icon: string;
    level?: string; // Opsional: jika ingin menambahkan label "Advanced/Basic"
};

// Kategori Software Development
const devSkills: SkillProps[] = [
  { name: 'JavaScript (ES6+)', icon: '⚡' },
  { name: 'Next.js / React', icon: '⚛️' },
  { name: 'Java', icon: '☕' },
  { name: 'Front-End Arch', icon: '🎨' },
  { name: 'Back-End Services', icon: '⚙️' },
  { name: 'Android Studio', icon: '📱' },
];

// Kategori Data & Machine Learning
const dataSkills: SkillProps[] = [
  { name: 'Python', icon: '🐍' },
  { name: 'Machine Learning', icon: '🧠' },
  { name: 'Data Science', icon: '📊' },
  { name: 'SQL & Databases', icon: '🗃️' },
  { name: 'Data Visualization', icon: '📈' },
  { name: 'Big Data Concepts', icon: '☁️' },
];

// Komponen Kartu Skill Baru
const SkillCard = ({ name, icon, delay }: { name: string, icon: string, delay: number }) => (
    <div 
        className="group relative flex items-center p-4 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:border-red-200 hover:shadow-lg hover:shadow-red-900/5 hover:-translate-y-1"
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        {/* Dekorasi Background Hover (Glow halus) */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        {/* Icon Wrapper */}
        <div className="relative z-10 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl text-2xl group-hover:scale-110 group-hover:bg-white transition-transform duration-300 shadow-sm">
            {icon}
        </div>

        {/* Text */}
        <div className="relative z-10 ml-4">
            <h4 className="text-gray-900 font-bold text-base group-hover:text-red-600 transition-colors duration-300">
                {name}
            </h4>
        </div>
    </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-white overflow-hidden">
        {/* Background Decoration (Optional: titik-titik halus) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="container mx-auto px-6 relative z-10">
            
            {/* Section Header */}
            <div className="text-center mb-20">
                <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-2 block" data-aos="fade-up">
                    Tech Stack
                </span>
                <h2 
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Arsenala Teknologi
                </h2>
                <p 
                    className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Kombinasi alat pengembangan modern dan kecerdasan buatan yang saya gunakan untuk menciptakan solusi digital yang skalabel.
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                
                {/* Kolom 1: Software Development */}
                <div data-aos="fade-right" data-aos-delay="300">
                    <div className="flex items-center mb-8">
                        <div className="w-10 h-1 bg-red-600 rounded-full mr-4"></div>
                        <h3 className="text-2xl font-bold text-gray-900">Software Engineering</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {devSkills.map((skill, index) => (
                            <SkillCard 
                                key={index} 
                                name={skill.name} 
                                icon={skill.icon} 
                                delay={index * 100} 
                            />
                        ))}
                    </div>
                </div>

                {/* Kolom 2: Data & AI */}
                <div data-aos="fade-left" data-aos-delay="400">
                    <div className="flex items-center mb-8 lg:justify-end">
                        <h3 className="text-2xl font-bold text-gray-900 mr-4">Data Science & AI</h3>
                        <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {dataSkills.map((skill, index) => (
                            <SkillCard 
                                key={index} 
                                name={skill.name} 
                                icon={skill.icon} 
                                delay={index * 100} 
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}