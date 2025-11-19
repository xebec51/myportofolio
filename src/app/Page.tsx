// src/app/page.tsx
// Perhatikan: Kita menggunakan '../' bukan '@/' untuk memastikan file ditemukan
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </>
  );
}