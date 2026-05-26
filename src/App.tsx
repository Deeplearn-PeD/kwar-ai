import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { OurStory } from '@/sections/OurStory';
import { CredibilitySection } from '@/sections/CredibilitySection';
import { DesafioSection } from '@/sections/DesafioSection';
import { SolutionsSection } from '@/sections/SolutionsSection';
import { EpidBotTransitionSection } from '@/sections/EpidBotTransitionSection';
import { EpidBotVisualSection } from '@/sections/EpidBotVisualSection';
import { EquipeRedeSection } from '@/sections/EquipeRedeSection';
import { EquipeSection } from '@/sections/EquipeSection';
import { CTAFinalSection } from '@/sections/CTAFinalSection';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import EpidbotLanding from '@/pages/EpidbotLanding';
import EpidbotWebSummit from '@/pages/EpidbotWebSummit';
import EpidbotIndividual from '@/pages/EpidbotIndividual';
import { HubPage } from '@/pages/HubPage';

// HomePage component containing all existing sections
function HomePage() {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* 1) Hero */}
        <Hero />

        {/* 2) Our Story */}
        <OurStory />

        {/* 3) Credibility */}
        <CredibilitySection />

        {/* 4) O Desafio */}
        <DesafioSection />

        {/* 5) EpidBot Transition */}
        <EpidBotTransitionSection />

        {/* 6) EpidBot Visual Presentation */}
        <EpidBotVisualSection />

        {/* 7) Solutions */}
        <SolutionsSection />

        {/* 7) EquipeRedeSection */}
        <EquipeRedeSection />
        
        {/* 9) EquipeSection */}
        <EquipeSection />
        
        {/* 10) CTA Final */}
        <CTAFinalSection />
        
        {/* 11) Contact */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/epidbot" element={<EpidbotLanding />} />
      <Route path="/epidbot-landing" element={<EpidbotLanding />} />
      <Route path="/epidbot-websummit" element={<EpidbotWebSummit />} />
      <Route path="/epidbot_individual" element={<EpidbotIndividual />} />
      <Route path="/hub" element={<HubPage />} />
    </Routes>
  );
}

export default App;
