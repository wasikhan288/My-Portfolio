'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Palette, BookOpen, Coffee, GraduationCap, Lightbulb } from "lucide-react";

export function About() {
  const stats = [
    { number: "2nd", label: "Year B.Tech" },
    { number: "15+", label: "Projects Built" },
    { number: "6+", label: "Tech Skills" },
    { number: "100%", label: "Curious" }
  ];

  const interests = [
    { icon: Code2, label: "Web Development" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: BookOpen, label: "Continuous Learning" },
    { icon: Lightbulb, label: "Problem Solving" }
  ];

  const currentLearning = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Tailwind CSS",
    "Python"
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(var(--primary)/0.03),transparent)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
        
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{ 
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
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
          <h2 className="text-4xl sm:text-5xl font-bold font-headline mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
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
            {/* Gradient Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-card">
              <Image 
                unoptimized 
                src="https://raw.githubusercontent.com/faskey37/My-Portfolio/main/1.jpg"
                alt="Tauqeer Khan - 2nd Year B.Tech Computer Science Student"
                width={500}
                height={500}
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Student Badges */}
            <div className="absolute -bottom-4 -right-4 bg-background border border-primary/20 rounded-full p-3 shadow-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -top-4 -left-4 bg-background border border-secondary/20 rounded-full p-3 shadow-lg">
              <BookOpen className="w-6 h-6 text-secondary" />
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
                  2nd Year B.Tech CSE
                </div>
                <div className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  Aspiring Developer
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold font-headline leading-tight">
                Crafting Digital Experiences Through{" "}
                <span className="text-gradient">Code & Creativity</span>
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My journey into technology began in 8th grade, sparked by curiosity about how 
                  websites and applications work. Now as a Computer Science student, I'm turning 
                  that curiosity into practical skills through hands-on projects and continuous learning.
                </p>
                
                <p>
                  I'm passionate about building <span className="text-primary font-semibold">modern web applications</span> 
                  {" "}that combine clean design with robust functionality. From classroom concepts to 
                  personal projects, I enjoy the process of transforming ideas into working digital solutions.
                </p>

                <p>
                  When I'm not studying or coding, you'll find me exploring new technologies, 
                  contributing to open-source, or collaborating with fellow students on innovative 
                  projects that push my boundaries.
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
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl font-bold text-gradient mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Currently Mastering
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentLearning.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-2 bg-muted/50 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-primary/5 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {interest.label}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6 py-2">
            "The beautiful thing about learning is that no one can take it away from you."
          </blockquote>
          <cite className="text-sm text-muted-foreground/70 mt-2 block">
            - B.B. King
          </cite>
        </motion.div>
      </div>
    </section>
  );
}