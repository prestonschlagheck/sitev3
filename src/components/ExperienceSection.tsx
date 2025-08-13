'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Plus } from 'lucide-react';
import { useState } from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  current: boolean;
  type?: 'previous' | 'internship';
  category: 'web-development' | 'internships' | 'service' | 'leadership';
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
    current: true,
    category: 'web-development'
  },
  {
    title: "Bar Back",
    company: "BAR New Haven",
    location: "New Haven, Connecticut",
    period: "Jun 2025 - Present",
    description: "Assisting bartenders, servers, and wait staff to ensure efficiency internally.",
    technologies: [],
    current: true,
    category: 'service'
  },
  {
    title: "Member Services Associate",
    company: "Madison Country Club",
    location: "Madison, Connecticut",
    period: "May 2025 - Present",
    description: "Managed daily transactions, scheduled tee times, and served as primary contact for 500+ club members.",
    technologies: [],
    current: true,
    category: 'service'
  },
  {
    title: "Outside Operations Assistant",
    company: "Madison Country Club",
    location: "Madison, Connecticut",
    period: "Apr 2022 - May 2025",
    description: "Planned and coordinated 14 major tournaments and social events annually while overseeing 100 daily tee times and maintaining a fleet of 50 golf carts.",
    technologies: [],
    current: false,
    type: "previous",
    category: 'service'
  },
  {
    title: "Web Developer",
    company: "Guilford Fund For Education",
    location: "Guilford, Connecticut",
    period: "Oct 2021 - Dec 2024",
    description: "Developed 30 web pages and managed email campaigns reaching 750+ subscribers while securing 40+ sponsors.",
    technologies: [],
    current: false,
    type: "internship",
    category: 'web-development'
  },
  {
    title: "Summer Research Intern",
    company: "Trinity Institute for Applied Neuroscience & Spirituality",
    location: "New Haven, Connecticut",
    period: "Jun 2021 - Aug 2021",
    description: "Designed organization website and conducted analysis of 10 academic studies with visual enhancement.",
    technologies: [],
    current: false,
    type: "internship",
    category: 'internships'
  },
  {
    title: "Alpha Fund Chair",
    company: "Alpha Kappa Psi - Beta Upsilon",
    location: "Columbia, South Carolina",
    period: "Jun 2025 - Present",
    description: "Leading fundraising initiatives and managing financial resources for fraternity chapter operations.",
    technologies: [],
    current: true,
    category: 'leadership'
  },
  {
    title: "Graphic & Apparel Design Chair",
    company: "Sigma Phi Epsilon - SC Alpha",
    location: "Columbia, South Carolina",
    period: "Nov 2024 - Present",
    description: "Managing graphic design projects and apparel development while serving in multiple leadership roles.",
    technologies: [],
    current: true,
    category: 'leadership'
  }
];

const ExperienceSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    { id: 'web-development', label: 'Web Development' },
    { id: 'internships', label: 'Internships' },
    { id: 'service', label: 'Service' },
    { id: 'leadership', label: 'Leadership' }
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
  };

  const filteredExperiences = selectedCategories.length > 0 
    ? experiences.filter(exp => {
        // Check if this experience matches ANY of the selected categories
        return selectedCategories.some(categoryId => {
          // Special handling for internships - check type
          if (categoryId === 'internships') {
            return exp.type === 'internship';
          }
          // For other categories, check the category field
          return exp.category === categoryId;
        });
      })
    : experiences;

  const getTagConfig = (exp: Experience): TagConfig | null => {
    // Remove tags for specific positions and all current positions
    if (exp.title === "Member Services Associate" || exp.title === "Outside Operations Assistant" || exp.title === "Bar Back" || exp.current) {
      return null;
    }
    
    if (exp.type === "previous") {
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
            gridTemplateRows: '12px auto 12px auto 12px auto',
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

          {/* Filter Bar */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-6 bg-[#0f1011] rounded-2xl" style={{ margin: '0', padding: '16px 32px', minHeight: '40px', position: 'relative' }}>
              <div className="flex items-center gap-3" style={{ marginLeft: '-14px' }}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md hover:border-[#68cd58] transition-colors"
                  style={{ padding: '8px 16px' }}
                >
                  <span className="text-sm text-[#82868e] font-sans">Filter</span>
                  <Plus size={14} className={`transition-transform text-[#68cd58] ${isFilterOpen ? 'rotate-45' : ''}`} />
                </button>
                
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center gap-3"
                  >
                    <button
                      onClick={() => toggleCategory('web-development')}
                      className={`flex items-center gap-2 rounded-md border transition-all ${
                        selectedCategories.includes('web-development')
                          ? 'bg-[#0f1011] border-[#68cd58]'
                          : 'bg-transparent border-[#1a1c1d] hover:border-[#68cd58]'
                      }`}
                      style={{ padding: '8px 16px' }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className={`text-sm font-medium font-sans ${
                        selectedCategories.includes('web-development') ? 'text-[#68cd58]' : 'text-[#82868e]'
                      }`}>
                        Web Development
                      </span>
                    </button>
                  </motion.div>
                )}
              </div>
              
              {isFilterOpen && (
                <>
                  {/* Mobile version with negative margin */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 md:hidden"
                    style={{ marginLeft: '-14px', marginTop: '-10px' }}
                  >
                    {categories.filter(cat => cat.id !== 'web-development').map(category => {
                      const getCategoryColor = (id: string) => {
                        switch (id) {
                          case 'internships': return 'bg-yellow-500';
                          case 'service': return 'bg-purple-500';
                          case 'leadership': return 'bg-orange-500';
                          default: return 'bg-[#68cd58]';
                        }
                      };
                      return (
                        <button
                          key={category.id}
                          onClick={() => toggleCategory(category.id)}
                          className={`flex items-center gap-2 rounded-md border transition-all ${
                            selectedCategories.includes(category.id)
                              ? 'bg-[#0f1011] border-[#68cd58]'
                              : 'bg-transparent border-[#1a1c1d] hover:border-[#68cd58]'
                          }`}
                          style={{ padding: '8px 16px' }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(category.id)}`}></div>
                          <span className={`text-sm font-medium font-sans ${
                            selectedCategories.includes(category.id) ? 'text-[#68cd58]' : 'text-[#82868e]'
                          }`}>
                            {category.label}
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                  
                  {/* Desktop version without negative margin */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="hidden md:flex items-center gap-3"
                    style={{ marginLeft: '-14px' }}
                  >
                    {categories.filter(cat => cat.id !== 'web-development').map(category => {
                      const getCategoryColor = (id: string) => {
                        switch (id) {
                          case 'internships': return 'bg-yellow-500';
                          case 'service': return 'bg-purple-500';
                          case 'leadership': return 'bg-orange-500';
                          default: return 'bg-[#68cd58]';
                        }
                      };
                      return (
                        <button
                          key={category.id}
                          onClick={() => toggleCategory(category.id)}
                          className={`flex items-center gap-2 rounded-md border transition-all ${
                            selectedCategories.includes(category.id)
                              ? 'bg-[#0f1011] border-[#68cd58]'
                              : 'bg-transparent border-[#1a1c1d] hover:border-[#68cd58]'
                          }`}
                          style={{ padding: '8px 16px' }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(category.id)}`}></div>
                          <span className={`text-sm font-medium font-sans ${
                            selectedCategories.includes(category.id) ? 'text-[#68cd58]' : 'text-[#82868e]'
                          }`}>
                            {category.label}
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                </>
              )}
              
              <div className="flex items-center gap-3 ml-auto absolute right-6 top-4 md:top-1/2 md:-translate-y-1/2">
                {selectedCategories.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#82868e] hover:text-white transition-colors font-sans"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div style={{ height: '12px' }}></div>

          {/* Content */}
          <div className="grid gap-6 md:grid-cols-2 w-full">
            {filteredExperiences.map((exp, index) => (
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
                    {(() => {
                      const tagConfig = getTagConfig(exp);
                      return tagConfig && (
                        <div className="flex items-center gap-2 bg-[#0f1011] border border-[#1a1c1d] rounded-md" style={{ padding: '4px 8px' }}>
                          <User size={14} className="text-[#68cd58]" />
                          <span className="text-sm text-[#82868e]">{tagConfig.text}</span>
                        </div>
                      );
                    })()}
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