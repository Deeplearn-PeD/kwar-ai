import { Navbar } from '@/components/Navbar';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { ClarezaDados } from '@/sections/ClarezaDados';
import { EpidBotSection } from '@/sections/EpidBotSection';
import { LinguagemNaturalSection } from '@/sections/LinguagemNaturalSection';
import { EpidBotParaQuem } from '@/sections/EpidBotParaQuem';
import { EpidBotBeneficios } from '@/sections/EpidBotBeneficios';
import { BaseCientificaSection } from '@/sections/BaseCientificaSection';
import { CapacitacaoSection } from '@/sections/CapacitacaoSection';
import { EquipeRedeSection } from '@/sections/EquipeRedeSection';
import { EquipeSection } from '@/sections/EquipeSection';
import { CTAFinalSection } from '@/sections/CTAFinalSection';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-kwar-deep">
      {/* Neural Background Animation */}
      <NeuralBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* 1) Hero */}
        <Hero />
        
        {/* 2) About - Nossa história */}
        <About />
        
        {/* 3) ClarezaDados */}
        <ClarezaDados />
        
        {/* 3) EpidBotSection */}
        <EpidBotSection />
        
        {/* 4) LinguagemNaturalSection (Kimi) */}
        <LinguagemNaturalSection />
        
        {/* 5) EpidBotParaQuem */}
        <EpidBotParaQuem />
        
        {/* 6) EpidBotBeneficios */}
        <EpidBotBeneficios />
        
        {/* 7) BaseCientificaSection (Kimi) */}
        <BaseCientificaSection />
        
        {/* 8) CapacitacaoSection */}
        <CapacitacaoSection />
        
        {/* 9) EquipeRedeSection (Kimi) */}
        <EquipeRedeSection />
        
        {/* 10) EquipeSection (fundadores) */}
        <EquipeSection />
        
        {/* 11) CTA Final (Kimi) */}
        <CTAFinalSection />
        
        {/* 12) Contact */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
