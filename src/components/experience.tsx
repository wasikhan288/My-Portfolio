'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, University, School, TrendingUp, BarChart3, Award, Globe } from 'lucide-react';

const timelineData = [
  {
    date: "Oct 2025 – Mar 2026",
    title: "Master of Science in Finance (MFin)",
    company: "Hult International Business School | Boston, MA, USA",
    icon: University,
    description: "Advanced studies in finance with focus on investment analysis, financial management, and pricing strategies. Serving as Treasurer in Executive Leadership Board at Hult African Business Club.",
    tags: ["Investment Analysis", "Financial Management", "Cost Analysis", "Financial Accounting", "Pricing Strategies"],
    type: "education",
    highlights: [
      "Treasurer in Executive Leadership Board at Hult African Business Club",
      "Advanced financial modeling and analysis"
    ]
  },
  {
    date: "Oct 2024 - Aug 2025",
    title: "Master of Science in International Business (MIB)",
    company: "Hult International Business School | Dubai, UAE",
    icon: Globe,
    description: "International business program focusing on global strategy, financial management, and data-driven business insights. Member of Student Services Task Force and Finance Club.",
    tags: ["Financial Management", "Business Insights", "Design Thinking", "Accounting", "Global Strategy"],
    type: "education",
    highlights: [
      "Member of Student Services Task Force",
      "Active participation in Finance Club",
      "Cross-cultural business strategy development"
    ]
  },
  {
    date: "Aug 2023 – Aug 2024",
    title: "Management Trainee",
    company: "Euro Kids Pre-School | Pune, Maharashtra, India",
    icon: Briefcase,
    description: "Improved financial record accuracy by 20% and enhanced fee-collection efficiency through process optimization. Analyzed historical admissions data to build year-ahead enrollment forecasts supporting leadership's budgeting and planning.",
    tags: ["Financial Analysis", "Process Optimization", "Data Forecasting", "Budget Planning", "Operations Management"],
    type: "professional",
    highlights: [
      "Improved financial record accuracy by 20%",
      "Enhanced fee-collection efficiency",
      "Developed enrollment forecasting models"
    ]
  },
  {
    date: "Oct 2020 – Sep 2023",
    title: "Bachelor of Vocational Studies (B.Voc)",
    company: "Pune University | India",
    icon: GraduationCap,
    description: "Concentration in Banking, Financial Services and Insurance with Actuarial Studies (BFSI with AS). Core Committee Member of Start-up & Innovation Cell, organizing events to promote new entrepreneurs and ventures.",
    tags: ["Actuarial Studies", "Financial Mathematics", "Business Statistics", "Advanced Accounting", "IFRS"],
    type: "education",
    highlights: [
      "Core Committee Member of Start-up & Innovation Cell",
      "Focus on Banking, Financial Services and Insurance",
      "Actuarial studies and financial mathematics"
    ]
  },
  {
    date: "Dec 2022 – Aug 2023",
    title: "Bank Intern",
    company: "Bank of Baroda | Pune, Maharashtra, India",
    icon: BarChart3,
    description: "Assessed borrower profiles and supported credit appraisal reviews, reducing compliance errors by 15%. Conducted Excel-based retail lending analysis; identified that 52% of personal credit was concentrated in housing loans and highlighted growth opportunities in underpenetrated segments.",
    tags: ["Credit Appraisal", "Risk Management", "Excel Analysis", "Retail Lending", "Compliance"],
    type: "professional",
    highlights: [
      "Reduced compliance errors by 15%",
      "Identified 52% personal credit concentration in housing loans",
      "Highlighted growth opportunities in underpenetrated segments"
    ]
  },
  {
    date: "Oct 2018 – Sep 2020",
    title: "Higher Secondary Education",
    company: "MAHHSC | India",
    icon: School,
    description: "Commerce Stream with concentration in Commercial Studies, Banking, Accounting, Economics & Business Studies. Participated in street plays addressing social causes.",
    tags: ["Commercial Studies", "Banking", "Accounting", "Economics", "Business Studies"],
    type: "education",
    highlights: [
      "Commerce Stream with business focus",
      "Social awareness activities through street plays",
      "Foundation in commercial and economic principles"
    ]
  }
];

export function Timeline() {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Count items by type for stats
  const educationCount = timelineData.filter(item => item.type === "education").length;
  const professionalCount = timelineData.filter(item => item.type === "professional").length;

  return (
    <section id="experience" className="py-24 sm:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">EDUCATION & PROFESSIONAL JOURNEY</span>
          </div>
          <h2 className="font-light text-4xl sm:text-5xl tracking-tight mb-4">
            Academic & Professional <span className="font-normal text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From foundational education to specialized finance studies and practical work experience
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{educationCount}</div>
              <div className="text-sm text-muted-foreground">Education Milestones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{professionalCount}</div>
              <div className="text-sm text-muted-foreground">Professional Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Dual</div>
              <div className="text-sm text-muted-foreground">Degree Program</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Central Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20"></div>

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={`${item.title}-${item.date}`}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 group ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Date Section */}
                <div className={`w-full md:w-2/5 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} flex-shrink-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`inline-flex items-center gap-2 border rounded-xl px-4 py-3 shadow-sm ${
                      item.type === "professional" 
                        ? "bg-green-50 border-green-200" 
                        : "bg-blue-50 border-blue-200"
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${
                      item.type === "professional" 
                        ? "bg-green-100 text-green-600" 
                        : "bg-blue-100 text-blue-600"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`font-semibold ${
                      item.type === "professional" ? "text-green-700" : "text-blue-700"
                    }`}>
                      {item.date}
                    </span>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full border-4 border-background shadow-lg ${
                      item.type === "professional" ? "bg-green-500" : "bg-blue-500"
                    }`}
                  />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-3/5 flex-1">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        item.type === "professional" 
                          ? "bg-green-100" 
                          : "bg-blue-100"
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          item.type === "professional" 
                            ? "text-green-600" 
                            : "text-blue-600"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            item.type === "professional" 
                              ? "bg-green-100 text-green-700" 
                              : "bg-blue-100 text-blue-700"
                          }`}>
                            {item.type === "professional" ? "Professional" : "Education"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <span className="text-sm font-medium">{item.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    {item.highlights && (
                      <ul className="space-y-2 mb-6">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`px-3 py-1 rounded-lg text-sm font-medium ${
                            item.type === "professional"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Current Focus & Future Goals</h3>
            <p className="text-gray-700 mb-6">
              Currently completing dual Master's degrees in International Business and Finance at Hult International 
              Business School. Building expertise in financial modeling, investment analysis, and global business 
              strategy for roles in capital markets, risk management, and corporate finance.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">Financial Modeling</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm font-medium">Investment Analysis</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-600 rounded-full text-sm font-medium">Risk Management</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-600 rounded-full text-sm font-medium">Global Strategy</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-600 rounded-full text-sm font-medium">Corporate Finance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}