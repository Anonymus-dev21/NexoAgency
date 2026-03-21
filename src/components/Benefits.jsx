import { motion } from 'framer-motion';
import { Clock, ShieldCheck, TrendingUp, Cpu, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Ahorro de tiempo',
    description: 'Automatiza procesos repetitivos y recupera horas de trabajo cada semana.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Visibilidad',
    description: 'Es indispensable tener presencia digital para que tus clientes te encuentren.'
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Más eficiencia',
    description: 'Flujos de trabajo optimizados que aceleran el crecimiento de tu empresa.'
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'Escalabilidad',
    description: 'Arquitectura preparada para crecer junto a tu negocio.'
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden" id="beneficios">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <motion.div className="container mx-auto px-6 relative z-10"
      
              initial={{ opacity: 0, x: -50, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 space-y-8">
            
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-6">
                Por qué invertir en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-neon italic pr-2">tecnología</span>
              </h2>
              <p className="text-gray-400 text-lg">
                El crecimiento de tu negocio no debe depender de sumar más horas de trabajo manual. La tecnología correcta actúa como un multiplicador de tu equipo.
              </p>
           

            <motion.div 
              initial={{ opacity: 0, x: -50, y: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex gap-4 hover:translate-x-[5px] transition-all duration-800"
            >
               <div className="flex items-center -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#030014] bg-gray-800 flex items-center justify-center text-xs font-bold">+10</div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#030014] bg-brand-neon/20 flex items-center justify-center"><Zap className="w-5 h-5 text-brand-neon" /></div>
               </div>
               <div className="flex flex-col justify-center">
                 <span className="text-white font-semibold">Proyectos exitosos</span>
                 <span className="text-sm text-gray-500">Negocios escalando</span>
               </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-brand-neon/30 hover:translate-y-[-10px] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green group-hover:bg-brand-red/10 group-hover:border-brand-red/20 group-hover:text-brand-red mb-4 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-medium text-white mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
