
import React from 'react';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/244948937428";
  const instagramUrl = "https://www.instagram.com/caviar.ao";

  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex flex-col items-center md:items-start group">
              <span className="font-serif-premium text-3xl font-bold tracking-[0.2em] text-[#D4AF37] mb-2">
                CAVIAR
              </span>
              <div className="w-20 h-[1px] bg-[#D4AF37] scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white font-medium text-center md:text-left opacity-80 mt-4">
              Especialistas em Experiências de Marca
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-12">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[12px] uppercase tracking-[0.3em] text-white hover:text-[#D4AF37] transition-colors font-bold italic">caviar.ao</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[12px] uppercase tracking-[0.3em] text-white hover:text-[#D4AF37] transition-colors font-bold">WhatsApp</a>
            </div>
            
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium mt-4">
              &copy; {new Date().getFullYear()} <span className="text-[#D4AF37] font-bold">CAVIAR</span> Eventos. Luanda, Angola.
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-[11px] text-white opacity-60 italic font-serif-premium">Premium Event Production</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
