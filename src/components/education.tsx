'use client';

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

const educationData = [
  {
    date: '2023 - 2027',
    title: "Bachelor of Technology in Computer Science",
    institution: 'Anjuman College of Engineering and Technology, Nagpur',
    description: 'Currently pursuing my B.Tech with focus on software engineering, web technologies, and system design. Actively participating in coding competitions and building projects to apply theoretical knowledge.',
    icon: GraduationCap,
    highlights: ['CGPA: 8.5/10', 'Web Development Focus', 'Active in Tech Clubs'],
    status: 'current'
  },
  {
    date: '2021 - 2023',
    title: 'Higher Secondary Education (Science Stream)',
    institution: 'St. Paul School, Nagpur',
    description: 'Completed 12th grade with Physics, Chemistry, and Mathematics, building strong analytical and problem-solving skills that formed the foundation for my engineering journey.',
    icon: BookOpen,
    highlights: ['Percentage: 85%', 'Science Stream', 'Mathematics Focus'],
    status: 'completed'
  },
  {
    date: '2010 - 2021',
    title: 'Secondary Education',
    institution: 'St. Vincent Pallotti School, Nagpur',
    description: 'Completed 10th grade with distinction, where I first discovered my passion for technology and logical thinking through mathematics and computer science fundamentals.',
    icon: Award,
    highlights: ['Percentage: 92%', 'Computer Science', 'Mathematics Topper'],
    status: 'completed'
  },
];

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="education" className="py-24 sm:py-32 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                             linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
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
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational path that shaped my passion for technology and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>

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
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-2xl px-6 py-4 shadow-lg"
                    >
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-lg font-semibold text-foreground">{item.date}</span>
                      {item.status === 'current' && (
                        <span className="bg-green-500/20 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </motion.div>
                  </div>

                  {/* Icon Connector */}
                  <div className="hidden lg:flex relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full lg:w-2/5">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        {/* Mobile Icon */}
                        <div className="lg:hidden mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold font-headline mb-2 text-foreground">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-primary font-semibold mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {item.institution}
                        </p>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, highlightIndex) => (
                            <motion.span
                              key={highlightIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: highlightIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-headline mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              Currently expanding my skills in modern web technologies, cloud computing, 
              and software architecture while balancing academic excellence with practical projects.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              View My Projects
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}