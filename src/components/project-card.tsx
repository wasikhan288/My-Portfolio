'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard, type Project } from './project-card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { BarChart3, Building, FileText, Award, ChefHat, Plane } from 'lucide-react';

const projects: Project[] = [
  {
    title: 'U.S. Bank – AI-Driven Risk-Based Pricing Analysis',
    description: 'Analyzed U.S. Bank\'s shift from static rate sheets to ML-enabled risk-based pricing in auto lending by applying expected-loss models and pricing-elasticity trade-offs. Evaluated profitability and risk impacts using public filings and McKinsey/BCG benchmarks.',
    category: 'financial',
    icon: <BarChart3 className="w-6 h-6" />,
    tags: ['Risk Modeling', 'AI/ML Pricing', 'Compliance', 'Profitability Analysis', 'Financial Regulation'],
    deliverables: ['Comprehensive Analysis Report', 'Pricing Governance Recommendations', 'Risk Assessment Framework'],
    reportUrl: '#',
    featured: true
  },
  {
    title: 'Media One Hotel – Ciao Bella Restaurant Business Challenge',
    description: 'Team project examining strategies to increase walk-in guests at flagship Italian restaurant while ensuring financial sustainability. Conducted break-even analysis and unit economics for new buffet menu and loyalty program.',
    category: 'business',
    icon: <ChefHat className="w-6 h-6" />,
    tags: ['Break-even Analysis', 'Unit Economics', 'Restaurant Operations', 'Loyalty Programs', 'Revenue Optimization'],
    deliverables: ['Business Presentation', 'Financial Viability Report', 'Operational Strategy'],
    reportUrl: '#',
    featured: true
  },
  {
    title: 'Chalhoub Group – Level Shoes Business Challenge',
    description: 'Collaborated on proposing premium shoe maintenance service with AI-enabled features. Designed service components and ensured alignment with operational costs, pricing assumptions, and break-even logic.',
    category: 'consulting',
    icon: <Building className="w-6 h-6" />,
    tags: ['AI Integration', 'Cost Structure Analysis', 'Premium Services', 'CRM Systems', 'Financial Modeling'],
    deliverables: ['Business Case Presentation', 'Financial Model', 'AI Implementation Plan'],
    reportUrl: '#',
    featured: true
  },
  {
    title: 'Al Maktoum International Airport – Passenger Experience Analysis',
    description: 'Designed cost structure for eco-heritage art installations addressing passenger processing inefficiencies. Built monthly operating cost estimates and analyzed fixed vs variable costs for improved passenger experience.',
    category: 'consulting',
    icon: <Plane className="w-6 h-6" />,
    tags: ['Cost Structure Design', 'Operations Analysis', 'Airport Operations', 'Revenue Optimization', 'Investment Analysis'],
    deliverables: ['Cost Analysis Report', 'Investment Proposal', 'Operational Plan'],
    reportUrl: '#',
    featured: false
  },
  {
    title: 'Bank of Baroda – Retail Lending Analysis',
    description: 'Conducted Excel-based retail lending analysis identifying 52% personal credit concentration in housing loans. Supported credit appraisal reviews and highlighted growth opportunities in underpenetrated segments.',
    category: 'financial',
    icon: <BarChart3 className="w-6 h-6" />,
    tags: ['Credit Analysis', 'Excel Modeling', 'Retail Banking', 'Risk Assessment', 'Portfolio Analysis'],
    deliverables: ['Retail Lending Report', 'Credit Risk Assessment', 'Growth Strategy Recommendations'],
    featured: false
  },
  {
    title: 'EuroKids – Financial Operations Enhancement',
    description: 'Improved financial record accuracy by 20% and enhanced fee-collection efficiency. Analyzed historical admissions data to build year-ahead enrollment forecasts supporting leadership budgeting.',
    category: 'business',
    icon: <Building className="w-6 h-6" />,
    tags: ['Financial Operations', 'Data Analysis', 'Process Optimization', 'Budget Forecasting', 'Efficiency Improvement'],
    deliverables: ['Operations Report', 'Forecasting Model', 'Process Improvement Plan'],
    featured: false
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length, icon: <Award className="w-4 h-4" /> },
  { id: 'financial', label: 'Financial Analysis', count: projects.filter(p => p.category === 'financial').length, icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'business', label: 'Business Strategy', count: projects.filter(p => p.category === 'business').length, icon: <Building className="w-4 h-4" /> },
  { id: 'consulting', label: 'Consulting Projects', count: projects.filter(p => p.category === 'consulting').length, icon: <FileText className="w-4 h-4" /> },
];

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'financial' | 'business' | 'consulting'>('all');

  const filteredProjects = useMemo(() => {
    return filter === 'all' 
      ? projects 
      : projects.filter(p => p.category === filter);
  }, [filter]);

  const featuredProjects = projects.filter(p => p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
                           linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">BUSINESS & FINANCIAL ANALYSIS</span>
          </div>
          
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl mb-4">
            Selected <span className="font-normal text-primary">Projects & Case Studies</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A collection of my work in financial analysis, business strategy, and consulting projects 
            demonstrating analytical rigor and practical problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center gap-3 mt-12 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              onClick={() => setFilter(category.id as any)}
              className={cn(
                "relative transition-all duration-300 px-5 py-2.5 rounded-lg font-medium flex items-center gap-2",
                "hover:scale-105",
                filter === category.id 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              )}
            >
              {category.icon}
              {category.label}
              <span className={cn(
                "ml-2 px-2 py-0.5 text-xs rounded-full",
                filter === category.id 
                  ? "bg-white/20" 
                  : "bg-gray-100 text-gray-600"
              )}>
                {category.count}
              </span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-4xl">📊</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                No projects match the selected filter category.
              </p>
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-gray-200 rounded-2xl px-8 py-6">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Interested in detailed analysis?</h3>
              <p className="text-gray-600 text-sm">Request access to comprehensive project reports and financial models</p>
            </div>
            <Button asChild className="bg-primary text-white hover:bg-primary/90 hover:shadow-lg transition-all duration-300">
              <a href="#contact">
                Request Access
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}