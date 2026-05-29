import { Routes, Route, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
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
import Epidbot from '@/pages/Epidbot';
import Hospitais from '@/pages/Hospitais';
import Pesquisa from '@/pages/Pesquisa';
import SaudeGlobal from '@/pages/SaudeGlobal';
import Privacy from '@/pages/Privacy';
import Documentacao from '@/pages/Documentacao';
import Termos from '@/pages/Termos';
import LGPD from '@/pages/LGPD';
import { HubPage } from '@/pages/HubPage';

// HomePage component containing all existing sections
function HomePage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get('scroll');
    if (scrollTo) {
      const tryScroll = () => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          setTimeout(tryScroll, 150);
        }
      };
      setTimeout(tryScroll, 100);
    }
  }, [searchParams]);

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
      <Route path="/epidbot" element={<Epidbot />} />
      <Route path="/epidbot-landing" element={<EpidbotLanding />} />
      <Route path="/epidbot-websummit" element={<EpidbotWebSummit />} />
      <Route path="/epidbot_individual" element={<EpidbotIndividual />} />
      <Route path="/hub" element={<HubPage />} />
      <Route path="/hospitais" element={<Hospitais />} />
      <Route path="/pesquisa" element={<Pesquisa />} />
      <Route path="/saude-global" element={<SaudeGlobal />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/lgpd" element={<LGPD />} />
      <Route path="/documentacao" element={<Documentacao />} />
    </Routes>
  );
}

export default App;
