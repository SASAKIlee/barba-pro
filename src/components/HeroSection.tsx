import { motion } from "framer-motion";
import heroBg from "@/assets/hero-barbershop.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Barbearia moderna" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 text-primary text-sm font-semibold mb-6 tracking-wider">
          CLIENTES · AGENDAMENTOS · JORNADA
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-foreground">
          CHEGA DE PERDER DINHEIRO{" "}
          <span className="text-gold-gradient">COM CLIENTE QUE FURA HORÁRIO</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
          Coloque um <strong className="text-foreground">Gerente Digital</strong> na sua barbearia. A CAJ TECH organiza
          sua agenda, calcula comissões e recupera clientes sumidos no automático.
        </p>
        <motion.a
          href="#precos"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-gold-gradient text-primary-foreground font-bold text-lg px-10 py-4 rounded-lg animate-pulse-gold"
        >
          TESTE 7 DIAS GRÁTIS
        </motion.a>
        <p className="text-muted-foreground text-sm mt-4">Sem cartão de crédito. Cancele quando quiser.</p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
