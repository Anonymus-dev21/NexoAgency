import { motion } from 'framer-motion';
import { ExternalLink, Bot, Code2, LayoutTemplate } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const projects = [
  {
    title: 'Bot de Turnos',
    category: 'Automatización',
    icon: <Bot className="w-5 h-5" />,
    image: 'https://res.cloudinary.com/dgaxmhaj2/image/upload/f_auto,q_auto/v1773963574/Bot_IMG_pmzpxc.jpg',
    description: 'Sistema que agenda citas automáticamente sincronizado con Google Calendar, reduciendo un 90% las llamadas.',
    tag: 'N8N / TELEGRAM API / GOOGLE CALENDAR / NODE',
    link: 'https://t.me/bot_turnos_bot',
    className: 'lg:col-span-2 md:col-span-2'
  },
  {
    title: 'Landing para Abogada',
    category: 'Landing Page',
    icon: <Code2 className="w-5 h-5" />,
    image: 'https://res.cloudinary.com/dgaxmhaj2/image/upload/f_auto,q_auto/v1769399532/Banner_final_sgwlbz.jpg',
    description: 'Landing page para abogada minimalista y atractiva conectada con todas sus redes sociales.',
    tag: 'React / Tailwind',
    link: "https://abogadal.netlify.app",
    className: 'lg:col-span-1 md:col-span-1'
  },
  
  {
    title: 'Landing Page Para Barberia.',
    category: 'Diseño & Frontend',
    icon: <LayoutTemplate className="w-5 h-5" />,
    image: 'https://res.cloudinary.com/dgaxmhaj2/image/upload/f_auto,q_auto/v1732052690/Barber_uo3pyl.jpg',
    description: 'Landing page para barberia con conexion a todas sus redes sociales.',
    tag: 'HTML / CSS / JS',
    link: 'https://pelueyg-barber.netlify.app/',
    className: 'lg:col-span-3 md:col-span-1'
  }
];

const Projects = () => {
  return (
    <section className="py-24 relative" id="proyectos">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Casos de éxito</h2>
            <p className="text-gray-300">
              Proyectos reales, resultados medibles. Soluciones que impulsaron el crecimiento de mis clientes.
            </p>
          </div>
          <a href="https://github.com/Anonymus-dev21?tab=repositories" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium transition-colors hidden md:block">
            Ver más trabajos
          </button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={i} className={project.className || "col-span-1"}>
             <motion.div
               key={i}
               initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, y: 0 }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               
               transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
               whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
               className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-brand-neon/30 transition-colors cursor-pointer flex flex-col h-full"
             >
               <div className="relative h-56 overflow-hidden">
                 <OptimizedImage 
                   src={project.image} 
                   alt={project.title}
                   imgClassName="group-hover:scale-105 transition-transform duration-700" 
                   className="w-full h-full"
                 />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                 
                 <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-xs font-medium text-white">
                   {project.icon}
                   {project.category}
                 </div>
               </div>

               <div className="p-6 flex flex-col flex-grow">
                 <div className="flex justify-between items-start mb-4">
                   <h3 className="text-xl font-bold text-white group-hover:text-brand-neon transition-colors">
                     {project.title}
                   </h3>
                   <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform group-hover:bg-brand-neon group-hover:text-white text-gray-400">
                     <ExternalLink className="w-4 h-4" />
                   </div>
                 </div>
                                  <p className="text-gray-300 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                 
                 <div className="text-brand-neon text-xs font-semibold tracking-wider">
                   {project.tag}
                 </div>
               </div>
             </motion.div>
             </a>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <button className="px-6 py-3 rounded-lg bg-white/[0.05] border border-white/10 text-white font-medium">
            Ver más trabajos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
