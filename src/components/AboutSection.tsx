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
    <section id="about" className={`${isDesktop ? 'min-h-screen flex items-center justify-center' : 'py-20 pt-64'}`}>
      <div className="w-full max-w-6xl mx-auto px-6">
        
        {/* Using CSS Grid with explicit gaps for guaranteed spacing */}
        <div 
          className="w-full"
          style={{
            display: 'grid',
            gridTemplateRows: isDesktop ? 'auto auto auto auto auto' : 'auto auto auto auto auto auto auto auto',
            gap: isDesktop ? '32px' : '4px',
            justifyItems: 'center',
            alignItems: 'center'
          }}
        >
          
          {/* Mobile Top Spacer - Even more increased */}
          {!isDesktop && <div style={{ height: '100px' }}></div>}
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div 
              className="w-32 h-32 md:w-36 md:h-36 rounded-full shadow-2xl mx-auto flex items-center justify-center"
              style={{ 
                background: 'radial-gradient(ellipse at 30% 20%, rgba(30, 58, 138, 0.9) 0%, rgba(75, 85, 99, 0.7) 35%, rgba(30, 58, 138, 0.8) 70%, rgba(55, 65, 81, 0.6) 100%)'
              }}
            >
              <div className="w-[122px] h-[122px] md:w-[138px] md:h-[138px] rounded-full overflow-hidden">
                <Image
                  src="/profile-new.png"
                  alt="Preston Schlagheck"
                  width={147}
                  height={147}
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.32)' }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Spacer 1 - Mobile only - Decreased */}
          {!isDesktop && <div style={{ height: '16px' }}></div>}

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="text-[1.48rem] md:text-4xl lg:text-5xl font-bold text-blue-50">
              Hello, I&apos;m Preston Schlagheck
            </h1>
          </motion.div>

          {/* Spacer 2 - Mobile only - Decreased */}
          {!isDesktop && <div style={{ height: '12px' }}></div>}

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center w-full"
            style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? '1fr minmax(0, 850px) 1fr' : '24px 1fr 24px',
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
              I am a Finance major and Computer Science minor at the University of South Carolina, with leadership experience in both Sigma Phi Epsilon and Alpha Kappa Psi. My background includes several internships and work in the service industry, which have strengthened my adaptability and problem-solving abilities. I have extensive experience in web development for companies, helping them achieve their financial and digital presence objectives. I&apos;m particularly passionate about investments and am focused on leveraging my combined interests in finance, artificial intelligence, and programming to develop innovative solutions in the FinTech space.
            </p>
            <div></div>
          </motion.div>

          {/* Spacer 3 - Mobile only - Decreased */}
          {!isDesktop && <div style={{ height: '12px' }}></div>}

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            viewport={{ once: true }}
            style={{
              fontSize: isDesktop ? '0.875rem' : '0.788rem'
            }}
          >
            <a 
              href="mailto:prestonschlagheck@gmail.com"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
            >
              <Mail size={isDesktop ? 16 : 12.6} />
              <span>prestonschlagheck@gmail.com</span>
            </a>
            <a 
              href="tel:+19593330277"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
            >
              <Phone size={isDesktop ? 16 : 12.6} />
              <span>(959) 333-0277</span>
            </a>
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

          {/* Mobile Bottom Spacer - Increased to prevent Experience section showing */}
          {!isDesktop && <div style={{ height: '80px' }}></div>}

        </div>
      </div>
    </section>
  );
};

export default AboutSection; 