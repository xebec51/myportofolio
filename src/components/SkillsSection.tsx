import React from 'react';

// Data keahlian diambil dari CV Anda
const technicalSkills = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'SQL', icon: '🔍' },
  { name: 'Front-End Development', icon: '🌐' },
  { name: 'Back-End Development', icon: '⚙️' },
  { name: 'Data Science', icon: '📊' },
  { name: 'Machine Learning', icon: '🧠' },
  { name: 'Big Data', icon: '☁️' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Cloud Essentials (AWS)', icon: '☁️' },
  // Swift dan Mobile Development
  { name: 'Swift (Basic)', icon: '📱' },
  { name: 'Android Studio', icon: '🤖' },
];

const interpersonalSkills = [
  { name: 'Leadership & Mentoring', icon: '👑' },
  { name: 'Project & Event Management', icon: '📅' },
  { name: 'Communication & Public Speaking', icon: '🎤' },
  { name: 'Teamwork & Collaboration', icon: '🤝' },
  { name: 'Time Management', icon: '⏱️' },
  { name: 'Emotional Intelligence', icon: '🧘' },
];

const SkillItem = ({ name, icon }: { name: string, icon: string }) => (
    <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-200">
        <span className="text-2xl">{icon}</span>
        <p className="text-gray-800 font-semibold">{name}</p>
    </div>
);


export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
            
            <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
                Keahlian & Kompetensi
            </h2>
            <p className="text-lg text-gray-600 text-center mb-16">
                Kombinasi antara kemahiran teknis (Hard Skills) dan kemampuan kepemimpinan (Soft Skills).
            </p>

            {/* Bagian Technical Skills */}
            <div className="mb-16">
                <h3 className="text-3xl font-bold text-red-600 mb-8 border-b-2 border-red-200 pb-2">
                    Keahlian Teknis (Hard Skills)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technicalSkills.map((skill, index) => (
                        <SkillItem key={index} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>

            {/* Bagian Interpersonal Skills */}
            <div>
                <h3 className="text-3xl font-bold text-red-600 mb-8 border-b-2 border-red-200 pb-2">
                    Keahlian Interpersonal (Soft Skills)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {interpersonalSkills.map((skill, index) => (
                        <SkillItem key={index} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}