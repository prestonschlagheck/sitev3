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
          {!isDesktop && <div style={{ height: '150px' }}></div>}
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div 
              className="w-[141px] h-[141px] md:w-[158px] md:h-[158px] rounded-full shadow-2xl mx-auto flex items-center justify-center bg-[#0f1011] border-2 border-[#1a1c1d]"
            >
              <div className="w-[132px] h-[132px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden">
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
            className="text-center w-full"
            style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? '1fr minmax(0, 850px) 1fr' : '24px 1fr 24px',
              justifyItems: 'center'
            }}
          >
            <div></div>
            <h1 className={`text-center text-white ${isDesktop ? 'text-4xl lg:text-5xl' : 'text-3xl'}`}>
              {isDesktop ? "Hello, I'm Preston Schlagheck" : "Hi, I'm Preston Schlagheck"}
            </h1>
            <div></div>
          </motion.div>

          {/* Spacer 2 - Mobile only - Decreased */}
          {!isDesktop && <div style={{ height: '12px' }}></div>}

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center w-full font-sans"
            style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? '1fr minmax(0, 850px) 1fr' : '24px 1fr 24px',
              justifyItems: 'center'
            }}
          >
            <div></div>
            {isDesktop ? (
              <p 
                className="text-[#82868e] leading-relaxed mx-auto font-sans"
                style={{
                  fontSize: isDesktop ? '1rem' : '0.744rem',
                  padding: '0',
                  width: '100%'
                }}
              >
                I am a finance and computer science student at the University of South Carolina who helps companies grow their digital presence and revenue through AI-driven tools, custom web solutions, and data-backed strategies. My background includes multiple internships and experience in the service industry, which have strengthened my adaptability and problem-solving skills. I&apos;m passionate about investments and focused on leveraging my expertise in finance, artificial intelligence, and programming to create innovative solutions in financial technology.
              </p>
            ) : (
              <p 
                className="text-[#82868e] leading-relaxed mx-auto font-sans"
                style={{
                  fontSize: '1rem',
                  padding: '0',
                  width: '100%'
                }}
              >
                I&apos;m a finance and computer science student at USC who helps companies grow their digital presence and revenue through AI-driven tools and data-backed strategies. Passionate about investments, I combine finance, AI, and programming to build innovative financial technology solutions.
              </p>
            )}
            <div></div>
          </motion.div>

          {/* Spacer 3 - Mobile only - Decreased */}
          {!isDesktop && <div style={{ height: '12px' }}></div>}

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-6 text-center font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
              <Mail size={16} className="text-[#68cd58]" />
              <span className="text-sm text-[#82868e]">prestonschlagheck@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
              <Phone size={16} className="text-[#68cd58]" />
              <span className="text-sm text-[#82868e]">959-333-0277</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
              <MapPin size={16} className="text-[#68cd58]" />
              <span className="text-sm text-[#82868e]">Guilford, CT & Columbia, SC</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
              <FileText size={16} className="text-[#68cd58]" />
              <span className="text-sm text-[#82868e]">Download Resume</span>
            </div>
          </motion.div>

          {/* Mobile Bottom Spacer - Increased to prevent Experience section showing */}
          {!isDesktop && <div style={{ height: '80px' }}></div>}

        </div>
      </div>
    </section>
  );
};

export default AboutSection; 