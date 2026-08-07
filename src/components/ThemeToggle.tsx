"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
}

function getSnapshot() {
    return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
    return false;
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
    const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggleTheme = () => {
        const next = !isDark;
        document.documentElement.classList.toggle("dark", next);
        document.documentElement.style.colorScheme = next ? "dark" : "light";
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
            // localStorage unavailable (private mode) - theme just won't persist
        }
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
            className={`inline-flex items-center justify-center rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-red-500 ${className}`}
        >
            {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}
