'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { ExternalLink, FileText, BarChart3, Building, Plane, ChefHat, Award, DollarSign, Database, PieChart, Briefcase, TrendingUp, Users, Shield } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  category: 'financial' | 'business' | 'consulting' | 'data' | 'all';
  icon: React.ReactNode;
  tags: string[];
  deliverables: string[];
  reportUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: 'Pre-IPO Valuation of WeWork',
    description: 'Acted as Internal Financial Analyst in a six-member team to analyze WeWork\'s pre-IPO valuation ($47B vs. $8B) using DCF modeling and financial analysis. Highlighted governance risks, unsustainable leases, and negative cash flow, recommending strategic restructuring to restore investor confidence.',
    category: 'financial',
    icon: <DollarSign className="w-6 h-6" />,
    tags: ['DCF Modeling', 'IPO Valuation', 'Financial Ratios', 'Governance Risk', 'Strategic Restructuring'],
    deliverables: ['DCF Valuation Model', 'Financial Ratio Analysis', 'Investment Recommendation Report'],
    videoUrl: 'https://www.youtube.com/watch?v=sXm0hwzrh_w',
    featured: true
  },
  {
    title: 'U.S. Bank – AI-Driven Risk-Based Pricing Analysis',
    description: 'Analyzed U.S. Bank\'s shift from static rate sheets to ML-enabled risk-based pricing in auto lending by applying expected-loss models and pricing-elasticity trade-offs. Evaluated profitability and risk impacts using public filings and McKinsey/BCG benchmarks.',
    category: 'financial',
    icon: <BarChart3 className="w-6 h-6" />,
    tags: ['Risk Modeling', 'AI/ML Pricing', 'Compliance', 'Profitability Analysis', 'Financial Regulation'],
    deliverables: ['Comprehensive Analysis Report', 'Pricing Governance Recommendations', 'Risk Assessment Framework'],
    reportUrl: 'https://9c386fe9-b3ee-43e8-8936-b3277514e0d1.filesusr.com/ugd/75cc74_c648ab7cdc4443edafceaccba8a9bf46.pdf',
    featured: true
  },
  {
    title: 'Financial Statement Analysis of Accenture',
    description: 'Conducted individual financial analysis of Accenture, evaluating profitability, revenue recognition, and ESG risk. Identified strong Return On Equity (26.5%) compared to peer average and robust operating cash flows.',
    category: 'financial',
    icon: <TrendingUp className="w-6 h-6" />,
    tags: ['Financial Statement Analysis', 'ROE Analysis', 'ESG Risk', 'Peer Benchmarking', 'Investment Analysis'],
    deliverables: ['Financial Analysis Report', 'Peer Comparison Study', 'Investment Recommendation'],
    reportUrl: 'https://9c386fe9-b3ee-43e8-8936-b3277514e0d1.filesusr.com/ugd/75cc74_fd2b37fbac364f5fac1b55394b47c9f3.docx?dn=Wasi-Individual-Accounting-Assignment-Report-Final.docx',
    featured: true
  },
  {
    title: 'Turo Fleet Financial Analysis',
    description: 'Built a full FP&A model for a 3-vehicle Turo fleet, forecasting revenue and costs, modeling loans and depreciation, analyzing discounts and fee structures, and producing a 5-year NPV to guide a $50K expansion decision.',
    category: 'financial',
    icon: <Briefcase className="w-6 h-6" />,
    tags: ['FP&A Modeling', 'NPV Analysis', 'Revenue Forecasting', 'Cost Modeling', 'Expansion Strategy'],
    deliverables: ['Financial Model', 'NPV Analysis Report', 'Expansion Decision Framework'],
    reportUrl: 'https://9c386fe9-b3ee-43e8-8936-b3277514e0d1.filesusr.com/ugd/75cc74_3f677ca092fa4c2ab046b35f5ff8058b.xlsx?dn=Wasi-Individual-Assignment-Complete-Website-New.xlsx',
    featured: true
  },
  {
    title: 'Media One Hotel – Ciao Bella Restaurant Business Challenge',
    description: 'Team project examining strategies to increase walk-in guests at flagship Italian restaurant while ensuring financial sustainability. Conducted break-even analysis and unit economics for new buffet menu and loyalty program.',
    category: 'business',
    icon: <ChefHat className="w-6 h-6" />,
    tags: ['Break-even Analysis', 'Unit Economics', 'Restaurant Operations', 'Loyalty Programs', 'Revenue Optimization'],
    deliverables: ['Business Presentation', 'Financial Viability Report', 'Operational Strategy'],
    reportUrl: 'https://9c386fe9-b3ee-43e8-8936-b3277514e0d1.filesusr.com/ugd/75cc74_b36e32ce4dc84dc08f65aa9ebc4bf15f.pptx?dn=business%20challenge%203-Final-PPT.pptx',
    featured: true
  },
  {
    title: 'Chalhoub Group – Level Shoes Business Challenge',
    description: 'Collaborated on proposing premium shoe maintenance service with AI-enabled features. Designed service components and ensured alignment with operational costs, pricing assumptions, and break-even logic.',
    category: 'consulting',
    icon: <Building className="w-6 h-6" />,
    tags: ['AI Integration', 'Cost Structure Analysis', 'Premium Services', 'CRM Systems', 'Financial Modeling'],
    deliverables: ['Business Case Presentation', 'Financial Model', 'AI Implementation Plan'],
    reportUrl: 'https://9c386fe9-b3ee-43e8-8936-b3277514e0d1.filesusr.com/ugd/75cc74_8ba6dda0764e4c36921d3bcab5b0e2fe.pptx?dn=Business%20Challenge%20_Team%203_Final_PPT.pptx',
    featured: true
  },
  {
    title: 'Al Maktoum International Airport – Passenger Experience Analysis',
    description: 'Designed cost structure for eco-heritage art installations addressing passenger processing inefficiencies. Built monthly operating cost estimates and analyzed fixed vs variable costs for improved passenger experience.',
    category: 'consulting',
    icon: <Plane className="w-6 h-6" />,
    tags: ['Cost Structure Design', 'Operations Analysis', 'Airport Operations', 'Revenue Optimization', 'Investment Analysis'],
    deliverables: ['Cost Analysis Report', 'Investment Proposal', 'Operational Plan'],
    reportUrl: 'https://9c386fe9-b3ee-43e8-8936-b3277514e0d1.filesusr.com/ugd/75cc74_1ad056feb83741e7b0c7c63e70772f27.pdf',
    featured: false
  },
  {
    title: 'Data Analysis of H1B Visa',
    description: 'Infographic analysis of the job search landscape for financial analyst roles among OPT students in the United States. Created comprehensive dashboard visualizing key trends and insights.',
    category: 'data',
    icon: <Database className="w-6 h-6" />,
    tags: ['Data Visualization', 'Power BI', 'OPT Analysis', 'Job Market Trends', 'Dashboard Design'],
    deliverables: ['Power BI Dashboard', 'Infographic Report', 'Data Analysis Insights'],
    reportUrl: '#',
    featured: false
  },
  {
    title: 'AirBnB Data Analytics Project in R',
    description: 'Worked in a 6-member team to analyze 40k+ NYC AirBnB listings by cleaning and transforming the dataset, running regression models to identify high-risk commercialized listings and mapping risk clusters with Leaflet.',
    category: 'data',
    icon: <PieChart className="w-6 h-6" />,
    tags: ['R Programming', 'Data Cleaning', 'Regression Analysis', 'Risk Modeling', 'Policy Insights'],
    deliverables: ['R Analysis Script', 'Risk Assessment Report', 'Policy Recommendations'],
    reportUrl: 'https://jovial-conkies-86ebeb.netlify.app/',
    featured: false
  },
  {
    title: 'Bank of Baroda – Retail Lending Analysis',
    description: 'Conducted Excel-based retail lending analysis identifying 52% personal credit concentration in housing loans. Supported credit appraisal reviews and highlighted growth opportunities in underpenetrated segments.',
    category: 'financial',
    icon: <Shield className="w-6 h-6" />,
    tags: ['Credit Analysis', 'Excel Modeling', 'Retail Banking', 'Risk Assessment', 'Portfolio Analysis'],
    deliverables: ['Retail Lending Report', 'Credit Risk Assessment', 'Growth Strategy Recommendations'],
    featured: false
  },
  {
    title: 'EuroKids – Financial Operations Enhancement',
    description: 'Improved financial record accuracy by 20% and enhanced fee-collection efficiency. Analyzed historical admissions data to build year-ahead enrollment forecasts supporting leadership budgeting.',
    category: 'business',
    icon: <Users className="w-6 h-6" />,
    tags: ['Financial Operations', 'Data Analysis', 'Process Optimization', 'Budget Forecasting', 'Efficiency Improvement'],
    deliverables: ['Operations Report', 'Forecasting Model', 'Process Improvement Plan'],
    featured: false
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length, icon: <Award className="w-4 h-4" /> },
  { id: 'financial', label: 'Financial Analysis', count: projects.filter(p => p.category === 'financial').length, icon: <DollarSign className="w-4 h-4" /> },
  { id: 'business', label: 'Business Strategy', count: projects.filter(p => p.category === 'business').length, icon: <Building className="w-4 h-4" /> },
  { id: 'consulting', label: 'Consulting', count: projects.filter(p => p.category === 'consulting').length, icon: <FileText className="w-4 h-4" /> },
  { id: 'data', label: 'Data Analytics', count: projects.filter(p => p.category === 'data').length, icon: <Database className="w-4 h-4" /> },
];

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'financial' | 'business' | 'consulting' | 'data'>('all');

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

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'financial': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'business': return 'bg-green-100 text-green-700 border-green-200';
      case 'consulting': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'data': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
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
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full opacity-5"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 border border-secondary/10 rounded-lg rotate-45 opacity-5"></div>
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
            <span className="text-sm font-medium text-primary">PROJECT PORTFOLIO</span>
          </div>
          
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl mb-4">
            Business & Financial <span className="font-normal text-primary">Analysis Projects</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of my work in financial modeling, business strategy, data analytics, and consulting projects across various industries.
          </p>
          
          {/* Project Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{projects.length}</div>
              <div className="text-sm text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{featuredProjects.length}</div>
              <div className="text-sm text-gray-600">Featured Analyses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
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
                <div className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/20 group">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn("p-3 rounded-lg", getCategoryColor(project.category))}>
                        {project.icon}
                      </div>
                      {project.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mb-6 flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Deliverables</h4>
                    <ul className="space-y-1">
                      {project.deliverables.slice(0, 3).map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="line-clamp-1">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    {project.reportUrl ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                        asChild
                      >
                        <a href={project.reportUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <FileText className="w-4 h-4" />
                          View Report
                        </a>
                      </Button>
                    ) : project.videoUrl ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                        asChild
                      >
                        <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Watch Video
                        </a>
                      </Button>
                    ) : (
                      <div className="text-center text-sm text-gray-500 py-2">
                        Details available upon request
                      </div>
                    )}
                  </div>
                </div>
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

        {/* Project Types Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.slice(1).map((category) => (
                <div key={category.id} className="bg-white/80 border border-gray-200 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    {category.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{category.label}</h4>
                  <div className="text-3xl font-bold text-primary mb-2">{category.count}</div>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
              ))}
            </div>
          </div>
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
              <p className="text-gray-600 text-sm">Request access to comprehensive project reports, financial models, and case studies</p>
            </div>
            <Button asChild className="bg-primary text-white hover:bg-primary/90 hover:shadow-lg transition-all duration-300">
              <a href="#contact">
                <ExternalLink className="w-4 h-4 mr-2" />
                Request Access
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}