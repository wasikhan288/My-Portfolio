'use client';

import { Video, Play, Download, Pause, Volume2, VolumeX, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const videos = [
  {
    id: 1,
    title: 'Finview App Demo',
    url: 'https://raw.githubusercontent.com/faskey37/My-Portfolio/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(3).mp4',
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive walkthrough of the Finview financial dashboard featuring expense tracking, budget management, and AI-powered insights.',
    githubUrl: 'https://github.com/faskey37/My-Portfolio/blob/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(3).mp4',
    tags: ['Finance', 'Dashboard', 'AI Insights'],
    duration: '2:45',
    featured: true
  },
  {
    id: 2,
    title: 'Survey App Demo',
    url: 'https://raw.githubusercontent.com/faskey37/My-Portfolio/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2).mp4',
    poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Interactive survey application showcasing dynamic form handling, responsive design, and real-time validation features.',
    githubUrl: 'https://github.com/faskey37/My-Portfolio/blob/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2).mp4',
    tags: ['React', 'Forms', 'Interactive'],
    duration: '1:30'
  },
  {
    id: 3,
    title: 'Flappy Bird Gameplay',
    url: 'https://raw.githubusercontent.com/faskey37/My-Portfolio/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(1).mp4',
    poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Gameplay demonstration of the Flappy Bird recreation featuring smooth animations and responsive controls.',
    githubUrl: 'https://github.com/faskey37/My-Portfolio/blob/main/Untitled%20video%20-%20Made%20with%20Clipchamp%20(1).mp4',
    tags: ['Game', 'JavaScript', 'Canvas'],
    duration: '1:15'
  }
];

export function VideoGallery() {
  return (
    <section id="video-gallery" className="py-24 sm:py-32 bg-gradient-to-br from-background via-background to-muted/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Live Demos</span>
          </div>
          
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Project <span className="text-gradient">Demos</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Watch my projects come to life. Interactive demos showcasing features, user experience, and technical implementation.
          </p>
        </div>

        {/* Info Banner */}
        <div className="mt-8 mb-16 bg-card/50 backdrop-blur-sm border border-border/40 p-6 rounded-2xl max-w-4xl mx-auto shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2 text-primary flex-shrink-0 mt-1">
              <Video className="w-5 h-5" />
              <span className="font-semibold">Viewing Tips</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Videos hosted on GitHub may load slowly</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Click the play button to start playback</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Download for optimal viewing experience</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Toggle quality for better performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <VideoPlayer 
              key={video.id} 
              video={video} 
              index={index}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl px-8 py-6">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1">Want to see more demos?</h3>
              <p className="text-muted-foreground text-sm">Check out my GitHub repository for additional project videos and resources</p>
            </div>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300">
              <a href="https://github.com/faskey37" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoPlayer({ video, index }: { video: any; index: number }) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const updateProgress = () => {
      if (videoElement.duration) {
        setProgress((videoElement.currentTime / videoElement.duration) * 100);
      }
    };

    videoElement.addEventListener('timeupdate', updateProgress);
    return () => videoElement.removeEventListener('timeupdate', updateProgress);
  }, []);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          setHasError(true);
        });
      }
      setIsPlaying(!isPlaying);
      setShowPlayButton(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = video.url;
    link.download = `${video.title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={cn(
        "group relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-card/80",
        video.featured && "ring-2 ring-primary/20"
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Featured Badge */}
      {video.featured && (
        <div className="absolute -top-2 -left-2 z-20">
          <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-950 font-semibold shadow-lg">
            Featured Demo
          </Badge>
        </div>
      )}

      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden rounded-xl mb-4 bg-muted/50 border border-border/30">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 z-10">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-sm">Loading video...</span>
            </div>
          </div>
        )}
        
        {hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-muted text-muted-foreground p-6">
            <Video className="w-12 h-12 mb-3 text-muted-foreground/50" />
            <p className="text-sm text-center mb-3 font-medium">Video playback unavailable</p>
            <p className="text-xs text-center mb-4 text-muted-foreground/70">
              Video cannot be played directly in browser due to hosting limitations
            </p>
            <Button 
              onClick={handleDownload}
              variant="outline" 
              size="sm"
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Download Video
            </Button>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={video.url}
              poster={video.poster}
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              className="object-cover w-full h-full cursor-pointer"
              onError={handleError}
              onLoadedData={handleLoad}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={handleVideoClick}
            />
            
            {/* Play/Pause Overlay */}
            {!isPlaying && showPlayButton && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-300 z-20"
                onClick={togglePlay}
              >
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 shadow-2xl">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
            )}

            {/* Video Controls */}
            {(showControls || !isPlaying) && !isLoading && !hasError && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 z-10">
                {/* Progress Bar */}
                <div className="w-full bg-white/30 h-1 rounded-full mb-3 cursor-pointer">
                  <div 
                    className="bg-primary h-1 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-primary transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    
                    <span className="text-white/80 text-xs">
                      {videoRef.current ? formatTime(videoRef.current.currentTime) : '0:00'}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDownload}
                      className="text-white/80 hover:text-primary transition-colors"
                      title="Download video"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Video Info */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
            <h3 className="font-headline text-lg font-bold leading-tight group-hover:text-gradient transition-colors duration-300">
              {video.title}
            </h3>
          </div>
          
          <Badge variant="outline" className="text-xs font-normal bg-background/50">
            {video.duration}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {video.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {video.tags.map((tag: string) => (
            <Badge 
              key={tag} 
              variant="secondary"
              className="text-xs bg-background/50 border-border/30 font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
}