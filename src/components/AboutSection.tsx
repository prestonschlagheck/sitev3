'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, FileText } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section id="about" className="py-20 lg:py-14 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Using CSS Grid with explicit gaps for guaranteed spacing */}
        <div 
          className="w-full"
          style={{
            display: 'grid',
            gridTemplateRows: '20px auto 10px auto 10px auto 20px auto',
            gap: '8px',
            justifyItems: 'center',
            alignItems: 'center'
          }}
        >
          
          {/* Mobile Top Spacer */}
          <div className="block md:hidden" style={{ height: '20px' }}></div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ marginTop: '20px' }}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-blue-500 shadow-2xl mx-auto">
              <Image
                src="/headshot.jpeg"
                alt="Preston Schlagheck"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Spacer 1 - Responsive: 10px mobile, 90px desktop */}
          <div style={{ height: isDesktop ? '90px' : '10px' }}></div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-[1.48rem] md:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Hello, I'm Preston Schlagheck</span>
            </h1>
          </motion.div>

          {/* Spacer 2 - Responsive: 10px mobile, 72px desktop */}
          <div style={{ height: isDesktop ? '72px' : '10px' }}></div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center w-full"
            style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? '1fr minmax(0, 768px) 1fr' : '24px 1fr 24px',
              justifyItems: 'center'
            }}
          >
            <div></div>
                         <p 
               className="text-slate-300 leading-relaxed mx-auto"
               style={{
                 fontSize: isDesktop ? '1rem' : '0.744rem',
                 padding: '0',
                 width: '100%'
               }}
             >
              I am a Finance major and Computer Science minor at the University of South Carolina, with leadership experience in both Sigma Phi Epsilon and Alpha Kappa Psi. My background includes several internships and work in the service industry, which have strengthened my adaptability and problem-solving abilities. I'm particularly passionate about investments and am focused on leveraging my combined interests in finance, artificial intelligence, and programming to develop innovative solutions in the FinTech space.
            </p>
            <div></div>
          </motion.div>

          {/* Spacer 3 - Responsive: 20px mobile, 64px desktop */}
          <div style={{ height: isDesktop ? '64px' : '20px' }}></div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontSize: isDesktop ? '0.875rem' : '0.788rem'
            }}
          >
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={isDesktop ? 16 : 12.6} />
              <span>prestonschlagheck@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone size={isDesktop ? 16 : 12.6} />
              <span>(959) 333-0277</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin size={isDesktop ? 16 : 12.6} />
              <span>Guilford, CT & Columbia, SC</span>
            </div>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-300 transition-colors"
            >
              <FileText size={isDesktop ? 16 : 12.6} />
              <span>Download Resume</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection; 