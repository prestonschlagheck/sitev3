'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Play, Code } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Riggy's Truck Parking Website",
    description: "Modernized user interface and payment processing system for a truck parking company, enabling streamlined booking experiences and enhanced online presence. Implemented optimized payment flows to reduce transaction steps and improve overall user satisfaction.",
    technologies: ["HTML", "PHP", "WordPress"],
    timeline: "3 months",
    teamSize: "Solo project",
    status: "Completed",
    link: "https://riggys.com/"
  },
  {
    title: "Customizable Personal Portfolio",
    description: "A design-focused, user-friendly portfolio built with numerous languages. This project showcases a user's progress and interest in a visually engaging and accessible way. If you are interested in having your own custom portfolio, please reach out.",
    technologies: ["Next.js", "React", "TypeScript"],
    timeline: "2 months",
    teamSize: "Solo project",
    status: "Completed",
    link: "https://portfolio-template-mu-ten.vercel.app/"
  },
  {
    title: "TIANS Website",
    description: "Designed and developed the website for Trinity Institute for Applied Neuroscience and Spirituality (TIANS). Created a modern, accessible interface focusing on user experience and content presentation.",
    technologies: ["HTML", "Wix"],
    timeline: "3 months",
    teamSize: "Solo project",
    status: "Completed",
    link: "https://www.centerintegrativeresearch.net/"
  },
  {
    title: "G.AI.NS Investment Advisor",
    description: "A financial dashboard powered by OpenAI that provides short-term investment recommendations based on real-time market analysis. Features AI-driven insights and personalized trading suggestions tailored to user preferences.",
    technologies: ["Next.js", "React", "OpenAI API"],
    timeline: "4 months",
    teamSize: "Solo project",
    status: "In Progress",
    link: "https://gainsinvest.com"
  },
  {
    title: "Tickr",
    description: "A streamlined event management platform that enables organizations to generate and manage unique QR codes for member check-ins. Features customizable event creation, real-time attendance tracking, and secure member verification.",
    technologies: ["React", "Node.js", "QR API"],
    timeline: "5 months",
    teamSize: "Solo project",
    status: "In Progress"
  },
  {
    title: "Bread",
    description: "A comprehensive financial flow chart application that enables users to upload and analyze spending, income, and financial data through interactive inflows and outflows visualizations. Designed to provide clear insights into spending patterns and support informed financial decision-making.",
    technologies: ["React", "Node.js", "Chart.js"],
    timeline: "4 months",
    teamSize: "Solo project",
    status: "In Progress"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 lg:py-8">
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
            Projects
          </motion.h2>

          {/* Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Content */}
          <div className="grid gap-6 md:grid-cols-2 w-full">
            {projects.map((project, index) => (
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
                {/* External Link Arrow for Completed Projects */}
                {project.status === "Completed" && project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-7 h-7 bg-[#1a1a1a]/60 hover:bg-[#1a1a1a]/80 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  >
                    <ExternalLink size={14} className="text-[#a1a1aa] group-hover:text-white" />
                  </a>
                )}
                
                {/* Project Title */}
                <div style={{ marginBottom: '9px' }}>
                  <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '9px' }}>{project.title}</h3>
                </div>

                {/* Properties Section */}
                <div style={{ marginBottom: '9px' }}>
                  <h4 className="text-base font-semibold text-white" style={{ marginBottom: '9px' }}>Properties</h4>
                  <div className="flex items-center gap-4">
                    {project.status === "Completed" ? (
                      <div className="flex items-center gap-2 bg-transparent border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#68cd58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                        <span className="text-sm text-[#82868e] font-medium">Completed</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-transparent border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
                        <Play size={14} className="text-[#fbbf24]" />
                        <span className="text-sm text-[#82868e] font-medium">In Progress</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Image
                        src="/profile-new.png"
                        alt="Profile"
                        width={24}
                        height={24}
                        className="rounded-full grayscale"
                      />
                      <span className="text-sm text-[#82868e]">1 Developer</span>
                    </div>
                  </div>
                </div>

                {/* Resources Section */}
                <div style={{ marginBottom: '9px' }}>
                  <h4 className="text-base font-semibold text-white" style={{ marginBottom: '9px' }}>Resources</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md"
                        style={{ padding: '4px 8px' }}
                      >
                        <Code size={14} className="text-[#68cd58]" />
                        <span className="text-sm text-[#82868e]">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Objectives Section */}
                <div style={{ marginBottom: '9px' }}>
                  <h4 className="text-base font-semibold text-white" style={{ marginBottom: '9px' }}>Objectives</h4>
                  <div className="space-y-4">
                    {project.description.split('. ').slice(0, 3).map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#68cd58] rounded-full flex-shrink-0" style={{ marginTop: '9px' }}></div>
                        <p className="text-sm text-[#82868e] leading-relaxed">
                          {point.endsWith('.') ? point : point + '.'}
                        </p>
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

export default ProjectsSection;
