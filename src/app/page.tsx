// src/app/page.tsx
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer'; // <-- Import komponen baru
import CertificationsSection from '../components/CertificationsSection';

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muh. Rinaldi Ruslan",
  alternateName: "Naldi",
  url: "https://naldiporto.vercel.app",
  image: "https://naldiporto.vercel.app/profile.jpg",
  jobTitle: ["Full Stack Developer", "Machine Learning Engineer"],
  homeLocation: {
    "@type": "Place",
    name: "Makassar, Indonesia",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Universitas Hasanuddin",
    },
    {
      "@type": "EducationalOrganization",
      name: "PPTQ Al-Imam Ashim Makassar",
    },
  ],
  knowsAbout: [
    "Full Stack Development",
    "Web Development",
    "Machine Learning",
    "Computer Vision",
    "MLOps",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
    "PyTorch",
  ],
  sameAs: [
    "https://github.com/xebec51",
    "https://www.linkedin.com/in/rinaldiruslan/",
    "https://instagram.com/rinaldiruslan",
    "https://www.facebook.com/rinaldi.naldi.5220",
    "https://www.tiktok.com/@rinaldiruslan",
  ],
};

export default function Home() {
  return (
    <>
      <script
        id="person-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer /> {/* <-- Tambahkan di luar <main> */}
    </>
  );
}
