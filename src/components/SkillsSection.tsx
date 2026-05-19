// src/components/SkillsSection.tsx
import Image from 'next/image';
import React from 'react';

type SkillProps = {
    name: string;
    icon: string;
};

const skills: SkillProps[] = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'MLOps', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mlflow.svg' },
    { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
];

const marqueeSkills = [...skills, ...skills];

const SkillCard = ({ name, icon }: { name: string; icon: string }) => (
    <div
        role="button"
        tabIndex={0}
        aria-label={name}
        className="group relative flex h-24 w-24 flex-none items-center justify-center overflow-visible rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-0 sm:h-28 sm:w-28"
    >
        {/* Logo */}
        <Image
            src={icon}
            alt={name}
            width={56}
            height={56}
            className="relative z-10 h-12 w-12 object-contain transition-transform duration-300 ease-out group-hover:scale-110 group-focus:scale-110 sm:h-14 sm:w-14"
            loading="lazy"
        />

        {/* Tooltip above logo on hover/focus (match Hero TechIcon style) */}
        <div className="pointer-events-none absolute left-1/2 -top-10 transform -translate-x-1/2">
            <span className="translate-y-1 bg-gray-900 px-3 py-1.5 text-xs text-white rounded-md opacity-0 whitespace-nowrap shadow-lg transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                {name}
            </span>
        </div>
    </div>
);

export default function SkillsSection() {
  return (
        <section id="skills" className="relative overflow-hidden py-24 bg-white">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[18px_18px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-sm font-medium uppercase tracking-[0.35em] text-neutral-500 block" data-aos="fade-up">
                        My Arsenal
                    </span>
                    <h2
                        className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900"
                        data-aos="fade-down"
                        data-aos-delay="100"
                    >
                        Tech Stack & Tools
                    </h2>
                    <p
                        className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-neutral-600"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        A focused set of technologies I use to build responsive web experiences and practical AI workflows.
                    </p>
                </div>

                <div className="tech-marquee mx-auto max-w-6xl">
                    <div className="tech-marquee-track">
                        {marqueeSkills.map((skill, index) => (
                            <SkillCard key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
                        ))}
                    </div>
                </div>
            </div>
    </section>
  );
}