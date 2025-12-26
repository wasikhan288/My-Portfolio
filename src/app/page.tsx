import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Timeline } from '@/components/experience';
import { DataAnalysisPage } from '@/components/data-analysis-page';
import { Education } from '@/components/education';
import { Interests } from '@/components/interests';
import { AITourGuide } from '@/components/ai-tour-guide';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Timeline />
        <Interests />
        < DataAnalysisPage />
        <Projects />
         <AITourGuide />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
