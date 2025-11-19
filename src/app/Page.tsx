// Pastikan Anda membuat folder 'components' dan memindahkan file Header.tsx dan HeroSection.tsx ke sana.
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
// Anda akan menambahkan komponen lain di sini nanti: About, Skills, Projects, Contact

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Bagian Lain Akan Ditambahkan Di Sini */}
        
        {/* <AboutSection /> */}
        {/* <SkillsSection /> */}
        {/* <ProjectsSection /> */}
        {/* <ContactSection /> */}

      </main>
      {/* <Footer /> */}
    </>
  );
}