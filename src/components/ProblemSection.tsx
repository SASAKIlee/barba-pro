import { motion } from "framer-motion";
import { MessageSquareX, CalendarX, DollarSign } from "lucide-react";

const problems = [
  { icon: MessageSquareX, text: "O WhatsApp não para. O cliente desmarca de última hora." },
  { icon: CalendarX, text: "A cadeira fica vazia e você perde dinheiro parado." },
  { icon: DollarSign, text: "No fim do sábado a conta da comissão nunca bate." },
];

const ProblemSection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
          VOCÊ RECONHECE <span className="text-gold-gradient">ESSE CAOS?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          O caderno, a planilha e o WhatsApp não dão conta. E cada falta é dinheiro que sai do seu bolso.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-lg p-8 text-left"
          >
            <p.icon className="w-10 h-10 text-primary mb-4" />
            <p className="text-foreground font-medium text-lg">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
