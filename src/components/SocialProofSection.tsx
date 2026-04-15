import { motion } from "framer-motion";
import { Shield, Smartphone, Zap, Quote } from "lucide-react";

const SocialProofSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {[
          { icon: Shield, text: "Sistema Blindado" },
          { icon: Zap, text: "Rápido como um corte fade" },
          { icon: Smartphone, text: "Sem baixar nada" },
        ].map((b, i) => (
          <div key={i} className="flex items-center gap-3 text-muted-foreground">
            <b.icon className="w-5 h-5 text-primary" />
            <span className="font-medium">{b.text}</span>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-xl p-10 text-center relative"
      >
        <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
        <p className="text-xl md:text-2xl text-foreground font-medium italic mb-6">
          "Parei de perder cliente por esquecimento. Se eu vendo 2 pomadas com o PDV da CAJ TECH, o sistema já se paga."
        </p>
        <div>
          <p className="text-foreground font-semibold">Rafael Mendes</p>
          <p className="text-muted-foreground text-sm">Dono da Barbearia Corte Real — SP</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SocialProofSection;
