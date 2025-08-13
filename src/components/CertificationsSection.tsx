'use client';

import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

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
    description: "Comprehensive training in responsible alcohol service for on-premise establishments, covering legal requirements, identification checking, and intervention techniques for safe alcohol service",
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
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-12 text-white"
          >
            Certifications
          </motion.h2>

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
                className="glass rounded-2xl relative"
                style={{ padding: '20px' }}
              >
                {/* Certification Title */}
                <div style={{ marginBottom: '9px' }}>
                  <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '9px' }}>{cert.title}</h3>
                </div>

                {/* Issuance Section */}
                <div style={{ marginBottom: '9px' }}>
                  <h4 className="text-base font-semibold text-white" style={{ marginBottom: '9px' }}>Issuance</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
                      <User size={14} className="text-[#68cd58]" />
                      <span className="text-sm text-[#82868e]">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
                      <Calendar size={14} className="text-[#68cd58]" />
                      <span className="text-sm text-[#82868e]">{cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Objectives Section */}
                <div style={{ marginBottom: '9px' }}>
                  <h4 className="text-base font-semibold text-white" style={{ marginBottom: '9px' }}>Objectives</h4>
                  <div className="space-y-4">
                    {cert.description.split('. ').slice(0, 3).map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#68cd58] rounded-full flex-shrink-0" style={{ marginTop: '8px' }}></div>
                        <p className="text-sm text-[#82868e] leading-relaxed">
                          {point.endsWith('.') ? point : point + '.'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources Section */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2" style={{ marginLeft: '17px' }}>
                    {cert.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md"
                        style={{ padding: '4px 8px' }}
                      >
                        <span className="text-sm text-[#82868e]">{tech}</span>
                      </div>
                    ))}
                  </div>
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