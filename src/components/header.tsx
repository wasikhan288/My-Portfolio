"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#interests', label: 'Interests' },
  { href: '#data-analysis', label: 'Data Analysis' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  
  // Throttle scroll event for better performance
  React.useEffect(() => {
    let ticking = false;
    
    const updateActiveSection = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Check if element is in viewport (with some threshold)
          // For home section, we check if we're near the top
          if (section === 'home') {
            if (window.scrollY < 200) {
              current = 'home';
              break;
            }
          } else {
            // For other sections, check if they're in the middle of viewport
            if (elementTop <= 150 && elementBottom >= 150) {
              current = section;
              break;
            }
          }
        }
      }
      
      setActiveSection(current);
      ticking = false;
    };

    const handleScroll = () => {
      // Update scrolled state
      setHasScrolled(window.scrollY > 50);
      
      // Throttle the active section update
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    // Update active section immediately
    setActiveSection(sectionId);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    
    scrollToSection(sectionId);
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const isActive = (href: string) => activeSection === href.replace('#', '');

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 border-b",
      hasScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200" 
        : "bg-transparent border-transparent"
    )}>
      <div className="container flex h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between">
        {/* Logo - Home Button */}
        <Button
          variant="ghost"
          className="flex items-center gap-3 group relative p-0 h-auto hover:bg-transparent"
          onClick={(e) => handleNavClick('#home', e)}
          aria-label="Scroll to Home"
        >
          <div className="relative">
            <div className="p-2 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300">
              WASI AHMED KHAN
            </span>
            <span className="text-xs text-slate-600 font-medium tracking-wide font-sans uppercase mt-0.5">
              Finance Professional
            </span>
          </div>
        </Button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 text-sm font-medium font-sans">
          {navLinks.map(link => (
            <Button
              key={link.href}
              variant="ghost"
              onClick={(e) => handleNavClick(link.href, e)}
              className={cn(
                "relative px-4 py-2.5 rounded-lg font-medium transition-all duration-200 group",
                isActive(link.href)
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              <span className="flex items-center gap-2">
                {link.label}
              </span>
              
              {/* Active Indicator */}
              {isActive(link.href) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full"></div>
              )}
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-50/0 to-emerald-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="relative bg-white/80 backdrop-blur-sm border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
              >
                <Menu className="h-5 w-5 text-slate-700" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-white/95 backdrop-blur-md border-l-slate-200 w-full sm:max-w-md p-0"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-200">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-3 group p-0 h-auto hover:bg-transparent"
                    onClick={(e) => {
                      handleNavClick('#home', e);
                      setIsOpen(false);
                    }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 text-white">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                        WASI AHMED KHAN
                      </span>
                      <span className="text-xs text-slate-600 font-sans uppercase">
                        Finance Professional
                      </span>
                    </div>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="hover:bg-slate-100 text-slate-700"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6 space-y-1">
                  {navLinks.map(link => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start flex items-center gap-4 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 group font-sans",
                        isActive(link.href)
                          ? "text-emerald-700 bg-emerald-50 border border-emerald-100"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                      onClick={(e) => {
                        handleNavClick(link.href, e);
                        setIsOpen(false);
                      }}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <div className="ml-auto w-2 h-2 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full animate-pulse"></div>
                      )}
                    </Button>
                  ))}
                </nav>
                
                {/* Mobile Footer */}
                <div className="p-6 border-t border-slate-200">
                  <div className="text-center">
                    <p className="text-sm text-slate-500 font-sans mb-2">
                      Open to financial analyst roles & strategic opportunities
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-400 font-sans">Available for opportunities</span>
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    </div>
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