import { motion } from 'framer-motion';
import { Globe, Settings, Network, Server } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Desarrollo Web',
    description: 'Landings y sitios corporativos modernos, rápidos y optimizados para conversión.'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Automatización',
    description: 'Bots de WhatsApp, Telegram, flujos n8n y automatizaciones para tu negocio.'
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Integraciones',
    description: 'Conexión entre tus herramientas actuales: CRMs, calendarios, hojas de cálculo y más.'
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Proyectos a medida',
    description: 'Para necesidades más complejas: backends, APIs y arquitecturas escalables según el proyecto.'
  }
];



const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="servicios">
      <div className="container mx-auto px-6">
        <motion.div className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, x: 50, y: 0 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Nuestros <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-neon italic pr-2">Servicios</span>
            </h2>
          <p className="text-gray-300">
            Me enfoco en resolver problemas reales con tecnología moderna, permitiendo que tu equipo se concentre en lo que realmente importa.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Columna 1: Imagen */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-[400px] lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden border border-white/5 group"
          >
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=1000&fit=crop" 
              alt="Servicios Nexo" 
              imgClassName="group-hover:scale-105 transition-transform duration-700"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-brand-neon/10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-linear-to-t from-[#030014] via-[#030014]/20 to-transparent"></div>
          </motion.div>

          {/* Columna 2: Lista de Servicios */}
          <motion.div className="flex flex-col gap-6 w-full"
          initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-neon/30 transition-colors group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-neon/10 text-brand-neon flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-linear-to-br from-brand-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default Services;
