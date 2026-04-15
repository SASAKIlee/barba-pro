import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProFeaturesSection from "@/components/ProFeaturesSection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Splash Overlay: controla entrada da página */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {/* Navegação fixa */}
      <Navbar />
      
      {/* Conteúdo principal com fluxo de conversão */}
      <main className="flex flex-col w-full">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <ProFeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Rodapé institucional */}
      <footer className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2 select-none">
              <span className="text-2xl font-bold tracking-tight text-primary">CAJ</span>
              <span className="text-xl text-muted-foreground">TECH</span>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/caj.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Siga a CAJ TECH no Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Adicione WhatsApp/LinkedIn aqui conforme escalar */}
            </div>
            
            {/* Direitos autorais */}
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} CAJ TECH — Clientes · Agendamentos · Jornada
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;