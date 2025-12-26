'use client';

import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin, ArrowUp, Heart, Briefcase } from 'lucide-react';
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

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#interests', label: 'Interests' },
    { href: '#data-analysis', label: 'Data Analysis' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/wasi-ahmed-khan/",
      label: "LinkedIn",
      color: "hover:bg-primary hover:text-primary-foreground",
      username: "Wasi Ahmed Khan"
    },
  ];

  return (
    <footer className="bg-[#0F0E0E] text-primary-foreground pt-32 pb-12 relative overflow-hidden">
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
      <div className="absolute inset-0 bg-grid-primary-foreground/[0.03] bg-[size:60px_60px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-lg bg-primary/30 text-primary-foreground shadow-md">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-foreground">
                  WASI AHMED KHAN
                </h3>
                <p className="text-sm text-primary font-medium uppercase mt-1">Finance Professional</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Aspiring financial analyst with strong foundation in finance, risk management, and analytics. 
              Passionate about creating sustainable financial strategies and delivering data-driven insights.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white/10 border border-white/20 text-primary-foreground hover:scale-110 transition-all duration-300 ${social.color} group relative overflow-hidden`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  {/* Social Icon Glow */}
                  <div className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-primary-foreground flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group"
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
            <h4 className="text-lg font-bold text-primary-foreground flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Contact Information
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:wasi28khan@gmail.com" 
                className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/30 text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-primary-foreground font-medium text-sm">Email</p>
                  <p className="text-primary-foreground/80 text-xs">wasi28khan@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+918600536726" 
                className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-primary/30 text-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-primary-foreground font-medium text-sm">Phone</p>
                  <p className="text-primary-foreground/80 text-xs">+91 86005 36726</p>
                </div>
              </a>
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/20">
                <div className="p-2 rounded-lg bg-primary/30 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-primary-foreground font-medium text-sm">Location</p>
                  <p className="text-primary-foreground/80 text-xs">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
            <span>&copy; {currentYear} Wasi Ahmed Khan. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" />
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-primary-foreground text-sm">
            <p className="font-medium">
              Open to full-time positions, internships, and strategic financial projects
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 w-12 h-12 rounded-full btn-primary
          shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300
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