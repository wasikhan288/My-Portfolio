'use client';

import { HandHeart, Users, CheckCircle, Calendar, MapPin, Shield } from 'lucide-react';
import Image from 'next/image';

const volunteeringData = [
  {
    id: 1,
    title: 'Traffic Awareness & Road Safety Campaign',
    date: '1st February 2025',
    organizer: 'Rotary Club of Nagpur North (in collaboration with Nagpur Police & partners)',
    venue: 'Auditorium, Commissioner of Police Office, Civil Lines, Nagpur',
    role: 'Volunteer',
    responsibilities: [
      'Assisted in managing participants during the awareness drive',
      'Supported coordination between organizing teams and attendees',
      'Helped in spreading awareness messages on traffic rules and road safety',
      'Participated in community engagement activities',
      'Contributed to event setup and logistics management'
    ],
    reflection: "Being part of this campaign gave me an opportunity to contribute towards community welfare and learn the importance of teamwork in social initiatives. It was inspiring to see how collective efforts can create meaningful impact in public safety awareness.",
    image: 'https://github.com/faskey37/My-Portfolio/blob/main/WhatsApp%20Image%202025-08-24%20at%2023.38.43_76362cbf.jpg?raw=true',
    imageHint: 'Traffic awareness campaign volunteering event',
    impact: ['Community Safety', 'Public Awareness', 'Team Collaboration'],
    skills: ['Event Management', 'Public Communication', 'Team Coordination'],
    duration: '1 Day',
    participants: '50+ Volunteers',
    featured: true
  },
];

const achievementTypes = {
  membership: { icon: Users, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
  award: { icon: Shield, color: 'from-amber-500 to-yellow-500', bgColor: 'bg-amber-500/10' },
  certification: { icon: CheckCircle, color: 'from-emerald-500 to-green-500', bgColor: 'bg-emerald-500/10' },
  event: { icon: Calendar, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' }
};

export function Volunteering() {
  return (
    <section id="volunteering" className="py-24 sm:py-32 bg-gradient-to-br from-background via-background to-muted/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-secondary">Community Service</span>
          </div>
          
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Volunteering & <span className="text-gradient">Social Impact</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            Contributing to community welfare and creating positive social change through active participation and civic engagement.
          </p>
        </div>

        {/* Volunteering Experiences */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {volunteeringData.map((item, index) => (
              <VolunteeringCard 
                key={item.id} 
                item={item} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl px-8 py-6 max-w-2xl mx-auto">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1">Want to make a difference together?</h3>
              <p className="text-muted-foreground text-sm">I'm always open to collaborating on community initiatives and social projects</p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <HandHeart className="w-4 h-4" />
              Connect for Impact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function VolunteeringCard({ item, index }: { item: any; index: number }) {
  const AchievementIcon = achievementTypes[item.type as keyof typeof achievementTypes]?.icon || HandHeart;
  const achievementType = achievementTypes[item.type as keyof typeof achievementTypes];

  return (
    <div 
      className="group relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-card/80 mb-8"
      style={{
        animationDelay: `${index * 200}ms`
      }}
    >
      {/* Featured Badge */}
      {item.featured && (
        <div className="absolute -top-3 -left-3 z-20">
          <div className="flex items-center gap-1 bg-gradient-to-r from-green-400 to-emerald-500 text-emerald-950 px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
            <Shield className="w-4 h-4 fill-current" />
            Featured Initiative
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Takes more space */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <HandHeart className="w-6 h-6" />
              {/* Icon Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary to-primary opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-headline text-2xl font-bold leading-tight group-hover:text-gradient transition-colors duration-300 mb-2">
                {item.title}
              </h3>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{item.venue}</span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{item.participants}</span>
                </div>
              </div>
              
              {/* Organizer Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20 mb-4">
                {item.organizer}
              </div>
            </div>
          </div>

          {/* Role & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-foreground">
                <Users className="w-5 h-5 text-primary"/> 
                My Role
              </h4>
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                <span className="font-semibold text-primary">{item.role}</span>
                <span className="text-muted-foreground text-sm block mt-1">Duration: {item.duration}</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-secondary"/> 
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {item.responsibilities.map((resp: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Impact & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Community Impact</h4>
              <div className="flex flex-wrap gap-2">
                {item.impact.map((impact: string, index: number) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full text-sm font-medium border border-green-500/20"
                  >
                    {impact}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-3 text-foreground">Skills Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill: string, index: number) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium border border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-muted/30 border border-border/30 rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3 text-foreground">Personal Reflection</h4>
            <blockquote className="text-muted-foreground leading-relaxed italic border-l-4 border-secondary pl-4">
              {item.reflection}
            </blockquote>
          </div>
        </div>

        {/* Image Section - Properly sized with additional info */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="relative overflow-hidden rounded-xl border border-border/30 bg-muted/20 group-hover:shadow-lg transition-all duration-500">
            <div className="relative w-full h-auto">
              <Image
                unoptimized
                src={item.image}
                alt={item.title}
                width={320}
                height={240}
                data-ai-hint={item.imageHint}
                className="object-cover w-full h-auto rounded-lg"
                style={{ 
                  maxHeight: '280px',
                  objectFit: 'cover'
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            
            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white/90 text-sm font-medium text-center">
                {item.imageHint}
              </p>
            </div>
          </div>

          {/* Additional Info Box below Image */}
          <div className="mt-4 bg-muted/30 border border-border/30 rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              Event Summary
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Duration:</span>
                <span className="font-medium text-foreground">{item.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Scale:</span>
                <span className="font-medium text-foreground">{item.participants}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">My Role:</span>
                <span className="font-medium text-primary">{item.role}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium text-foreground text-right max-w-[120px] truncate" title={item.venue}>
                  {item.venue.split(',')[0]}
                </span>
              </div>
            </div>
          </div>

          {/* Impact Highlights */}
          <div className="mt-4 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Key Achievements
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Enhanced public safety awareness</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Collaborated with local authorities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Strengthened community engagement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
}