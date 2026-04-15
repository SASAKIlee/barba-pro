import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso de cartão para testar?", a: "Não. São 7 dias grátis sem precisar cadastrar cartão de crédito." },
  { q: "E se eu já uso planilha ou caderno?", a: "A transição é rápida. Nosso time te ajuda a migrar em menos de 1 hora." },
  { q: "Tem fidelidade ou multa?", a: "Nenhuma. Cancele quando quiser, sem burocracia." },
  { q: "Preciso baixar aplicativo?", a: "Não. O sistema funciona 100% pelo navegador do celular ou computador." },
];

const FAQSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="font-display text-4xl md:text-6xl text-center text-foreground mb-12">
        DÚVIDAS <span className="text-gold-gradient">FREQUENTES</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
