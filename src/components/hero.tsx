'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye, Send, Download, BookOpen, Code, School } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';

export function Hero() {
  const [text] = useTypewriter({
    words: ['Computer Science Student', 'Tech Enthusiast', 'Web Developer', 'Problem Solver'],
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Academic-inspired Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Academic Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px),
                             linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Geometric Accents */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 border border-primary/5 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-secondary/5 rounded-full"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Student Identity */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm text-primary font-medium">
                <School className="w-4 h-4" />
                <span>2nd Year B.Tech CSE Student</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block text-primary mt-2">Tauqeer Khan</span>
              </h1>
              
              <div className="flex items-center gap-3 text-lg lg:text-xl text-muted-foreground font-light">
                <span>Passionate</span>
                <span className="text-primary font-medium min-h-[1.5em]">
                  {text}
                  <Cursor cursorColor="hsl(var(--primary))" cursorStyle="|" />
                </span>
              </div>
            </div>

            {/* Student Introduction */}
            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
              Currently pursuing my Bachelor's in Computer Science while actively building 
              practical skills in web development. Passionate about learning new technologies, 
              solving complex problems, and creating innovative solutions through code.
            </p>

            {/* Academic Focus */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Currently Learning & Building With
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'JavaScript', 'Python', 'Firebase', 'Tailwind', 'Node.js'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-2 bg-primary/5 border border-primary/10 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Student CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="#projects">
                  <Code className="mr-3 h-5 w-5" /> 
                  View Projects
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="font-semibold border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Link href="#contact">
                  <Send className="mr-3 h-5 w-5" /> 
                  Get In Touch
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="font-semibold text-foreground hover:bg-primary/5 transition-all duration-300"
              >
                <Download className="mr-3 h-5 w-5" />
                Resume
              </Button>
            </div>
          </div>

          {/* Student Image Section */}
          <div className={`relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <Image
                    unoptimized
                    src="https://raw.githubusercontent.com/faskey37/My-Portfolio/main/2.jpeg"
                    alt="Tauqeer Khan - B.Tech Computer Science Student"
                    width={50}
                    height={50}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                
                {/* Academic Elements */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/10 rounded-2xl -z-10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-primary/40" />
                </div>
                
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary/10 rounded-full -z-10 flex items-center justify-center">
                  <Code className="w-6 h-6 text-secondary/40" />
                </div>
              </div>

              {/* Current Status */}
              <div className="absolute -bottom-4 right-8 bg-background border border-border shadow-lg rounded-full px-4 py-3">
                <div className="text-center">
                  <div className="text-sm font-bold text-primary">2nd Year</div>
                  <div className="text-xs text-muted-foreground">B.Tech CSE</div>
                </div>
              </div>

              {/* Learning Focus */}
              <div className="absolute -top-4 left-4 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-700">Active Learner</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Scroll Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground font-medium tracking-wider">EXPLORE MY JOURNEY</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}