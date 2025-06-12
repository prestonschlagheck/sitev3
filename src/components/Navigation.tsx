'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'interests', label: 'Interests' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'certifications', 'projects', 'interests'];
      const scrollPosition = window.scrollY + 150;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Always show interests if we're at the bottom of the page
      if (window.scrollY + windowHeight >= documentHeight - 100) {
        setActiveSection('interests');
        return;
      }

      // Check if we're 75% through the projects section - if so, switch to interests
      const projectsElement = document.getElementById('projects');
      if (projectsElement) {
        const projectsTop = projectsElement.offsetTop;
        const projectsHeight = projectsElement.offsetHeight;
        
        // If we're in the last 25% of the projects section, show interests
        if (scrollPosition >= projectsTop + (projectsHeight * 0.75) && scrollPosition < projectsTop + projectsHeight) {
          setActiveSection('interests');
          return;
        }
      }

      // Standard section detection for all other cases
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ 
        top: offsetTop, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999]"
    >
      <div className="relative">
        {/* Main navigation background with soft fade edges */}
        <div className="glass-nav rounded-full shadow-2xl border border-blue-500/15 backdrop-blur-xl bg-slate-900/40" style={{ paddingLeft: '7px', paddingRight: '7px', paddingTop: '4px', paddingBottom: '4px' }}>
          <div className="flex items-center relative gap-4 md:gap-10" style={{ paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px' }}>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative px-1 py-1.5 md:py-2.5 text-[10px] md:text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap ${
                  activeSection === section.id
                    ? 'text-white scale-105'
                    : 'text-slate-400 hover:text-white hover:scale-105'
                }`}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full border border-blue-400/60 shadow-lg backdrop-blur-sm"
                    style={{ 
                      left: '-8px', 
                      right: '-8px',
                      top: '-2px',
                      bottom: '-2px'
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-20 drop-shadow-lg px-1.5 md:px-4">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Soft fade-out glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl -z-10 scale-110" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-900/60 to-slate-900/60 blur-xl -z-20 scale-125" />
      </div>
    </motion.nav>
  );
};

export default Navigation; 