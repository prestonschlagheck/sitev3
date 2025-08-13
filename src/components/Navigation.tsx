'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isManualClick, setIsManualClick] = useState(false);
  
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'software', label: 'Tools', icon: true },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'interests', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Don't override manual clicks for 1 second
      if (isManualClick) return;
      
      const sections = ['about', 'software', 'experience', 'projects', 'certifications', 'interests'];
      const scrollPosition = window.scrollY + (window.innerHeight / 2); // Use center of viewport
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
            console.log('Setting active section to:', section, 'at scroll position:', scrollPosition, 'element offset:', offsetTop);
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualClick]);

  const scrollToSection = (sectionId: string) => {
    // Set active section immediately when clicking
    setActiveSection(sectionId);
    
    // Set manual click flag to prevent scroll detection from overriding
    setIsManualClick(true);
    
    // Clear the flag after 1 second
    setTimeout(() => setIsManualClick(false), 1000);
    
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
        <div className="glass-nav rounded-full shadow-2xl border border-[#1a1c1d]/40 backdrop-blur-xl" style={{ paddingLeft: '7px', paddingRight: '7px', paddingTop: '4px', paddingBottom: '4px', backgroundColor: 'rgba(15, 16, 17, 0.95)' }}>
          <div className="flex items-center relative gap-6 md:gap-10" style={{ paddingLeft: '12px', paddingRight: '12px', paddingTop: '4px', paddingBottom: '4px' }}>
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
                    className="absolute inset-0 rounded-full border border-[#1a1c1d]/60 shadow-lg backdrop-blur-sm"
                    style={{ 
                      background: 'radial-gradient(ellipse at 30% 20%, rgba(26, 28, 29, 0.7) 0%, rgba(15, 16, 17, 0.5) 35%, rgba(26, 28, 29, 0.6) 70%, rgba(15, 16, 17, 0.4) 100%)',
                      left: '-8px', 
                      right: '-8px',
                      top: '-2px',
                      bottom: '-2px'
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-20 drop-shadow-lg px-1.5 md:px-4">
                  {section.icon ? (
                    <Wrench size={16} className="mx-auto" />
                  ) : (
                    section.label
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
        

      </div>
    </motion.nav>
  );
};

export default Navigation; 