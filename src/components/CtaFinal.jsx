import { ChatCircleDotsIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Sparkles } from 'lucide-react';

const TikTokSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
  </svg>
);

const WhatsAppSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.4c-32.9 0-65.1-8.8-93.3-25.5l-6.7-4-69.4 18.2 18.5-67.6-4.4-7c-18.4-29.2-28.1-63.2-28.1-98.3 0-101.9 82.9-184.8 184.8-184.8 49.3 0 95.7 19.2 130.6 54.1 34.8 34.9 54 81.3 54 130.7 0 101.9-82.9 184.8-184.8 184.8zM324.9 276.4c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-2.1-3.6 2.1-3.2 7.6-14.1 1.4-2.8.7-5.1-.3-7.5-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const CtaFinal = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contacto">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/2 border border-white/5 border-t-brand-green/30 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-sm">
            {/* Top green glow inside the card */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[400px] h-32 bg-brand-green/10 blur-[60px] pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Contenido / Redes */}
              <div className="space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#030014] border border-white/10 text-brand-neon mb-4">
                  <ChatCircleDotsIcon size={32} />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para el próximo nivel?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Hablemos sobre tu proyecto y descubramos cómo la tecnología puede impulsar tu crecimiento.
              </p>

                <div className="pt-8 border-t border-white/5">
                  <h4 className="text-white font-medium mb-6">Conectemos en redes</h4>
                  <div className="flex gap-4">
                    <a href="https://wa.link/n7yvc6" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#030014] border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green transition-all">
                      <WhatsAppSVG className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/nexogravity/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#030014] border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green transition-all">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.tiktok.com/@nexogravity?lang=es-419" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-[#030014] border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green transition-all">
                      <TikTokSVG className="w-5 h-5" />
                    </a>
                    <a href="mailto:oscab05@utlook.com" className="w-12 h-12 rounded-xl bg-[#030014] border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green transition-all">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulario Netlify */}
              <div className="bg-[#030014]/50 border border-white/5 p-8 rounded-3xl">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="sr-only">Nombre completo</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required
                      className="w-full bg-[#030014] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required
                      className="w-full bg-[#030014] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors"
                      placeholder="juan@empresa.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="sr-only">¿Cómo puedo ayudarte?</label>
                    <textarea 
                      id="message"
                      name="message" 
                      required
                      rows={4}
                      className="w-full bg-[#030014] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-colors resize-none"
                      placeholder="Contame brevemente sobre tu negocio y qué te gustaría mejorar..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200  mt-2 hover:border-[1px] transition-all duration-300 hover:border-green-500"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaFinal;
