'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Smartphone, 
  Server, 
  Brain, 
  BarChart3, 
  Sparkles, 
  Clock,
  TrendingUp,
  BookOpen
} from "lucide-react";

const learningItems = [
  { 
    icon: Smartphone, 
    title: 'React Native', 
    description: 'Building cross-platform mobile applications with modern React ecosystem',
    progress: 65,
    level: 'Intermediate',
    color: 'from-blue-500 to-cyan-500',
    projects: ['Todo App', 'Weather App', 'Fitness Tracker']
  },
  { 
    icon: Server, 
    title: 'Node.js', 
    description: 'Developing scalable server-side applications and RESTful APIs',
    progress: 50,
    level: 'Intermediate',
    color: 'from-green-500 to-emerald-500',
    projects: ['Chat Server', 'API Development', 'Authentication System']
  },
  { 
    icon: Brain, 
    title: 'Machine Learning', 
    description: 'Exploring AI fundamentals and predictive models with Python',
    progress: 30,
    level: 'Beginner',
    color: 'from-purple-500 to-pink-500',
    projects: ['Image Classification', 'Sentiment Analysis', 'Predictive Models']
  },
  { 
    icon: BarChart3, 
    title: 'Data Science', 
    description: 'Mastering data analysis, visualization, and statistical modeling',
    progress: 40,
    level: 'Beginner',
    color: 'from-orange-500 to-red-500',
    projects: ['Data Cleaning', 'Visualization', 'Statistical Analysis']
  },
];

export function CurrentlyLearning() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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
    <section id="learning" className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                             linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Active Learning Journey
          </div>
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Currently <span className="text-gradient">Mastering</span>
          </h2>
          <p className="text-xl leading-8 text-muted-foreground">
            Technologies and skills I'm actively expanding through projects, courses, and hands-on practice
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Learning Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {learningItems.map((item, index) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group cursor-pointer"
              >
                {/* Main Card */}
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                  
                  {/* Background Gradient - Fixed Position */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
                  
                  {/* Icon Container */}
                  <motion.div
                    animate={{ rotate: isHovered ? 5 : 0 }}
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center space-y-4 relative z-10">
                    <h3 className="text-xl font-bold font-headline text-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {item.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">Progress</span>
                        <span className="font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                        ></motion.div>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="flex justify-center">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        item.level === 'Intermediate' 
                          ? 'bg-blue-500/20 text-blue-600 group-hover:bg-blue-500/30 group-hover:text-blue-700' 
                          : 'bg-purple-500/20 text-purple-600 group-hover:bg-purple-500/30 group-hover:text-purple-700'
                      } transition-all duration-300`}>
                        <TrendingUp className="w-3 h-3" />
                        {item.level}
                      </span>
                    </div>

                    {/* Project Examples (Show on Hover) */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border/50 group-hover:border-foreground/30 transition-colors duration-300">
                        <p className="text-xs font-medium mb-2 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          Project Examples:
                        </p>
                        <div className="space-y-1">
                          {item.projects.map((project, projectIndex) => (
                            <div 
                              key={projectIndex} 
                              className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300"
                            >
                              <div className="w-1 h-1 bg-current rounded-full flex-shrink-0"></div>
                              <span>{project}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Effect Border - Fixed */}
                  <div className={`absolute inset-0 border-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-transparent group-hover:border-current ${item.color.replace('from-', 'border-').replace(' to-', '/30')} -z-10`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold font-headline">
                Always Learning, Always Growing
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              I dedicate time daily to expand my skills through online courses, 
              personal projects, and exploring new technologies in the ever-evolving tech landscape.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              View Learning Projects
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}