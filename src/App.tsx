import { Navbar } from '@/components/Navbar';
import { NeuralBackground } from '@/components/NeuralBackground';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Products } from '@/sections/Products';
import { HowItWorks } from '@/sections/HowItWorks';
import { Pricing } from '@/sections/Pricing';
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
        <Hero />
        <About />
        <Products />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
