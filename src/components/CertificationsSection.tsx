'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const certifications = [
  {
    title: "UBS Mergers And Acquisitions Finance Accelerator",
    issuer: "AmplifyME",
    date: "May 2025",
    description: "Banking Accelerator Simulation Experience in Partnership with UBS. Completed comprehensive training in mergers and acquisitions finance, including deal structuring, valuation methods, and financial modeling.",
    technologies: ["Financial Modeling", "M&A", "Valuation"]
  },
  {
    title: "TIPS On-Premise Serving Certification",
    issuer: "360training",
    date: "Jun 2025",
    description: "Comprehensive training in responsible alcohol service for on-premise establishments, covering legal requirements, identification checking, and intervention techniques for safe alcohol service.",
    technologies: ["Compliance", "Customer Safety", "Intervention Techniques"]
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-12 lg:py-8">
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
              <span className="gradient-text">Certifications</span>
            </h2>
          </motion.div>

          {/* Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Content */}
          <div className="grid gap-6 md:grid-cols-2 w-full">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl"
                style={{ padding: '10px' }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-green-400 font-medium mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-1 text-xs text-slate-400" style={{ marginBottom: '6px' }}>
                    <Calendar size={14} />
                    <span>Issued {cert.date}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-6" style={{ marginLeft: '6px', marginTop: '3px', gap: '12px 24px' }}>
                  {cert.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="relative px-1 py-2.5 text-xs font-medium text-green-400 rounded-full whitespace-nowrap"
                    >
                      <motion.div
                        className="absolute inset-0 bg-green-500/10 rounded-lg border border-green-500/20"
                        style={{ 
                          left: '-8px', 
                          right: '-8px',
                          top: '-2px',
                          bottom: '-2px'
                        }}
                      />
                      <span className="relative z-20 px-4">{tech}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationsSection; 