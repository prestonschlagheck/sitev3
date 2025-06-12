'use client';

import { motion } from 'framer-motion';
import { Headphones, Bitcoin, Flag, Car } from 'lucide-react';
import { useState, useEffect } from 'react';

const interests = [
  {
    icon: Headphones,
    title: "DJing"
  },
  {
    icon: Bitcoin,
    title: "Cryptocurrency"
  },
  {
    icon: Flag,
    title: "Golf"
  },
  {
    icon: Car,
    title: "Cars"
  }
];

const InterestsSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section id="interests" className="py-12 lg:py-8">
      <div className="section-container">
        
        {/* Using CSS Grid with explicit gaps for guaranteed spacing */}
        <div 
          style={{
            display: 'grid',
            gridTemplateRows: '12px auto 12px auto',
            gap: '8px',
            justifyItems: 'center',
            alignItems: 'center'
          }}
        >
          
          {/* Top Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="gradient-text">Interests</span>
            </h2>
          </motion.div>

          {/* Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Content */}
          <div 
            className="w-full"
            style={{
              display: 'grid',
              gridTemplateColumns: isLargeScreen ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
              gap: '24px'
            }}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl text-center group flex flex-col items-center justify-center"
                style={{ padding: '10px' }}
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center mx-auto"
                  style={{ marginBottom: isLargeScreen ? '16px' : '12px' }}
                >
                  <interest.icon 
                    size={isLargeScreen ? 48 : 32} 
                    className="text-cyan-400" 
                  />
                </motion.div>

                <h3 
                  className="font-bold text-white"
                  style={{ fontSize: isLargeScreen ? '1.125rem' : '0.875rem' }}
                >
                  {interest.title}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InterestsSection; 