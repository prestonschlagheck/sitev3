'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Projects
            </h2>
          </motion.div>

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
                style={{ padding: '10px' }}
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
                
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white" style={{ marginBottom: '6px' }}>{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-6 mb-3" style={{ marginLeft: '6px', marginBottom: '6px' }}>
                    <motion.span
                      className={`relative px-1 py-2.5 text-xs font-medium rounded-full whitespace-nowrap ${
                        project.status === "Completed" 
                          ? "text-[#3b82f6]" 
                          : "text-[#a855f7]"
                      }`}
                    >
                      <motion.div
                        className={`absolute inset-0 rounded-lg border border-[#27272a]`}
                        style={{ 
                          background: 'radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.2) 0%, rgba(75, 85, 99, 0.1) 35%, rgba(59, 130, 246, 0.15) 70%, rgba(55, 65, 81, 0.1) 100%)',
                          left: '-8px', 
                          right: '-8px',
                          top: '-2px',
                          bottom: '-2px'
                        }}
                      />
                      <span className="relative z-20 px-4">{project.status}</span>
                    </motion.span>
                    
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="relative px-1 py-2.5 text-xs font-medium text-[#22c55e] rounded-full whitespace-nowrap"
                      >
                        <motion.div
                          className="absolute inset-0 rounded-lg border border-[#27272a]"
                          style={{ 
                            background: 'radial-gradient(ellipse at 30% 20%, rgba(34, 197, 94, 0.2) 0%, rgba(75, 85, 99, 0.1) 35%, rgba(34, 197, 94, 0.15) 70%, rgba(55, 65, 81, 0.1) 100%)',
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
                </div>

                <p className="text-[#a1a1aa] text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
