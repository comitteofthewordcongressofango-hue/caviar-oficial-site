
import React from 'react';

const Hero: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/caviar.ao";

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background animado estilo GIF (BocaBoca) - Equilíbrio de brilho */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Overlay gradiente ajustado: Menos denso que o anterior, mas protege o texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/40 to-black z-10"></div>
        <div className="w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
            alt="Ambiente Caviar" 
            className="w-full h-full object-cover opacity-45 bg-gif-effect"
          />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-20 text-center px-6 max-w-5xl reveal">
        <div className="mb-10 flex flex-col items-center">
          <div className="mb-4 text-[#D4AF37]">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L95 27.5V72.5L50 95L5 72.5V27.5L50 5Z" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="font-serif-premium text-4xl md:text-6xl font-bold tracking-[0.6em] text-[#D4AF37] mb-2 drop-shadow-lg">
            CAVIAR
          </span>
        </div>

        <h1 className="font-serif-premium text-4xl md:text-7xl lg:text-8xl mb-10 leading-tight text-white font-bold drop-shadow-2xl">
          Eventos que <br />
          <span className="italic font-light text-[#D4AF37]">Fazem História.</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-premium px-12 py-5 text-[11px] uppercase tracking-[0.4em] shadow-2xl"
          >
            <span className="flex items-center">Ver Portfólio <span className="ml-4">→</span></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
