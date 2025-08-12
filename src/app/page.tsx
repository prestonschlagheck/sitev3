import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SoftwareSection from '@/components/SoftwareSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import InterestsSection from '@/components/InterestsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Minimal, Linear-like background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
          background:
            'radial-gradient(1000px 600px at 50% -10%, rgba(23, 31, 59, 0.6) 0%, rgba(12, 16, 27, 0) 70%), linear-gradient(180deg, #0b0f19 0%, #0d1326 60%, #0b0f19 100%)'
        }} />
        {/* Vignette edges */}
        <div className="absolute inset-0 pointer-events-none" style={{
          boxShadow: 'inset 0 0 300px rgba(0,0,0,0.6)'
        }} />
      </div>

      <main className="relative">
        {/* Top fade overlay - creates fade effect for content approaching menu bar */}
        <div className="fixed top-0 left-0 w-full h-80 bg-gradient-to-b from-slate-900/85 via-slate-900/30 via-slate-900/15 via-slate-900/8 to-transparent z-[9998] pointer-events-none" />
        
        <Navigation />
        
        <AboutSection />
        <SoftwareSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <InterestsSection />
        <Footer />
      </main>
    </>
  );
}
