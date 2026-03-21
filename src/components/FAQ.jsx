import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma el desarrollo de una solución a medida?",
    answer: "Depende de la complejidad y alcance del proyecto. Una Landing Page corporativa puede estar lista en 1-2 semanas, mientras que un sistema a medida o automatización de IA completa puede llevar considerablemente más tiempo."
  },
  {
    question: "¿Necesito conocimientos técnicos para gestionar el sistema luego?",
    answer: "No, en absoluto. Todas nuestras soluciones están diseñadas para que sean 100% intuitivas. Además, te brindo soporte inicial para despejar cualquier duda."
  },
  
  {
    question: "¿Ofrecen soporte técnico y mantenimiento luego de finalizar el proyecto?",
    answer: "Sí, ofrezco un periodo de garantía post-lanzamiento para asegurar que todo corra perfecto en el entorno real. Luego, podemos fijar un fee mensual mínimo de mantenimiento y soporte evolutivo si tu proyecto lo requiere."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 relative" id="faq">
      {/* Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-brand-green/8 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Preguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-neon italic pr-2">Frecuentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Todo lo que necesitás saber antes de que trabajemos juntos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="bg-white/[0.02] border border-white/5 border-l-2 border-l-brand-green/30 rounded-4xl p-6 md:p-10 backdrop-blur-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={index === faqs.length - 1 ? "border-b-0" : ""}>
                <AccordionTrigger className="text-left text-lg md:text-xl text-white py-4 my-5 hover:text-brand-green transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
