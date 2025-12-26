const interestItems = [
  { 
    icon: 'fas fa-robot', 
    title: 'Tech & Iron Man', 
    description: "Fascinated by cutting-edge technology and Tony Stark's innovations in the Marvel universe",
    color: "from-red-400 to-orange-500",
    bgColor: "bg-red-500/10"
  },
  { 
    icon: 'fas fa-microchip', 
    title: 'Electronics', 
    description: 'Tinkering with circuits, Arduino projects, and understanding how devices work',
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10"
  },
  { 
    icon: 'fas fa-car', 
    title: 'Automobiles', 
    description: 'Passionate about car technology, especially electric vehicles and futuristic designs',
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10"
  },
  { 
    icon: 'fas fa-plane', 
    title: 'Travel', 
    description: 'Exploring new places, cultures, and capturing memories through photography',
    color: "from-purple-400 to-indigo-500",
    bgColor: "bg-purple-500/10"
  },
  { 
    icon: 'fas fa-film', 
    title: 'Sci-Fi Movies', 
    description: 'Love watching tech-focused films especially Marvel, Interstellar, and cyberpunk genres',
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-500/10"
  },
  { 
    icon: 'fas fa-paint-brush', 
    title: 'Tech Arts', 
    description: 'Creating digital art and designs that blend technology with aesthetics',
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-500/10"
  },
];

export function Interests() {
  return (
    <section id="interests" className="py-24 sm:py-32 bg-gradient-to-br from-background via-background to-muted/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            My <span className="text-gradient">Interests</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            Beyond coding - exploring passions that inspire creativity and innovation in my work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {interestItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-card/60 backdrop-blur-sm border border-border/40 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:bg-card/80"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 ${item.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
              
              {/* Animated Icon Container */}
              <div className="relative mb-8 flex justify-center">
                <div className={`relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                  <i className={`${item.icon} text-white text-2xl`}></i>
                  
                  {/* Pulsing Ring Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300 -z-10`}></div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold font-headline text-foreground group-hover:text-gradient transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {item.description}
                </p>
              </div>

              {/* Border Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                <div className="absolute inset-[1px] rounded-2xl bg-background" />
              </div>

              {/* Corner Accents */}
              <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${item.color.replace('from-', 'border-').replace(' to-', '/50 border-l-')} rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${item.color.replace('from-', 'border-').replace(' to-', '/50 border-r-')} rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${item.color.replace('from-', 'border-').replace(' to-', '/50 border-l-')} rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${item.color.replace('from-', 'border-').replace(' to-', '/50 border-r-')} rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/40">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
            <span className="text-muted-foreground text-sm font-medium">
              Passion drives innovation • Curiosity fuels creativity
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}