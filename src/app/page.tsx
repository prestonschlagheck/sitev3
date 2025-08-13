import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SoftwareSection from '@/components/SoftwareSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import InterestsSection from '@/components/InterestsSection';

export default function Home() {
  return (
    <>
      {/* Minimal, Linear-like background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
          background: '#07090a'
        }} />
        {/* Vignette edges */}
        <div className="absolute inset-0 pointer-events-none" style={{
          boxShadow: 'inset 0 0 300px rgba(0,0,0,0.6)'
        }} />
      </div>

      <main className="relative">
        {/* Top fade overlay - creates fade effect for content approaching menu bar */}
        <div className="fixed top-0 left-0 w-full h-80 bg-gradient-to-b from-[#07090a]/85 via-[#07090a]/30 via-[#07090a]/15 via-[#07090a]/8 to-transparent z-[9998] pointer-events-none" />
        
        <Navigation />
        
        <AboutSection />
        <SoftwareSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <InterestsSection />
      </main>
    </>
  );
}
