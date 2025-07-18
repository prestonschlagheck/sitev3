'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Personal Portfolio",
    description: "A design-focused, user-friendly portfolio built with numerous languages. This project showcases my progress and interests in a visually engaging and accessible way. If you are interested in having your own custom portfolio, please reach out.",
    technologies: ["Next.js", "React", "TypeScript"],
    timeline: "2 months",
    teamSize: "Solo project",
    status: "Completed",
    link: "https://prestonsch.com"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-300">
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
                    className="absolute top-3 right-3 w-7 h-7 bg-slate-700/60 hover:bg-slate-600/80 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                  >
                    <ExternalLink size={14} className="text-slate-300 group-hover:text-white" />
                  </a>
                )}
                
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white" style={{ marginBottom: '6px' }}>{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-6 mb-3" style={{ marginLeft: '6px', marginBottom: '6px' }}>
                    <motion.span
                      className={`relative px-1 py-2.5 text-xs font-medium rounded-full whitespace-nowrap ${
                        project.status === "Completed" 
                          ? "text-blue-300" 
                          : "text-purple-300"
                      }`}
                    >
                      <motion.div
                        className={`absolute inset-0 rounded-lg border border-blue-900/60`}
                        style={{ 
                          background: 'radial-gradient(ellipse at 30% 20%, rgba(30, 58, 138, 0.7) 0%, rgba(75, 85, 99, 0.5) 35%, rgba(30, 58, 138, 0.6) 70%, rgba(55, 65, 81, 0.4) 100%)',
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
                        className="relative px-1 py-2.5 text-xs font-medium text-green-300 rounded-full whitespace-nowrap"
                      >
                        <motion.div
                          className="absolute inset-0 rounded-lg border border-blue-900/60"
                          style={{ 
                            background: 'radial-gradient(ellipse at 30% 20%, rgba(30, 58, 138, 0.7) 0%, rgba(75, 85, 99, 0.5) 35%, rgba(30, 58, 138, 0.6) 70%, rgba(55, 65, 81, 0.4) 100%)',
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

                <p className="text-slate-300 text-sm leading-relaxed">
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