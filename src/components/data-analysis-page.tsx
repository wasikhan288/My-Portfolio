'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  MapPin, 
  Building2, 
  TrendingUp, 
  Users, 
  Shield,
  DollarSign,
  FileText,
  Download,
  ExternalLink,
  ChevronRight,
  Target,
  BookOpen,
  Database
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const dashboardStats = [
  { 
    icon: <Shield className="w-5 h-5" />, 
    value: '83%', 
    label: 'Petitions Certified', 
    description: 'Successful H-1B approvals', 
    bgClass: 'bg-primary/10',
    textClass: 'text-primary',
    iconBg: 'bg-primary/10'
  },
  { 
    icon: <MapPin className="w-5 h-5" />, 
    value: '3.8K', 
    label: 'NY Cases', 
    description: 'Highest concentration', 
    bgClass: 'bg-secondary/10',
    textClass: 'text-secondary-foreground',
    iconBg: 'bg-secondary/10'
  },
  { 
    icon: <DollarSign className="w-5 h-5" />, 
    value: '$112K', 
    label: 'Median Wage', 
    description: 'Across certified cases', 
    bgClass: 'bg-accent/10',
    textClass: 'text-accent',
    iconBg: 'bg-accent/10'
  },
  { 
    icon: <Building2 className="w-5 h-5" />, 
    value: '4', 
    label: 'Top Sponsors', 
    description: 'Major financial firms', 
    bgClass: 'bg-muted',
    textClass: 'text-muted-foreground',
    iconBg: 'bg-muted'
  },
];

const topPositions = [
  { role: 'Financial Analyst', count: 'High Demand', trend: 'up' },
  { role: 'Finance Manager', count: 'Medium Demand', trend: 'stable' },
  { role: 'Investment Analyst', count: 'Growing', trend: 'up' },
  { role: 'Risk Analyst', count: 'Steady', trend: 'stable' },
];

const topLocations = [
  { state: 'New York', cases: '3.8K', percentage: '32%' },
  { state: 'California', cases: '1.2K', percentage: '10%' },
  { state: 'Texas', cases: '950', percentage: '8%' },
  { state: 'Illinois', cases: '720', percentage: '6%' },
];

const topSponsors = [
  { company: 'Ernst & Young', category: 'Professional Services' },
  { company: 'JPMorgan Chase', category: 'Investment Banking' },
  { company: 'Goldman Sachs', category: 'Investment Banking' },
  { company: 'BOFA Securities', category: 'Financial Services' },
];

// Define tab configuration
const tabs = [
  { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'insights', label: 'Key Insights', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'methodology', label: 'Methodology', icon: <FileText className="w-4 h-4" /> },
] as const;

type TabId = typeof tabs[number]['id'];

export function DataAnalysisPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

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

  // Handle tab click
  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="data-analysis" className="min-h-screen py-12 sm:py-20 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">DATA ANALYSIS & REFLECTION</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-foreground">
            H-1B Visa Dashboard: <span className="text-primary">Financial Analyst Job Market</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            An infographic analysis of the job search landscape for financial analyst roles among OPT students in the United States.
          </p>
          
          {/* Dashboard Preview */}
          <div className="relative rounded-lg overflow-hidden border border-border shadow-sm max-w-4xl mx-auto mb-8 bg-card">
            <div className="bg-primary p-6 text-primary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">H-1B Visa Analysis Dashboard</h3>
                  <p className="text-primary-foreground/90">Financial Analyst Roles • FY 2024</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">1,200+</div>
                  <div className="text-sm text-primary-foreground/80">Companies Analyzed</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dashboardStats.map((stat, index) => (
                  <div key={index} className={`text-center p-4 border border-border rounded-lg hover:shadow-md transition-shadow ${stat.bgClass}`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.iconBg} mb-3 ${stat.textClass}`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm font-medium text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8" asChild>
              <a 
                href="https://app.powerbi.com/MobileLandingPage?Action=OpenReport&reportObjectId=d012199a-1096-438a-96a4-1abd979a51ca&Context=QR&reportPage=b9d3bf7d11254a2922ad" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Dashboard
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8" 
              onClick={() => handleTabClick('insights')}
            >
              <FileText className="w-4 h-4 mr-2" />
              View Full Analysis
            </Button>
          </div>
        </motion.div>

        {/* Tabs Navigation - Fixed */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-border bg-muted/50 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200",
                  activeTab === tab.id
                    ? "bg-background text-primary shadow-sm ring-1 ring-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <motion.div
          key={activeTab} // Add key to force re-render when tab changes
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">The Full Story</h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    This dashboard represents my take on the infographic analysis of the job market for 
                    financial analyst roles from the perspective of an international student on OPT. My goal 
                    was to understand how OPT graduates and H-1B visa holders fit into the U.S. workforce, 
                    especially within the financial services sector.
                  </p>
                  
                  <p>
                    Through this visualization, I discovered that the H-1B visa ecosystem remains strong, 
                    with over <strong className="text-foreground">83% of petitions certified</strong> and around <strong className="text-foreground">8.5% certified-withdrawn</strong>. 
                    This suggests that most applicants successfully receive approvals, reflecting the continued 
                    demand for skilled global talent by U.S. employers.
                  </p>
                  
                  <div className="bg-secondary/10 border-l-4 border-secondary p-6 my-6">
                    <div className="flex items-start gap-4">
                      <Target className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Finding</h4>
                        <p className="text-secondary-foreground">
                          The H-1B category dominates over other visa types like H-1B1 Singapore and H-1B1 Chile, 
                          indicating it remains the primary pathway for skilled professionals in finance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Data Highlights Grid */}
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Geographic Distribution
                  </h3>
                  <div className="space-y-4">
                    {topLocations.map((location, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-medium text-foreground">{location.state}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-foreground">{location.cases} cases</div>
                          <div className="text-sm text-muted-foreground">{location.percentage} of total</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-accent" />
                    Top Sponsoring Companies
                  </h3>
                  <div className="space-y-4">
                    {topSponsors.map((sponsor, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        <div>
                          <div className="font-medium text-foreground">{sponsor.company}</div>
                          <div className="text-sm text-muted-foreground">{sponsor.category}</div>
                        </div>
                        <div className="text-right">
                          <div className="badge badge-primary">
                            Active Sponsor
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Insights Tab */}
          {activeTab === 'insights' && (
            <div className="space-y-12">
              <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Insights & Analysis</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">OPT Pathway Benefits</h3>
                        <p className="text-muted-foreground mb-4">
                          What stood out most to me was how strategically beneficial the OPT pathway is for employers. 
                          It allows them to hire and evaluate international talent already based in the U.S. before 
                          deciding on sponsorship — saving costs and reducing risk.
                        </p>
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <p className="text-primary text-sm">
                            <strong>Strategic Advantage:</strong> With the upcoming 2025 H-1B policy changes expected 
                            to raise overseas hiring fees, this insight becomes even more meaningful for companies 
                            planning their international talent strategy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <DollarSign className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Wage Analysis & Demand</h3>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Leading firms such as Ernst & Young, JPMorgan Chase, Goldman Sachs, and BOFA Securities 
                            are the most active sponsors, offering a <strong className="text-foreground">median wage across certified cases of $112,715</strong>.
                          </p>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Most In-Demand Positions:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {topPositions.map((position, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80">
                                  <span className="font-medium text-foreground">{position.role}</span>
                                  <div className="flex items-center gap-2">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                      position.trend === 'up' ? 'bg-accent/10 text-accent' : 'bg-muted text-muted-foreground'
                                    }`}>
                                      {position.count}
                                    </span>
                                    {position.trend === 'up' && (
                                      <TrendingUp className="w-4 h-4 text-accent" />
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Geographic Concentration</h3>
                        <p className="text-muted-foreground mb-4">
                          New York (3.8K cases) and California (1.2K cases) dominate as employment hotspots, 
                          followed by Texas and Illinois. This highlights that OPT and H-1B opportunities are 
                          heavily concentrated in large financial and tech hubs.
                        </p>
                        <div className="bg-secondary/10 p-4 rounded-lg">
                          <p className="text-secondary-foreground text-sm">
                            <strong>Implication:</strong> International students should target these geographic 
                            clusters for maximum opportunities, while companies in these regions have access to 
                            the deepest talent pools of international finance professionals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Methodology Tab */}
          {activeTab === 'methodology' && (
            <div className="space-y-12">
              <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-foreground mb-6">Analysis Methodology</h2>
                
                <div className="space-y-8">
                  <div className="card">
                    <h3 className="text-xl font-bold text-foreground mb-4">Data Sources & Tools</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Primary Data Sources</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>U.S. Department of Labor H-1B disclosure data</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>OPT program statistics from USCIS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Financial services industry reports</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Analysis Tools</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Microsoft Power BI for visualization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Excel for data cleaning and preparation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>Statistical analysis for trend identification</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-xl font-bold text-foreground mb-4">Analysis Framework</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        <h4 className="font-semibold text-foreground mb-2">1. Data Collection & Cleaning</h4>
                        <p className="text-muted-foreground text-sm">
                          Aggregated H-1B petition data for financial analyst roles, filtered for relevant 
                          SOC codes, cleaned inconsistent entries, and normalized company names.
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        <h4 className="font-semibold text-foreground mb-2">2. Geographic Analysis</h4>
                        <p className="text-muted-foreground text-sm">
                          Mapped petition data by state and city to identify employment hotspots and 
                          regional concentration patterns.
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        <h4 className="font-semibold text-foreground mb-2">3. Sponsor Analysis</h4>
                        <p className="text-muted-foreground text-sm">
                          Identified top sponsoring companies, analyzed sponsorship patterns, and 
                          correlated with wage data to understand employer behavior.
                        </p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                        <h4 className="font-semibold text-foreground mb-2">4. Wage & Position Analysis</h4>
                        <p className="text-muted-foreground text-sm">
                          Calculated median wages, identified most common positions, and analyzed 
                          wage distribution across geographic regions and sponsoring companies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Access the Complete Dashboard</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download the full Power BI dashboard to explore interactive visualizations, 
              filter by location and company, and conduct your own analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary px-8" asChild>
                <a 
                  href="https://app.powerbi.com/MobileLandingPage?Action=OpenReport&reportObjectId=d012199a-1096-438a-96a4-1abd979a51ca&Context=QR&reportPage=b9d3bf7d11254a2922ad" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Dashboard (.pbix)
                </a>
              </Button>
              <Button variant="outline" className="border-border text-muted-foreground hover:bg-muted px-8" asChild>
                <a 
                  href="#insights" 
                  className="flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleTabClick('insights');
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  View Detailed Insights
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}