'use client';

import { motion } from 'framer-motion';
import { Briefcase, LaptopIcon, Code, Calendar, MapPin } from 'lucide-react';

const timelineData = [
  {
    date: "2021 - 2023",
    title: "Freelance Web Developer",
    company: "Self-Learning & Personal Projects",
    icon: Briefcase,
    description: "During this time, I immersed myself in the world of web development, building and deploying a variety of personal projects. I honed my skills in HTML, CSS, and JavaScript, creating responsive and interactive web pages with Bootstrap and Tailwind CSS. I also explored backend technologies like Firebase and SQL, integrating basic APIs and experimenting with form handling and database storage.",
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "Firebase", "APIs"],
    type: "professional"
  },
  {
    date: "2020 - 2021",
    title: "Frontend Developer (Learner)",
    company: "Personal Projects & Practice",
    icon: LaptopIcon,
    description: "This period was dedicated to mastering the fundamentals of frontend development. I created responsive user interfaces using HTML5, CSS3, and JavaScript, with a strong focus on accessibility and clean, user-centric layouts. Through self-initiated projects, I built a solid understanding of frontend architecture and modern web standards.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    type: "learning"
  },
  {
    date: "2019 - 2020",
    title: "Junior Web Developer (Learner)",
    company: "Freelance Projects & Practice",
    icon: Code,
    description: "My journey began by contributing to small-scale personal and academic projects where I built static websites. This hands-on experience gave me a practical understanding of HTML, CSS, and basic JavaScript, and ignited my passion for exploring the world of modern web development through tutorials and self-paced learning.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "learning"
  }
];

export function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My Journey <span className="text-gradient">So Far</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From learning the basics to building real projects, here's how my development journey unfolded
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Central Timeline Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20"></div>

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 group ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Date Section */}
                <div className={`w-full md:w-2/5 ${isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} flex-shrink-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground">{item.date}</span>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                  />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-3/5 flex-1">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-foreground">
                            {item.title}
                          </h3>
                          {item.type === "professional" && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-600 text-xs font-medium rounded-full">
                              Pro
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{item.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
            <p className="text-muted-foreground mb-6">
              Currently focused on advancing my skills in modern web technologies while pursuing my 
              Computer Science degree. Building real-world projects and exploring new frameworks.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-600 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-600 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-600 rounded-full text-sm">Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}