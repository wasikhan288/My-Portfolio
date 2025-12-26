'use client';

import { useState, useMemo } from 'react';
import { ProjectCard, type Project } from './project-card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const projects: Project[] = [
  {
    title: 'EV Services Web App',
    description: 'Prototype of a service platform for EV vehicle users. Built using Firebase (Firestore, Auth), featuring booking modules, real-time data handling, and user authentication.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'electric vehicle charging',
    tags: ['Firebase', 'JavaScript', 'Tailwind CSS', 'Firestore', 'Hackathon'],
    liveUrl: '#',
    codeUrl: '#',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Quran Learning Website',
    description: 'A comprehensive platform for learning Quran with inspiring stories, downloadable PDF resources, and detailed information about surahs and chapters.',
    image: 'https://images.unsplash.com/photo-1544919988-86cdb814c7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'Quran learning platform',
    tags: ['Wix', 'Content Management', 'Education', 'PDF Resources'],
    liveUrl: 'https://khantauqeer272.wixsite.com/learn-quran',
    category: 'frontend',
    featured: true
  },
  {
    title: 'QuickFix Pro - Service Booking',
    description: 'A comprehensive service booking platform for household services with both web and Android app versions. Features real-time booking and service tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'service booking app interface',
    tags: ['Firebase', 'JavaScript', 'Android', 'WebView', 'Real-time'],
    liveUrl: 'https://faskey37.github.io/Quick-fix-app/',
    codeUrl: 'https://github.com/faskey37/Quick-fix-app',
    category: 'fullstack',
    featured: true
  },
  {
    title: 'Raha Health App',
    description: 'Healthcare platform integrating medical services, health tracking, test bookings, and personalized health insights in one unified application.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'healthcare technology dashboard',
    tags: ['Firebase', 'JavaScript', 'Bootstrap', 'API Integration', 'Healthcare'],
    codeUrl: 'https://github.com/faskey37/raha/tree/staging',
    category: 'fullstack'
  },
  {
    title: 'Portfolio & UI Projects',
    description: 'Collection of responsive and interactive UIs showcasing modern design principles, cross-device compatibility, and user-centric layouts.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'portfolio website design',
    tags: ['HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'Responsive'],
    liveUrl: 'https://faskey37.github.io/My-Portfolio/',
    codeUrl: 'https://github.com/faskey37/My-Portfolio',
    category: 'frontend'
  },
  {
    title: 'Flappy Bird Game',
    description: 'A modern recreation of the classic Flappy Bird game built with vanilla JavaScript, featuring smooth animations and responsive controls.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'mobile game interface',
    tags: ['JavaScript', 'Game Development', 'Canvas', 'Animation'],
    liveUrl: 'https://faskey37.github.io/Bat-game/',
    codeUrl: 'https://github.com/faskey37/Bat-game',
    category: 'frontend'
  },
  {
    title: 'E-commerce Store UI',
    description: 'Sleek and modern e-commerce interface focusing on optimal user experience, responsive design, and intuitive shopping workflows.',
    image: 'https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'e-commerce product page',
    tags: ['React', 'Tailwind CSS', 'UI/UX', 'E-commerce'],
    codeUrl: 'https://github.com/faskey37/e-commerce',
    category: 'frontend'
  },
  {
    title: 'Finview - Finance Dashboard',
    description: 'Personal finance management dashboard with expense tracking, budget management, and AI-powered savings insights and recommendations.',
    image: 'https://images.unsplash.com/photo-1620266757065-5814239881fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'financial analytics dashboard',
    tags: ['Node.js', 'React', 'Firebase', 'API', 'Finance'],
    codeUrl: 'https://github.com/faskey37/finview-app',
    category: 'fullstack'
  },
  {
    title: 'React Survey App',
    description: 'Interactive survey application built with React, featuring dynamic form handling, responsive design, and real-time response validation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    imageHint: 'survey form interface',
    tags: ['React', 'Tailwind', 'JavaScript', 'Forms'],
    codeUrl: 'https://github.com/faskey37/survey-app',
    category: 'frontend'
  },
];

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
  { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
];

export function Projects() {
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = useMemo(() => {
    setIsLoading(true);
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(p => p.category === filter);
    
    // Simulate loading for better UX
    setTimeout(() => setIsLoading(false), 300);
    return filtered;
  }, [filter]);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-gradient-to-br from-background via-background to-muted/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">My Work</span>
          </div>
          
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            A curated collection of my work showcasing innovative solutions, modern technologies, and user-centric design principles.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mt-12 mb-16 flex-wrap">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              onClick={() => setFilter(category.id)}
              className={cn(
                "relative capitalize transition-all duration-300 px-6 py-2.5 rounded-full font-medium",
                "hover:scale-105 hover:shadow-lg",
                filter === category.id 
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25' 
                  : 'bg-background/60 backdrop-blur-sm border-border/50 hover:bg-background/80'
              )}
            >
              {category.label}
              <span className={cn(
                "ml-2 px-1.5 py-0.5 text-xs rounded-full transition-colors",
                filter === category.id 
                  ? "bg-primary-foreground/20 text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              )}>
                {category.count}
              </span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
              <div className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                Loading projects...
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                <div className="text-4xl">🔍</div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                No projects match the selected filter. Try selecting a different category or check back later for new additions.
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl px-8 py-6">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1">Want to see more?</h3>
              <p className="text-muted-foreground text-sm">Check out my GitHub for additional projects and contributions</p>
            </div>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300">
              <a href="https://github.com/faskey37" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}