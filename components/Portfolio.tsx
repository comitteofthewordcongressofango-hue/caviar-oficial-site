
import React from 'react';

const Portfolio: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/caviar.ao";

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden bg-black border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="text-[#D4AF37] uppercase tracking-[0.6em] text-[10px] mb-6 font-bold">Portfólio Digital</h2>
          <h3 className="font-serif-premium text-4xl md:text-6xl mb-12 text-white">
            O Universo <span className="italic text-[#D4AF37]">CAVIAR</span> <br /> no Instagram.
          </h3>
          
          <p className="text-white/70 text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Explore as nossas produções, bastidores e ativações de marca em tempo real. Cada post é um reflexo do nosso compromisso com a excelência.
          </p>

          <div className="flex justify-center">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-premium px-8 py-4 md:px-16 md:py-6 text-[10px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.5em] shadow-2xl"
            >
              <span className="flex items-center">
                Ver no Instagram
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-3 md:ml-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
