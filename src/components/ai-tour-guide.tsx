// components/ai-tour-guide.tsx
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TourStep {
  id: string;
  title: string;
  description: string;
  section: string;
  estimatedReadTime: number;
}

const tourSteps: TourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to My Finance Portfolio! 📊',
    description: "Hello! I'm Wasi Ahmed Khan, a dedicated Finance Professional specializing in financial analysis, risk management, and strategic planning. I'll guide you through my portfolio to showcase my expertise, projects, and achievements in the financial sector. Let's explore my journey together!",
    section: 'home',
    estimatedReadTime: 5000
  },
  {
    id: 'about',
    title: 'Professional Background 👨‍💼',
    description: "This section outlines my professional journey and philosophy. With dual Master's degrees in International Business and Finance from Hult International Business School, I combine analytical rigor with strategic thinking. My experience spans banking, financial analysis, and business strategy across multiple industries.",
    section: 'about',
    estimatedReadTime: 6000
  },
  {
    id: 'education',
    title: 'Academic Credentials 🎓',
    description: "Here you'll find my comprehensive educational background, including my Master's in Finance from Hult International Business School, Master's in International Business, and Bachelor's in Banking & Financial Services from Pune University. Each program has equipped me with specialized knowledge in finance, analytics, and strategic management.",
    section: 'education',
    estimatedReadTime: 7000
  },
  {
    id: 'experience',
    title: 'Professional Experience 💼',
    description: "This section details my professional journey including my role as Management Trainee at EuroKids Pre-School, where I improved financial record accuracy by 20%, and my internship at Bank of Baroda where I conducted Excel-based retail lending analysis and identified growth opportunities in underpenetrated segments.",
    section: 'experience',
    estimatedReadTime: 7000
  },
  {
    id: 'interests',
    title: 'Professional Interests & Hobbies 🎯',
    description: "Beyond finance, I maintain a diverse range of interests including Indian classical singing, which has shaped my discipline and approach to complex problems. I enjoy reading behavioral finance books like 'The Psychology of Money' and 'Blink', which influence how I think about risk and decision-making in financial contexts.",
    section: 'interests',
    estimatedReadTime: 6000
  },
  {
    id: 'data-analysis',
    title: 'Data Analytics Expertise 📈',
    description: "This section showcases my proficiency in data analysis tools and techniques. I've worked extensively with Excel, Power BI, and R programming for financial modeling, data visualization, and statistical analysis. My projects include H1B visa analysis, AirBnB risk detection, and comprehensive financial dashboards.",
    section: 'data-analysis',
    estimatedReadTime: 7000
  },
  {
    id: 'projects',
    title: 'Financial Projects & Case Studies 💡',
    description: "Here you'll find my comprehensive financial analysis projects including WeWork pre-IPO valuation, Accenture financial statement analysis, Turo fleet financial modeling, and AI-driven risk-based pricing analysis for U.S. Bank. Each project demonstrates my ability to apply financial theory to real-world business scenarios.",
    section: 'projects',
    estimatedReadTime: 8000
  },
  {
    id: 'contact',
    title: "Let's Connect for Opportunities! 🤝",
    description: "Interested in discussing financial analyst roles, risk management positions, or strategic collaborations? This section provides all my contact information and demonstrates my availability for full-time positions, internships, and strategic financial projects in capital markets, corporate finance, and data analytics.",
    section: 'contact',
    estimatedReadTime: 5000
  }
];

// Custom hook for speech synthesis
function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const speechSynth = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setIsSupported(false);
      return;
    }

    speechSynth.current = window.speechSynthesis;
    
    return () => {
      if (speechSynth.current?.speaking) {
        speechSynth.current.cancel();
      }
    };
  }, []);

  const speak = useCallback((text: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (!speechSynth.current || !isSupported) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }

      try {
        if (speechSynth.current.speaking) {
          speechSynth.current.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        const voices = speechSynth.current.getVoices();
        const preferredVoice = voices.find(voice => 
          voice.lang.startsWith('en')
        );
        
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
          setIsSpeaking(false);
          resolve();
        };
        utterance.onerror = () => {
          setIsSpeaking(false);
          reject(new Error('Speech error'));
        };

        speechSynth.current.speak(utterance);
      } catch (error) {
        reject(error);
      }
    });
  }, [isSupported]);

  const stop = useCallback(() => {
    if (speechSynth.current?.speaking) {
      speechSynth.current.cancel();
    }
    setIsSpeaking(false);
  }, []);

  return { speak, stop, isSpeaking, isSupported };
}

export function AITourGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [useVoice, setUseVoice] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [navigationError, setNavigationError] = useState<string | null>(null);
  
  const { speak, stop, isSpeaking: synthSpeaking, isSupported } = useSpeechSynthesis();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const navigationTimeoutRef = useRef<NodeJS.Timeout>();

  // Sync speaking state
  useEffect(() => {
    setIsSpeaking(synthSpeaking);
  }, [synthSpeaking]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stop();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    };
  }, [stop]);

  // Helper function to find section
  const findSection = useCallback((sectionId: string): HTMLElement | null => {
    // Try direct ID first
    const element = document.getElementById(sectionId);
    if (element) return element;

    // For home section, try to find main element or body
    if (sectionId === 'home') {
      const mainElement = document.querySelector('main') || 
                         document.querySelector('body > div') || 
                         document.body;
      return mainElement as HTMLElement;
    }

    // Try data attributes
    const dataSection = document.querySelector(`[data-section="${sectionId}"]`);
    if (dataSection) return dataSection as HTMLElement;

    // Try class names
    const classSection = document.querySelector(`.${sectionId}`);
    if (classSection) return classSection as HTMLElement;

    // Try navigation links
    const navLink = document.querySelector(`[href="#${sectionId}"]`);
    if (navLink) {
      const href = navLink.getAttribute('href');
      if (href) {
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) return targetElement;
      }
    }

    return null;
  }, []);

  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
  }, []);

  const smoothScrollTo = useCallback(async (sectionId: string): Promise<boolean> => {
    return new Promise((resolve) => {
      let element: HTMLElement | null = null;
      let scrollPosition = 0;

      // Special handling for home section
      if (sectionId === 'home') {
        scrollPosition = 0;
      } else {
        element = findSection(sectionId);
        
        if (!element) {
          setNavigationError(`Section "${sectionId}" not found. Scroll manually and try again.`);
          resolve(false);
          return;
        }
        
        const headerHeight = 80;
        const elementRect = element.getBoundingClientRect();
        scrollPosition = elementRect.top + window.pageYOffset - headerHeight;
      }

      setIsNavigating(true);
      setNavigationError(null);

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });

      // Shorter timeout for faster response
      navigationTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
        resolve(true);
      }, 800);

      // Check if we've reached the position
      const checkScroll = () => {
        const currentPosition = window.pageYOffset;
        if (Math.abs(currentPosition - scrollPosition) < 100) {
          if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
          setIsNavigating(false);
          resolve(true);
        }
      };

      setTimeout(checkScroll, 500);
    });
  }, [findSection]);

  const speakText = useCallback(async (text: string): Promise<void> => {
    if (!useVoice || !isSupported) {
      // Faster timing for better UX
      const wordCount = text.split(' ').length;
      const readTime = Math.min(wordCount * 40, 4000); // Faster reading
      return new Promise(resolve => setTimeout(resolve, readTime));
    }
    
    try {
      await speak(text);
    } catch (error) {
      console.error('Speech failed:', error);
      const wordCount = text.split(' ').length;
      const readTime = Math.min(wordCount * 40, 4000);
      return new Promise(resolve => setTimeout(resolve, readTime));
    }
  }, [speak, useVoice, isSupported]);

  const goToStep = useCallback(async (stepIndex: number) => {
    const step = tourSteps[stepIndex];
    if (!step) return;

    clearTimeouts();
    setCurrentStep(stepIndex);
    stop();

    // Navigate to section
    const navigationSuccess = await smoothScrollTo(step.section);
    
    if (!navigationSuccess) {
      console.warn(`Continuing tour despite navigation issue: ${step.section}`);
    }

    // Speak description
    await speakText(step.description);

    // Auto-advance with shorter buffer
    if (isPlaying && stepIndex < tourSteps.length - 1) {
      timeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          goToStep(stepIndex + 1);
        }
      }, 500);
    } else if (stepIndex === tourSteps.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsPlaying(false);
        stop();
      }, 1000);
    }
  }, [isPlaying, useVoice, speakText, smoothScrollTo, stop, clearTimeouts]);

  const startTour = useCallback(async () => {
    setIsOpen(true);
    setIsPlaying(true);
    setCurrentStep(0);
    setNavigationError(null);
    await goToStep(0);
  }, [goToStep]);

  const togglePlayPause = useCallback(async () => {
    if (isPlaying) {
      setIsPlaying(false);
      stop();
      clearTimeouts();
    } else {
      setIsPlaying(true);
      if (currentStep < tourSteps.length - 1) {
        await goToStep(currentStep);
      } else {
        await startTour();
      }
    }
  }, [isPlaying, currentStep, stop, clearTimeouts, goToStep, startTour]);

  const nextStep = useCallback(async () => {
    if (isNavigating || isSpeaking) return;
    
    stop();
    clearTimeouts();
    if (currentStep < tourSteps.length - 1) {
      await goToStep(currentStep + 1);
    }
  }, [currentStep, goToStep, isNavigating, isSpeaking, stop, clearTimeouts]);

  const prevStep = useCallback(async () => {
    if (isNavigating || isSpeaking) return;
    
    stop();
    clearTimeouts();
    if (currentStep > 0) {
      await goToStep(currentStep - 1);
    }
  }, [currentStep, goToStep, isNavigating, isSpeaking, stop, clearTimeouts]);

  const closeTour = useCallback(() => {
    setIsOpen(false);
    setIsPlaying(false);
    stop();
    clearTimeouts();
    setNavigationError(null);
  }, [stop, clearTimeouts]);

  const toggleVoice = useCallback(() => {
    const newUseVoice = !useVoice;
    setUseVoice(newUseVoice);
    
    if (newUseVoice && isPlaying && !isSpeaking) {
      const step = tourSteps[currentStep];
      speakText(step.description);
    } else {
      stop();
    }
  }, [useVoice, isPlaying, isSpeaking, currentStep, speakText, stop]);

  const jumpToStep = useCallback(async (stepIndex: number) => {
    if (isNavigating || isSpeaking) return;
    
    stop();
    clearTimeouts();
    await goToStep(stepIndex);
  }, [goToStep, isNavigating, isSpeaking, stop, clearTimeouts]);

  const currentStepData = tourSteps[currentStep];

  return (
    <>
      {/* Tour Trigger Button */}
      <motion.button
        onClick={startTour}
        className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center group border-2 border-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Start Portfolio Tour"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <BarChart3 className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      </motion.button>

      {/* Tour Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={closeTour}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-5 text-white flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Briefcase className="w-7 h-7" />
                      {isSpeaking && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full border border-white"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg font-sans">Portfolio Tour</h3>
                      <p className="text-white/80 text-xs font-sans">
                        Step {currentStep + 1}/{tourSteps.length} • Finance Guide
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeTour}
                    className="text-white hover:bg-white/20 rounded-xl h-8 w-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-1.5 flex-shrink-0">
                <motion.div
                  className="h-1.5 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-r-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 overflow-y-auto">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-bold mb-2 text-slate-900 font-sans">
                    {currentStepData.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-base font-sans">
                    {currentStepData.description}
                  </p>
                </motion.div>

                {/* Status Indicators */}
                <div className="mt-4 space-y-2">
                  {isNavigating && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg font-sans"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full"
                      />
                      Navigating...
                    </motion.div>
                  )}

                  {navigationError && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 font-sans"
                    >
                      ⚠️ Scroll to sections manually if needed
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="p-5 border-t border-slate-200 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevStep}
                      disabled={currentStep === 0 || isNavigating || isSpeaking}
                      className="rounded-lg font-sans border-slate-300 hover:border-slate-400 h-9 px-3"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Prev
                    </Button>

                    <Button
                      variant="default"
                      size="sm"
                      onClick={togglePlayPause}
                      disabled={isNavigating || isSpeaking}
                      className="rounded-lg font-sans bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 h-9 px-4"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 mr-1" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          {currentStep === 0 ? 'Start' : 'Resume'}
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextStep}
                      disabled={currentStep === tourSteps.length - 1 || isNavigating || isSpeaking}
                      className="rounded-lg font-sans border-slate-300 hover:border-slate-400 h-9 px-3"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>

                  <Button
                    variant={useVoice ? "default" : "outline"}
                    size="sm"
                    onClick={toggleVoice}
                    disabled={!isSupported || isNavigating || isSpeaking}
                    className="rounded-lg font-sans border-slate-300 h-9 w-9 p-0"
                    title={useVoice ? "Turn off voice" : "Turn on voice"}
                  >
                    {useVoice ? (
                      <Volume2 className="w-4 h-4" />
                    ) : (
                      <VolumeX className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Step Navigation */}
                <div className="flex gap-1 overflow-x-auto pb-1">
                  {tourSteps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => jumpToStep(index)}
                      disabled={isNavigating || isSpeaking}
                      className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-150 min-w-[32px] text-center font-sans ${
                        index === currentStep
                          ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                      } ${(isNavigating || isSpeaking) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      title={step.title}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}