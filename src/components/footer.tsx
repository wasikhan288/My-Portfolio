'use client';

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Instagram, Phone, MapPin, ArrowUp, Heart, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const resourceLinks = [
    { href: '#education', label: 'Education' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#volunteering', label: 'Volunteering' },
    { href: '#freelance', label: 'Freelance' },
    { href: '#video-gallery', label: 'Demos' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/faskey37",
      label: "GitHub",
      color: "hover:bg-gray-900 hover:text-white",
      username: "@faskey37"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tauqeer-khan-64249a32b/",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
      username: "Tauqeer Khan"
    },
    {
      icon: Mail,
      href: "mailto:tauqeer.khan.webdev@gmail.com",
      label: "Email",
      color: "hover:bg-red-500 hover:text-white",
      username: "tauqeer.khan.webdev@gmail.com"
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:bg-sky-500 hover:text-white",
      username: "@tauqeerkhan"
    },
  ];

  return (
    <footer className="bg-foreground text-background pt-32 pb-12 relative overflow-hidden">
      {/* Enhanced Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-32"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-background"
          ></path>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-lg">
                <Code className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline bg-gradient-to-r from-background to-background/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                  Tauqeer Khan
                </h3>
                <p className="text-sm text-primary font-medium">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting digital experiences that are fast, accessible, and visually stunning. 
              Let's build something extraordinary together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-foreground/50 border border-border/30 text-background/70 hover:scale-110 transition-all duration-300 ${social.color} group relative overflow-hidden`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  {/* Social Icon Glow */}
                  <div className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-background flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-background flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-background flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:tauqeer.khan.webdev@gmail.com" 
                className="flex items-center gap-3 p-3 rounded-xl bg-foreground/50 border border-border/30 hover:bg-foreground/70 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-background font-medium text-sm">Email</p>
                  <p className="text-muted-foreground text-xs">tauqeer.khan.webdev@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+918484970238" 
                className="flex items-center gap-3 p-3 rounded-xl bg-foreground/50 border border-border/30 hover:bg-foreground/70 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-background font-medium text-sm">Phone</p>
                  <p className="text-muted-foreground text-xs">+91 8484970238</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-foreground/50 border border-border/30">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-background font-medium text-sm">Location</p>
                  <p className="text-muted-foreground text-xs">Nagpur, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>&copy; {currentYear} Tauqeer Khan. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> and lots of
              <Code className="w-4 h-4 text-primary ml-1" />
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary 
          text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300
          ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}