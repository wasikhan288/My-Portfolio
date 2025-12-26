'use client';

import Link from "next/link";
import { Code, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 group relative" 
      aria-label="Back to homepage"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Icon Container */}
      <div className="relative">
        <div className={`
          relative p-2 rounded-xl bg-gradient-to-br from-primary to-secondary 
          text-primary-foreground shadow-lg transition-all duration-500 ease-out
          group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl
          ${isHovered ? 'shadow-primary/25' : ''}
        `}>
          <Code className="h-5 w-5" />
          
          {/* Icon Glow Effect */}
          <div className={`
            absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary 
            opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10
            ${isHovered ? 'opacity-100' : ''}
          `}></div>
        </div>

        {/* Floating Particles */}
        <div className={`
          absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full 
          opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100
          ${isHovered ? 'opacity-100 animate-ping' : ''}
        `}></div>
        <div className={`
          absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full 
          opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200
          ${isHovered ? 'opacity-100 animate-ping' : ''}
        `}></div>
      </div>

      {/* Text Container */}
      <div className="flex flex-col">
        <span className="text-xl font-bold font-headline tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-500">
          Tauqeer Khan
        </span>
        
        {/* Subtle Tagline */}
        <span className={`
          text-xs text-muted-foreground font-medium tracking-wider transition-all duration-500
          opacity-0 group-hover:opacity-100 transform -translate-y-1 group-hover:translate-y-0
          ${isHovered ? 'opacity-100 translate-y-0' : ''}
        `}>
          Full Stack Developer
        </span>
      </div>

      {/* Sparkle Effects */}
      <div className={`
        absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 delay-300
        ${isHovered ? 'opacity-100' : ''}
      `}>
        <Sparkles className="h-3 w-3 text-yellow-400 fill-yellow-400 animate-pulse" />
      </div>

      {/* Border Glow Effect */}
      <div className={`
        absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10
        ${isHovered ? 'opacity-100' : ''}
      `}></div>
    </Link>
  );
}