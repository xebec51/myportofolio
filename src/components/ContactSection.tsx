// src/components/ContactSection.tsx
"use client";

import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const contactInfo = {
    email: 'rinaldi.ruslan51@gmail.com',
    whatsapp: '+6289623080501',
};

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rinaldiruslan/',
        iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/xebec51',
        iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/rinaldiruslan',
        iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
    {
        name: 'TikTok',
        href: 'https://tiktok.com/@rinaldiruslan',
        iconPath: 'M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z',
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/rinaldi.naldi.5220',
        iconPath: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    },
    {
        name: 'Telegram',
        href: `https://t.me/+6289623080501`,
        iconPath: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.01 0-.02 0-.03 0l.213-3.053 5.56-5.023c.242-.213-.054-.328-.373-.115l-6.869 4.332-2.96-.924c-.644-.203-.658-.644.136-.953l11.566-4.458c.54-.196 1.011.128.844 1.172z',
    },
];

type FormState = {
    name: string;
    email: string;
    message: string;
};

const initialFormState: FormState = {
    name: '',
    email: '',
    message: '',
};

function ContactIcon({ path }: { path: string }) {
    return (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d={path} />
        </svg>
    );
}

export default function ContactSection() {
    const [formState, setFormState] = useState<FormState>(initialFormState);

    const whatsappLink = useMemo(
        () =>
            `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}?text=Hi%20Rinaldi%2C%20I%27m%20interested%20in%20working%20with%20you.`,
        [],
    );

    const mailtoLink = useMemo(() => {
        const subject = encodeURIComponent(`Project inquiry from ${formState.name || 'a visitor'}`);
        const body = encodeURIComponent(
            `Name: ${formState.name || '-'}\nEmail: ${formState.email || '-'}\n\nMessage:\n${formState.message || '-'}`,
        );

        return `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    }, [formState.email, formState.message, formState.name]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-white dark:bg-gray-950 py-24 md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_42%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_42%)]" />

            <div className="container relative z-10 mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="mb-4 block text-sm font-medium uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
                        Contact
                    </span>
                    <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
                        Let&apos;s build something together.
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-lg">
                        Send a quick message, share your idea, and I&apos;ll get back with a clear next step.
                    </p>
                </motion.div>

                <div className="mx-auto grid max-w-5xl gap-8 items-start lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-4xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-8 h-full"
                    >
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Contact Me</h3>
                        <form className="space-y-5 max-w-full mx-auto" onSubmit={handleSubmit}>
                            <div className="grid gap-5 md:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</span>
                                    <input
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-white outline-none transition-all duration-300 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-400 dark:focus:border-neutral-500 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.06)] dark:focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]"
                                        required
                                    />
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</span>
                                    <input
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-white outline-none transition-all duration-300 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-400 dark:focus:border-neutral-500 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.06)] dark:focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]"
                                        required
                                    />
                                </label>
                            </div>

                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</span>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 text-neutral-900 dark:text-white outline-none transition-all duration-300 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:border-neutral-400 dark:focus:border-neutral-500 focus:shadow-[0_0_0_4px_rgba(0,0,0,0.06)] dark:focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]"
                                    required
                                />
                            </label>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-900 dark:border-white bg-neutral-900 dark:bg-white px-6 py-3 text-sm font-semibold text-white dark:text-neutral-900 transition-all duration-300 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)]"
                                >
                                    Send Message
                                    <span aria-hidden="true">→</span>
                                </motion.button>

                                <Link href={mailtoLink} className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 dark:border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                                    Use email app instead
                                </Link>
                            </div>
                        </form>
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6 rounded-4xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-6 md:p-8 h-full flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Contact info</h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                Everything important is grouped here so it&apos;s easy to reach me from whichever channel works best.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <Link
                                href={mailtoLink}
                                className="flex items-center justify-between rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
                            >
                                <div>
                                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Email</p>
                                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">{contactInfo.email}</p>
                                </div>
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">Open</span>
                            </Link>

                            <Link
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
                            >
                                <div>
                                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">WhatsApp</p>
                                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Quick response</p>
                                </div>
                                <span className="text-sm text-neutral-500 dark:text-neutral-400">Chat</span>
                            </Link>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Social links</h3>
                            <div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2">
                                {socialLinks.map((social, index) => (
                                    <motion.div
                                        key={social.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] w-full"
                                            aria-label={social.name}
                                        >
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-transform duration-300 group-hover:scale-105">
                                                <ContactIcon path={social.iconPath} />
                                            </span>
                                            <div>
                                                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{social.name}</p>
                                                <p className="text-xs text-neutral-500 dark:text-neutral-400">Open profile</p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}
