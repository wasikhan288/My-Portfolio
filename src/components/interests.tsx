import { Music, BookOpen, TrendingUp, Brain, ChartLine, Globe } from 'lucide-react';

const interestItems = [
  { 
    icon: <Music className="w-6 h-6" />,
    title: 'Indian Classical Singing', 
    description: 'Over 3 years of training in Indian classical singing with live performances at open-mic and community events. The discipline and structured practice involved has shaped how I approach complex problems and long-term projects.',
    color: "from-purple-400 to-indigo-500",
    bgColor: "bg-purple-500/10",
    years: "3+ Years"
  },
  { 
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Behavioral Finance Reading', 
    description: 'Avid reader of books on behavioral finance and decision-making such as "The Psychology of Money" and "Blink". These readings have influenced how I think about risk, incentives, and human behavior in financial contexts.',
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
    highlight: "Psychology of Money"
  },
  { 
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Market Analysis', 
    description: 'Passionate about understanding market dynamics, investment strategies, and financial trends. Regularly analyze market movements and economic indicators to develop insights into investment opportunities.',
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    focus: "Investment Strategy"
  },
  { 
    icon: <Brain className="w-6 h-6" />,
    title: 'Strategic Problem Solving', 
    description: 'Enjoy tackling complex business problems through analytical frameworks and strategic thinking. This interest complements my financial analysis work and helps in developing innovative solutions for business challenges.',
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-500/10",
    approach: "Analytical Thinking"
  },
  { 
    icon: <ChartLine className="w-6 h-6" />,
    title: 'Financial Modeling', 
    description: 'Interest in creating detailed financial models for valuation, forecasting, and scenario analysis. This technical skill allows me to translate business assumptions into quantifiable financial outcomes.',
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-500/10",
    expertise: "DCF & Forecasting"
  },
  { 
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Business Culture', 
    description: 'Fascinated by international business practices, cross-cultural management, and global economic systems. This interest stems from my Master\'s in International Business and informs my approach to global business strategy.',
    color: "from-teal-400 to-green-500",
    bgColor: "bg-teal-500/10",
    perspective: "International Business"
  },
];

export function Interests() {
  return (
    <section id="interests" className="py-24 sm:py-32 bg-gradient-to-b from-white to-primary/5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">PERSONAL INTERESTS & PASSIONS</span>
          </div>
          
          <h2 className="text-4xl font-light tracking-tight sm:text-5xl mb-4">
            Beyond <span className="font-normal text-primary">Finance & Business</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Personal interests that complement my professional work and contribute to a well-rounded perspective
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {interestItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1"
            >
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${item.bgColor} ${item.color.replace('from-', 'text-').split(' ')[0]}`}>
                  {item.years || item.highlight || item.focus || item.approach || item.expertise || item.perspective}
                </div>
              </div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`relative w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                  {item.icon}
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              {/* Bottom Border Effect */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${item.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Connection to Professional Work */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">How My Interests Enhance My Professional Work</h3>
                <p className="text-gray-700">
                  My diverse interests contribute to a unique perspective that enhances my analytical work in finance and business.
                </p>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Music className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Discipline & Structure</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Classical music training teaches patience and structured practice, directly applicable to complex financial modeling.
                    </p>
                  </div>
                  
                  <div className="bg-white/80 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Brain className="w-5 h-5 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900">Strategic Thinking</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      Behavioral finance insights help in understanding market psychology and making better investment decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gray-50 border border-gray-200">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-gray-600 text-sm font-medium">
              Discipline from music • Insight from reading • Strategy from analysis
            </span>
            <div className="w-2 h-2 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}