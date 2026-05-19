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

// Marquee items rendered inline in the component below

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

                <div className="mx-auto max-w-full">
                    <div className="marquee" role="region" aria-label="Tech marquee" tabIndex={0}>
                        <div className="marquee__track animate">
                            {skills.map((skill, i) => (
                                <div key={`a-${skill.name}-${i}`} className="marquee__item" role="button" tabIndex={0} aria-label={skill.name}>
                                    <Image src={skill.icon} alt={skill.name} width={56} height={56} className="marquee__logo" loading="lazy" />
                                    <span className="marquee__tooltip">{skill.name}</span>
                                </div>
                            ))}
                            {skills.map((skill, i) => (
                                <div key={`b-${skill.name}-${i}`} className="marquee__item" role="button" tabIndex={0} aria-label={skill.name}>
                                    <Image src={skill.icon} alt={skill.name} width={56} height={56} className="marquee__logo" loading="lazy" />
                                    <span className="marquee__tooltip">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
}