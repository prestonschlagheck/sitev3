import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import InterestsSection from '@/components/InterestsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Static Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient - darker shades */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-blue-950 to-slate-900" />
        
        {/* Animated gradient overlays - darker */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-transparent to-blue-950/60" />
        
        {/* Subtle animated elements - reduced opacity */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-purple-600/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-teal-600/2 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-600/3 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
        </div>
      </div>

      <main className="relative">
        <Navigation />
        
        {/* Top fade overlay - creates fade effect for content approaching menu bar */}
        <div className="fixed top-0 left-0 w-full h-80 bg-gradient-to-b from-slate-900/85 via-slate-900/30 via-slate-900/15 via-slate-900/8 to-transparent z-[9998] pointer-events-none" />
        
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <InterestsSection />
        <Footer />
      </main>
    </>
  );
}
