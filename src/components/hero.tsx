'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, FileText, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Header with minimal accent */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center gap-4 mb-2">
                <motion.div 
                  className="w-16 h-px bg-primary/20"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.span 
                  className="text-sm font-medium text-primary tracking-wider uppercase"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Finance Professional
                </motion.span>
              </div>
              
              <div className="space-y-3">
                <motion.h1 
                  className="text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
                  variants={itemVariants}
                >
                  <span className="block text-foreground">Wasi</span>
                  <span className="block text-foreground font-normal mt-1">Ahmed Khan</span>
                </motion.h1>
                
                <motion.div className="pt-2" variants={itemVariants}>
                  <p className="text-xl text-muted-foreground font-light">
                    Dual Degree Graduate • Hult International Business School
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Credentials in clean layout */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div 
                  className="px-5 py-3 bg-primary/5 border border-primary/10 rounded-lg hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base font-medium text-primary">Master of International Business</span>
                </motion.div>
                <motion.div 
                  className="px-5 py-3 bg-primary/5 border border-primary/10 rounded-lg hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-base font-medium text-primary">Master of Finance</span>
                </motion.div>
              </div>

              {/* Professional Statement */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <motion.p 
                    className="text-lg leading-relaxed text-foreground/90 font-light tracking-wide"
                    variants={itemVariants}
                  >
                    I am graduating from Hult International School with a dual degree in 
                    Master's of International Business and Master's of Finance.
                  </motion.p>
                  
                  <motion.p 
                    className="text-lg leading-relaxed text-foreground/90 font-light tracking-wide"
                    variants={itemVariants}
                  >
                    Welcome to my professional portfolio. This platform showcases my 
                    expertise, professional journey, and notable achievements in 
                    international business and finance.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Specializations - Clean grid */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div 
                className="w-12 h-px bg-primary/20"
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              
              <div className="grid grid-cols-2 gap-5">
                {[
                  { title: 'Financial Analysis', desc: 'Quantitative modeling & valuation' },
                  { title: 'Global Strategy', desc: 'International market expansion' },
                  { title: 'Risk Management', desc: 'Portfolio & operational risk' },
                  { title: 'Investment Strategy', desc: 'Asset allocation & M&A' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="p-5 border border-border/50 rounded-xl hover:border-primary/20 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -4,
                      boxShadow: "0 10px 30px -10px rgba(120,119,198,0.1)"
                    }}
                  >
                    <h4 className="font-medium text-foreground mb-2 text-base">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Section */}
            <motion.div className="pt-8 space-y-6" variants={itemVariants}>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex gap-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="px-8 font-medium bg-foreground text-background hover:bg-foreground/90 rounded-lg h-12"
                      asChild
                    >
                      <Link href="#contact" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>Contact</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 font-medium border-border text-foreground hover:bg-foreground/5 rounded-lg h-12"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      <span>CV</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                className="flex items-center gap-6 text-sm text-muted-foreground"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-primary/30"
                    animate={pulseAnimation}
                  />
                  <span>Available for opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-primary/30"
                    animate={pulseAnimation}
                    transition={{ delay: 0.5 }}
                  />
                  <span>Based internationally</span>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column - Profile */}
          <div className="lg:col-span-5 relative">
            
            {/* Profile Container */}
            <div className="space-y-12">
              
              {/* Image Section */}
              <motion.div 
                className="relative"
                variants={imageVariants}
                animate={isVisible ? "visible" : "hidden"}
              >
                <motion.div 
                  className="aspect-[3/4] relative overflow-hidden rounded-xl shadow-lg"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="https://raw.githubusercontent.com/faskey37/My-Portfolio/main/2.jpeg"
                    alt="Wasi Ahmed Khan - Finance Professional"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                  
                  {/* Minimal overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent"></div>
                </motion.div>

                {/* Credential - subtle positioning */}
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                  animate={floatAnimation}
                >
                  <div className="bg-background border border-border px-6 py-3 rounded-lg shadow-lg">
                    <div className="text-center">
                      <div className="text-base font-medium text-foreground">Hult Graduate</div>
                      <div className="text-xs text-muted-foreground mt-1">Dual Degree</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating decorative elements */}
                <motion.div 
                  className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary/20"
                  animate={floatAnimation}
                  transition={{ delay: 0.2 }}
                />
                <motion.div 
                  className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-secondary/20"
                  animate={floatAnimation}
                  transition={{ delay: 0.4 }}
                />
              </motion.div>

              {/* Highlights Section */}
              <motion.div className="space-y-8" variants={itemVariants}>
                
                {/* Summary */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Academic Profile
                  </h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Specialized education combining international business strategy 
                    with advanced financial expertise, preparing for global leadership roles.
                  </p>
                </motion.div>

                {/* Attributes Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Strategic Insight', value: 'Global' },
                    { label: 'Analytical Rigor', value: 'Quantitative' },
                    { label: 'Financial Expertise', value: 'Advanced' },
                    { label: 'Professional Scope', value: 'International' }
                  ].map((attr, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors hover:bg-primary/5"
                      variants={itemVariants}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="text-sm text-muted-foreground mb-2">{attr.label}</div>
                      <div className="text-base font-medium text-foreground">{attr.value}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-px h-12 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent"
              animate={{
                height: ["48px", "56px", "48px"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="text-xs text-muted-foreground mt-3 tracking-[0.2em]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              SCROLL
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}