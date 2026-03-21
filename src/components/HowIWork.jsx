import { motion } from 'framer-motion';
import { Search, PenTool, Braces, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search className="w-6 h-6" />,
    title: 'Analizo tu negocio',
    description: 'Entiendo como trabajas hoy e identifico las posibles mejoras y oportunidades.',
    delay: 0
  },
  {
    number: '02',
    icon: <PenTool className="w-6 h-6" />,
    title: 'Diseño la solución',
    description: 'Creo una arquitectura escalable y un plan de acción claro que satisfaga tus necesidades.',
    delay: 0.15
  },
  {
    number: '03',
    icon: <Braces className="w-6 h-6" />,
    title: 'Desarrollo',
    description: 'Desarrollo la solución de manera limpia, escalable y mantenible.',
    delay: 0.3
  },
  {
    number: '04',
    icon: <Rocket className="w-6 h-6" />,
    title: 'Implementación',
    description: 'Lanzamiento, testeo y monitoreo para asegurar que todo funciona perfecto.',
    delay: 0.45
  }
];

const HowIWork = () => {
  return (
    <section className="py-24 relative" id="proceso">
      <motion.div className="container mx-auto px-4 sm:px-6 relative z-20"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{  once:true}}
      transition={{ duration: 0.6, ease: "easeOut" }}

      >
        {/* Premium Island Container */}
        <div className="bg-white/2 border border-white/5 rounded-[2.5rem] p-8 s relative overflow-hidden backdrop-blur-sm">
          {/* Red glow inside the wrapper */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-brand-neon/20 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Cómo Trabajo</h2>
            <p className="text-gray-300">
              Un proceso iterativo, transparente y enfocado 100% en generar resultados medibles.
            </p>
          </div>

        <div className="max-w-5xl mx-auto relative cursor-pointer">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[100px] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative group pt-8 lg:pt-0 hover:translate-y-[-10px] transition-all duration-300"
              >
                <div className="mb-6 lg:mb-12 relative flex justify-center lg:justify-start">
                  <div className="text-[120px] font-bold text-red-500/[0.04] absolute -top-16 lg:-top-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 -z-10 group-hover:text-red-600/30 transition-colors pointer-events-none">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 group-hover:bg-brand-neon group-hover:border-transparent transition-all">
                    {step.icon}
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowIWork;
