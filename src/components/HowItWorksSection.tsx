import { motion } from "framer-motion";
import { Link2, Bell, BarChart3 } from "lucide-react";

const steps = [
  { icon: Link2, num: "01", title: "AGENDA ONLINE", desc: "O cliente agenda sozinho pelo seu link exclusivo. Sem troca de mensagem." },
  { icon: Bell, num: "02", title: "LEMBRETE AUTOMÁTICO", desc: "O sistema manda o lembrete no WhatsApp dele. Reduza faltas em até 40%." },
  { icon: BarChart3, num: "03", title: "GRANA SEPARADA", desc: "O corte acaba e o dashboard já separa sua grana e a comissão do barbeiro." },
];

const HowItWorksSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-16">
        COMO <span className="text-gold-gradient">FUNCIONA</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-full bg-gold-gradient mx-auto flex items-center justify-center mb-6">
              <s.icon className="w-9 h-9 text-primary-foreground" />
            </div>
            <span className="font-display text-5xl text-muted-foreground/30">{s.num}</span>
            <h3 className="font-display text-2xl text-foreground mt-2 mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
