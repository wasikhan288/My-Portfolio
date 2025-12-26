import { Trophy, Calendar, MapPin, Users, Award } from 'lucide-react';
import Image from 'next/image';

const achievements = [
  {
    id: 1,
    title: 'ACM Student Chapter Installation – Member Recognition',
    date: '22nd August 2025',
    description: 'Recognized as a member of ACM Student Chapter at ACET during the official installation program. Received badge of membership in presence of Dr. Devishree Naidu (Vice Chair, ACM Nagpur Chapter) and Principal Dr. K.S. Zakiuddin.',
    image: 'https://raw.githubusercontent.com/faskey37/My-Portfolio/b0894122f0a6fca77bc419f6975e57d137d973fb/WhatsApp%20Image%202025-08-22%20at%2023.08.24_930d37df.jpg',
    imageHint: 'ACM Student Chapter installation event group photo',
    type: 'membership',
    location: 'ACET, Nagpur',
    organization: 'ACM Student Chapter',
    attendees: '150+',
    featured: true,
    tags: ['Professional', 'Networking', 'Technology']
  },
];

const achievementTypes = {
  membership: { icon: Users, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
  award: { icon: Award, color: 'from-amber-500 to-yellow-500', bgColor: 'bg-amber-500/10' },
  certification: { icon: Trophy, color: 'from-emerald-500 to-green-500', bgColor: 'bg-emerald-500/10' },
  event: { icon: Calendar, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' }
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-gradient-to-br from-background via-background to-muted/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Milestones</span>
          </div>
          
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Achievements & <span className="text-gradient">Events</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Celebrating milestones, professional recognition, and meaningful participation in the tech community.
          </p>
        </div>

        {/* Single Achievement Card - Centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {achievements.map((achievement, index) => (
              <AchievementCard 
                key={achievement.id} 
                achievement={achievement} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Empty State for Future Additions */}
        {achievements.length === 1 && (
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-6 bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl px-8 py-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-muted-foreground/50" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">More Achievements Coming Soon</h3>
                <p className="text-muted-foreground">
                  As I continue my journey in technology and professional development, 
                  I look forward to adding more milestones and accomplishments here.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function AchievementCard({ achievement, index }: { achievement: any; index: number }) {
  const AchievementIcon = achievementTypes[achievement.type as keyof typeof achievementTypes]?.icon || Trophy;
  const achievementType = achievementTypes[achievement.type as keyof typeof achievementTypes];

  return (
    <div 
      className="group relative bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-card/80"
      style={{
        animationDelay: `${index * 200}ms`
      }}
    >
      {/* Featured Badge */}
      {achievement.featured && (
        <div className="absolute -top-3 -left-3 z-20">
          <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-950 px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
            <Award className="w-4 h-4 fill-current" />
            Featured
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${achievementType?.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
          <AchievementIcon className="w-6 h-6" />
          {/* Icon Glow */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievementType?.color} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10`}></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-headline text-xl font-bold leading-tight group-hover:text-gradient transition-colors duration-300 mb-2">
            {achievement.title}
          </h3>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{achievement.date}</span>
            </div>
            
            {achievement.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{achievement.location}</span>
              </div>
            )}
            
            {achievement.attendees && (
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>{achievement.attendees}</span>
              </div>
            )}
          </div>
          
          {/* Organization Badge */}
          {achievement.organization && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              {achievement.organization}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed mb-6 text-base">
        {achievement.description}
      </p>

      {/* Tags */}
      {achievement.tags && achievement.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {achievement.tags.map((tag: string) => (
            <span 
              key={tag}
              className="px-2.5 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs font-medium border border-border/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Image Section */}
      <div className="relative overflow-hidden rounded-xl border border-border/30 bg-muted/20 group-hover:shadow-lg transition-all duration-500">
        <div className="aspect-video relative overflow-hidden">
          <Image
            unoptimized
            src={achievement.image}
            alt={achievement.title}
            width={600}
            height={400}
            data-ai-hint={achievement.imageHint}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        
        {/* Image Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white/90 text-sm font-medium">
            {achievement.imageHint}
          </p>
        </div>
      </div>

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
}