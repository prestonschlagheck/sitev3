'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, User } from 'lucide-react';

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
    title: "Web Developer",
    company: "Direct Journeyline Holdings, LLC",
    location: "Knoxville, Tennessee",
    period: "Jul 2025 - Present",
    description: "Maintain booking-integrated websites and streamline backend workflows to reduce manual reporting.",
    technologies: [],
    current: true
  },
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
    title: "Member Services Associate",
    company: "Madison Country Club",
    location: "Madison, Connecticut",
    period: "May 2025 - Present",
    description: "Managed daily transactions, scheduled tee times, and served as primary contact for 500+ club members.",
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
    // Remove tags for specific positions
    if (exp.title === "Member Services Associate" || exp.title === "Outside Operations Assistant" || exp.title === "Bar Back") {
      return null;
    }
    
    if (exp.current) {
      return {
        text: "Current",
        textColor: "text-[#68cd58]",
        bgColor: "bg-[#0f1011]",
        borderColor: "border-[#1a1c1d]"
      };
    } else if (exp.type === "previous") {
      return {
        text: "Previous",
        textColor: "text-[#68cd58]",
        bgColor: "bg-[#0f1011]",
        borderColor: "border-[#1a1c1d]"
      };
    } else if (exp.type === "internship") {
      return {
        text: "Internship",
        textColor: "text-[#68cd58]",
        bgColor: "bg-[#0f1011]",
        borderColor: "border-[#1a1c1d]"
      };
    }
    return null;
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/preston-schlagheck/', '_blank');
  };

  return (
    <section id="experience" className="py-12 lg:py-8">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Experience
            </h2>
          </motion.div>

          {/* Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Content */}
          <div className="grid gap-6 md:grid-cols-2 w-full">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl relative cursor-pointer"
                style={{ padding: '20px' }}
                onClick={handleLinkedInClick}
              >
                {/* Experience Title */}
                <div style={{ marginBottom: '9px' }}>
                  <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '9px' }}>{exp.title}</h3>
                </div>

                {/* Company Name Section */}
                <div style={{ marginBottom: '9px' }}>
                  <h4 className="text-base font-semibold text-white" style={{ marginBottom: '9px' }}>{exp.company}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
                      <MapPin size={14} className="text-[#68cd58]" />
                      <span className="text-sm text-[#82868e]">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
                      <Calendar size={14} className="text-[#68cd58]" />
                      <span className="text-sm text-[#82868e]">{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Objectives Section */}
                <div style={{ marginBottom: '9px' }}>
                  <h4 className="text-base font-semibold text-white" style={{ marginBottom: '9px' }}>Objectives</h4>
                  <div className="space-y-4">
                    {exp.description.split('. ').slice(0, 3).map((point, pointIndex) => (
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
                {exp.technologies.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-white" style={{ marginBottom: '9px' }}>Resources</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 