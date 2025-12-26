'use client';

import { motion } from "framer-motion";
import { GraduationCap, Globe, Building, School, Award, BookOpen, TrendingUp } from "lucide-react";

const educationData = [
  {
    date: 'Oct 2025 – Mar 2026',
    title: "Master of Science in Finance (MFin)",
    institution: 'Hult International Business School | Boston, MA, USA',
    description: 'Advanced finance program focusing on investment analysis, financial management, and pricing strategies. Currently serving as Treasurer in Executive Leadership Board at Hult African Business Club.',
    icon: Building,
    highlights: [
      'Investment Analysis', 
      'Financial Management', 
      'Cost & Managerial Analysis',
      'Financial Accounting',
      'Pricing Strategies'
    ],
    activities: [
      'Treasurer in Executive Leadership Board at Hult African Business Club',
      'Advanced financial modeling and analysis'
    ],
    status: 'upcoming'
  },
  {
    date: 'Oct 2024 - Aug 2025',
    title: 'Master of Science in International Business (MIB)',
    institution: 'Hult International Business School | Dubai, UAE',
    description: 'International business program with focus on global strategy, financial management, and data-driven business insights. Active member of Student Services Task Force and Finance Club.',
    icon: Globe,
    highlights: [
      'Financial Management', 
      'Business Insights through Data', 
      'Design Thinking for Innovation',
      'Accounting for Managers'
    ],
    activities: [
      'Member of Student Services Task Force',
      'Active participation in Finance Club',
      'Cross-cultural business strategy development'
    ],
    status: 'current'
  },
  {
    date: 'Oct 2020 – Sep 2023',
    title: 'Bachelor of Vocational Studies (B.Voc)',
    institution: 'Pune University | India',
    description: 'Specialization in Banking, Financial Services and Insurance with Actuarial Studies (BFSI with AS). Core Committee Member of Start-up & Innovation Cell, organizing events to promote new entrepreneurs and ventures.',
    icon: GraduationCap,
    highlights: [
      'Actuarial Studies', 
      'Financial Mathematics', 
      'Advanced Accounting',
      'Direct & Indirect Taxes',
      'Intro to IFRS'
    ],
    activities: [
      'Core Committee Member of Start-up & Innovation Cell',
      'Organized entrepreneurship events and workshops',
      'Financial services and insurance specialization'
    ],
    status: 'completed'
  },
  {
    date: 'Oct 2018 – Sep 2020',
    title: 'Higher Secondary Education (Commerce Stream)',
    institution: 'MAHHSC | India',
    description: 'Commerce stream with concentration in Commercial Studies, Banking, Accounting, Economics & Business Studies. Actively participated in social awareness activities including street plays.',
    icon: School,
    highlights: [
      'Commercial Studies', 
      'Banking & Accounting', 
      'Economics',
      'Business Studies'
    ],
    activities: [
      'Street plays addressing social causes',
      'Foundation in commercial principles'
    ],
    status: 'completed'
  },
];

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'current': return 'bg-green-500/20 text-green-600 border-green-500/30';
      case 'upcoming': return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
      case 'completed': return 'bg-gray-500/20 text-gray-600 border-gray-500/30';
      default: return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  return (
    <section id="education" className="py-24 sm:py-32 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Financial Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, #000 1px, transparent 1px),
                             linear-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-primary/10 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 border border-secondary/10 rounded-lg rotate-45 opacity-10"></div>
        
        {/* Gradient Accents */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">ACADEMIC QUALIFICATIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Education <span className="font-normal text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From foundational commerce studies to specialized finance and international business education
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center gap-8 group ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Date Section */}
                  <div className={`w-full lg:w-2/5 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-sm"
                    >
                      <div className={`p-2 rounded-lg ${getStatusColor(item.status)}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-gray-900">{item.date}</span>
                        <div className={`text-xs font-medium px-2 py-1 rounded-full mt-1 ${getStatusColor(item.status)}`}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Icon Connector */}
                  <div className="hidden lg:flex relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full lg:w-2/5">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {/* Mobile Icon */}
                      <div className="lg:hidden mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(item.status)}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-gray-700 font-medium">
                          {item.institution}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Activities */}
                      {item.activities && item.activities.length > 0 && (
                        <div className="mb-6 space-y-2">
                          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Activities & Involvement</h4>
                          <ul className="space-y-1">
                            {item.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Highlights / Relevant Courses */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">Relevant Courses & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, highlightIndex) => (
                            <motion.span
                              key={highlightIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: highlightIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20"
                            >
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/4 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Current Focus</h3>
              </div>
              
              <div className="lg:w-3/4">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Currently completing dual Master's degrees in International Business and Finance at Hult International Business School. 
                  Building expertise in financial modeling, investment analysis, and global business strategy for roles in capital markets, 
                  risk management, and corporate finance.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white border border-primary/20 text-primary rounded-lg text-sm font-medium">Financial Modeling</span>
                  <span className="px-3 py-1 bg-white border border-green-500/20 text-green-600 rounded-lg text-sm font-medium">Investment Analysis</span>
                  <span className="px-3 py-1 bg-white border border-blue-500/20 text-blue-600 rounded-lg text-sm font-medium">Risk Management</span>
                  <span className="px-3 py-1 bg-white border border-purple-500/20 text-purple-600 rounded-lg text-sm font-medium">Global Strategy</span>
                  <span className="px-3 py-1 bg-white border border-orange-500/20 text-orange-600 rounded-lg text-sm font-medium">Corporate Finance</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}