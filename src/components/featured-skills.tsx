"use client";

import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    name: "JavaScript",
    description: "Building interactive web applications and dynamic user experiences.",
    icon: "fab fa-js",
    progress: 85,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-500/10",
  },
  {
    name: "React",
    description: "Creating modern, fast, and scalable user interfaces.",
    icon: "fab fa-react",
    progress: 80,
    color: "from-cyan-400 to-blue-600",
    bgColor: "bg-cyan-500/10",
  },
  {
    name: "Firebase",
    description: "Implementing real-time databases and authentication systems.",
    icon: "fas fa-database",
    progress: 75,
    color: "from-orange-400 to-yellow-600",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "Java",
    description: "Building robust and scalable backend applications.",
    icon: "fab fa-java",
    progress: 70,
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-500/10",
  },
];

export function FeaturedSkills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="featured-skills" className="py-24 sm:py-32 bg-gradient-to-br from-background to-muted/20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Technologies I work with daily to build modern, scalable applications with cutting-edge features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:bg-card/70"
              style={{
                transform: isInView ? 'none' : 'translateY(50px)',
                opacity: isInView ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.1}s`
              }}
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 ${skill.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
              
              {/* Icon Container */}
              <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl ${skill.bgColor} backdrop-blur-sm border border-border/20 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  <i className={skill.icon}></i>
                </div>
                
                {/* Icon Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold font-headline text-foreground group-hover:text-gradient transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-foreground/80">Proficiency</span>
                    <span className="font-bold text-foreground">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isInView ? `${skill.progress}%` : '0%',
                        transitionDelay: `${index * 0.1 + 0.3}s`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Border Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[1px] rounded-2xl bg-background" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg mb-6">
            Interested in working together?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            Let's Connect
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div>
      </div>
    </section>
  );
}