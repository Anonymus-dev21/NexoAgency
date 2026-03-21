import { Instagram, Mail } from 'lucide-react';
import { LogoSVG } from './svglogo';

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

const Footer = () => {
  return (
    <footer className="bg-[#030014] pt-20 pb-8 relative z-10 overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-brand-red/10 blur-[80px] pointer-events-none rounded-full" />
      {/* Gradient separator at the top */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-brand-red/50 to-transparent mb-16" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2 mb-4">
              <LogoSVG className="w-32 h-auto" />
            </a>
            <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
              Desarrollo de software y automatización de procesos para negocios que buscan escalar con tecnología.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-gray-300 hover:text-white transition-colors text-sm">Servicios</a></li>
              <li><a href="#beneficios" className="text-gray-300 hover:text-white transition-colors text-sm">Beneficios</a></li>
              <li><a href="#proceso" className="text-gray-300 hover:text-white transition-colors text-sm">Proceso</a></li>
              <li><a href="#proyectos" className="text-gray-300 hover:text-white transition-colors text-sm">Proyectos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:oscab05@utlook.com" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2" aria-label="Contactar por email">
                  <Mail className="w-4 h-4" />
                  Contactame por mi email!
                </a>
              </li>
              <li className="flex gap-4 mt-6">
                <a href="https://wa.link/n7yvc6" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-brand-neon hover:text-white transition-all">
                  <WhatsAppSVG className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/nexogravity/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-brand-neon hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.tiktok.com/@nexogravity?lang=es-419" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-brand-neon hover:text-white transition-all">
                  <TikTokSVG className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Gradient separator before bottom bar */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nexo. Todos los derechos reservados.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
