// components/ai-tour-guide.tsx
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  X, 
  Play, 
  Pause,
  SkipForward,
  Bot,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TourStep {
  id: string;
  title: string;
  description: string;
  section: string;
  estimatedReadTime: number; // in milliseconds
}

const tourSteps: TourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to My Portfolio! 🚀',
    description: "Hello! I'm Tauqeer Khan, a passionate Full Stack Developer. I'll guide you through my portfolio to show you my skills, projects, and experience. Let's begin our journey!",
    section: 'home',
    estimatedReadTime: 8000
  },
  {
    id: 'about',
    title: 'Get to Know Me 👨‍💻',
    description: "This is where you can learn about my background, my passion for technology, and what drives me as a developer. I believe in continuous learning and creating meaningful digital experiences that solve real-world problems.",
    section: 'about',
    estimatedReadTime: 10000
  },
  {
    id: 'skills',
    title: 'My Technical Toolkit 🛠️',
    description: "Here you'll find my technical expertise across frontend development with React and JavaScript, backend skills with Java and Firebase, and various tools I use daily. I'm always expanding my skill set through hands-on projects and continuous learning.",
    section: 'skills',
    estimatedReadTime: 12000
  },
  {
    id: 'projects',
    title: 'Featured Projects 💼',
    description: "This section showcases my favorite projects including web applications, mobile apps, and innovative solutions. Each project represents real-world problems I've solved using modern technologies. You'll see everything from EV service platforms to healthcare applications.",
    section: 'projects',
    estimatedReadTime: 12000
  },
  {
    id: 'experience',
    title: 'Professional Journey 📈',
    description: "Learn about my work experience, freelance projects, and professional growth in the tech industry. I've worked on various projects that helped me grow as a developer and understand real-world business requirements.",
    section: 'experience',
    estimatedReadTime: 10000
  },
  {
    id: 'learning',
    title: 'Continuous Learning 📚',
    description: "I'm always learning new technologies! Currently exploring React Native for mobile development, Node.js for backend services, Machine Learning for intelligent applications, and Data Science for data-driven insights.",
    section: 'learning',
    estimatedReadTime: 10000
  },
  {
    id: 'achievements',
    title: 'Achievements & Recognition 🏆',
    description: "Here you can see my accomplishments, certifications, and recognitions including my ACM membership and participation in tech events and hackathons. These represent my commitment to professional growth.",
    section: 'achievements',
    estimatedReadTime: 8000
  },
  {
    id: 'volunteering',
    title: 'Community Involvement 🤝',
    description: "I believe in giving back to the community. This section shows my volunteering work and social initiatives where I've contributed to meaningful causes like traffic awareness campaigns and community welfare programs.",
    section: 'volunteering',
    estimatedReadTime: 8000
  },
  {
    id: 'certificates',
    title: 'Certifications & Credentials 📜',
    description: "These are my official certifications and credentials that validate my skills and knowledge in various technologies and methodologies. They demonstrate my dedication to professional development.",
    section: 'certificates',
    estimatedReadTime: 8000
  },
  {
    id: 'video-gallery',
    title: 'Project Demos 🎬',
    description: "Watch my projects in action! This section contains video demonstrations showing the functionality and features of my applications. You can see how my projects work in real-time scenarios.",
    section: 'video-gallery',
    estimatedReadTime: 8000
  },
  {
    id: 'contact',
    title: "Let's Work Together! 📞",
    description: "Interested in collaborating? Here's how you can reach me. I'm always open to discussing new opportunities, projects, or just having a chat about technology. Feel free to get in touch anytime!",
    section: 'contact',
    estimatedReadTime: 8000
  }
];

// Custom hook for speech synthesis with better configuration
function useSpeechSynthesis() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);
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
        // Cancel any ongoing speech
        if (speechSynth.current.speaking) {
          speechSynth.current.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        
        // Configure for better pronunciation and clarity
        utterance.rate = 0.75; // Slower for better understanding
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        // Get available voices and select the best one
        const voices = speechSynth.current.getVoices();
        const preferredVoices = voices.filter(voice => 
          voice.lang.startsWith('en') && 
          !voice.name.includes('Google') && // Avoid robotic Google voices
          !voice.localService === false // Prefer local voices
        );
        
        if (preferredVoices.length > 0) {
          // Prefer female voices as they're often clearer
          const femaleVoice = preferredVoices.find(voice => 
            voice.name.toLowerCase().includes('female') ||
            voice.name.toLowerCase().includes('samantha') ||
            voice.name.toLowerCase().includes('karen')
          );
          utterance.voice = femaleVoice || preferredVoices[0];
        }

        utterance.onstart = () => {
          setIsSpeaking(true);
          setCurrentUtterance(utterance);
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          setCurrentUtterance(null);
          resolve();
        };

        utterance.onerror = (event) => {
          setIsSpeaking(false);
          setCurrentUtterance(null);
          reject(new Error(`Speech error: ${event.error}`));
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
    setCurrentUtterance(null);
  }, []);

  return { speak, stop, isSpeaking, isSupported, currentUtterance };
}

// Function to find section with fallbacks
const findSection = (sectionId: string): HTMLElement | null => {
  const directElement = document.getElementById(sectionId);
  if (directElement) return directElement;

  const dataSection = document.querySelector(`[data-section="${sectionId}"]`) as HTMLElement;
  if (dataSection) return dataSection;

  const sectionClass = document.querySelector(`.${sectionId}-section`) as HTMLElement;
  if (sectionClass) return sectionClass;

  const navLink = document.querySelector(`a[href="#${sectionId}"]`) as HTMLAnchorElement;
  if (navLink) {
    const targetId = navLink.getAttribute('href')?.replace('#', '');
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) return targetElement;
    }
  }

  console.warn(`Section "${sectionId}" not found`);
  return null;
};

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

  const smoothScrollTo = useCallback(async (elementId: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const element = findSection(elementId);
      
      if (!element) {
        setNavigationError(`Section "${elementId}" not found. Please ensure all sections are properly loaded.`);
        resolve(false);
        return;
      }

      setIsNavigating(true);
      setNavigationError(null);

      const headerHeight = 100;
      const elementRect = element.getBoundingClientRect();
      const offsetPosition = elementRect.top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      navigationTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
        resolve(true);
      }, 1500);

      const checkScroll = () => {
        const currentPosition = window.pageYOffset;
        if (Math.abs(currentPosition - offsetPosition) < 50) {
          if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
          setIsNavigating(false);
          resolve(true);
        }
      };

      setTimeout(checkScroll, 800);
    });
  }, []);

  const speakText = useCallback(async (text: string): Promise<void> => {
    if (!useVoice || !isSupported) {
      // If voice is disabled, wait for estimated read time
      const wordCount = text.split(' ').length;
      const readTime = Math.max(wordCount * 60, 3000); // 60ms per word, minimum 3 seconds
      return new Promise(resolve => setTimeout(resolve, readTime));
    }
    
    try {
      await speak(text);
    } catch (error) {
      console.error('Speech failed:', error);
      // Fallback to timed reading if speech fails
      const wordCount = text.split(' ').length;
      const readTime = Math.max(wordCount * 60, 3000);
      return new Promise(resolve => setTimeout(resolve, readTime));
    }
  }, [speak, useVoice, isSupported]);

  const goToStep = useCallback(async (stepIndex: number) => {
    const step = tourSteps[stepIndex];
    if (!step) return;

    // Clear any existing timeouts
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);

    setCurrentStep(stepIndex);
    stop(); // Stop any ongoing speech

    // Navigate to section
    const navigationSuccess = await smoothScrollTo(step.section);
    
    if (!navigationSuccess) {
      console.warn(`Failed to navigate to ${step.section}`);
    }

    // Wait for navigation to complete and then speak
    await speakText(step.description);

    // Auto-advance to next step only after speech completes
    if (isPlaying && stepIndex < tourSteps.length - 1) {
      // Add a small buffer after speech completes
      timeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          goToStep(stepIndex + 1);
        }
      }, 1000); // 1 second buffer after speech
    } else if (stepIndex === tourSteps.length - 1) {
      // End of tour
      timeoutRef.current = setTimeout(() => {
        setIsPlaying(false);
        stop();
      }, 2000);
    }
  }, [isPlaying, useVoice, speakText, smoothScrollTo, stop]);

  const startTour = async () => {
    setIsOpen(true);
    setIsPlaying(true);
    setCurrentStep(0);
    setNavigationError(null);
    await goToStep(0);
  };

  const togglePlayPause = async () => {
    if (isPlaying) {
      setIsPlaying(false);
      stop();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      setIsPlaying(true);
      if (currentStep < tourSteps.length - 1) {
        await goToStep(currentStep);
      } else {
        await startTour();
      }
    }
  };

  const nextStep = async () => {
    if (isNavigating || isSpeaking) return;
    
    stop();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (currentStep < tourSteps.length - 1) {
      await goToStep(currentStep + 1);
    }
  };

  const prevStep = async () => {
    if (isNavigating || isSpeaking) return;
    
    stop();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (currentStep > 0) {
      await goToStep(currentStep - 1);
    }
  };

  const closeTour = () => {
    setIsOpen(false);
    setIsPlaying(false);
    stop();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (navigationTimeoutRef.current) clearTimeout(navigationTimeoutRef.current);
    setNavigationError(null);
  };

  const toggleVoice = () => {
    const newUseVoice = !useVoice;
    setUseVoice(newUseVoice);
    
    if (newUseVoice && isPlaying && !isSpeaking) {
      const step = tourSteps[currentStep];
      speakText(step.description);
    } else {
      stop();
    }
  };

  const jumpToStep = async (stepIndex: number) => {
    if (isNavigating || isSpeaking) return;
    
    stop();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    await goToStep(stepIndex);
  };

  const currentStepData = tourSteps[currentStep];

  return (
    <>
      {/* Tour Trigger Button */}
      <motion.button
        onClick={startTour}
        className="fixed bottom-6 left-6 z-40 w-16 h-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group border-2 border-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Start AI Tour Guide"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Bot className="w-7 h-7" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
      </motion.button>

      {/* Tour Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
            onClick={closeTour}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-card border border-border/50 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Bot className="w-8 h-8" />
                      {isSpeaking && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Portfolio Tour Guide</h3>
                      <p className="text-primary-foreground/80 text-sm">
                        {currentStep + 1} of {tourSteps.length} • {currentStepData.title.split(' ')[0]}
                        {isSpeaking && ' • Speaking...'}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeTour}
                    className="text-primary-foreground hover:bg-primary-foreground/20 rounded-xl"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted/30 h-2 flex-shrink-0">
                <motion.div
                  className="h-2 bg-gradient-to-r from-primary to-secondary rounded-r-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 overflow-y-auto">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="text-xl font-bold mb-3 text-foreground">
                    {currentStepData.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {currentStepData.description}
                  </p>
                </motion.div>

                {/* Status Indicators */}
                <div className="mt-4 space-y-2">
                  {isNavigating && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-lg"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"
                      />
                      Navigating to {currentStepData.title.split(' ')[0]}...
                    </motion.div>
                  )}

                  {isSpeaking && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-2 h-2 bg-green-600 rounded-full"
                      />
                      Speaking... Please wait
                    </motion.div>
                  )}

                  {navigationError && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200"
                    >
                      ⚠️ {navigationError}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Controls */}
              <div className="p-6 border-t border-border/50 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevStep}
                      disabled={currentStep === 0 || isNavigating || isSpeaking}
                      className="rounded-lg"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </Button>

                    <Button
                      variant={isPlaying ? "outline" : "default"}
                      size="sm"
                      onClick={togglePlayPause}
                      disabled={isNavigating || isSpeaking}
                      className="rounded-lg"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 mr-1" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Play
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextStep}
                      disabled={currentStep === tourSteps.length - 1 || isNavigating || isSpeaking}
                      className="rounded-lg"
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
                    className="rounded-lg"
                    title={useVoice ? "Turn off voice" : "Turn on voice narration"}
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
                      className={`flex-shrink-0 px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 min-w-[40px] text-center ${
                        index === currentStep
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
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