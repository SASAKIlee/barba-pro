import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpeg";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<string>("line");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("cut"), 600);    // 0.6s: Tesoura entra
    const t2 = setTimeout(() => setPhase("split"), 1800); // 1.8s: Cortinas abrem, revelam logo
    const t3 = setTimeout(() => {
      setIsVisible(false); // 3.2s: Inicia o sumiço de toda a tela (fica transparente)
    }, 3200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    // onExitComplete garante que o site só destrava quando a tela estiver 100% invisível
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background overflow-hidden flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }} // É AQUI: a tela toda vai ficando transparente suavemente
          transition={{ duration: 1, ease: "easeInOut" }} // Duração do sumiço: 1 segundo
        >
          {/* =========================================
              A LOGO
              ========================================= */}
          <motion.div
            className="absolute inset-0 z-[5] flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={phase === "split" ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={logo} alt="CAJ TECH" className="w-32 h-32 object-contain rounded-2xl drop-shadow-2xl" />
            <span className="font-display text-3xl text-gold-gradient tracking-widest font-bold uppercase drop-shadow-md">
              CAJ TECH
            </span>
          </motion.div>

          {/* =========================================
              A LINHA DE CORTE
              ========================================= */}
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-primary z-[20] w-full"
            style={{ translateY: "-50%" }}
            initial={{ scaleX: 0, originX: 0, opacity: 1 }}
            animate={{ 
              scaleX: phase !== "line" ? 1 : 0, 
              opacity: phase === "split" ? 0 : 1 
            }}
            transition={{ scaleX: { duration: 0.5, ease: "easeOut" } }}
          />

          {/* =========================================
              A TESOURA E O APAGADOR
              ========================================= */}
          <motion.div
            className="absolute top-1/2 z-[30] flex items-center"
            style={{ translateY: "-50%" }}
            initial={{ left: "-20vw", opacity: 0 }}
            animate={
              phase === "line" ? { left: "-20vw", opacity: 0 } :
              phase === "cut"  ? { left: "120vw", opacity: 1 } : 
                                 { left: "120vw", opacity: 0 }   
            }
            transition={{ 
              left: { duration: 1.2, ease: "linear" }, 
              opacity: { duration: 0.1 }
            }}
          >
            <div className="absolute right-0 top-1/2 h-[10px] w-[200vw] bg-background -translate-y-1/2" />
            <div className="text-primary drop-shadow-[0_0_20px_hsl(var(--primary))] -ml-[60px] relative z-10"> 
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <motion.g animate={phase === "cut" ? { rotate: [0, 15, -15, 15, -15, 0] } : {}} transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop", ease: "linear" }} style={{ transformOrigin: "12px 12px" }}>
                  <motion.path d="M6 9C6 7.34 7.34 6 9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12C7.34 12 6 10.66 6 9Z" stroke="currentColor" strokeWidth="1.5" fill="none" animate={phase === "cut" ? { rotate: [0, -25, 0] } : {}} transition={{ duration: 0.2, repeat: Infinity }} style={{ transformOrigin: "12px 12px" }} />
                  <motion.line x1="12" y1="9" x2="20" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" animate={phase === "cut" ? { rotate: [0, -25, 0] } : {}} transition={{ duration: 0.2, repeat: Infinity }} style={{ transformOrigin: "12px 12px" }} />
                  <motion.path d="M6 15C6 13.34 7.34 12 9 12C10.66 12 12 13.34 12 15C12 16.66 10.66 18 9 18C7.34 18 6 16.66 6 15Z" stroke="currentColor" strokeWidth="1.5" fill="none" animate={phase === "cut" ? { rotate: [0, 25, 0] } : {}} transition={{ duration: 0.2, repeat: Infinity }} style={{ transformOrigin: "12px 12px" }} />
                  <motion.line x1="12" y1="15" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" animate={phase === "cut" ? { rotate: [0, 25, 0] } : {}} transition={{ duration: 0.2, repeat: Infinity }} style={{ transformOrigin: "12px 12px" }} />
                </motion.g>
              </svg>
            </div>
          </motion.div>

          {/* =========================================
              O RASGO DAS CORTINAS
              ========================================= */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-background z-[15] border-b-[1px] border-primary/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] origin-bottom-left"
            initial={{ y: "0%", rotateZ: 0 }}
            animate={phase === "split" ? { y: "-120%", rotateZ: -4, opacity: 0 } : { y: "0%", rotateZ: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} 
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-background z-[15] border-t-[1px] border-primary/20 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] origin-top-right"
            initial={{ y: "0%", rotateZ: 0 }}
            animate={phase === "split" ? { y: "120%", rotateZ: 4, opacity: 0 } : { y: "0%", rotateZ: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;