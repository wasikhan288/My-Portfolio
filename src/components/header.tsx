"use client";

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Code, Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mainNavLinks = [
  { href: '#home', label: 'Home', icon: '🏠' },
  { href: '#about', label: 'About', icon: '👨‍💻' },
  { href: '#experience', label: 'Experience', icon: '💼' },
  { href: '#skills', label: 'Skills', icon: '⚡' },
  { href: '#projects', label: 'Projects', icon: '🚀' },
  { href: '#freelance', label: 'Freelance', icon: '💎' },
];

const moreNavLinks = [
  { href: '#education', label: 'Education', icon: '🎓' },
  { href: '#achievements', label: 'Achievements', icon: '🏆' },
  { href: '#certificates', label: 'Certificates', icon: '📜' },
  { href: '#volunteering', label: 'Volunteering', icon: '🤝' },
  { href: '#video-gallery', label: 'Demos', icon: '🎬' },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  
  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = [...mainNavLinks, ...moreNavLinks].map(link => link.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allNavLinks = [...mainNavLinks, ...moreNavLinks];

  const isActive = (href: string) => activeSection === href.replace('#', '');

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-500 border-b",
      hasScrolled 
        ? "bg-background/80 backdrop-blur-xl shadow-lg border-border/20" 
        : "bg-transparent border-transparent"
    )}>
      <div className="container flex h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between">
        {/* Enhanced Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group relative" 
          aria-label="Back to homepage"
        >
          <div className="relative">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <Code className="h-5 w-5" />
            </div>
            <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400 fill-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-headline tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-500">
              Tauqeer Khan
            </span>
            <span className="text-xs text-muted-foreground font-medium tracking-wide">
              Full Stack Developer
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {mainNavLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group",
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              <span className="flex items-center gap-2">
                <span className="text-sm">{link.icon}</span>
                {link.label}
              </span>
              
              {/* Active Indicator */}
              {isActive(link.href) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              )}
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </Link>
          ))}
          
          {/* Enhanced Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className={cn(
                  "px-4 py-2 rounded-xl font-medium transition-all duration-300 group",
                  moreNavLinks.some(link => isActive(link.href))
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm">✨</span>
                  More 
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="bg-card/80 backdrop-blur-xl border-border/50 shadow-xl rounded-2xl p-2 min-w-[200px]"
            >
              {moreNavLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild className="p-0">
                  <Link 
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 w-full",
                      isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    <span className="text-base">{link.icon}</span>
                    {link.label}
                    {isActive(link.href) && (
                      <div className="ml-auto w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Enhanced Contact Button */}
          <Button 
            asChild 
            className="font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 ml-4 relative overflow-hidden group"
          >
            <Link href="#contact">
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-sm">📧</span>
                Contact Me
              </span>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="relative bg-background/50 backdrop-blur-sm border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-background/80 backdrop-blur-xl border-l-border/20 w-full sm:max-w-md"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/20">
                  <Link 
                    href="/" 
                    className="flex items-center gap-3 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      <Code className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-bold font-headline bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Tauqeer Khan
                      </span>
                      <span className="text-xs text-muted-foreground">Developer</span>
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-primary/10"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6 space-y-2">
                  {allNavLinks.map(link => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className={cn(
                        "flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group",
                        isActive(link.href)
                          ? "text-primary bg-primary/10 border border-primary/20"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg">{link.icon}</span>
                      {link.label}
                      {isActive(link.href) && (
                        <div className="ml-auto w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  ))}
                </nav>

                {/* Footer CTA */}
                <div className="p-6 border-t border-border/20">
                  <Button 
                    asChild 
                    className="w-full font-bold bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="#contact">
                      <span className="relative z-10 flex items-center gap-2">
                        <span className="text-sm">📧</span>
                        Get In Touch
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </Link>
                  </Button>
                  
                  {/* Quick Info */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-muted-foreground">
                      Available for freelance & full-time opportunities
                    </p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}