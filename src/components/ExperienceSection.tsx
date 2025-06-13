'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  current: boolean;
  type?: 'previous' | 'internship';
}

interface TagConfig {
  text: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
}

const experiences: Experience[] = [
  {
    title: "Bar Back",
    company: "BAR New Haven",
    location: "New Haven, Connecticut",
    period: "Jun 2025 - Present",
    description: "Assisting bartenders, servers, and wait staff to ensure efficiency internally.",
    technologies: [],
    current: true
  },
  {
    title: "Coca-Cola Campus Ambassador",
    company: "The Coca-Cola Company",
    location: "Columbia, South Carolina",
    period: "Jun 2025 - Present",
    description: "Leading on-campus sampling, marketing, and social media efforts related to new product launches.",
    technologies: [],
    current: true
  },
  {
    title: "Member Services Associate",
    company: "Madison Country Club",
    location: "Madison, Connecticut",
    period: "May 2025 - Present",
    description: "Managing daily transactions, scheduling tee times, and serving as primary contact for 500+ club members.",
    technologies: [],
    current: true
  },
  {
    title: "Outside Operations Assistant",
    company: "Madison Country Club",
    location: "Madison, Connecticut",
    period: "Apr 2022 - May 2025",
    description: "Planned and coordinated 14 major tournaments and social events annually while overseeing 100 daily tee times and maintaining a fleet of 50 golf carts.",
    technologies: [],
    current: false,
    type: "previous"
  },
  {
    title: "Web Developer",
    company: "Guilford Fund For Education",
    location: "Guilford, Connecticut",
    period: "Oct 2021 - Dec 2024",
    description: "Developed 30 web pages and managed email campaigns reaching 750+ subscribers while securing 40+ sponsors.",
    technologies: [],
    current: false,
    type: "internship"
  },
  {
    title: "Summer Research Intern",
    company: "Trinity Institute for Applied Neuroscience & Spirituality",
    location: "New Haven, Connecticut",
    period: "Jun 2021 - Aug 2021",
    description: "Designed organization website and conducted analysis of 10 academic studies with visual enhancement.",
    technologies: [],
    current: false,
    type: "internship"
  },
  {
    title: "Alpha Fund Chair",
    company: "Alpha Kappa Psi - Beta Upsilon",
    location: "Columbia, South Carolina",
    period: "Jun 2025 - Present",
    description: "Leading fundraising initiatives and managing financial resources for fraternity chapter operations.",
    technologies: [],
    current: true
  },
  {
    title: "Graphic & Apparel Design Chair",
    company: "Sigma Phi Epsilon - SC Alpha",
    location: "Columbia, South Carolina",
    period: "Nov 2024 - Present",
    description: "Managing graphic design projects and apparel development while serving in multiple leadership roles.",
    technologies: [],
    current: true
  }
];

const ExperienceSection = () => {
  const getTagConfig = (exp: Experience): TagConfig | null => {
    if (exp.current) {
      return {
        text: "Current",
        textColor: "text-green-400",
        bgColor: "bg-green-500/20",
        borderColor: "border-green-500/30"
      };
    } else if (exp.type === "previous") {
      return {
        text: "Previous",
        textColor: "text-purple-400",
        bgColor: "bg-purple-500/20",
        borderColor: "border-purple-500/30"
      };
    } else if (exp.type === "internship") {
      return {
        text: "Internship",
        textColor: "text-yellow-400",
        bgColor: "bg-yellow-500/20",
        borderColor: "border-yellow-500/30"
      };
    }
    return null;
  };

  return (
    <section id="experience" className="py-6 lg:py-4">
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
              <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          {/* Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Content */}
          <div 
            className="w-full"
            style={{
              display: 'grid',
              gridTemplateRows: experiences.map(() => 'auto 12px').slice(0, -1).join(' ') + ' auto',
              gap: '8px'
            }}
          >
            {experiences.map((exp, index) => [
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
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <div className="mb-4" style={{ marginLeft: '6px', marginBottom: '7px' }}>
                      {exp.title === "Coca-Cola Campus Ambassador" ? (
                        <>
                          {/* Mobile layout with forced line break */}
                          <div className="block md:hidden">
                            <div className="text-lg font-bold text-white" style={{ marginLeft: '-6px' }}>
                              Coca-Cola Campus
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-lg font-bold text-white" style={{ marginLeft: '-6px' }}>Ambassador</span>
                              {(() => {
                                const tagConfig = getTagConfig(exp);
                                return tagConfig && (
                                  <motion.span
                                    className={`relative px-1 py-2.5 text-xs font-medium ${tagConfig.textColor} rounded-full whitespace-nowrap`}
                                    style={{ 
                                      marginTop: '0px'
                                    }}
                                  >
                                    <motion.div
                                      className={`absolute inset-0 ${tagConfig.bgColor} rounded-full border ${tagConfig.borderColor}`}
                                      style={{ 
                                        left: '-8px', 
                                        right: '-8px',
                                        top: '-2px',
                                        bottom: '-2px'
                                      }}
                                    />
                                    <span className="relative z-20 px-4">{tagConfig.text}</span>
                                  </motion.span>
                                );
                              })()}
                            </div>
                          </div>
                          {/* Desktop layout */}
                          <div className="hidden md:flex items-center gap-4 mb-0">
                            <h3 className="text-lg font-bold text-white" style={{ marginLeft: '-6px' }}>{exp.title}</h3>
                            {(() => {
                              const tagConfig = getTagConfig(exp);
                              return tagConfig && (
                                <motion.span
                                  className={`relative px-1 py-2.5 text-xs font-medium ${tagConfig.textColor} rounded-full whitespace-nowrap`}
                                  style={{ 
                                    marginTop: '0px'
                                  }}
                                >
                                  <motion.div
                                    className={`absolute inset-0 ${tagConfig.bgColor} rounded-full border ${tagConfig.borderColor}`}
                                    style={{ 
                                      left: '-8px', 
                                      right: '-8px',
                                      top: '-2px',
                                      bottom: '-2px'
                                    }}
                                  />
                                  <span className="relative z-20 px-4">{tagConfig.text}</span>
                                </motion.span>
                              );
                            })()}
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center gap-4 mb-0">
                          <h3 className="text-lg font-bold text-white" style={{ marginLeft: '-6px' }}>{exp.title}</h3>
                          {(() => {
                            const tagConfig = getTagConfig(exp);
                            return tagConfig && (
                              <motion.span
                                className={`relative px-1 py-2.5 text-xs font-medium ${tagConfig.textColor} rounded-full whitespace-nowrap`}
                                style={{ 
                                  marginTop: '0px'
                                }}
                              >
                                <motion.div
                                  className={`absolute inset-0 ${tagConfig.bgColor} rounded-full border ${tagConfig.borderColor}`}
                                  style={{ 
                                    left: '-8px', 
                                    right: '-8px',
                                    top: '-2px',
                                    bottom: '-2px'
                                  }}
                                />
                                <span className="relative z-20 px-4">{tagConfig.text}</span>
                              </motion.span>
                            );
                          })()}
                        </div>
                      )}
                    </div>
                    <p className="text-blue-400 font-medium" style={{ marginBottom: '0px' }}>{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-6 text-xs text-slate-400 mb-5">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-8" style={{ marginTop: '3px' }}>
                  {exp.description}
                </p>

                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-lg border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>,
              ...(index < experiences.length - 1 ? [<div key={`spacer-${index}`} style={{ height: '12px' }}></div>] : [])
            ]).flat()}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 