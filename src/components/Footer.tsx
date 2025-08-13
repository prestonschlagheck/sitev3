'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-12 text-white"
        >
          Let&apos;s Connect
        </motion.h2>
        <div className="text-center text-slate-400 text-sm">
          © 2025 Preston Schlagheck. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 