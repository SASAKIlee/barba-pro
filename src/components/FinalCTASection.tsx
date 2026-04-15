import { motion } from "framer-motion";

const FinalCTASection = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
          VOCÊ FOCA NO CORTE.{" "}
          <span className="text-gold-gradient">A MÁQUINA CUIDA DA GRANA.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Junte-se a centenas de barbearias que já pararam de perder dinheiro.
        </p>
        <motion.a
          href="https://www.instagram.com/caj.tech/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-gold-gradient text-primary-foreground font-bold text-xl px-12 py-5 rounded-lg animate-pulse-gold"
        >
          CRIAR MINHA CONTA AGORA
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;