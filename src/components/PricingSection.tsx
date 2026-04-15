import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const PricingSection = () => (
  <section id="precos" className="py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-14">
        ESCOLHA SEU <span className="text-gold-gradient">PLANO</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {/* Starter */}
        <div className="bg-card border border-border rounded-xl p-8">
          <span className="text-muted-foreground text-sm font-semibold tracking-wider">🥉 STARTER</span>
          <div className="mt-4 mb-6">
            <span className="font-display text-5xl text-foreground">R$50</span>
            <span className="text-muted-foreground">/mês</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm">
            <Feature yes text="Máximo 2 profissionais" />
            <Feature yes text="Lembretes manuais via WhatsApp" />
            <Feature yes text="Fluxo de caixa básico" />
            <Feature yes={false} text="Radar de Sumidos" />
            <Feature yes={false} text="Fila de Espera Inteligente" />
            <Feature yes={false} text="PDV / Lojinha" />
            <Feature yes={false} text="Cliente VIP" />
          </ul>
          <a 
            href="https://www.instagram.com/caj.tech/" 
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center border border-foreground/20 text-foreground font-semibold py-3 rounded-lg hover:bg-muted transition-colors"
          >
            Começar Grátis
          </a>
        </div>

        {/* PRO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-primary rounded-xl p-8 relative shadow-gold"
        >
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-primary-foreground text-xs font-bold px-4 py-1 rounded-full tracking-wider">
            MAIS VENDIDO
          </span>
          <span className="text-primary text-sm font-semibold tracking-wider">🥈 PRO</span>
          <div className="mt-4 mb-6">
            <span className="font-display text-5xl text-gold-gradient">R$99,90</span>
            <span className="text-muted-foreground">/mês</span>
          </div>
          <ul className="space-y-4 mb-8 text-sm">
            <Feature yes text="Profissionais ILIMITADOS" />
            <Feature yes text="WhatsApp Automático (reduz faltas 40%)" />
            <Feature yes text="Lucro Real (desconta comissões)" />
            <Feature yes text="Radar de Sumidos (45 dias)" />
            <Feature yes text="Fila Inteligente" />
            <Feature yes text="PDV / Lojinha de Produtos" />
            <Feature yes text="Cliente VIP 👑" />
          </ul>
          <a 
            href="https://www.instagram.com/caj.tech/" 
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-gold-gradient text-primary-foreground font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Teste 7 Dias Grátis
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const Feature = ({ yes, text }: { yes: boolean; text: string }) => (
  <li className="flex items-center gap-3">
    {yes ? <Check className="w-5 h-5 text-primary shrink-0" /> : <X className="w-5 h-5 text-muted-foreground/40 shrink-0" />}
    <span className={yes ? "text-foreground" : "text-muted-foreground/50 line-through"}>{text}</span>
  </li>
);

export default PricingSection;