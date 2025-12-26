'use client';

import { Award, ExternalLink, Calendar, Building, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';

const certificates = [
  {
    id: 1,
    title: 'Hackathon Participation Certificate',
    issuer: 'TechTrek Hackathon',
    date: 'January 2025',
    image: 'https://github.com/faskey37/My-Portfolio/blob/main/WhatsApp%20Image%202025-08-25%20at%2010.47.53_7f77d5ad.jpg?raw=true',
    imageHint: 'TechTrek Hackathon participation certificate',
    url: '#',
    category: 'hackathon',
    skills: ['Problem Solving', 'Teamwork', 'Innovation'],
    featured: true
  },
  {
    id: 2,
    title: 'Hackathon Participation Certificate',
    issuer: 'Build 4 Change Hackathon',
    date: 'August 2025',
    image: 'https://github.com/faskey37/My-Portfolio/blob/main/Screenshot%202025-08-30%20200201.png?raw=true',
    imageHint: 'Build 4 Change Hackathon participation certificate',
    url: '#',
    category: 'hackathon',
    skills: ['Social Impact', 'Technical Skills', 'Collaboration']
  },
  {
    id: 3,
    title: 'Canva Design Fundamentals',
    issuer: 'Simplilearn & Canva',
    date: 'November 2024',
    image: 'https://github.com/faskey37/My-Portfolio/blob/main/WhatsApp%20Image%202025-08-25%20at%2010.52.57_f5a809ed.jpg?raw=true',
    imageHint: 'Canva Design Fundamentals certification',
    url: '#',
    category: 'design',
    skills: ['Graphic Design', 'Visual Communication', 'UI/UX']
  },
];

const categories = [
  { id: 'all', label: 'All Certificates', count: certificates.length },
  { id: 'hackathon', label: 'Hackathons', count: certificates.filter(c => c.category === 'hackathon').length },
  { id: 'design', label: 'Design', count: certificates.filter(c => c.category === 'design').length },
];

export function Certificates() {
  const [filter, setFilter] = useState('all');

  const filteredCertificates = certificates.filter(cert => 
    filter === 'all' || cert.category === filter
  );

  return (
    <section id="certificates" className="py-24 sm:py-32 bg-gradient-to-br from-background via-background to-muted/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Credentials</span>
          </div>
          
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Validated skills and achievements through recognized certifications and participation in competitive events.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                filter === category.id 
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg shadow-primary/25' 
                  : 'bg-background/60 backdrop-blur-sm border border-border/50 text-foreground/80 hover:bg-background/80'
              }`}
            >
              {category.label}
              <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                filter === category.id 
                  ? "bg-primary-foreground/20 text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCertificates.map((cert, index) => (
            <CertificateCard 
              key={cert.id} 
              certificate={cert} 
              index={index}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-muted-foreground/50" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No certificates found</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              No certificates match the selected filter. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl px-8 py-6 max-w-2xl mx-auto">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1">Looking for more credentials?</h3>
              <p className="text-muted-foreground text-sm">I'm continuously learning and adding new certifications to my portfolio</p>
            </div>
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300">
              <a href="#contact">
                <Download className="w-4 h-4 mr-2" />
                Request Transcript
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificateCard({ certificate, index }: { certificate: any; index: number }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
      className="group relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-card/80"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Featured Badge */}
      {certificate.featured && (
        <div className="absolute -top-2 -left-2 z-20">
          <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-950 px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg">
            <Award className="w-3 h-3 fill-current" />
            Featured
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 border border-border/30 bg-muted/20 group-hover:shadow-lg transition-all duration-500">
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}
        
        <Image
          unoptimized
          src={certificate.image}
          alt={certificate.title}
          width={400}
          height={300}
          data-ai-hint={certificate.imageHint}
          className={`object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
        
        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <Button asChild size="sm" className="bg-white/90 text-foreground hover:bg-white">
            <Link href={certificate.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              Verify
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="bg-transparent border-white/50 text-white hover:bg-white/20">
            <Link href={certificate.image} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-1" />
              View
            </Link>
          </Button>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title */}
        <h3 className="font-headline text-lg font-bold leading-tight group-hover:text-gradient transition-colors duration-300 line-clamp-2">
          {certificate.title}
        </h3>

        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Building className="w-4 h-4" />
            <span className="line-clamp-1" title={certificate.issuer}>{certificate.issuer}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{certificate.date}</span>
          </div>
        </div>

        {/* Skills Tags */}
        {certificate.skills && certificate.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {certificate.skills.map((skill: string, skillIndex: number) => (
              <span 
                key={skillIndex}
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Category Badge */}
        <div className="flex justify-between items-center pt-2 border-t border-border/30">
          <span className="text-xs text-muted-foreground capitalize">
            {certificate.category}
          </span>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Link href={certificate.url} target="_blank" rel="noopener noreferrer" title="Verify Certificate">
                <ExternalLink className="w-3 h-3" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Link href={certificate.image} target="_blank" rel="noopener noreferrer" title="View Full Size">
                <Download className="w-3 h-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
}