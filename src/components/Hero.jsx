import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';
import { ClockCountdown, RocketLaunch, WhatsappLogoIcon } from '@phosphor-icons/react'
import { useRef, useEffect } from 'react';

const AnimatedCounter = ({ from = 0, to, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [count, isInView, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Hero = () => {
  return (
    <>
    <div className='WSP FLOATING BUTTON fixed bottom-10 right-12 z-50 hover:translate-y-[-5px] transition-all duration-300 cursor-pointer '>
      <a href="https://wa.link/n7yvc6" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-xl bg-[#030014] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-400 hover:border-2 transition-all">
       <WhatsappLogoIcon size={46} weight="duotone" className="text-green-400" />
      </a>  
    </div>
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/20 md:bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none"></div>
      <img src="https://res.cloudinary.com/dgaxmhaj2/image/upload/f_auto,q_auto/v1773963913/Fondo_programacion_j7b6p9.webp" alt="Fondo banner programación." className="absolute top-0 left-0 w-full h-full object-cover" fetchPriority="high" />

      <div className='overlay-black w-full h-full absolute top-0 left-0 z-10 bg-black/50'> </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Texto */}
          <div className="space-y-8 text-left mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl"
            >
              <ClockCountdown size={20} weight="duotone" className="text-green-400" />
              <span className="text-sm font-medium text-gray-300">Desarrollo & Automatización</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.2] overflow-visible"
            >
              Más clientes. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-neon italic pr-10 py-2 inline-block">
                Menos trabajo manual.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-100 max-w-xl leading-relaxed "
            >
             Creamos tu presencia online o automatizamos tus procesos para que puedas enfocarte en lo que realmente importa: tu negocio.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4"
            >
              <a href="#contacto" className="w-full sm:w-auto px-10 py-4 rounded-xl cursor-pointer bg-white text-black font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                <span className='group-hover:translate-x-[3px] transition-all duration-300'>Trabajemos juntos</span> 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#proyectos" className="w-full sm:w-auto px-8 py-4 rounded-xl cursor-pointer bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Code className="w-4 h-4" />
                Ver casos de éxito
              </a>
            </motion.div>
          </div>

          {/* Columna Derecha: Elemento Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            {/* Elemento Flotante Animado */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-lg mx-auto"
            >
              <div className="bg-[#030014]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
                {/* Glow interno */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-neon/30 blur-[50px] rounded-full"></div>
                
                {/* Header Mockup */}
                <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                {/* Dashboard Elements */}
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                    <span>Panel de Resultados.</span>
                    <span className="flex items-center gap-1 text-xs text-brand-neon"><div className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></div> Activo</span>
                  </div>

                  {/* Widget 1 */}
                  <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                     <ClockCountdown size={20} weight="duotone" className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Clientes atendidos</h4>
                      <p className="text-2xl font-bold text-white tracking-tight"><AnimatedCounter to={24} duration={3} />/7<span className="text-sm font-normal text-gray-500 ml-1">disponible</span></p>
                    </div>
                  </div>

                  {/* Widget 2 */}
                  <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center gap-4">
  <div className="w-10 h-10 rounded-full bg-brand-red/20 flex items-center justify-center text-brand-red">
    <RocketLaunch size={20} weight="duotone" className="text-brand-red" />
  </div>
  <div>
    <h4 className="text-white font-medium text-sm">Sitios lanzados</h4>
    <p className="text-2xl font-bold text-white tracking-tight">+<AnimatedCounter to={10} duration={3} /><span className="text-sm font-normal text-gray-500 ml-1">proyectos</span></p>
  </div>
</div>

                </div>
              </div>
            </motion.div>

            {/* Elemento de Fondo Decorativo */}
            <motion.div
               animate={{ y: [15, -15, 15], rotate: [0, 5, 0] }}
               transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
               className="absolute -right-10 -bottom-10 w-48 h-48 bg-gradient-to-br from-brand-red/20 to-brand-neon/20 backdrop-blur-3xl border border-white/10 rounded-3xl -z-10 blur-sm"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
