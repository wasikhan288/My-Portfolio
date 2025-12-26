import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image?: string;
  imageHint?: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  category: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-card/80 h-full flex flex-col">
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-950 px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-4 right-4 z-20">
        <Badge 
          variant="secondary" 
          className="capitalize backdrop-blur-sm bg-background/60 border-border/40 font-medium"
        >
          {project.category}
        </Badge>
      </div>

      {/* Image Section */}
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="aspect-video relative overflow-hidden">
          {project.image && (
            <>
              <Image
                unoptimized
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={project.imageHint}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </>
          )}
        </div>
      </CardHeader>

      {/* Content Section */}
      <CardContent className="p-6 flex-1 flex flex-col">
        <CardTitle className="font-headline text-xl mb-3 line-clamp-2 group-hover:text-gradient transition-colors duration-300">
          {project.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow line-clamp-3">
          {project.description}
        </p>
      </CardContent>

      {/* Tags & Actions */}
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4 mt-auto">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline"
              className="text-xs bg-background/50 backdrop-blur-sm border-border/30 font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 self-stretch pt-2 border-t border-border/40 w-full">
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button asChild variant="outline" size="sm" className="flex-1 gap-2 transition-all duration-300 hover:scale-105">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.codeUrl && (
            <Button asChild variant="ghost" size="sm" className="flex-1 gap-2 transition-all duration-300 hover:scale-105">
              <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Code
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </Card>
  );
}