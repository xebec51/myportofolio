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
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'MLOps', icon: 'https://cdn.simpleicons.org/mlflow' },
    { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
];

const SkillCard = ({ name, icon, delay }: { name: string; icon: string; delay: number }) => (
    <div
        role="button"
        tabIndex={0}
        aria-label={name}
        className="group relative flex items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-0"
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        {/* Logo */}
        <Image
            src={icon}
            alt={name}
            width={56}
            height={56}
            className="relative z-10 h-14 w-14 object-contain transition-transform duration-300 ease-out group-hover:scale-110 group-focus-visible:scale-110"
            loading="lazy"
        />

        {/* Tooltip above logo on hover/focus */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 flex items-center justify-center opacity-0 transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="rounded-md bg-white/90 px-3 py-1 text-sm font-medium text-neutral-900 shadow-sm backdrop-blur-sm opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
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

                <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={index * 70} />
                    ))}
                </div>
            </div>
    </section>
  );
}