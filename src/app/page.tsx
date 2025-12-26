import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Timeline } from '@/components/timeline';
import { Skills } from '@/components/skills';
import { FeaturedSkills } from '@/components/featured-skills';
import { Education } from '@/components/education';
import { Interests } from '@/components/interests';
import { CurrentlyLearning } from '@/components/currently-learning';
import { Achievements } from '@/components/achievements';
import { VideoGallery } from '@/components/video-gallery';
import { Volunteering } from '@/components/volunteering';
import { Certificates } from '@/components/certificates';
import { AITourGuide } from '@/components/ai-tour-guide';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Interests />
        <CurrentlyLearning />
        <Skills />
        <Timeline />
        <FeaturedSkills />
        <Projects />
         <AITourGuide />
        <VideoGallery />
        <Achievements />
        <Volunteering />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
