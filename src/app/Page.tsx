import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection'; // <-- Import komponen baru

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        
        <ProjectsSection /> {/* <-- Tambahkan di sini */}

        {/* Kita akan membuat Contact Section setelah Projects terisi */}

      </main>
      {/* <Footer /> */}
    </>
  );
}