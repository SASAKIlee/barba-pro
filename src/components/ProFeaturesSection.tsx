import { motion } from "framer-motion";
import { Crosshair, ShoppingCart, RefreshCw, Crown } from "lucide-react";

const features = [
  { icon: Crosshair, title: "Radar de Sumidos", desc: "O sistema te avisa quem sumiu há 45 dias para você buscar o dinheiro de volta." },
  { icon: ShoppingCart, title: "PDV / Lojinha", desc: "Lucre vendendo cerveja e pomada com nosso controle de estoque integrado." },
  { icon: RefreshCw, title: "Fila Inteligente", desc: "Alguém cancelou? A fila de espera assume. Zero cadeiras vazias." },
  { icon: Crown, title: "Cliente VIP", desc: "Identifique quem gasta mais na sua barbearia e dê tratamento de rei. 👑" },
];

const ProFeaturesSection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-4">
        AS ARMAS DO <span className="text-gold-gradient">PLANO PRO</span>
      </h2>
      <p className="text-muted-foreground text-center text-lg mb-14">Por que os donos de barbearia amam a CAJ TECH</p>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-8 flex gap-5 hover:border-primary/50 transition-colors"
          >
            <div className="w-14 h-14 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProFeaturesSection;
