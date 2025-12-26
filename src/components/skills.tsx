'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Settings, Zap, Sparkles, Target } from 'lucide-react';
import Link from 'next/link';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "HTML5 & CSS3", level: 95, description: "Semantic markup and modern CSS features" },
      { name: "JavaScript", level: 90, description: "ES6+, DOM manipulation, async programming" },
      { name: "React", level: 85, description: "Components, hooks, state management" },
      { name: "Bootstrap", level: 88, description: "Rapid prototyping and responsive grids" },
      { name: "Tailwind", level: 80, description: "Utility-first CSS framework" },
      { name: "Responsive Design", level: 92, description: "Mobile-first, cross-device compatibility" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Java", level: 70, description: "OOP concepts and basic applications" },
      { name: "Python", level: 65, description: "Scripting and backend development" },
      { name: "Firebase", level: 85, description: "Authentication, Firestore, real-time DB" },
      { name: "MySQL", level: 78, description: "Database design and complex queries" },
      { name: "PostgreSQL", level: 75, description: "Advanced queries and performance" },
      { name: "Basic APIs", level: 85, description: "RESTful API design and development" },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Settings className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Version control and collaboration" },
      { name: "Docker", level: 70, description: "Containerization and deployment" },
      { name: "Wix", level: 65, description: "Website building and customization" },
      { name: "SQL Server", level: 75, description: "Database management and queries" },
      { name: "UI/UX Design", level: 80, description: "User-centered design principles" },
    ],
  }
];

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<{category: string, skill: string, description: string} | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Technical Skills
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I use to build digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group"
            >
              {/* Main Card */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="skill-item"
                      onMouseEnter={() => setActiveSkill({
                        category: category.title,
                        skill: skill.name,
                        description: skill.description
                      })}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground text-sm">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={skillBarVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Description - Fixed Position */}
        <div className="mt-8 min-h-[80px]">
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-card border border-border rounded-lg p-4 max-w-md mx-auto"
            >
              <div className="flex items-start gap-3">
                <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {activeSkill.skill}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    {activeSkill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-card/50 border border-border rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
            <p className="text-muted-foreground mb-4">
              Always expanding my skill set through projects, courses, and hands-on experience
            </p>
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-bold hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                View Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skill-item {
          transition: all 0.2s ease;
        }
        
        .skill-item:hover {
          transform: translateX(4px);
        }
        
        .skill-item:hover .text-foreground {
          color: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
}