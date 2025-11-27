import React from 'react';

// Kategori Software Development
const devSkills = [
  { name: 'JavaScript (ES6+)', icon: '⚡' },
  { name: 'Next.js / React', icon: '⚛️' },
  { name: 'Java', icon: '☕' },
  { name: 'Front-End Expert', icon: '🎨' },
  { name: 'Back-End Basic', icon: '⚙️' },
  { name: 'Android Studio', icon: '📱' },
];

// Kategori Data & Machine Learning
const dataSkills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Machine Learning', icon: '🧠' },
  { name: 'Data Science', icon: '📊' },
  { name: 'SQL', icon: '🗃️' }, // Update icon query untuk visual
  { name: 'Data Visualization', icon: '📈' },
  { name: 'Big Data Concepts', icon: '☁️' },
];

// Update komponen SkillItem untuk menerima props delay
const SkillItem = ({ name, icon, delay }: { name: string, icon: string, delay: number }) => (
    <div 
        className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200"
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        <span className="text-2xl">{icon}</span>
        <p className="text-gray-800 font-semibold">{name}</p>
    </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
            
            <h2 
                className="text-4xl font-extrabold text-gray-900 text-center mb-4"
                data-aos="fade-down"
            >
                Arsenala Teknologi
            </h2>
            <p 
                className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                Daftar teknologi dan alat yang saya kuasai untuk membangun perangkat lunak handal dan model cerdas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Kolom 1: Software Development */}
                <div data-aos="fade-right" data-aos-delay="200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-red-600 pl-4">
                        Software Development
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {devSkills.map((skill, index) => (
                            <SkillItem 
                                key={index} 
                                name={skill.name} 
                                icon={skill.icon} 
                                delay={index * 100} // Efek muncul berurutan
                            />
                        ))}
                    </div>
                </div>

                {/* Kolom 2: Data & AI */}
                <div data-aos="fade-left" data-aos-delay="300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-red-600 pl-4">
                        Data Science & AI
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {dataSkills.map((skill, index) => (
                            <SkillItem 
                                key={index} 
                                name={skill.name} 
                                icon={skill.icon} 
                                delay={index * 100} // Efek muncul berurutan
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}