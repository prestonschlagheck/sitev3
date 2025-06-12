'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const projects = [
  {
    title: "TIANS Website",
    description: "Designed and developed the website for Trinity Institute for Applied Neuroscience and Spirituality (TIANS). Created a modern, accessible interface focusing on user experience and content presentation.",
    technologies: ["HTML", "Wix"],
    image: "/tians.jpg",
    timeline: "3 months",
    teamSize: "Solo project",
    status: "Completed"
  },
  {
    title: "G.A.I.NS",
    description: "A financial dashboard powered by OpenAI that provides short-term investment recommendations based on real-time market analysis. Features AI-driven insights and personalized trading suggestions tailored to user preferences.",
    technologies: ["Next.js", "React", "OpenAI API"],
    image: "/gains.jpg",
    timeline: "4 months",
    teamSize: "Solo project",
    status: "In Progress"
  },
  {
    title: "Tickr",
    description: "A streamlined event management platform that enables organizations to generate and manage unique QR codes for member check-ins. Features customizable event creation, real-time attendance tracking, and secure member verification.",
    technologies: ["React", "Node.js", "QR API"],
    image: "/tickr.jpg",
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
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="gradient-text">Projects</span>
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
                className="glass rounded-2xl"
                style={{ padding: '10px' }}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white" style={{ marginBottom: '6px' }}>{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-6 mb-3" style={{ marginLeft: '6px', marginBottom: '6px' }}>
                    <motion.span
                      className={`relative px-1 py-2.5 text-xs font-medium rounded-full whitespace-nowrap ${
                        project.status === "Completed" 
                          ? "text-green-400" 
                          : "text-yellow-400"
                      }`}
                    >
                      <motion.div
                        className={`absolute inset-0 rounded-lg border ${
                          project.status === "Completed"
                            ? "bg-green-500/20 border-green-500/30"
                            : "bg-yellow-500/20 border-yellow-500/30"
                        }`}
                        style={{ 
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
                        className="relative px-1 py-2.5 text-xs font-medium text-purple-400 rounded-full whitespace-nowrap"
                      >
                        <motion.div
                          className="absolute inset-0 bg-purple-500/10 rounded-lg border border-purple-500/20"
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