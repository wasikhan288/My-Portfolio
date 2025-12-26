'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Globe, Award, BookOpen, Lightbulb, Users, BarChart3 } from "lucide-react";

export function About() {
  const stats = [
    { number: "25%", label: "Process Optimization" },
    { number: "20%", label: "Accuracy Improvement" },
    { number: "3+", label: "Years Training" },
    { number: "Dual", label: "Degree Program" }
  ];

  const skills = [
    { icon: BarChart3, label: "Financial Modeling" },
    { icon: TrendingUp, label: "Risk Management" },
    { icon: Globe, label: "Global Strategy" },
    { icon: Briefcase, label: "Corporate Finance" },
    { icon: Lightbulb, label: "Analytical Problem-Solving" },
    { icon: Users, label: "Business Operations" }
  ];

  const interests = [
    "Indian Classical Singing",
    "Behavioral Finance",
    "Market Research",
    "Financial Analysis",
    "Strategic Planning",
    "Investment Strategy"
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Financial Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px),
                           linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        
        {/* Decorative Financial Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full opacity-5"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 border border-secondary/10 rounded-lg rotate-45 opacity-5"></div>
        
        {/* Accent Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-sm font-medium text-primary">PROFESSIONAL PROFILE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            About <span className="font-normal text-primary">Wasi Ahmed Khan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finance & Business Professional | Dual Degree Candidate at Hult International Business School
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Professional Frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-20"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white">
              <Image 
                src="https://raw.githubusercontent.com/faskey37/My-Portfolio/main/2.jpeg"
                alt="Wasi Ahmed Khan - Finance & Business Graduate"
                width={500}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent"></div>
            </div>

            {/* Degree Badges */}
            <div className="absolute -bottom-4 -right-4 bg-background border border-primary/20 rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <Globe className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-xs font-medium text-primary">Hult Graduate</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-background border border-secondary/20 rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <TrendingUp className="w-5 h-5 text-secondary mx-auto mb-1" />
                <div className="text-xs font-medium text-secondary">Dual Degree</div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Banking & Financial Services Graduate
                </div>
                <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  Master's Candidate
                </div>
              </div>

              <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                <p>
                  <span className="font-semibold text-primary">Hello! I am Wasi Ahmed Khan.</span> I have a strong foundation 
                  in finance, risk management and analytics from my bachelor's degree in Banking & Financial Services.
                </p>
                
                <p>
                  As an intern at <span className="font-medium">Bank of Baroda</span>, I optimized the credit appraisal process by 
                  <span className="font-semibold text-primary"> 25%</span> and researched the Retail Credit Function. As a Management Trainee at 
                  <span className="font-medium"> EuroKids</span>, I enhanced financial operations, improving record accuracy by 
                  <span className="font-semibold text-primary"> 20%</span>.
                </p>

                <p>
                  Now completing my <span className="font-semibold">Master's in International Business at Hult</span> and preparing 
                  for a <span className="font-semibold">Master's in Finance</span>, I'm eager to apply my financial modeling and 
                  problem-solving skills in capital markets, risk management, and Corporate Finance.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center p-4 border border-border/50 rounded-xl hover:border-primary/30 transition-colors">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl font-bold text-primary mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Core Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Core Competencies
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-primary" />
                      {skill.label}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Interests & Specializations
              </h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Personal Branding Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Personal Branding Statement</h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I am an aspiring financial analyst driven by a strong passion for understanding markets 
                and creating sustainable financial strategies. With a broad foundation in finance and 
                business, I aim to deliver ethical, data-driven insights that support sound decision-making.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Guided by honesty, integrity, and grit, I bring attention to detail, empathy, and creativity 
                to every analysis. While I continue to strengthen my time management and communication 
                skills, I embrace feedback as a tool for growth. My goal is to contribute meaningfully in 
                Equity Research, Corporate Finance, Risk Management, or Financial Planning & Analysis, 
                helping clients achieve long-term financial success.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}